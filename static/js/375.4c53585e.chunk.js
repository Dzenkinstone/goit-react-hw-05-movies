"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{22:function(n,e,t){t.d(e,{Ph:function(){return d},XT:function(){return o},YJ:function(){return u},tx:function(){return l},zv:function(){return p}});var r=t(861),a=t(687),i=t.n(a),c=t(912),s="d7e465e9850be233d7a3c42efee828b5",o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},375:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,c,s,o,u,p=t(861),l=t(439),d=t(687),x=t.n(d),h=t(791),f=t(689),v=t(14),g=t(22),m=t(168),j=t(934),b=j.Z.div(r||(r=(0,m.Z)(["\n  display: flex;\n  border: 1px solid grey;\n"]))),w=j.Z.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-left: 20px;\n  margin-top: 30px;\n"]))),Z=j.Z.li(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),k=j.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),y=j.Z.div(s||(s=(0,m.Z)(["\n  border-bottom: 1px solid grey;\n  padding: 10px;\n"]))),_=j.Z.ul(o||(o=(0,m.Z)(["\n  margin-top: 15px;\n  margin-left: 20px;\n"]))),S=t(87),U=t(184),O=function(n){var e=n.movies,t=e.id,r=e.poster_path,a=e.title,i=e.release_date,c=e.vote_average,s=e.overview,o=e.genres;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b,{children:[(0,U.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:""}),(0,U.jsxs)(w,{children:[(0,U.jsxs)(Z,{children:[(0,U.jsx)("h1",{children:"".concat(a," (").concat(null===i||void 0===i?void 0:i.substr(0,4),")")}),(0,U.jsxs)("p",{children:["User Score: ","".concat((10*c).toFixed(0),"%")]})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)("strong",{children:"Overview"}),(0,U.jsx)("p",{children:s})]}),(0,U.jsxs)(Z,{children:[(0,U.jsx)("strong",{children:"Genres"}),(0,U.jsx)(k,{children:null===o||void 0===o?void 0:o.map((function(n){var e=n.name;return(0,U.jsx)("p",{children:e},e)}))})]})]})]}),(0,U.jsxs)(y,{children:[(0,U.jsx)("h2",{children:"Additional Information"}),(0,U.jsxs)(_,{children:[(0,U.jsx)("li",{children:(0,U.jsx)(S.OL,{to:"/movies/".concat(t,"/cast"),children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(S.OL,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"})})]})]})]})},F=t(185),L=j.Z.button(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  cursor: pointer;\n  width: 100px;\n  background-color: white;\n  border: 1px solid rgb(192, 192, 192);\n  padding: 2px 10px;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;\n  border-radius: 5px;\n  gap: 5px;\n"]))),C=function(n){var e=n.location;return console.log(e),(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(S.OL,{to:"".concat(e),children:(0,U.jsxs)(L,{children:[(0,U.jsx)(F.i1r,{}),"Back"]})})})},T=function(){var n,e,t=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",r=(0,f.UO)().id,a=(0,h.useState)({}),i=(0,l.Z)(a,2),c=i[0],s=i[1],o=(0,h.useState)(!1),u=(0,l.Z)(o,2),d=u[0],m=u[1];return console.log(d),(0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,g.YJ)(r);case 4:e=n.sent,s(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),(0,v.ZP)("There is no film with that name...");case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(C,{location:t}),(0,U.jsx)(O,{movies:c})," ",(0,U.jsx)(v.x7,{}),(0,U.jsx)(h.Suspense,{fallback:(0,U.jsx)("div",{children:"Loading subpage..."}),children:(0,U.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=375.4c53585e.chunk.js.map