(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{4730:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(2626)}])},7749:function(n,t,r){"use strict";var e=r(5893),s=r(6962),i=r.n(s),a=function(){return(0,e.jsx)("div",{className:i().spinner})};t.Z=a},1975:function(n,t,r){"use strict";r.d(t,{T:function(){return e}});var e="https://artom.io"},2626:function(n,t,r){"use strict";r.r(t);var e=r(7568),s=r(655),i=r(5893),a=r(7294),u=r(7749),c=r(3330),o=r.n(c),l=r(1975),p=function(){var n,t=(0,a.useState)(""),r=t[0],c=t[1],p=(0,a.useState)(null),d=p[0],f=p[1],$=(0,a.useState)(null),h=$[0],m=$[1],v=(0,a.useState)([]),w=v[0],x=v[1],y=function(n){c(n.target.value)},j=(n=(0,e.Z)(function(){var n,t,e,i;return(0,s.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),f("pending"),t={},[4,fetch("".concat(l.T,"/api/admin-data"),(t.method="post",t.headers={"Content-Type":"application/json"},t.body=JSON.stringify({password:r.trim()}),t))];case 1:return[4,(n=s.sent()).json()];case 2:return x(e=s.sent()),n.ok?f("success"):(f("failure"),m(e.error)),[3,4];case 3:return i=s.sent(),f("failure"),m("Sorry, an internal error has occurred. Please try again later."),console.log(i),[3,4];case 4:return[2]}})}),function(){return n.apply(this,arguments)});return(0,i.jsxs)("div",{className:o()["main-container"],children:[(0,i.jsxs)("div",{className:o()["password-input-container"],children:[(0,i.jsx)("input",{type:"password",className:o()["password-input"],placeholder:"Password",onChange:function(n){y(n)}}),(0,i.jsx)("button",{onClick:j,children:"Ok"}),"pending"===d?(0,i.jsx)(u.Z,{}):"success"===d?null:"failure"===d?(0,i.jsx)("div",{children:h}):null]}),w.length>0?w.map(function(n,t){return(0,i.jsx)("div",{children:n},t)}):null]})};t.default=p},6962:function(n){n.exports={spinner:"spinner_spinner__Rx_fm",spin:"spinner_spin__baLrf"}},3330:function(n){n.exports={"main-container":"admin_main-container__ZTr_W","password-input-container":"admin_password-input-container__JofZX","check-symbol":"admin_check-symbol__DjGEZ"}},7568:function(n,t,r){"use strict";function e(n,t,r,e,s,i,a){try{var u=n[i](a),c=u.value}catch(o){r(o);return}u.done?t(c):Promise.resolve(c).then(e,s)}function s(n){return function(){var t=this,r=arguments;return new Promise(function(s,i){var a=n.apply(t,r);function u(n){e(a,s,i,u,c,"next",n)}function c(n){e(a,s,i,u,c,"throw",n)}u(void 0)})}}r.d(t,{Z:function(){return s}})}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4730)}),_N_E=n.O()}]);