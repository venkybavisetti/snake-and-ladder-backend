const snakeAndLaderPositions = {
  1: 38,
  4: 14,
  9: 31,
  16: 6,
  21: 42,
  28: 84,
  36: 44,
  47: 26,
  49: 11,
  51: 67,
  56: 53,
  62: 19,
  64: 60,
  71: 91,
  80: 100,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const isColorExists = (players, color) =>
  players.some(
    (player) =>
      player.player &&
      player.player.playerNum === color.playerNum &&
      player.player.hue === color.hue
  );

const getRemainingPlayerColors = (room) => {
  const allColors = Array.from({ length: 20 }, (_, index) => ({
    playerNum: Math.ceil((index + 1) / 4),
    hue: 90 * ((index + 1) % 4),
  }));
  return allColors.filter((color) => !isColorExists(room.players, color));
};

const createRoom = (req, res) => {
  const roomId =
    (req.app.locals.db.slice(-1)[0]
      ? req.app.locals.db.slice(-1)[0].roomId
      : 0) + 1;

  req.session.roomId = roomId;
  req.session.playerId = 1;
  req.app.locals.db.push({
    roomId,
    gameStatus: 'start',
    players: [
      {
        playerId: 1,
        playerPosition: 0,
      },
    ],
    currentTurn: 1,
    hostId: 1,
    lastDiceValue: 0,
    winners: [],
  });
  res.json({ status: true });
};

const getRoomId = (req, res) => {
  res.json({ roomId: req.session.roomId });
};

const getRoom = (db, roomId) => db.find((room) => room.roomId === roomId);
const getPlayer = (players, playerId) => {
  return players.find((player) => player.playerId === playerId);
};

const getPlayerColors = (req, res) => {
  res.json(
    getRemainingPlayerColors(getRoom(req.app.locals.db, req.session.roomId))
  );
};

const join = (req, res) => {
  const room = getRoom(req.app.locals.db, req.session.roomId);
  const { playerName, player } = req.body;

  if (room.gameStatus !== 'start') {
    res.status(403);
    res.json({ message: 'game has been started' });
    return;
  }

  if (isColorExists(room.players, player)) {
    return res.json({
      status: false,
      data: getRemainingPlayerColors(
        getRoom(req.app.locals.db, req.session.roomId)
      ),
    });
  }

  if (req.session.playerId === 1) {
    const host = getPlayer(room.players, 1);
    host.name = playerName;
    host.player = player;
    return res.json({ status: true });
  }

  const playerId = room.players.slice(-1)[0].playerId + 1;
  req.session.playerId = playerId;
  room.players.push({
    playerId,
    playerPosition: 0,
    name: playerName,
    player: player,
  });
  res.json({ status: true });
};

const joinRoom = (req, res) => {
  const { roomId } = req.body;
  req.session.roomId = roomId;
  res.json({ status: true });
};

const getGameStatus = (req) => {
  const { playerId, roomId } = req.session;
  const room = getRoom(req.app.locals.db, roomId);
  const players = room.players;
  const turn = getPlayer(room.players, playerId).playerId === room.currentTurn;
  const isHost = room.hostId === playerId;
  const gameStatus = room.gameStatus;
  const currentPlayer = getPlayer(room.players, room.currentTurn);
  return {
    players,
    turn,
    isHost,
    gameStatus,
    dice: room.lastDiceValue,
    currentPlayer,
    winners: room.winners,
  };
};

const boardData = (req, res) => {
  res.json(getGameStatus(req));
};

const start = (req, res) => {
  const room = getRoom(req.app.locals.db, req.session.roomId);
  room.gameStatus = 'progress';
  res.json(getGameStatus(req));
};

const getPlayerIndex = (players, playerId) =>
  players.findIndex((player) => player.playerId === playerId);

const getNextPlayer = (players, currentPlayerId) => {
  const index = getPlayerIndex(players, currentPlayerId);

  return [...players.slice(index + 1), ...players.slice(0, index)].find(
    (player) => player.playerPosition < 100
  );
};

const dice = (req, res) => {
  const { dice } = req.body;
  const { roomId, playerId } = req.session;
  const room = getRoom(req.app.locals.db, roomId);
  const player = getPlayer(room.players, playerId);
  const nextPlayer = getNextPlayer(room.players, playerId);

  if (player.playerPosition + dice <= 100)
    player.playerPosition =
      snakeAndLaderPositions[player.playerPosition + dice] ||
      player.playerPosition + dice;
  if ((dice !== 6 && nextPlayer !== undefined) || player.playerPosition === 100)
    room.currentTurn = nextPlayer.playerId;
  if (player.playerPosition === 100)
    room.winners.push(getPlayerIndex(room.players, player.playerId));
  if (room.players.length === room.winners.length + 1)
    room.gameStatus = 'completed';

  room.lastDiceValue = dice;
  res.json(getGameStatus(req));
};

const checkAuthentication = (req, res, next) => {
  const { isNew, roomId, playerId } = req.session;
  if (
    !isNew &&
    roomId &&
    playerId &&
    req.app.locals.db.some((room) => room.roomId === roomId)
  ) {
    return next();
  }
  res.status(403);
  res.json({ message: 'unauthorize resource' });
};

module.exports = {
  createRoom,
  getRoomId,
  getPlayerColors,
  joinRoom,
  join,
  boardData,
  start,
  dice,
  checkAuthentication,
};
