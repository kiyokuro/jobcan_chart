(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2917:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var r=t(9008),a=t(4476),i=t.n(a),s=t(1508),o=t(266),c=t(809),u=t.n(c),d=t(7294),f=function(e){return new Promise((function(n,t){var r=new FileReader;r.onerror=function(){return t(r.error)},r.onload=function(){return n(r.result||"")},r.readAsText(e)}))},l=t(2809),h=function(e){var n=function(e){return 60*new Date("1997/01/01 "+e).getHours()+new Date("1997/01/01 "+e).getMinutes()};return e.reduce((function(e,t){var r=t[0],a=t[2],i=t[7]+":"+t[9],s=t[10];e[a]||(e[a]={tasks:[],workTimes:[]}),e[a].tasks.indexOf(i)>=0||e[a].tasks.push(i);var o=function(e,n){return e.map((function(e){return e.name})).indexOf(n)}(e[a].workTimes,r);return o>=0?e[a].workTimes[o][i]=n(s):e[a].workTimes.push((0,l.Z)({name:r},i,n(s))),e}),{})},m=function(e){return["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"][e]||"#000000"},x=t(6375),p=t(4195),_=t(3023),k=t(5358),v=t(9307),j=t(8102),w=t(6830),g=t(5893),b=function(e){var n=e.taskNames,t=e.workerNames,r=e.setSelectedTasks,a=e.setSelectedWorkers;return(0,g.jsxs)("div",{children:[(0,g.jsxs)("select",{name:"wokerName",id:"wokerName",onChange:function(e){return a(e.target.value)},children:[(0,g.jsx)("option",{value:"",children:"\u5168\u3066"}),t&&t.map((function(e){return(0,g.jsx)("option",{value:e,children:e},e)}))]}),(0,g.jsxs)("select",{name:"taskName",id:"taskName",onChange:function(e){return r(e.target.value)},children:[(0,g.jsx)("option",{value:"",children:"\u5168\u3066"}),n&&n.map((function(e){return(0,g.jsx)("option",{value:e,children:e},e)}))]})]})},N=function(){var e=(0,d.useState)({}),n=e[0],t=e[1],r=(0,d.useState)([]),a=r[0],i=r[1],c=(0,d.useState)([]),l=c[0],N=c[1],H=function(){var e=(0,o.Z)(u().mark((function e(n){var r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({}),n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,f(n);case 5:r=e.sent,a=r.split("\r\n").map((function(e){return e.split(",")})),i=h(a.slice(1)),t(i);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"file",accept:"text/csv",onChange:function(e){return H(e.target.files[0])}}),(0,g.jsx)(b,{workerNames:Object.keys(n).map((function(e){return e})),taskNames:(0,s.Z)(new Set(Object.values(n).flatMap((function(e){return e.tasks})))),setSelectedTasks:N,setSelectedWorkers:i}),(0,g.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:Object.keys(n).map((function(e){return function(e){if(!(a.length>0&&a.indexOf(e)<0)&&!(l.length>0&&n[e].tasks.filter((function(e){return l.indexOf(e)>=0})).length<1))return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:e}),(0,g.jsxs)(x.v,{width:800,height:400,data:n[e].workTimes,margin:{top:20,right:0,left:0,bottom:0},children:[(0,g.jsx)(p.q,{strokeDasharray:"3 3"}),(0,g.jsx)(_.K,{dataKey:"name"}),(0,g.jsx)(k.B,{label:{value:"minutes",angle:-90,position:"insideLeft"}}),(0,g.jsx)(v.u,{}),n[e].tasks.map((function(e,n){if(!(l.length>0&&l.indexOf(e)<0))return(0,g.jsx)(j.$,{dataKey:e,stackId:"a",fill:m(n)},e)})),(0,g.jsx)(w.D,{width:250,height:350,layout:"vertical",verticalAlign:"top",align:"right",wrapperStyle:{overflow:"auto",paddingLeft:"20px"}})]})]},e)}(e)}))})]})};function H(){return(0,g.jsxs)("div",{className:i().container,children:[(0,g.jsxs)(r.default,{children:[(0,g.jsx)("title",{children:"Jobcan Chart"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,g.jsx)("div",{className:i().header,children:"Jobcan Chart"}),(0,g.jsx)("main",{className:i().main,children:(0,g.jsx)(N,{})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2917)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",header:"Home_header__3vlZW",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[774,783,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);