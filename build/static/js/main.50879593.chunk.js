(this.webpackJsonpsnake_and_ladder=this.webpackJsonpsnake_and_ladder||[]).push([[0],{85:function(e,t,a){},86:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),i=(a(85),a(86),a(28)),o=a(13),l=a(55),d=a.n(l),j=a(64),u=a(10),b=a(30),h=a(141),p=a.p+"static/media/blue-player.de8eb60e.png",O=a.p+"static/media/green-player.6a26f254.png",m=a.p+"static/media/pink-player.fa360d51.png",f=a.p+"static/media/red-player.077d7622.png",y=a.p+"static/media/yellow-player.17512bfc.png",v=a(129),x=a(70),g=a.n(x),N=a(2),P=Object(v.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}}));function C(e){var t=P();return Object(N.jsx)(h.a,Object(b.a)(Object(b.a)({arrow:!0,classes:t},e),{},{className:"pointer"}))}var I={1:p,2:O,3:m,4:f,5:y},S=r.a.forwardRef((function(e,t){var a=e.height,n=e.player,r=n.playerNum,c=n.hue,s=e.isCurrentPlayer;return Object(N.jsxs)("span",{style:{display:"flex",justifyContent:"center"},children:[s&&Object(N.jsx)(g.a,{className:"fa"}),Object(N.jsx)("img",Object(b.a)(Object(b.a)({ref:t},e),{},{src:I[r],alt:"player",style:{height:a,filter:"hue-rotate(".concat(c,"deg)")}}))]})})),w=function(e){for(var t=e.value,a=e.currentPlayerId,n=[],r=0;r<t.length;r++)n.push(Object(N.jsx)(C,{title:t[r].name,placement:"top",arrow:!0,children:Object(N.jsx)(S,{height:70/Math.ceil(t.length/2),player:t[r].player,isCurrentPlayer:a===t[r].playerId})},r));return Object(N.jsx)("div",{className:"square pure-u-1-6",children:Object(N.jsx)("div",{className:"players",children:n})})},k=function(e){for(var t=e.id,a=e.cellArray,n=e.currentPlayerId,r=[],c=0;c<a.length;c++)r.push(Object(N.jsx)(w,{value:a[c],currentPlayerId:n},c));return Object(N.jsx)("div",{className:t%2===1?"row-reverse":"",children:r})},H=function(e){for(var t=e.table,a=e.currentPlayerId,n=[],r=0;r<t.length;r++)n.push(Object(N.jsx)(k,{cellArray:t[r],id:r,currentPlayerId:a},r));return Object(N.jsx)("div",{className:"table",children:Object(N.jsx)("div",{className:"board",children:n})})},R=a(72),E=a.n(R),F=a(71),D=a.n(F),G=function(e){var t=e.playerData,a=e.currentPlayer,r=e.isHost,c=e.hostId,s=e.handlePlayerRemove,i=e.handleChangeHost,o=Object(n.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1];return Object(N.jsxs)("div",{className:"player ".concat(t.playerId===a?"activePlayer":""," ").concat(r&&c!==t.playerId&&d?"player-hover":""),onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[r&&d&&c!==t.playerId&&Object(N.jsxs)("div",{className:"host-controls",children:[Object(N.jsx)(C,{title:"Change Host",placement:"top",arrow:!0,children:Object(N.jsx)(D.a,{className:"change-host",onClick:function(){return i(t.playerId)}})}),Object(N.jsx)(C,{title:"Remove Player",placement:"top",arrow:!0,children:Object(N.jsx)(E.a,{className:"remove-player",onClick:function(){return s(t.playerId)}})})]}),Object(N.jsx)(S,{height:35,player:t.player}),Object(N.jsx)("div",{children:t.name})]})},J=function(e){var t=e.header,a=e.players,n=e.currentPlayer,r=e.isHost,c=e.hostId,s=e.handlePlayerRemove,i=e.handleChangeHost;return Object(N.jsxs)("div",{className:"player-list-container",children:[Object(N.jsx)("h3",{children:t}),a.map((function(e,t){return Object(N.jsx)(G,{playerData:e,currentPlayer:n,isHost:r,hostId:c,handlePlayerRemove:s,handleChangeHost:i},t)}))]})},T=a(73),A=a.n(T),L=(a(95),function(e){var t=e.diceValue,a=e.disable,r=e.handleRoll,c=Object(n.useState)(!0),s=Object(u.a)(c,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){o(a)}),[a]),Object(N.jsxs)("div",{className:"dices",children:[Object(N.jsx)("div",{className:"dice-board",children:t}),Object(N.jsx)("div",{className:a?"disable-dice":"active-dice",onClick:function(){o(!0),!i&&r()},children:Object(N.jsx)(A.a,{numDice:1,defaultRoll:t,disableIndividual:i,rollTime:1.5})})]})}),M=function(e,t){return new Promise((function(a,n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){var t=e.json();403!==e.status?a(t):n(t)}))}))},_=function(e){return new Promise((function(t,a){return fetch(e).then((function(e){var n=e.json();403!==e.status?t(n):a(n)}))}))},W=function(e){switch(e.type){case"create-room":return M("/api/createRoom",{});case"join-room":return M("/api/joinRoom",e.data);case"join":return M("/api/join",e.data);case"start":return M("/api/start",{});case"change-host":return M("/api/changeHost",e.data);case"remove-player":return M("/api/removePlayer",e.data);case"dice":return _("/api/dice");case"roomId":return _("/api/roomId");case"player-colors":return _("/api/playerColors");case"board-data":return _("/api/boardData");default:return new Promise((function(e,t){return t()}))}},q=a(134),B=a(138);function V(){return{top:"".concat(30,"%"),left:"".concat(36,"%"),transform:"translate(-".concat(10,"%, -",10,"%)")}}var z=Object(v.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function K(e){var t=e.popup,a=e.handleStart,n=e.isHost,c=e.isGameCompleted,s=z(),i=r.a.useState(V),l=Object(u.a)(i,1)[0],d=Object(o.f)(),j=Object(N.jsx)("div",{style:l,className:s.paper,children:c?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{id:"simple-modal-title",children:"Play Another Game"}),Object(N.jsx)(q.a,{variant:"outlined",color:"primary",onClick:function(){d.push("/")},children:"Play"})]}):n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{id:"simple-modal-title",children:"Let's start the Game"}),Object(N.jsx)(q.a,{variant:"outlined",color:"primary",onClick:a,children:"Start"})]}):Object(N.jsx)("h2",{id:"simple-modal-title",children:"Waiting for the host to start the Game"})});return Object(N.jsx)(B.a,{open:t||c,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:j})}var Q=a(140),U=a(137);function X(e){return Object(N.jsx)(U.a,Object(b.a)({elevation:6,variant:"filled"},e))}function Y(e){var t=e.notification,a=function(e,t){};return Object(N.jsx)(Q.a,{anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:6e3,onClose:a,open:t,message:"I love snacks",children:Object(N.jsx)(X,{onClose:a,severity:t.severity,children:t.message})})}var Z=function(e){for(var t=[],a=0;a<e;a++){t[a]=[];for(var n=0;n<e;n++)t[a][n]=[]}return t},$=function(){var e=Object(n.useState)(Z(10)),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(u.a)(c,2),i=s[0],l=s[1],b=Object(n.useState)(!0),h=Object(u.a)(b,2),p=h[0],O=h[1],m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=Object(n.useState)({}),r=Object(u.a)(a,2),c=r[0],s=r[1],i=Object(o.f)();return Object(n.useEffect)((function(){W(e).then(s).catch((function(){return i.push("/")}));var a=setInterval((function(){return W(e).then(s)}),1e3*t);return function(){clearInterval(a)}}),[t]),c}({type:"board-data"},4),f=Object(n.useState)([]),y=Object(u.a)(f,2),v=y[0],x=y[1],g=Object(n.useState)([]),P=Object(u.a)(g,2),I=P[0],w=P[1],k=Object(n.useState)([]),R=Object(u.a)(k,2),E=R[0],F=R[1],D=Object(n.useState)(!1),G=Object(u.a)(D,2),T=G[0],A=G[1],M=Object(n.useState)({}),_=Object(u.a)(M,2),q=_[0],B=_[1],V=Object(n.useState)({}),z=Object(u.a)(V,2),Q=z[0],U=z[1],X=Object(n.useState)(!0),$=Object(u.a)(X,2),ee=$[0],te=$[1];Object(n.useEffect)((function(){B(m)}),[m]),Object(n.useEffect)((function(){te(!0)}),[q]),Object(n.useEffect)((function(){if(q.players){A(q.turn),l(q.isHost),O("start"===q.gameStatus);var e=q.players.filter((function(e){return 100!==e.playerPosition})),t=q.winners.map((function(e){return q.players[e]})),a=q.players.filter((function(e){return 0===e.playerPosition}));F(a),x(e),U(q.currentPlayer.playerId),w(t),setTimeout((function(){ae(q.players)}),1e3)}}),[q]);var ae=function(e){for(var t=Z(10),a=0;a<e.length;a++){var n=("0"+(e[a].playerPosition-1)).slice(-2),c=Object(u.a)(n,2),s=c[0],i=c[1];0!==e[a].playerPosition&&t[+s][+i].push(e[a])}r(t)},ne=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te(!1),A(!1),e.next=4,W({type:"dice"}).then((function(e){B(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(e){A(!1),l(!1),W({type:"remove-player",data:{removePlayerId:e}}).then(B)},ce=function(e){A(!1),l(!1),console.log(e),W({type:"change-host",data:{changeHost:e}}).then(B)};return Object(N.jsxs)("div",{className:"board-page",children:[q.notification&&Object(N.jsx)(Y,{notification:q.notification}),Object(N.jsxs)("div",{className:"board-page-status",children:[q.currentPlayer&&q.currentPlayer.name||"player",Object(N.jsx)("span",{children:"'s turn"})]}),Object(N.jsxs)("div",{className:"dash-board",children:[Object(N.jsx)(J,{header:"Participants",players:v,currentPlayer:Q,isHost:i,hostId:q.hostId,handlePlayerRemove:re,handleChangeHost:ce}),Object(N.jsxs)("div",{className:"page",children:[Object(N.jsx)("div",{className:"player-wallet",children:Object(N.jsx)("div",{className:"player-wallet-box",children:E.map((function(e,t){return Object(N.jsx)("div",{style:{height:E.length<9?74:280/Math.ceil(E.length/2),width:74},className:"square pure-u-1-6",children:Object(N.jsx)("div",{className:"players",children:Object(N.jsx)(C,{title:e.name,placement:"top",arrow:!0,children:Object(N.jsx)(S,{height:70,player:e.player,isCurrentPlayer:Q===e.playerId})})})},t)}))})}),Object(N.jsx)(H,{table:a,currentPlayerId:Q})]}),Object(N.jsx)(J,{header:"Winners",players:I,isHost:i,hostId:q.hostId,handlePlayerRemove:re,handleChangeHost:ce})]}),ee&&Object(N.jsx)(L,{diceValue:q.dice||6,handleRoll:ne,disable:!T}),Object(N.jsx)(K,{popup:p,handleStart:function(){q.players.length>1&&(O(!1),W({type:"start"}).then(B))},isHost:i,isGameCompleted:"completed"===q.gameStatus})]})},ee=a(136),te=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)([]),j=Object(u.a)(d,2),b=j[0],h=j[1],p=Object(n.useState)(void 0),O=Object(u.a)(p,2),m=O[0],f=O[1],y=Object(n.useState)(!1),v=Object(u.a)(y,2),x=v[0],g=v[1],P=Object(o.f)();Object(n.useEffect)((function(){W({type:"roomId"}).then((function(e){return l(e.roomId)})),W({type:"player-colors"}).then(h)}),[]);return Object(N.jsx)("div",{className:"loginPage",children:Object(N.jsxs)("div",{className:"player-info",children:[Object(N.jsxs)("h1",{style:{textAlign:"center"},children:["Room Id:",i]}),Object(N.jsxs)("div",{className:"board-status",children:[Object(N.jsx)("h3",{children:"Player Name: "}),Object(N.jsx)(ee.a,{id:"standard-basic",value:a,onChange:function(e){r(e.target.value)}})]}),Object(N.jsxs)("div",{className:"player-color",children:[Object(N.jsx)("h3",{children:"Select Color: "}),Object(N.jsx)("div",{className:"player-img",children:b.map((function(e,t){return Object(N.jsx)("div",{className:"selected-img ".concat(m&&m.hue===e.hue&&m.playerNum===e.playerNum?"selected":""),onClick:function(){return f(e)},children:Object(N.jsx)(S,{height:50,player:e})},t)}))})]}),x&&Object(N.jsx)("div",{style:{color:"red",fontWeight:600},children:"Please select different color"}),Object(N.jsx)("div",{className:"join-room-btn",children:Object(N.jsx)(q.a,{disabled:!(a.trim()&&m),onClick:function(){W({type:"join",data:{playerName:a,player:m}}).then((function(e){var t=e.status,a=e.data;t?P.push("/board"):(g(!0),h(a),f(void 0))})).catch((function(e){return P.push("/")}))},variant:"contained",color:"primary",children:"Join Room"})})]})})},ae=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],d=Object(o.f)();return Object(N.jsx)("div",{className:"loginPage",children:Object(N.jsxs)("div",{className:"login",children:[Object(N.jsxs)("div",{className:"login-buttons",children:[Object(N.jsx)(q.a,{className:a?"login-buttons-active":"",variant:"contained",color:"primary",onClick:function(){r(!0)},children:"Join Room"}),Object(N.jsx)(q.a,{variant:"contained",color:"secondary",onClick:function(){r(!1),l(""),W({type:"create-room"}).then((function(){return d.push("/player-info")}))},children:"Create Room"})]}),a&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"login-room-id login-row",children:[Object(N.jsx)("label",{children:"Enter Room Id :"}),Object(N.jsx)(ee.a,{id:"standard-number",type:"number",onChange:function(e){return l(e.target.value)},value:i})]}),Object(N.jsx)("div",{className:"login-row",children:Object(N.jsx)(q.a,{disabled:!(""!==i.trim())||!(i>=1),variant:"contained",color:"primary",onClick:function(){W({type:"join-room",data:{roomId:+i}}).then((function(){return d.push("/player-info")}))},children:"Join Game"})})]})]})})},ne=function(){return Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/board",component:$}),Object(N.jsx)(o.a,{exact:!0,path:"/player-info",component:te}),Object(N.jsx)(o.a,{exact:!0,path:"/",component:ae})]})};var re=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(ne,{})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(N.jsx)(re,{}),document.getElementById("root")),ce()}},[[97,1,2]]]);
//# sourceMappingURL=main.50879593.chunk.js.map