"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{275:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(439),c=n(243),r=n(791),i=n(87),o="HomePage_list__ASgaP",s=n(184),d=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],d=t[1];return(0,r.useEffect)((function(){(function(){try{return c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd")}catch(e){console.log(e)}})().then((function(e){d(e.data.results)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Trending today"}),(0,s.jsx)("ul",{className:o,children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"movies/".concat(e.id),state:{from:"/"},children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=275.5972c445.chunk.js.map