"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(433),c=n(439),o=n(791),a=n(689),i=n(243),s=n(184),u=function(){var e=(0,a.UO)().movieId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),u=n[0],d=n[1];return(0,o.useEffect)((function(){(function(e){try{return i.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=4f9b3bc6cd1b3d6e0d830ad9a5ccfefd"))}catch(t){console.log(t)}})(e).then((function(e){d((0,r.Z)(e.data.results))}))}),[e]),console.log(u),(0,s.jsx)(s.Fragment,{children:0===u.length?(0,s.jsx)("p",{children:"We don't have any reviews for this movie."}):u.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:[e.author_details.username,":"]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})}}}]);
//# sourceMappingURL=344.f070c734.chunk.js.map