(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(52),n.p,n(53),n(11)),s=n(34),l=n(14),d=n(87),u=n(92),j=n(89),p=n(91),f=n(93),h=n(8),b=Object(d.a)({container:{width:"100%",height:"100vh",backgroundColor:"#bdc3c7",display:"flex",justifyContent:"center",alignItems:"center"},inputBox:{width:"25%",backgroundColor:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:10,padding:"11px 15px 25px 15px","& > *":{marginTop:22,width:"80%"}},error:{color:"red",fontSize:14,fontWeight:600,marginTop:0}}),m={firstname:"",lastname:"",email:"",password:"",repassword:""},x=function(){var e=Object(a.useState)(m),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),d=o[0],x=o[1],g=Object(a.useState)(!1),O=Object(l.a)(g,2),w=O[0],y=O[1],v=b(),C=n.firstname,S=n.lastname,E=n.email,F=n.password,k=n.repassword,N=function(e){r(Object(s.a)(Object(s.a)({},n),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u.a,{className:v.container,children:Object(h.jsxs)(u.a,{className:v.inputBox,children:[Object(h.jsx)(j.a,{variant:"h4",style:{fontWeight:700,textAlign:"center"},color:"primary",children:"SIGN UP"}),Object(h.jsx)(p.a,{onChange:function(e){return N(e)},type:"text",placeholder:"Enter First Name",name:"firstname",value:C}),Object(h.jsx)(p.a,{onChange:function(e){return N(e)},type:"text",placeholder:"Enter Last Name",name:"lastname",value:S}),Object(h.jsx)(p.a,{onChange:function(e){return N(e)},type:"text",placeholder:"Enter Email",name:"email",value:E}),Object(h.jsx)(p.a,{onChange:function(e){return N(e)},onKeyUp:function(){F===k?(x(""),y(!0)):(x("confirm the correct password"),y(!1))},type:"password",placeholder:"Enter Password",name:"password",value:F}),Object(h.jsx)(p.a,{onChange:function(e){return N(e)},onKeyUp:function(){k.length>0?F===k?(x(""),y(!0)):(x("confirm the correct password"),y(!1)):(x("re-enter the password"),y(!1))},type:"password",placeholder:"Re-Enter Password",name:"repassword",value:k}),Object(h.jsx)(j.a,{className:v.error,children:d}),w?Object(h.jsx)(f.a,{variant:"contained",onClick:function(){Object.keys(n).forEach((function(e,t){console.log("".concat(e,": ").concat(n[e]))}))},color:"primary",children:"Submit"}):Object(h.jsx)(f.a,{variant:"contained",color:"primary",disabled:!0,children:"Submit"})]})})})};var g=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.3eca2fea.chunk.js.map