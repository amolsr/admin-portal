(this.webpackJsonpadminpanel=this.webpackJsonpadminpanel||[]).push([[0],{378:function(e,t,a){},384:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(0),r=a.n(i),c=a(15),o=a.n(c),s=(a(378),a(92)),l=a(29),d=a(127),p=a.n(d),j=a(190),m=a(126),b=a(489),u=a(309),h=a(308),O=a(473),x=a(129),f=a(471),g=a(345),v=a.n(g),y=a(85),k=a(307),w=a(74),C=Object(k.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function S(e){var t=C(),a=Object(i.useState)("7300707372"),r=Object(m.a)(a,2),c=r[0],o=r[1];Object(i.useEffect)((function(){localStorage.removeItem("token")}),[]);return Object(n.jsxs)(f.a,{container:!0,component:"main",className:t.root,children:[Object(n.jsx)(f.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(n.jsx)(f.a,{item:!0,xs:12,sm:8,md:5,component:x.a,elevation:6,square:!0,children:Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)(b.a,{className:t.avatar,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),fetch("https://ecommerce-calculator.herokuapp.com/api/MPC/admin/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:c})}).then(function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=5;break}return e.next=3,t.json();case 3:throw a=e.sent,new Error(a.message);case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){w.c.success(t.message),localStorage.setItem("token",t["x-auth"]),e.history.push("./dashboard")})).catch((function(e){w.c.error(e.message)}))},children:[Object(n.jsx)(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"id",label:"PIN",value:c,type:"password",id:"password",onChange:function(e){o(e.target.value)},autoComplete:"off"}),Object(n.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(n.jsx)(f.a,{container:!0,children:Object(n.jsx)(f.a,{item:!0,xs:!0,children:Object(n.jsx)(O.a,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]})})]})}var N=a(2),E=Object(k.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function F(){var e=E(),t=Object(N.a)(e.paper,e.fixedHeight);return Object(n.jsx)("div",{style:{alignContent:"center",textAlign:"center"},children:Object(n.jsxs)(f.a,{container:!0,spacing:3,children:[Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(x.a,{className:t,children:[" ",Object(n.jsx)("img",{src:"".concat("/admin-portal","/image/meesho@2x.png"),alt:"meesho"})]})}),Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(x.a,{className:t,children:[" ",Object(n.jsx)("img",{src:"".concat("/admin-portal","/image/Club_Factory_Logo@2x.png"),alt:"Club Factory"})]})}),Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(x.a,{className:t,children:[" ",Object(n.jsx)("img",{src:"".concat("/admin-portal","/image/flipkart.svg"),alt:"Flipkart"})]})}),Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(x.a,{className:t,children:[" ",Object(n.jsx)("img",{src:"".concat("/admin-portal","/image/amazon-1.svg"),alt:"amazon"})]})}),Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsxs)(x.a,{className:t,children:[" ",Object(n.jsx)("img",{src:"".concat("/admin-portal","/image/amazon-1.svg"),alt:"amazon fba"}),"FBA"]})}),Object(n.jsx)(f.a,{item:!0,xs:12,md:4,lg:4,children:Object(n.jsx)(x.a,{className:t})})]})})}a(384);var _=a(83),P=a(34),I=a(477),T=a(65),D=a(478),A=a(312),M=a(353),R=a.n(M),B=a(246),L=a(479),V=a(352),X=a.n(V),z=a(354),U=a.n(z),H=a(347),W=a(348),G=a(358),J=a(357),q=a(249),Y=a.n(q),Z=a(457),$=a(458),K=a(475),Q=a(349),ee=a.n(Q),te=a(310),ae=a(476),ne=a(250),ie=a.n(ne),re=a(251),ce=a.n(re),oe=a(474),se=a(4);var le=function(e){Object(G.a)(a,e);var t=Object(J.a)(a);function a(){var e;Object(H.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleClick=function(t){e.setState(Object(_.a)({},t,!e.state[t]))},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){if(this.props.match.params.platform){var e=this.props.match.params.platform.replace(/([A-Z])/g," $1").trim();this.setState(Object(_.a)({},e,!this.state[this.props.match.params.platform]))}}},{key:"render",value:function(){var e=this,t=[{id:1,title:"Dashboard",link:"/dashboard"},{id:2,title:"Meesho",items:[{id:1,name:"Commission",link:"/dashboard/commission/Meesho"}]},{id:3,title:"Club Factory",items:[{id:1,name:"Commission",link:"/dashboard/commission/ClubFactory"},{id:2,name:"Shipping",link:"/dashboard/shipping/ClubFactory"}]},{id:4,title:"Flipkart",items:[{id:1,name:"Commission",link:"/dashboard/commission/Flipkart"},{id:2,name:"Shipping",link:"/dashboard/shipping/Flipkart"},{id:3,name:"Fixed Fees",link:"/dashboard/fixedfees/Flipkart"},{id:4,name:"Collection Fees",link:"/dashboard/collectionfees/Flipkart"}]}],a=this.props.classes;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(oe.a,{}),Object(n.jsx)(Z.a,{className:a.root,children:t.map((function(i){return Object(n.jsxs)("div",{children:[null!=i.items?Object(n.jsxs)($.a,{button:!0,onClick:e.handleClick.bind(e,i.title),children:[Object(n.jsx)(K.a,{children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(te.a,{primary:i.title}),null!=i.items?Object(n.jsx)("div",{children:e.state[i.title]?Object(n.jsx)(ie.a,{}):Object(n.jsx)(ce.a,{})}):""]},i.id):Object(n.jsx)(s.b,{to:i.link,style:{color:"inherit",textDecoration:"none"},children:Object(n.jsxs)($.a,{button:!0,onClick:e.handleClick.bind(e,i.title),children:[Object(n.jsx)(K.a,{children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(te.a,{primary:i.title}),null!=i.items?Object(n.jsx)("div",{children:e.state[i.title]?Object(n.jsx)(ie.a,{}):Object(n.jsx)(ce.a,{})}):""]},i.id)}),null!=i.items?Object(n.jsxs)("div",{children:[Object(n.jsx)(ae.a,{component:"li",in:e.state[i.title],timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(Z.a,{disablePadding:!0,children:i.items.map((function(e){return Object(n.jsx)(s.b,{to:e.link,style:{color:"inherit",textDecoration:"none"},children:Object(n.jsxs)($.a,{button:!0,className:a.nested,children:[Object(n.jsx)(K.a,{children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(te.a,{primary:e.name},e.id)]},e.id)})}))})},t.id)," "]},i.id):" "]},i.id)}))})]})}}]),a}(r.a.Component),de=Object(se.a)((function(e){return{root:{width:"100%",maxWidth:360,background:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}))(Object(l.g)(le)),pe=a(359),je=a(152),me=a(364),be=a(56),ue="SET_ALERT",he="REMOVE_ALERT",Oe="SET_DATA",xe="REMOVE_DATA",fe=a(255),ge=Object(k.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function ve(e){var t=ge(),a=Object(be.d)((function(e){return e.alert})),r=Object(i.useState)({}),c=Object(m.a)(r,2),o=c[0],s=c[1],l=function(e){s(Object(P.a)(Object(P.a)({},o),{},Object(_.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)("form",{className:t.root,noValidate:!0,onSubmit:function(t){t.preventDefault(),w.c.error(o+" "+e.action+" "+e.product)},autoComplete:"off",children:[a.form.fields.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{name:e,label:e.charAt(0).toUpperCase()+e.substr(1).toLowerCase(),variant:"outlined",value:o[e],onChange:l}),Object(n.jsx)("br",{})]},t)})),Object(n.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]})}var ye=r.a.forwardRef((function(e,t){var a=e.in,i=e.children,r=e.onEnter,c=e.onExited,o=Object(pe.a)(e,["in","children","onEnter","onExited"]),s=Object(fe.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&r&&r()},onRest:function(){!a&&c&&c()}});return Object(n.jsx)(fe.animated.div,Object(P.a)(Object(P.a)({ref:t,style:s},o),{},{children:i}))})),ke=Object(k.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function we(){var e=ke(),t=Object(be.c)(),a=Object(be.d)((function(e){return e.alert}));return Object(n.jsx)("div",{children:Object(n.jsx)(je.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:a.set,onClose:function(){t((function(e){e({type:he,payload:{}})}))},closeAfterTransition:!0,BackdropComponent:me.a,BackdropProps:{timeout:500},children:Object(n.jsx)(ye,{in:a.set,children:Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)("h2",{id:"transition-modal-title",children:a.form.type+" "+a.form.page}),Object(n.jsx)("p",{id:"transition-modal-description",children:a.form.set?Object(n.jsx)(ve,{action:a.form.type,product:a.form.page}):Object(n.jsx)(n.Fragment,{})})]})})})})}var Ce=Object(k.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(P.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(_.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(8),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Se(e){var t=Ce(),a=r.a.useState(!0),i=Object(m.a)(a,2),c=i[0],o=i[1];return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(I.a,{}),Object(n.jsx)(D.a,{position:"absolute",className:Object(N.a)(t.appBar,c&&t.appBarShift),children:Object(n.jsxs)(A.a,{className:t.toolbar,children:[Object(n.jsx)(B.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(N.a)(t.menuButton,c&&t.menuButtonHidden),children:Object(n.jsx)(X.a,{})}),Object(n.jsx)(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:"4posper"}),Object(n.jsx)(s.b,{to:"",style:{color:"inherit",textDecoration:"none"},children:Object(n.jsx)(B.a,{color:"inherit",children:Object(n.jsx)(R.a,{})})})]})}),Object(n.jsxs)(T.a,{variant:"permanent",classes:{paper:Object(N.a)(t.drawerPaper,!c&&t.drawerPaperClose)},open:c,children:[Object(n.jsx)("div",{className:t.toolbarIcon,children:Object(n.jsx)(B.a,{onClick:function(){o(!1)},children:Object(n.jsx)(U.a,{})})}),Object(n.jsx)(de,{})]}),Object(n.jsxs)("main",{className:t.content,children:[Object(n.jsx)("div",{className:t.appBarSpacer}),Object(n.jsx)(L.a,{maxWidth:"lg",className:t.container,children:e.children})]}),Object(n.jsx)(we,{})]})}var Ne=a(247),Ee=a.n(Ne);function Fe(e){var t=Object(l.f)(),a=Object(be.c)(),r=Object(be.d)((function(e){return e.table}));Object(i.useEffect)((function(){var n,i;a((function(e){e({type:xe,payload:{}})})),a((n=t.platform,i=e.type,function(e){var t=[],a="";console.log(n+" "+i),"Commission"===i&&(t=[{title:"Category",field:"category"},{title:"Commission",field:"commission"}],a="https://ecommerce-calculator.herokuapp.com/api/MPC/"+n+"/admin/commission/getAll"),"Shipping"===i&&("ClubFactory"===n&&(t=[{title:"Type",field:"type"},{title:"Region",field:"region"},{title:"Min",field:"min"},{title:"Max",field:"max"}]),"Flipkart"===n&&(t=[{title:"Type",field:"type"},{title:"Local",field:"local"},{title:"Zonal",field:"zonal"},{title:"National",field:"national"}]),a="https://ecommerce-calculator.herokuapp.com/api/MPC/"+n+"/admin/outwardShipping/getAll"),"Fixed Fees"===i&&(t=[{title:"Min",field:"minSp"},{title:"Max",field:"maxSp"},{title:"Range",field:"rate"}],a="https://ecommerce-calculator.herokuapp.com/api/MPC/"+n+"/admin/fixedFees/getAll"),"Collection Fees"===i&&(t=[{title:"Min",field:"minSp"},{title:"Max",field:"maxSp"},{title:"Post Paid %",field:"postPaidPercentage"},{title:"Post Paid \u20b9",field:"postPaidRuppee"},{title:"Pre Paid %",field:"prePaidPercentage"},{title:"Pre Paid \u20b9",field:"prePaidRuppee"}],a="https://ecommerce-calculator.herokuapp.com/api/MPC/"+n+"/admin/collectionFees/getAll"),fetch(a,{method:"GET",headers:{"content-type":"application/json","x-auth":localStorage.getItem("token")}}).then(function(){var e=Object(j.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok||401===parseInt(t.status)){e.next=5;break}return e.next=3,t.json();case 3:throw a=e.sent,new Error(a.message);case 5:return 401===parseInt(t.status)&&localStorage.removeItem("token"),e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(a){e({type:Oe,payload:{column:t,data:a}})})).catch((function(e){return w.c.error(e.message)}))}))}),[a,t.platform,e.type]);var c=function(){var t={type:"Add",page:e.type,set:!0,fields:["commission","category"]};a(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){a({type:ue,payload:{set:e,form:t}})}}(!0,t))};return Object(n.jsx)(Ee.a,{title:t.platform+" "+e.type,columns:r.column,data:r.data,actions:[{icon:"edit",tooltip:"Update Commission",onClick:function(e,t){return alert("You Update "+t.category)}},{icon:"delete",tooltip:"Delete Commission",onClick:function(e,t){return alert("You want to delete "+t.category)}},{icon:"add",tooltip:"Add User",isFreeAction:!0,onClick:function(e){return c()}}],options:{paging:!1,actionsColumnIndex:-1}})}var _e=function(){return Object(n.jsx)(s.a,{basename:"/admin-portal",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/dashboard/commission/:platform",children:Object(n.jsx)(Se,{children:Object(n.jsx)(Fe,{type:"Commission"})})}),Object(n.jsx)(l.a,{path:"/dashboard/shipping/:platform",children:Object(n.jsx)(Se,{children:Object(n.jsx)(Fe,{type:"Shipping"})})}),Object(n.jsx)(l.a,{path:"/dashboard/fixedfees/:platform",children:Object(n.jsx)(Se,{children:Object(n.jsx)(Fe,{type:"Fixed Fees"})})}),Object(n.jsx)(l.a,{path:"/dashboard/collectionfees/:platform",children:Object(n.jsx)(Se,{children:Object(n.jsx)(Fe,{type:"Collection Fees"})})}),Object(n.jsx)(l.a,{path:"/dashboard",children:Object(n.jsx)(Se,{children:Object(n.jsx)(F,{})})}),Object(n.jsx)(l.a,{path:"/",component:S}),Object(n.jsx)(l.a,{path:"*",children:Object(n.jsx)("h1",{children:"Not Found"})})]})})},Pe=a(57),Ie=a(356),Te={set:!1,form:{set:!1,page:"",type:""}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(P.a)(Object(P.a)({},e),t.payload);case he:return Object(P.a)(Object(P.a)({},e),{},{set:!1,form:Te.form});default:return e}},Ae={column:[],data:[]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(P.a)(Object(P.a)({},e),t.payload);case xe:return Object(P.a)(Object(P.a)({},e),{},{column:[],data:[]});default:return e}},Re=Object(Pe.c)({alert:De,table:Me}),Be=[Ie.a],Le=Object(Pe.e)(Re,{},Object(Pe.d)(Pe.a.apply(void 0,Be),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()?window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Ve=a(481),Xe=a(115),ze=Object(Xe.a)({palette:{primary:{main:"#3e4f60"},secondary:{main:"#f7932e"}}});a(448);o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(be.a,{store:Le,children:Object(n.jsxs)(Ve.a,{theme:ze,children:[Object(n.jsx)(I.a,{}),Object(n.jsx)(_e,{}),Object(n.jsx)(w.b,{className:"impct-toast",position:"bottom-right",autoClose:3e3,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!1,pauseOnHover:!0,transition:w.a})]})})}),document.getElementById("root"))}},[[449,1,2]]]);
//# sourceMappingURL=main.76cc1025.chunk.js.map