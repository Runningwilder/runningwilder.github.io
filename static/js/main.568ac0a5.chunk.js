(this.webpackJsonpgithub=this.webpackJsonpgithub||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t){function a(e){var t=e,a="perspective( 800px ) rotateX( 0deg ) rotateY( 0deg ) translateZ( 0px )",r=function(e,a){var r=t.offsetWidth,n=t.offsetHeight,o="perspective( 800px ) ";e>r/4&&e<r/4*3&&a>n/4&&a<n/4*3?o+="rotateX( 0deg ) rotateY( 0deg ) translateZ( -30px )":Math.min(e,r-e)<Math.min(a,n-a)?o+=e<r-e?"rotateX( 0deg ) rotateY( -20deg ) translateZ( 0px )":"rotateX( 0deg ) rotateY( 20deg ) translateZ( 0px )":o+=a<n-a?"rotateX( 20deg ) rotateY( 0deg ) translateZ( 0px )":"rotateX( -20deg ) rotateY( 0deg ) translateZ( 0px )",t.style.webkitTransform=o,t.style.MozTransform=o,t.style.msTransform=o,t.style.oTransform=o,t.style.transform=o,document.addEventListener("mouseup",l,!1)},n=function(e){if(e.offsetX)r(e.offsetX,e.offsetY);else{var a=s(t),n=e.pageX-a.x,l=e.pageY-a.y;r(n,l)}},l=function e(r){t.style.webkitTransform=a,t.style.MozTransform=a,t.style.msTransform=a,t.style.oTransform=a,t.style.transform=a,document.removeEventListener("mouseup",e,!1)},o=function(e,t){return parseInt(e.getPropertyValue(t),10)},s=function(e){var t=0,a=0,r=!0;do{t+=e.offsetLeft,a+=e.offsetTop;var n=getComputedStyle(e,null);if(a+=o(n,"border-top-width"),t+=o(n,"border-left-width"),r)a+=o(n,"padding-top"),t+=o(n,"padding-left");r=!1}while(e=e.offsetParent);return{x:t,y:a}};t.style.webkitTransformOrigin="50% 50%",t.style.MozTransformOrigin="50% 50%",t.style.msTransformOrigin="50% 50%",t.style.oTransformOrigin="50% 50%",t.style.transformOrigin="50% 50%",t.parentElement.style.webkitTransformStyle="preserve-3d",t.parentElement.style.MozTransformStyle="preserve-3d",t.parentElement.style.msTransformStyle="preserve-3d",t.parentElement.style.oTransformStyle="preserve-3d",t.parentElement.style.transformStyle="preserve-3d",t.style.webkitTransition="-webkit-transform 0.08s",t.style.MozTransition="-moz-transform 0.08s",t.style.msTransition="-ms-transform 0.08s",t.style.oTransition="-o-transform 0.08s",t.style.transition="transform 0.08s",t.style.outline="1px solid transparent",t.style.webkitFontSmoothing="antialiased",t.addEventListener("mousedown",n,!1)}window.onload=function(){!function(){var e,t=document.getElementsByClassName("metro-tile");for(console.log("test"),e=0;e<t.length;e++)console.log("test"),a(t[e])}()}},19:function(e,t,a){},30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(20),o=a.n(l),s=(a(16),a(4));a(35),a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(8),m=a(58),c=(a(18),a(19),a(13),a(26),a(56));Object(c.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},tile:{cursor:"pointer",display:"inline-flex",color:"#fff",width:"40px",height:"40px",margin:"1px",textAlign:"center"}}}));a(38);function d(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{container:!0,spacing:1,style:{marginTop:"30px"}},n.a.createElement(m.a,Object(s.a)({item:!0,xs:4,style:{backgroundColor:"pink"}},"style",{borderRight:"1px dotted black"}),n.a.createElement("div",{style:{float:"right",textAlign:"right"}},n.a.createElement("span",{style:{color:"red",fontSize:"46px",fontFamily:"cursive",verticalAlign:"-10px"}},"wild"),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"blue",fontSize:"25px",fontFamily:"cursive"}},"running"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"dimgray",fontSize:"25px",fontFamily:"cursive"}},"\u043d\u0438\u0447\u0435\u0433\u043e"),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"dimgray",fontSize:"25px",fontFamily:"cursive"}},"\u0432\u0441\u044f\u043a\u043e\u0435"),n.a.createElement("br",null),n.a.createElement("span",{style:{color:"dimgray",fontSize:"25px",fontFamily:"cursive"}},"\u0447\u0442\u043e-\u0442\u043e"),n.a.createElement("br",null),n.a.createElement("div",{className:"tiles-grid tiles-group",style:{marginRight:"0px"}},n.a.createElement("div",{"data-role":"tile","data-size":"small",class:"bg-gray col-2 row-1"}),n.a.createElement("div",{"data-role":"tile","data-size":"small",class:" col-3 row-1"}),n.a.createElement("div",{"data-role":"tile","data-size":"small",class:"bg-gray col-2 row-2"}),n.a.createElement("div",{"data-role":"tile","data-size":"small",class:" col-3 row-2"}),n.a.createElement("div",{"data-role":"tile","data-size":"small",class:" col-4 row-2"}),n.a.createElement("div",{"data-role":"tile","data-size":"small",class:"bg-gray col-3 row-3"}),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCLwVj1QJA6jfyuAyRKT7kGA?view_as=subscriber","data-role":"tile","data-size":"small",className:"col-4 row-3 bg-red tile-small"},n.a.createElement("span",{class:" mif-youtube-play icon"}))))),n.a.createElement(m.a,{item:!0,xs:5,style:{backgroundColor:""}},n.a.createElement(i.a,null,"\n###_\u041d\u043e\u0432\u043e\u0441\u0442\u044c 1 - 7.10.2020_\n\u0421\u043e\u0437\u0434\u0430\u043b \u044d\u0442\u043e\u0442 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 :)\n            "),n.a.createElement("hr",{style:{borderTop:"1px dotted black"}}),n.a.createElement(i.a,null,"\n###_\u041d\u043e\u0432\u043e\u0441\u0442\u044c 0 - 7.10.2020_\n\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u043b \u0441\u0430\u0439\u0442 \u043d\u0430 \u0440\u0435\u0430\u043a\u0442\u0435 + \u0441\u043f\u0440\u0438\u043d\u0433\u0435 - [https://\u0441\u0441\u044b\u043b\u043a\u0438.net/](https://surveyeveryone.ddns.net/)\n            ")),n.a.createElement(m.a,{item:!0,xs:3})))}o.a.render(n.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.568ac0a5.chunk.js.map