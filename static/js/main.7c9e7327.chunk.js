(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{27:function(e,t,n){e.exports={form_section:"Section_form_section__3xxdJ",contacts_section:"Section_contacts_section__37zqk",main_section:"Section_main_section__PAvij",section_title:"Section_section_title__1G4EC"}},46:function(e,t,n){e.exports={_app:"App__app__2yeRd"}},7:function(e,t,n){e.exports={appBar:"AppBar_appBar__iq24W",_link:"AppBar__link__wOHD-",_activeLink:"AppBar__activeLink__2Ae7I",_userMail:"AppBar__userMail__c3FgJ"}},85:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),i=n.n(c),s=n(5),o=n(17),u=n(7),l=n.n(u),j=n(0);var b=function(){var e=Object(s.f)();return Object(j.jsxs)("nav",{className:l.a._nav,children:[Object(j.jsx)(o.b,{to:{pathname:"/register",state:{pathback:e}},className:l.a._link,activeClassName:l.a._activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)(o.b,{to:{pathname:"/login",state:{pathback:e}},className:l.a._link,activeClassName:l.a._activeLink,children:"\u0412\u043e\u0439\u0442\u0438"})]})},f=n(6),p=n(31);var d=function(e){return e?e.split(" ").join("").toLowerCase().trim():e};var m=function(e,t){var n=!1,r=d(e);return""===r&&(n=!0),t.forEach((function(e){var t=e.name;r===d(t)&&(n=!0)})),n};var h=function(e){return e?e.split(" ").join("").split("(").join("").split(")").join("").split("-").join("").split("+").join(""):e};var O=function(e,t){var n=h(e),r=!1;return""===e&&(r=!0),t.forEach((function(e){var t=e.number;n===h(t)&&(r=!0)})),r};var x=function(e){var t=[],n=[];return e.forEach((function(e){t.indexOf(e.id)<0&&(t.push(e.id),n.push(e))})),n};var g=function(e){var t="",n="";if(e)if(e.match(/\d+/)){console.log("filterQuery -- ",e),n=e.match(/\d+/).toString();var r=e.split(n),a=r[0]||r[1];t=a||""}else t=e;return{filterQueryText:t,filterQueryNumber:n}},v=function(e){var t=C(e),n=y(e),r=Object(p.a)([function(){return C(e)},function(){return y(e)}],(function(e,t){console.log(e);var n=g(t.toString()),r=n.filterQueryText,a=n.filterQueryNumber;if(r.length>0||a.length>0){var c=[];if(a.length>0){if(c=e.filter((function(e){var t=e.number;return h(t).includes(a)})),r.length>0){var i=e.filter((function(e){return e.name.toLowerCase().includes(r)}));return c.length>0?c.concat(i):i}return c}return c=e.filter((function(e){return e.name.toLowerCase().includes(r)}))}return e})),a=r(t,n);return x(a)},_=function(e){return e.auth},y=function(e){return e.filter},w=function(e){return e.contacts},N=function(e){return e.newContact},k=function(e){return w(e).error},C=function(e){return w(e).entities},L=function(e){var t=y(e),n=C(e);return n&&n.length?t?v(e):n:[]};var A=function(){var e=Object(s.f)(),t=Object(f.c)(_).isLoggedIn;return Object(j.jsxs)("nav",{className:l.a._nav,children:[Object(j.jsx)(o.b,{exact:!0,to:"/",className:l.a._link,activeClassName:l.a._activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),t&&Object(j.jsx)(o.b,{to:{pathname:"/contacts",state:{pathback:e}},className:l.a._link,activeClassName:l.a._activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})};var B=function(){var e=Object(s.f)();return Object(j.jsxs)("nav",{className:l.a._nav,children:[Object(j.jsx)(o.b,{to:{pathname:"/userinfo",state:{pathback:e}},className:l.a._userMail,activeClassName:l.a._activeLink,children:"\u0434\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c *NAME*"}),Object(j.jsx)(o.b,{to:{pathname:"/logout",state:{pathback:null}},className:l.a._link,activeClassName:l.a._activeLink,children:"\u0412\u044b\u0439\u0442\u0438"})]})},S=function(){var e=Object(f.c)(_).isLoggedIn;return Object(j.jsxs)("header",{className:l.a.appBar,children:[Object(j.jsx)(A,{}),!e&&Object(j.jsx)(b,{}),e&&Object(j.jsx)(B,{})]})},z=function(){return Object(j.jsx)(P,{title:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u0445\u043e\u0434\u0430",component:"Login"})},F=n(14),E=n(27),I=n.n(E);F.Notify.init({position:"center-top"});var T,M,P=function(e){var t,n=e.title,r=e.component;switch(r){case"Main":t=I.a.main_section;break;case"Contacts":t=I.a.contacts_section;break;default:t=I.a.form_section}return Object(j.jsxs)("section",{className:t,children:[Object(j.jsx)("h1",{className:I.a.section_title,children:n}),"Main"===r&&Object(j.jsx)(me,{}),"Contacts"===r&&Object(j.jsx)(Be,{}),"AddNumber"===r&&Object(j.jsx)(De,{type:"addNumber",submitButtonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),"Login"===r&&Object(j.jsx)(De,{type:"login",submitButtonText:"\u0412\u043e\u0439\u0442\u0438"}),"Register"===r&&Object(j.jsx)(De,{type:"register",submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})},q=n(3),J=Object(q.b)("newContact/create",(function(e){return e.preventDefault(),T=e.target.children[0].children[1],M=e.target.children[1].children[1],{payload:{newName:T.value.trim(),newNumber:M.value}}})),Q=Object(q.b)("newContact/clear",(function(){return T&&(T.value=""),M&&(M.value=""),{payload:{newName:"",newNumber:""}}}));var R=function(e,t){var n=function(e,t){var n=e.newName,r=e.newNumber,a="";if(!n||!r||!t)return{result:!1,message:a};if(O(r,t))return{result:!1,message:a="Can't do this operation. Number ".concat(r," already exists.")};if(m(n,t))return{result:!1,message:a="Can't do this operation. Name ".concat(n," already exists.")};return{result:!0,message:a="Well Done! Added "+n}}(e,t);return!!n.result||(n.message&&F.Notify.failure(n.message),!1)},D=n(8),K=n.n(D),Y=n(18),Z=n(23),G=n.n(Z);function H(){return W.apply(this,arguments)}function W(){return(W=Object(Y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("/contacts").then((function(e){return e.data})).catch((function(e){throw"Network Error"===e.message?F.Notify.failure("Sorry. Server is not working. Please check the connection"):F.Notify.failure("".concat(e.name,". ").concat(e.message)),new Error(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return X.apply(this,arguments)}function X(){return(X=Object(Y.a)(K.a.mark((function e(t){var n,r,a,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newName,r=t.newNumber,e.next=3,G.a.post("/contacts",{name:n,number:r}).then((function(e){return F.Notify.info("Contact ".concat(n," was added successfully")),e})).catch((function(e){return F.Notify.failure("Oh, no! ".concat(e.message," Nothing was added.")),null}));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return V.apply(this,arguments)}function V(){return(V=Object(Y.a)(K.a.mark((function e(t,n){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G.a.delete("/contacts/"+t).then((function(e){return F.Notify.success("Contact ".concat(n," was removed successfully")),!0})).catch((function(e){return F.Notify.failure("Oh, no! ".concat(e.message," Nothing was deleted.")),!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}G.a.defaults.baseURL="http://localhost:4321";var ee=Object(q.c)("contacts/fetchContacts",Object(Y.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),te=Object(q.c)("contacts/createContact",function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ne=Object(q.c)("contacts/deleteContact",function(){var e=Object(Y.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.name,e.next=3,$(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());F.Notify.init({position:"center-top"});var re=function(){var e=Object(f.c)(N),t=Object(f.c)(C),n=Object(f.b)();return Object(r.useEffect)((function(){n(ee())}),[n]),Object(r.useEffect)((function(){e.newName&&R(e,t)&&(n(te(e)),n(Q()))}),[t,n,e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430",component:"AddNumber"}),Object(j.jsx)("hr",{}),Object(j.jsx)(P,{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",component:"Contacts"})]})},ae=function(){return Object(j.jsx)(P,{title:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",component:"Register"})};var ce=function(){return Object(j.jsx)(P,{title:"\ud83d\uded1 404 \u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u2639",component:"NoPage"})},ie=function(){return Object(j.jsx)(P,{title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0422\u0415\u041b\u0415\u0424\u041e\u041d\u041d\u0410\u042f \u041a\u041d\u0418\u0413\u0410",component:"Main"})},se=n.p+"static/media/background.25f6f965.jpg",oe=n(46),ue=n.n(oe);var le,je=function(){var e=Object(f.c)(_).isLoggedIn;return Object(j.jsx)("div",{className:ue.a._app,style:{backgroundImage:'url("'.concat(se,'")')},children:Object(j.jsxs)("div",{className:"Container",children:[Object(j.jsx)(S,{}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",exact:!0,children:Object(j.jsx)(ie,{})}),e&&Object(j.jsx)(s.a,{path:"/contacts",exact:!0,children:Object(j.jsx)(re,{})}),!e&&Object(j.jsx)(s.a,{path:"/login",children:Object(j.jsx)(z,{})}),!e&&Object(j.jsx)(s.a,{path:"/register",children:Object(j.jsx)(ae,{})}),Object(j.jsx)(s.a,{path:"/",children:Object(j.jsx)(ce,{})})]})]})})},be=n(19),fe=n(20),pe=fe.a.h2(le||(le=Object(be.a)(["\n  font-weight: 400;\n  color: teal;\n"])));var de,me=function(e){var t=e.message,n=Object(f.c)(_),r=n.user,a=n.isLoggedIn;return Object(j.jsxs)("div",{children:[Object(j.jsx)(pe,{children:t}),!a&&Object(j.jsx)(ye,{message:"To view application, you must login first."}),a&&Object(j.jsx)(ye,{message:"Hellow ".concat(r.name,"! You are logged in. Please visit Contacts page, to see your contacts.")})]})},he=fe.a.h2(de||(de=Object(be.a)(["\n  font-weight: 400;\n  color: teal;\n"])));var Oe,xe,ge,ve,_e,ye=function(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)(he,{children:t})})},we=Object(q.b)("filter/changeFilter",(function(e){return{payload:e.trim().toLowerCase()}})),Ne=fe.a.ul(Oe||(Oe=Object(be.a)(["\n  display: block;\n  padding-left: 10px;\n"]))),ke=fe.a.input(xe||(xe=Object(be.a)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 22px;\n  outline: unset;\n  height: 26px;\n  &:focus,\n  &:hover {\n    filter: drop-shadow(0px 0px 5px lightblue);\n    border: 1px solid lightblue;\n    height: 28px;\n  }\n"]))),Ce=fe.a.li(ge||(ge=Object(be.a)(["\n  display: block;\n  font-family: monospace;\n  list-style-type: disc;\n  font-size: 18px;\n  margin-bottom: 2px;\n"]))),Le=fe.a.span(ve||(ve=Object(be.a)(["\n  position: fixed;\n  right: 45px;\n  display: inline-flex;\n"]))),Ae=fe.a.button(_e||(_e=Object(be.a)(["\n  margin-left: 5px;\n  padding: 2px;\n  font-size: 10px;\n  width: 20px;\n  height: 20px;\n"])));var Be=function(){var e=Object(f.c)(w).entities,t=Object(f.c)(L),n=Object(f.c)(k),a=e.length?"No contacts found.":n?n.message+". Contacts could not be loaded to be displayed on the screen.":"You have no contacts yet.",c=Object(f.b)();return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)(Ne,{children:[Object(j.jsx)(ke,{type:"text",name:"search",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"Search contact",onInput:function(e){return c(we(e.target.value))}}),t.length>0&&t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(j.jsxs)(Ce,{children:["\u260e "+n+": ",Object(j.jsxs)(Le,{children:[r,Object(j.jsx)(Ae,{id:t,onClick:function(){return c(ne({id:t,name:n}))},children:"X"})]})]},t)}))]}),!t.length&&Object(j.jsx)(ye,{message:a})]})},Se=n(9),ze=n.n(Se),Fe=n(22),Ee=n.n(Fe),Ie=function(){return Object(j.jsxs)("label",{className:ze.a.form_label,children:[Object(j.jsx)("span",{children:"\u0418\u043c\u044f"}),Object(j.jsx)(Ee.a,{className:ze.a.form_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Arnold Schwarzenegger",maxLength:"25",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},"nameKey")]})},Te=function(){return Object(j.jsxs)("label",{className:ze.a.form_label,children:[Object(j.jsx)("span",{children:"\u041d\u043e\u043c\u0435\u0440"}),Object(j.jsx)(Ee.a,{className:ze.a.form_input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"+38 (099) 999-99-99",mask:"+38 (099) 999-99-99",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0},"numberKey")]})},Me=function(){return Object(j.jsxs)("label",{className:ze.a.form_label,children:[Object(j.jsx)("span",{children:"\u041f\u043e\u0447\u0442\u0430"}),Object(j.jsx)(Ee.a,{className:ze.a.form_input,type:"email",name:"email",placeholder:"email@example.com",pattern:"*{3,20}@*{3,20}.*{2,7}",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",required:!0},"emailKey")]})},Pe=function(e){var t,n=e.status;switch(n){case"new":t="\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c";break;case"repete":t="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c";break;default:t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}return Object(j.jsxs)("label",{className:ze.a.form_label,children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)(Ee.a,{className:ze.a.form_input,type:"password",name:"password",pattern:"(?=.*[0-9])",title:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0445\u043e\u0442\u044c \u043e\u0434\u043d\u0430 \u0446\u044b\u0444\u0440\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435",required:!0},"password"+n+"Key")]})};var qe,Je,Qe,Re,De=function(e){var t=e.type,n=e.submitButtonText,r=Object(f.b)();return Object(j.jsxs)("form",{onSubmit:function(e){return console.log(e.target),r(J(e))},className:ze.a.form,children:["addNumber"===t&&Object(j.jsx)(Ie,{}),"addNumber"===t&&Object(j.jsx)(Te,{}),"login"===t&&Object(j.jsx)(Me,{}),"login"===t&&Object(j.jsx)(Pe,{}),"register"===t&&Object(j.jsx)(Ie,{}),"register"===t&&Object(j.jsx)(Me,{}),"register"===t&&Object(j.jsx)(Pe,{status:"new"}),"register"===t&&Object(j.jsx)(Pe,{status:"repete"}),Object(j.jsx)("button",{type:"submit",className:ze.a.form_submit,children:n})]})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Ye=n(32),Ze=n(10),Ge=n(47),He=n.n(Ge),We=n(4),Ue=Object(q.d)("",Object(We.a)({},we.type,(function(e,t){return t.payload}))),Xe=Object(q.d)({newName:"",newNumber:""},(qe={},Object(We.a)(qe,J,(function(e,t){return t.payload})),Object(We.a)(qe,Q,(function(e,t){return t.payload})),qe)),$e=Object(q.d)([],(Je={},Object(We.a)(Je,te.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(Ye.a)(e),[n])})),Object(We.a)(Je,ne.fulfilled,(function(e,t){var n=t.meta.arg;return e.filter((function(e){return e.id!==n.id}))})),Object(We.a)(Je,ee.fulfilled,(function(e,t){var n=t.payload;return e.length===n.length?e:n})),Je)),Ve=Object(q.d)(!1,(Qe={},Object(We.a)(Qe,ee.pending,(function(){return!0})),Object(We.a)(Qe,ee.fulfilled,(function(){return!1})),Object(We.a)(Qe,ee.rejected,(function(){return!1})),Object(We.a)(Qe,te.pending,(function(){return!0})),Object(We.a)(Qe,te.fulfilled,(function(){return!1})),Object(We.a)(Qe,te.rejected,(function(){return!1})),Object(We.a)(Qe,ne.pending,(function(){return!0})),Object(We.a)(Qe,ne.fulfilled,(function(){return!1})),Object(We.a)(Qe,ne.rejected,(function(){return!1})),Qe)),et=Object(q.d)(null,(Re={},Object(We.a)(Re,ee.rejected,(function(e,t){return t.error})),Object(We.a)(Re,ee.pending,(function(){return null})),Object(We.a)(Re,te.rejected,(function(e,t){return t.error})),Object(We.a)(Re,te.pending,(function(){return null})),Object(We.a)(Re,ne.rejected,(function(e,t){return t.error})),Object(We.a)(Re,ne.pending,(function(){return null})),Re)),tt=(Object(q.d)(null,null),Object(q.c)("auth/register",function(){var e=Object(Y.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Object(q.c)("auth/login",function(){var e=Object(Y.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Object(q.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:{}}).reducer),nt=n(21),rt=n(48),at={key:"auth",storage:n.n(rt).a,whitelist:["token"]},ct=[].concat(Object(Ye.a)(Object(q.f)({serializableCheck:{ignoredActions:[nt.a,nt.f,nt.b,nt.c,nt.d,nt.e]}})),[He.a]),it=Object(Ze.b)({contacts:Object(Ze.b)({isLoading:Ve,entities:$e,error:et}),filter:Ue,newContact:Xe,auth:Object(nt.g)(at,tt)}),st=Object(q.a)({reducer:it,middleware:ct,devTools:!1}),ot=Object(nt.h)(st),ut=n(49);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f.a,{store:st,children:Object(j.jsx)(ut.a,{loading:null,persistor:ot,children:Object(j.jsx)(o.a,{children:Object(j.jsx)(je,{})})})})}),document.getElementById("root")),Ke()},9:function(e,t,n){e.exports={form_input:"Form_form_input__Pjpzp",form:"Form_form__2Yx5z",form_submit:"Form_form_submit__3xwwY",form_label:"Form_form_label__25gG3"}}},[[85,1,2]]]);
//# sourceMappingURL=main.7c9e7327.chunk.js.map