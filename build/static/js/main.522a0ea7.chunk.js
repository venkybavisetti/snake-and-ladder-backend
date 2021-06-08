(this.webpackJsonpsnake_and_ladder=this.webpackJsonpsnake_and_ladder||[]).push([[0],{63:function(e,t,a){},64:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(63),a(64),a(23)),l=a(11),o=a(10),d=a.p+"static/media/gamePlayer.fa360d51.png",j=a(2),u=function(e){for(var t=e.value,a=[],n=0;n<t.length;n++)a.push(Object(j.jsx)("img",{src:d,alt:"player",style:{height:70/Math.ceil(t.length/2),filter:"hue-rotate(".concat(t[n].hue,"deg)")}},n));return Object(j.jsx)("div",{className:"square pure-u-1-6",children:Object(j.jsx)("div",{className:"players",children:a})})},b=function(e){for(var t=e.id,a=e.cellArray,n=[],c=0;c<a.length;c++)n.push(Object(j.jsx)(u,{value:a[c]},c));return Object(j.jsx)("div",{className:t%2===1?"row-reverse":"",children:n})},h=function(e){for(var t=e.table,a=[],n=0;n<t.length;n++)a.push(Object(j.jsx)(b,{cellArray:t[n],id:n},n));return Object(j.jsx)("div",{className:"table",children:Object(j.jsx)("div",{className:"board",children:a})})},p=function(e){var t=e.playerData,a=e.currentPlayer;return console.log(t.hue,a),Object(j.jsxs)("div",{className:"player ".concat(a===t.hue?"activePlayer":""),children:[Object(j.jsx)("img",{src:d,alt:"player",style:{height:35,filter:"hue-rotate(".concat(t.hue,"deg)")}}),Object(j.jsx)("div",{children:t.name})]})},O=function(e){var t=e.header,a=e.players,n=e.currentPlayer;return Object(j.jsxs)("div",{className:"player-list-container",children:[Object(j.jsx)("h3",{children:t}),a.map((function(e,t){return Object(j.jsx)(p,{playerData:e,currentPlayer:n},t)}))]})},m=a(49),f=a.n(m),v=(a(68),function(e){var t=e.disable,a=e.handleRoll;return console.log(t),Object(j.jsx)("div",{className:t?"disable-dice":"active-dice",children:Object(j.jsx)(f.a,{numDice:1,rollDone:a,defaultRoll:6,disableIndividual:t})})}),x=function(e,t){return new Promise((function(a,n){fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){var t=e.json();403!==e.status?a(t):n(t)}))}))},y=function(e){return new Promise((function(t,a){return fetch(e).then((function(e){var n=e.json();403!==e.status?t(n):a(n)}))}))},g=function(e){switch(e.type){case"create-room":return x("/api/createRoom",{});case"join-room":return x("/api/joinRoom",e.data);case"join":return x("/api/join",e.data);case"start":return x("/api/start",{});case"dice":return x("/api/dice",e.data);case"roomId":return y("/api/roomId");case"player-colors":return y("/api/playerColors");case"board-data":return y("/api/boardData");default:return new Promise((function(e,t){return t()}))}},N=a(104),P=a(109),S=a(110);function C(){return{top:"".concat(30,"%"),left:"".concat(36,"%"),transform:"translate(-".concat(10,"%, -",10,"%)")}}var w=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function k(e){var t=e.popup,a=e.handleStart,n=e.isHost,r=e.isGameCompleted,i=w(),s=c.a.useState(C),d=Object(o.a)(s,1)[0],u=Object(l.f)(),b=Object(j.jsx)("div",{style:d,className:i.paper,children:r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{id:"simple-modal-title",children:"Play Another Game"}),Object(j.jsx)(P.a,{variant:"outlined",color:"primary",onClick:function(){u.push("/")},children:"Play"})]}):n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{id:"simple-modal-title",children:"Let's start the Game"}),Object(j.jsx)(P.a,{variant:"outlined",color:"primary",onClick:a,children:"Start"})]}):Object(j.jsx)("h2",{id:"simple-modal-title",children:"Waiting for the host to start the Game"})});return Object(j.jsx)(S.a,{open:t,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:b})}var I=function(e){for(var t=[],a=0;a<e;a++){t[a]=[];for(var n=0;n<e;n++)t[a][n]=[]}return t},R=function(){var e=Object(n.useState)(I(10)),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),s=i[0],u=i[1],b=Object(n.useState)(!0),p=Object(o.a)(b,2),m=p[0],f=p[1],x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=Object(n.useState)({}),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(l.f)();return Object(n.useEffect)((function(){g(e).then(i).catch((function(){return s.push("/")}));var a=setInterval((function(){return g(e).then(i)}),1e3*t);return function(){clearInterval(a)}}),[t]),r}({type:"board-data"},2),y=Object(n.useState)([]),N=Object(o.a)(y,2),P=N[0],S=N[1],C=Object(n.useState)([]),w=Object(o.a)(C,2),R=w[0],F=w[1],D=Object(n.useState)([]),E=Object(o.a)(D,2),G=E[0],J=E[1],A=Object(n.useState)(!1),H=Object(o.a)(A,2),T=H[0],_=H[1],L=Object(n.useState)({}),q=Object(o.a)(L,2),B=q[0],M=q[1];Object(n.useEffect)((function(){M(x)}),[x]),Object(n.useEffect)((function(){if(B.players){u(B.isHost),_(B.turn),f("start"===B.gameStatus);var e=B.players.filter((function(e){return 100!==e.playerPosition})),t=B.players.filter((function(e){return 100===e.playerPosition})),a=B.players.filter((function(e){return 0===e.playerPosition}));J(a),S(e),F(t),W(B.players)}}),[B]);var W=function(e){for(var t=I(10),a=0;a<e.length;a++){var n=("0"+(e[a].playerPosition-1)).slice(-2),r=Object(o.a)(n,2),i=r[0],s=r[1];0!==e[a].playerPosition&&(console.log(i,s,e[a].playerPosition),t[+i][+s].push(e[a]))}c(t)};return Object(j.jsxs)("div",{className:"board-page",children:[Object(j.jsx)("div",{className:"board-page-status",children:"".concat(B.currentPlayer||"player","'s turn")}),Object(j.jsxs)("div",{className:"dash-board",children:[Object(j.jsx)(O,{header:"Participants",players:P,currentPlayer:B.currentPlayerHue}),Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"player-wallet",children:Object(j.jsx)("div",{className:"player-wallet-box",children:G.map((function(e,t){return Object(j.jsx)("div",{style:{height:G.length<9?74:280/Math.ceil(G.length/2),width:74},className:"square pure-u-1-6",children:Object(j.jsx)("div",{className:"players",children:Object(j.jsx)("img",{src:d,alt:"player",style:{height:70,filter:"hue-rotate(".concat(e.hue,"deg)")}})})},t)}))})}),Object(j.jsx)(h,{table:a})]}),Object(j.jsx)(O,{header:"Winners",players:R})]}),Object(j.jsxs)("div",{className:"dices",children:[Object(j.jsx)("div",{className:"dice-board",children:B.dice||6}),Object(j.jsx)(v,{handleRoll:function(e){_(!1),g({type:"dice",data:{dice:e}}).then(M)},disable:!T})]}),Object(j.jsx)(k,{popup:m,handleStart:function(){B.players.length>1&&(f(!1),g({type:"start"}).then(M))},isHost:s,isGameCompleted:"completed"===B.gameStatus})]})},F=a(108),D=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),s=i[0],u=i[1],b=Object(n.useState)([]),h=Object(o.a)(b,2),p=h[0],O=h[1],m=Object(n.useState)(void 0),f=Object(o.a)(m,2),v=f[0],x=f[1],y=Object(n.useState)(!1),N=Object(o.a)(y,2),S=N[0],C=N[1],w=Object(l.f)();Object(n.useEffect)((function(){g({type:"roomId"}).then((function(e){return u(e.roomId)})),g({type:"player-colors"}).then(O)}),[]);return Object(j.jsx)("div",{className:"loginPage",children:Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("h1",{style:{textAlign:"center"},children:["Room Id:",s]}),Object(j.jsxs)("div",{className:"board-status",children:[Object(j.jsx)("h3",{children:"Player Name: "}),Object(j.jsx)(F.a,{id:"standard-basic",value:a,onChange:function(e){c(e.target.value)}})]}),Object(j.jsxs)("div",{className:"player-color",children:[Object(j.jsx)("h3",{children:"Select Color: "}),Object(j.jsx)("div",{className:"player-img",children:p.map((function(e,t){return Object(j.jsx)("div",{className:"selected-img ".concat(v===e?"selected":""),onClick:function(){return x(e)},children:Object(j.jsx)("img",{src:d,alt:"player",style:{height:50,filter:"hue-rotate(".concat(e,"deg)")}})},t)}))})]}),S&&Object(j.jsx)("div",{children:"Please select different color"}),Object(j.jsx)("div",{className:"join-room-btn",children:Object(j.jsx)(P.a,{disabled:!(a.trim()&&v),onClick:function(){g({type:"join",data:{playerName:a,hueValue:v}}).then((function(e){var t=e.status,a=e.data;t?w.push("/board"):(C(!0),O(a))})).catch((function(e){return w.push("/")}))},variant:"contained",color:"primary",children:"Join Room"})})]})})},E=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),s=i[0],d=i[1],u=Object(l.f)();return Object(j.jsx)("div",{className:"loginPage",children:Object(j.jsxs)("div",{className:"login",children:[Object(j.jsxs)("div",{className:"login-buttons",children:[Object(j.jsx)(P.a,{className:a?"login-buttons-active":"",variant:"contained",color:"primary",onClick:function(){c(!0)},children:"Join Room"}),Object(j.jsx)(P.a,{variant:"contained",color:"secondary",onClick:function(){c(!1),d(""),g({type:"create-room"}).then((function(){return u.push("/player-info")}))},children:"Create Room"})]}),a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"login-room-id login-row",children:[Object(j.jsx)("label",{children:"Enter Room Id :"}),Object(j.jsx)(F.a,{id:"standard-number",type:"number",onChange:function(e){return d(e.target.value)},value:s})]}),Object(j.jsx)("div",{className:"login-row",children:Object(j.jsx)(P.a,{disabled:!(""!==s.trim())||!(s>=1),variant:"contained",color:"primary",onClick:function(){g({type:"join-room",data:{roomId:+s}}).then((function(){return u.push("/player-info")}))},children:"Join Game"})})]})]})})},G=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/board",component:R}),Object(j.jsx)(l.a,{exact:!0,path:"/player-info",component:D}),Object(j.jsx)(l.a,{exact:!0,path:"/",component:E})]})};var J=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(G,{})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(J,{}),document.getElementById("root")),A()}},[[75,1,2]]]);
//# sourceMappingURL=main.522a0ea7.chunk.js.map