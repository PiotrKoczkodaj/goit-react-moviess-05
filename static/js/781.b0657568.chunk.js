"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[781],{781:function(e,t,n){n.r(t),n.d(t,{MoviePage:function(){return l}});var c=n(433),r=n(439),a=n(791),u=n(689),o=n(87),i=n(243),s=n(184),l=function(){var e=(0,u.s0)(),t=(0,a.useState)([]),n=(0,r.Z)(t,2),l=n[0],f=n[1],h=(0,a.useState)(""),d=(0,r.Z)(h,2),m=d[0],p=d[1];return(0,a.useEffect)((function(){(function(e){try{return i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd&query=".concat(e))}catch(t){console.log(t)}})(m).then((function(e){f((0,c.Z)(e.data.results))}))}),[m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p(t.target[0].value),e("?query=".concat(t.target[0].value))},children:[(0,s.jsx)("input",{type:"text"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:l.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"".concat(e.id),state:{from:"/movies?query=".concat(m)},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=781.b0657568.chunk.js.map