(this.webpackJsonpecom=this.webpackJsonpecom||[]).push([[0],{179:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(14),o=n.n(s),i=(n(179),n(9)),l=n(70),d=function(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!0),o=Object(i.a)(s,2),l=o[0],d=o[1],u=Object(r.useState)(null),j=Object(i.a)(u,2),b=j[0],h=j[1];return Object(r.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data for that resource");return e.json()})).then((function(e){c(e),d(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(h(e.message),d(!1))})),function(){return t.abort()}}),[e]),{data:a,isPending:l,error:b}},u=n(291),j=n(16),b=n(266),h=n(268),m=n(270),p=n(269),O=n(53),f=n(2),g=function(e){var t=e.products;return Object(f.jsx)("div",{className:"product-list",children:t.map((function(e){return Object(f.jsx)(b.a,{className:"product-preview",children:Object(f.jsx)(j.b,{to:"/products/".concat(e._id),children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(p.a,{style:{height:140},image:e.images[0],title:e.name}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(f.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),Object(f.jsxs)("p",{style:{marginTop:"1em",fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",e.price]}),"  "]})]})]})})},e._id)}))})},x=n(151),v=n(295),y=n(158),w=n.n(y),S=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=d("/data/products/"+n),s=c.data,o=c.isPending,j=c.error,b=Object(r.useState)(null),h=Object(i.a)(b,2),m=h[0],p=h[1],O=Object(r.useState)([]),y=Object(i.a)(O,2),S=y[0],C=y[1],N=Object(r.useState)(null),k=Object(i.a)(N,2),T=k[0],P=k[1],I=Object(r.useState)(!1),E=Object(i.a)(I,2),L=E[0],D=E[1],W=Object(r.useState)(!0),z=Object(i.a)(W,2),J=z[0],q=z[1],A=Object(r.useState)(""),R=Object(i.a)(A,2),F=R[0],B=R[1];Object(r.useEffect)((function(){if(s&&(0===s.productList.length?D(!0):D(!1),p(s.productList),C(s.categories),J)){for(var e=Array(s.categories.length),t=0;t<e.length;t++)e[t]=!1;P(e)}}),[s,J]);var V=function(e){console.log(e);var t={keywords:e},n="";e.length>0&&(n="?"+new URLSearchParams(t).toString()),a(n),q(!1)};return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)("div",{className:"search-bar",children:Object(f.jsx)(u.a,{onChange:function(e){!function(e){var t=[];T.forEach((function(e,n){e&&t.push(S[n])})),e&&t.push.apply(t,Object(l.a)(e.trim().toLowerCase().split(" "))),V(t)}(e.target.value),B(e.target.value)},value:F,color:"secondary",id:"filled-basic",label:"search products",variant:"filled"})}),S&&Object(f.jsx)("div",{style:{margin:"4% auto 4% auto",width:"50%",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:S.map((function(e,t){return Object(f.jsx)(x.a,{style:{marginLeft:"1%",marginRight:"1%"},label:Object(f.jsx)("span",{style:{color:"white"},children:e}),onClick:function(){var e=Object(l.a)(T);e[t]=!e[t];var n=[];e.forEach((function(e,t){e&&n.push(S[t])})),!0===F.trim()&&n.push.apply(n,Object(l.a)(F.split(" "))),V(n),P(e)},avatar:T[t]?Object(f.jsx)(v.a,{style:{backgroundColor:"white"},children:Object(f.jsx)(w.a,{style:{color:"white"}})}):null,variant:"default",clickable:!0,color:"secondary"})}))}),j&&Object(f.jsx)("div",{children:j}),o&&Object(f.jsx)("div",{children:"Loading..."}),L&&Object(f.jsx)("div",{children:"No Matches found. Try something different."}),m&&Object(f.jsx)(g,{products:m,categories:s.categories})]})},C=n(15),N=n(31),k=n.n(N),T=n(51),P=n(106),I=n.n(P),E=n(107),L=n.n(E),D=n(159),W=n.n(D),z=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(r.useState)(""),u=Object(i.a)(d,2),j=u[0],b=u[1],h=Object(r.useState)([]),m=Object(i.a)(h,2),p=m[0],O=m[1],g=Object(r.useState)(!1),x=Object(i.a)(g,2),v=x[0],y=x[1],w=(Object(C.f)(),Object(r.useState)([])),S=Object(i.a)(w,2),N=S[0],P=S[1],E=Object(r.useState)([]),D=Object(i.a)(E,2),z=D[0],J=D[1],q=Object(r.useRef)(null),A=function(){var e=Object(T.a)(k.a.mark((function e(t){var n,a,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.target.files,a=[],r=[],c=0;c<n.length;c++)a.push(n[c]),r.push(URL.createObjectURL(n[c])),console.log(URL.createObjectURL(n[c]));P(a),J(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"create",children:[Object(f.jsx)("h2",{children:"Add a New Product"}),z&&Object(f.jsx)(L.a,{children:z.map((function(e,t){return Object(f.jsx)(I.a,{onClick:function(){return console.log("onClick")},src:e,aspectRatio:16/9},t)}))}),Object(f.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("name",n),t.append("price",j),t.append("categories",p),t.append("description",o),N.forEach((function(e){t.append("images",e)})),console.log(t),v||(y(!0),fetch("/data/products/create",{method:"POST",body:t}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){y(!1),console.log(e,e.data)}))})))}(e)},children:[Object(f.jsxs)("div",{className:"create-input",children:[Object(f.jsx)("label",{for:"myfile",children:"Select Images"}),Object(f.jsx)("input",{multiple:!0,type:"file",id:"myfile",name:"myfile",onChange:A}),Object(f.jsx)("label",{children:"Name:"}),Object(f.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("label",{children:"Price in Tk"}),Object(f.jsx)("input",{type:"number",required:!0,value:j,onChange:function(e){e.target.valueAsNumber>=0&&b(e.target.valueAsNumber)}}),Object(f.jsx)("label",{children:"Description"}),Object(f.jsx)("textarea",{value:o,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(f.jsx)("label",{style:{marginTop:"5%"},children:"Categories"}),Object(f.jsx)(W.a,{style:{width:"100%",marginTop:"5%",marginBottom:"10%"},ref:q,value:p,newChipKeyCodes:[32],onAdd:function(e){p.push(e),O(p),console.log(p)},onDelete:function(e,t){p.splice(t,1),O(p),q.current.focus()}}),!v&&Object(f.jsx)("button",{children:" Add Product"}),v&&Object(f.jsx)("button",{children:" Adding Product"})]})]})},J=n(237),q=n(283),A=n(86),R=n(296),F=n(278),B=n(276),V=n(277),M=n(275),_=(n(227),function(e){var t=e.open,n=e.handleClose,a=e.user,c=e.product,s=Object(r.useState)(!1),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)(!1),b=Object(i.a)(j,2),h=(b[0],b[1]),m=Object(r.useState)({text:"",username:a.username,timestamp:new Date}),p=Object(i.a)(m,2),O=p[0],g=p[1];return Object(f.jsxs)(R.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",children:[Object(f.jsx)(M.a,{id:"form-dialog-title",children:"Comment"}),Object(f.jsxs)(B.a,{children:[Object(f.jsx)(V.a,{children:"Your comment and rating are extremely valuable to us. Please give us your feedback regarding the vendor and the product."}),Object(f.jsxs)("p",{children:[" ",Object(f.jsx)("b",{children:"Your rating:"})]}),Object(f.jsx)(u.a,{autoFocus:!0,disabled:l,margin:"normal",id:"comment",label:"Your comment",type:"text",onChange:function(e){!function(e){var t=Object(A.a)({},O);t.text=e,g(t)}(e.target.value)},fullWidth:!0})]}),Object(f.jsxs)(F.a,{children:[Object(f.jsx)("button",{onClick:n,children:"Cancel"}),Object(f.jsx)("button",{disabled:l,onClick:function(e){e.preventDefault(),d(!0),fetch("/data/products/comment/"+c._id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){h(e.data),d(!1)}))}))},children:"Comment"})]})]})}),Y=n(160),H=n.n(Y),U=n(279),G=n(281),K=n(280),Q=n(282),X=function(e){var t=e.comment;return console.log(t),Object(f.jsxs)("div",{children:[Object(f.jsxs)(U.a,{children:[Object(f.jsx)(K.a,{children:Object(f.jsx)(v.a,{children:Object(f.jsx)(H.a,{})})}),Object(f.jsx)(G.a,{alignItems:"flex-start",primary:"Ali Connors @10:30 pm 12/12/24",secondary:Object(f.jsx)(c.a.Fragment,{children:Object(f.jsxs)(O.a,{component:"span",variant:"body2",style:{display:"inline"},children:[" "," \u2014 I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026I'll be in your neighborhood doing errands this\u2026"]})})})]}),Object(f.jsx)(Q.a,{})]})},Z=function(e){var t=e.handleCartLength,n=Object(C.h)().id,a=d("/data/products/"+n),c=a.data,s=a.error,o=a.isPending,l=Object(C.g)(),u=Object(r.useState)(1),j=Object(i.a)(u,2),b=j[0],h=j[1],m=Object(r.useState)(null),p=Object(i.a)(m,2),O=p[0],g=p[1],x=Object(C.f)(),v=d("/user"),y=v.data,w=v.error,S=v.isPending;Object(r.useEffect)((function(){g(y)}),[y]);var N=function(e){var t=-1;return e.forEach((function(e,n){JSON.stringify(e)===JSON.stringify(c)&&(t=n)})),t},P=function(){var e=Object(T.a)(k.a.mark((function e(){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O?(n=JSON.parse(sessionStorage.getItem("cart")),a=JSON.parse(sessionStorage.getItem("count")),console.log(n,a),n?(r=N(n),console.log(r),-1!==r?a[r]=parseInt(a[r])+b:(n.push(c),a.push(b),sessionStorage.setItem("cart",JSON.stringify(n))),sessionStorage.setItem("count",JSON.stringify(a))):(n=[c],a=[b],sessionStorage.setItem("cart",JSON.stringify(n)),sessionStorage.setItem("count",JSON.stringify(a))),t(n.length)):(localStorage.setItem("location",l.pathname),x.push("/login"),x.go());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){e?b++:b>1&&b--,h(b)},D=Object(r.useState)(!1),W=Object(i.a)(D,2),z=W[0],A=W[1];return Object(f.jsxs)("div",{className:"product-details",children:[(o||S)&&Object(f.jsx)("div",{children:" Loading "}),(s||w)&&Object(f.jsx)("div",{children:s}),c&&Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[Object(f.jsx)("div",{style:{flexGrow:1},children:Object(f.jsx)(L.a,{children:c.images.map((function(e,t){return Object(f.jsx)(I.a,{onClick:function(){return console.log("onClick")},src:e,aspectRatio:4/3},t)}))})}),Object(f.jsxs)("div",{style:{flexGrow:1},children:[Object(f.jsx)("h2",{children:c.name}),Object(f.jsxs)("div",{className:"add-cart",children:[Object(f.jsxs)(q.a,{style:{margin:"2%"},size:"small","aria-label":"small outlined button group",children:[Object(f.jsx)(J.a,{onClick:function(){return E(!1)},children:"-"}),Object(f.jsx)(J.a,{style:{backgroundColor:"white",color:"black"},disabled:!0,children:b}),Object(f.jsx)(J.a,{onClick:function(){return E(!0)},children:"+"})]}),Object(f.jsx)("button",{style:{margin:"2%"},onClick:P,children:" Add to cart"})]}),Object(f.jsxs)("p",{style:{fontSize:"150%"},children:[" ",Object(f.jsxs)("b",{children:["  \u09f3 ",c.price,"  "]})]}),Object(f.jsx)("p",{style:{marginTop:"1em"},children:c.description})]})]}),!(o&&S)&&Object(f.jsx)("div",{style:{margin:"0 auto"},children:Object(f.jsx)("button",{onClick:function(){if(!S&&!O)return localStorage.setItem("location",l.pathname),x.push("/login"),void x.go();A(!0)},size:"small",children:"Comment"})}),O&&c&&Object(f.jsx)(_,{open:z,handleClose:function(){A(!1)},user:O,product:c}),O&&c&&Object(f.jsx)("div",{children:c.comments.map((function(e,t){return Object(f.jsx)(X,{comment:e})}))})]})},$=n(294),ee=function(e){var t=e.handleCartLength,n=Object(r.useState)(JSON.parse(sessionStorage.getItem("cart"))),a=Object(i.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(JSON.parse(sessionStorage.getItem("count"))),h=Object(i.a)(o,2),O=h[0],g=h[1],x=Object(r.useState)(0),v=Object(i.a)(x,2),y=v[0],w=v[1],S=d("/user"),N=S.data,k=(S.error,S.pending,Object(r.useState)(null)),T=Object(i.a)(k,2),P=(T[0],T[1]),I=Object(r.useState)(""),E=Object(i.a)(I,2),L=E[0],D=E[1],W=Object(r.useState)(""),z=Object(i.a)(W,2),A=z[0],R=z[1],F=Object(r.useState)(!1),B=Object(i.a)(F,2),V=B[0],M=B[1],_=Object(C.f)(),Y=Object(r.useState)({message:"",bool:!1}),H=Object(i.a)(Y,2),U=H[0],G=H[1];Object(r.useEffect)((function(){if(null!=c){var e=0;c.forEach((function(t,n){e+=parseFloat(t.price)*O[n]})),w(e)}}),[O,c]),Object(r.useEffect)((function(){N&&(P(N),D(N.address),R(N.phone))}),[N]);var K=function(e,n){if(console.log("long ago, ",c),e)O[n]++;else if(O[n]>0&&(O[n]--,0===O[n])){if(1===c.length)return s(null),g(null),sessionStorage.removeItem("cart"),sessionStorage.removeItem("count"),void t(0);console.log("before, ",c),O.splice(n,1),console.log("after, ",c.splice(n,1))}g(Object(l.a)(O)),sessionStorage.setItem("cart",JSON.stringify(c)),sessionStorage.setItem("count",JSON.stringify(O))};return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"70%",margin:"0 auto"},children:[!c&&Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("h2",{children:"Sorry no item was added"}),Object(f.jsx)(j.b,{to:"/",children:"Back to the homepage..."})]}),c&&Object(f.jsxs)("div",{children:[c.map((function(e,t){return Object(f.jsxs)(b.a,{style:{display:"flex",flexDirection:"row",marginTop:"2%"},children:[Object(f.jsx)(p.a,{style:{width:140},image:e.images[0],title:e.name}),Object(f.jsxs)(m.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"100%"},children:[Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" ",e.name]}),"  "]}),Object(f.jsx)("div",{className:"add-cart",children:Object(f.jsxs)(q.a,{style:{margin:"2%"},size:"small","aria-label":"small outlined button group",children:[Object(f.jsx)(J.a,{onClick:function(){return K(!0,t)},children:"+"}),Object(f.jsx)(J.a,{disabled:!0,children:O[t]}),Object(f.jsx)(J.a,{onClick:function(){return K(!1,t)},children:"-"})]})}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",parseFloat(e.price)*O[t]]}),"  "]})]})]},e._id)})),Object(f.jsxs)(b.a,{style:{marginTop:"2%"},children:[Object(f.jsxs)(m.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Total "}),Object(f.jsxs)("p",{style:{fontSize:20},children:[" ",Object(f.jsxs)("b",{children:[" \u09f3 ",y]}),"  "]})]}),Object(f.jsxs)(m.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Delivery Charge "}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsx)("b",{children:" \u09f3 12"}),"  "]})]}),Object(f.jsxs)(m.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Net Price "}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",y+12]}),"  "]})]})]}),N&&Object(f.jsx)(b.a,{style:{marginTop:"2%"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"4%",marginBottom:"2%"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Deliver to "}),Object(f.jsxs)("p",{style:{fontSize:20},children:[" ",Object(f.jsx)("b",{children:N.username}),"  "]})]}),Object(f.jsx)(u.a,{variant:"outlined",margin:"normal",value:A,required:!0,fullWidth:!0,name:"phone",label:"Phone",id:"phone",type:"tel",onChange:function(e){R(e.target.value)}}),Object(f.jsx)(u.a,{multiline:!0,variant:"outlined",margin:"normal",value:L,required:!0,fullWidth:!0,name:"address",label:"Address",id:"address",onChange:function(e){D(e.target.value)}}),Object(f.jsx)("button",{style:{marginTop:"3%"},class:"button-class",onClick:function(e){e.preventDefault();var t={user:N._id,username:N.username,address:L,phone:A,cart:c,counts:O};V||(M(!0),fetch("/data/place-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?(G("Order placed successfully",!0),sessionStorage.clear("cart"),sessionStorage.clear("count"),_.push("/"),_.go()):(alert("Your order could not be placed"),G("Sorry, couldn't place order, please check network",!0)),e.json()})).then((function(e){M(!1)})))},children:V?"Placing order":"Confirm and Place Order"})]})})]}),Object(f.jsx)($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:U.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&G({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:U.message})})]})},te=function(){return Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("h2",{children:"Sorry "}),Object(f.jsx)(j.b,{to:"/",children:"Back to the homepage..."})]})},ne=n(286),ae=n(287),re=n(292),ce=n(284),se=n(288),oe=n(40),ie=n.n(oe),le=n(143),de=n(285),ue=function(){return Object(f.jsxs)(O.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(ce.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})},je=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),be=function(){var e=je(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)({email:"",password:"",remember:!1}),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(C.f)();return Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(ne.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ie.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"login"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){if(e.data.user){var t=localStorage.getItem("location");t?(localStorage.removeItem("location"),p.replace(t),p.go()):(p.push("/"),p.go())}d(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(u.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,m(h)}}),Object(f.jsx)(u.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){h.password=e.target.value,m(h)}}),Object(f.jsx)(ae.a,{control:Object(f.jsx)(re.a,{value:"remember",color:"primary",onChange:function(e){h.remember=e.target.checked,m(h)}}),label:"Remember me"}),Object(f.jsxs)("button",{children:[" ",a?"logging in...":"login"]}),Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0.5em"},children:[Object(f.jsx)(ce.a,{href:"/forgotPassword",variant:"body2",children:"Forgot password?"}),Object(f.jsx)(ce.a,{href:"/signup",variant:"body2",children:"Don't have an account? Register!"})]})]})]}),Object(f.jsx)(se.a,{mt:8,children:Object(f.jsx)(ue,{})})]})})},he=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),me=function(){var e=he(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)({email:"",password:"",username:"",phone:"",address:""}),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(C.f)();return Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(ne.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ie.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"sign up"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){if(e.data.user){var t=localStorage.getItem("location");t?(console.log(t),localStorage.removeItem("location"),p.push(t),p.go()):(p.push("/"),p.go())}d(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(u.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,m(h)}}),Object(f.jsx)(u.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){h.password=e.target.value,m(h)}}),Object(f.jsx)(u.a,{error:l.username||!1,helperText:l.username,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",autoComplete:"username",onChange:function(e){h.username=e.target.value,m(h)}}),Object(f.jsx)(u.a,{error:l.phone||!1,helperText:l.phone,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",onChange:function(e){h.phone=e.target.value,m(h)}}),Object(f.jsx)(u.a,{error:l.address||!1,helperText:l.address,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:function(e){h.address=e.target.value,m(h)}}),Object(f.jsxs)("button",{children:[" ",a?"sigining up...":"sign up"]})]})]}),Object(f.jsx)(se.a,{mt:8,children:Object(f.jsx)(ue,{})})]})})},pe=["title","titleId"];function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ge(e,t){var n=e.title,c=e.titleId,s=fe(e,pe);return r.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":c},s),n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))}var xe,ve=r.forwardRef(ge),ye=(n.p,["title","titleId"]);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ce(e,t){var n=e.title,a=e.titleId,c=Se(e,ye);return r.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,xe||(xe=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))}var Ne,ke=r.forwardRef(Ce),Te=(n.p,["title","titleId"]);function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ee(e,t){var n=e.title,a=e.titleId,c=Ie(e,Te);return r.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Ne||(Ne=r.createElement("path",{fillRule:"evenodd",d:"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",clipRule:"evenodd"})))}var Le=r.forwardRef(Ee),De=(n.p,n(228),function(e){var t=e.cartLength,n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=function(){return s(!1)},l=Object(r.useState)(null),u=Object(i.a)(l,2),b=u[0],h=u[1],m=d("http://localhost:3000/user"),p=m.data;m.error,m.isPending;return Object(r.useEffect)((function(){h(p)}),[p]),Object(r.useEffect)((function(){console.log(t)}),[t]),Object(f.jsxs)("div",{className:"header ",children:[Object(f.jsxs)("div",{className:"logo-nav",children:[Object(f.jsx)("div",{className:"logo-container",children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)(Le,{className:"logo"})})}),Object(f.jsx)("h1",{children:"The Dojo Blog"})]}),Object(f.jsxs)("ul",{className:c?"nav-options active":"nav-options",children:[Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(j.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(j.b,{to:"/create",children:" New Blog"})}),b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsxs)(j.b,{to:"/update-user",children:[" ","Welcome, "+b.username+"!"," "]})}),b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)("a",{href:"/logout",children:"  Log out "})}),!b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(j.b,{to:"/login",children:"  Login "})}),Object(f.jsx)("li",{className:"option mobile-option sign-up",onClick:o,children:Object(f.jsx)(j.b,{style:{color:"white"},to:"/signup",children:"Signup"})})]}),Object(f.jsxs)("ul",{className:"signin-up",children:[!b&&Object(f.jsx)("li",{className:"option mobile-option",onClick:o,children:Object(f.jsx)(j.b,{to:"/login",children:"  Login "})}),Object(f.jsx)("li",{children:Object(f.jsx)(j.b,{to:"/signup",className:"signup-btn",children:"Signup"})})]}),Object(f.jsx)("div",{className:"mobile-menu",onClick:function(){return s(!c)},children:c?Object(f.jsx)(ve,{className:"menu-icon"}):Object(f.jsx)(ke,{className:"menu-icon"})})]})}),We=n(289),ze=n(161),Je=n.n(ze),qe=n(290),Ae=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Re=function(){var e=Ae(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],b=d("/user"),h=b.data,m=b.error,p=b.userPending,g=Object(r.useState)({_id:"",email:"",password:"",username:"",phone:"",address:""}),x=Object(i.a)(g,2),y=x[0],w=x[1],S=Object(r.useState)(!1),C=Object(i.a)(S,2),N=C[0],k=C[1],T=function(e,t){var n=Object(A.a)({},y);n[e]=t,w(n)};Object(r.useEffect)((function(){h&&w(h),console.log(h)}),[h]);return Object(f.jsxs)("div",{children:[m&&Object(f.jsx)("div",{children:m}),p&&Object(f.jsx)("div",{children:"Loading..."}),h&&Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(ne.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ie.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"update account"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/update-user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){e.data.user&&k(!0),j(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(u.a,{error:l.email||!1,helperText:l.email,value:y.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){T("email",e.target.value)}}),Object(f.jsx)(u.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){T("password",e.target.value)}}),Object(f.jsx)(u.a,{error:l.username||!1,helperText:l.username,value:y.username,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",autoComplete:"username",onChange:function(e){T("username",e.target.value)}}),Object(f.jsx)(u.a,{error:l.phone||!1,helperText:l.phone,value:y.phone,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",onChange:function(e){T("phone",e.target.value)}}),Object(f.jsx)(u.a,{error:l.address||!1,helperText:l.address,value:y.address,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:function(e){T("address",e.target.value)}}),Object(f.jsxs)("button",{children:[" ",a?"updating...":"update"]})]})]}),Object(f.jsx)(se.a,{mt:8,children:Object(f.jsx)(ue,{})}),Object(f.jsx)($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:N,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&k(!1)},message:Object(f.jsx)("div",{style:{color:"white"},children:"account updated successfully"})})]})})]})},Fe=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Be=function(){var e=Fe(),t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],j=Object(r.useState)({email:""}),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(C.f)(),g=Object(r.useState)({message:"",bool:!1}),x=Object(i.a)(g,2),y=x[0],w=x[1];return Object(f.jsxs)("div",{className:"sign-in-page",children:[Object(f.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(ne.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ie.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"please provide an email"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/forgot-password/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then(function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"success"!==t.data.msg){e.next=9;break}return w({message:"Please check email for the reset link",bool:!0}),e.next=5,new Promise((function(e){return setTimeout(e,2e3)}));case 5:p.push("/"),p.go(),e.next=10;break;case 9:w({message:"Error! Could not send email",bool:!0});case 10:d(t.data),c(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(u.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,m(h)}}),Object(f.jsxs)("button",{children:[" ",a?"sending...":"send"]})]})]}),Object(f.jsx)(se.a,{mt:8,children:Object(f.jsx)(ue,{})})]}),Object(f.jsx)($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:y.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&w({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:y.message})})]})},Ve=Object(le.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Me=function(){var e=Ve(),t=Object(C.h)(),n=t.email,a=t.otp,c=Object(r.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(r.useState)(""),j=Object(i.a)(d,2),b=j[0],h=j[1],m=Object(r.useState)({email:n,otp:a,password:"",confirmPassword:""}),p=Object(i.a)(m,2),g=p[0],x=p[1],y=Object(C.f)(),w=Object(r.useState)({message:"",bool:!1}),S=Object(i.a)(w,2),N=S[0],P=S[1];return Object(f.jsxs)("div",{className:"sign-in-page",children:[Object(f.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(ne.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ie.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"reset password"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0),fetch("/reset-password/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then(function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"success"!==t.data.msg){e.next=9;break}return P({message:"password reset successful",bool:!0}),e.next=5,new Promise((function(e){return setTimeout(e,2e3)}));case 5:y.push("/"),y.go(),e.next=10;break;case 9:0===t.data.code?h(t.data.msg):P({message:t.data.msg,bool:!0});case 10:h(t.data),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(u.a,{error:b.password||!1,helperText:b.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g.password=e.target.value,x(g)}}),Object(f.jsx)(u.a,{error:b.password||!1,helperText:b.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"confirmPassword",autoComplete:"current-password",onChange:function(e){g.confirmPassword=e.target.value,x(g)}}),Object(f.jsxs)("button",{children:[" ",o?"sending...":"send"]})]})]}),Object(f.jsx)(se.a,{mt:8,children:Object(f.jsx)(ue,{})})]}),Object(f.jsx)($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:N.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&P({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:N.message})})]})},_e=function(){var e=JSON.parse(sessionStorage.getItem("cart")),t=Object(r.useState)(e?e.length:0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=function(e){c(e)};return Object(r.useEffect)((function(){}),[a]),Object(f.jsx)(j.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(De,{cartLength:a}),"   ",Object(f.jsx)(We.a,{style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",backgroundColor:"#ffff"},"aria-label":"add",children:Object(f.jsx)(qe.a,{anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:a,color:"secondary",children:Object(f.jsx)(Je.a,{onClick:function(){var e=document.createElement("a");e.href="/checkout",e.target="_self",e.click()}})})}),Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)(C.c,{children:[Object(f.jsx)(C.a,{exact:!0,path:"/",children:Object(f.jsx)(S,{})}),Object(f.jsx)(C.a,{path:"/create",children:Object(f.jsx)(z,{})}),Object(f.jsx)(C.a,{path:"/products/:id",children:Object(f.jsx)(Z,{handleCartLength:s})}),Object(f.jsx)(C.a,{path:"/login",children:Object(f.jsx)(be,{})}),Object(f.jsx)(C.a,{path:"/signup",children:Object(f.jsx)(me,{})}),Object(f.jsx)(C.a,{path:"/update-user",children:Object(f.jsx)(Re,{})}),Object(f.jsx)(C.a,{path:"/checkout",children:Object(f.jsx)(ee,{handleCartLength:s})}),Object(f.jsx)(C.a,{path:"/forgotPassword",children:Object(f.jsx)(Be,{})}),Object(f.jsx)(C.a,{path:"/resetPassword/:email/:otp",children:Object(f.jsx)(Me,{})}),Object(f.jsx)(C.a,{to:"*",children:Object(f.jsx)(te,{})})]})})]})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(_e,{})}),document.getElementById("root")),Ye()}},[[229,1,2]]]);
//# sourceMappingURL=main.884b00ae.chunk.js.map