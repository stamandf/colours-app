(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,a,t){e.exports=t.p+"static/media/bg.50688f96.svg"},254:function(e,a,t){e.exports=t(494)},259:function(e,a,t){},322:function(e,a,t){},494:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=t(36),s=(t(259),t(31)),m=t(16),d=t(13),u=t(19),p=t(20),h=t(21),g=t(61),f=t(556),b=t(554),C=t(8),v=t(5),E=t(223),y=t(24),w=t.n(y),x=t(495),j=t(42),k=t.n(j),S=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},O={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1,transition:"0.5s"}},Object(v.a)(o,S("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"50%"}}),Object(v.a)(o,S("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(v.a)(o,S("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return k()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return k()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return k()(e.background).luminance()>=.7?"rgba(0, 0, 0, 0.5)":"white"},background:"rgba(255,255,255,0.3)",position:"absolute",border:"none",right:"0px",bottom:"0",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase",textDecoration:"none"},copyButton:{color:function(e){return k()(e.background).luminance()>=.7?"rgba(0, 0, 0, 0.5)":"white"},width:"100px",height:"30px",position:"absolute",cursor:"pointer",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"#000000",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:0,zIndex:0,width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:1,zIndex:10,transform:"scale(50)",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(v.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255,255,255,0.3)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},S("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showCopyMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},N=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).changeCopyState=function(){t.setState({copied:!0},function(){setTimeout(function(){return t.setState({copied:!1})},1500)})},t.state={copied:!1},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,i=this.state.copied;return r.a.createElement(E.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:l.ColorBox},r.a.createElement("div",{style:{background:t},className:w()(l.copyOverlay,Object(v.a)({},l.showOverlay,i))}),r.a.createElement("div",{className:w()(l.copyMessage,Object(v.a)({},l.showCopyMessage,i))},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),n&&r.a.createElement(c.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),a}(r.a.Component),P=Object(x.a)(O)(N),F=(t(267),t(236)),B=t(539),D=t(555),I=t(540),R=t(97),L=t.n(R),A=t(553),T={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(v.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},S("xs"),{display:"none"}),slider:Object(v.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},S("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}},G=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(C.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(C.a)(t)),t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.Navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(c.b,{to:"/"},"reactcolorpicker")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level:",a),r.a.createElement("div",{className:n.slider},r.a.createElement(F.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(A.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(B.a,{value:"hex"},"HEX - #fffffff"),r.a.createElement(B.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),r.a.createElement(B.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 1.0)"))),r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed to ",l.toUpperCase(),"!"),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(I.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(L.a,null))]}))}}]),a}(r.a.Component),M=Object(x.a)(T)(G);var z,U,H,V=Object(x.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))}),W={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(z={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black"},Object(v.a)(z,S("lg"),{width:"25%",height:"33.3333%"}),Object(v.a)(z,S("md"),{width:"50%",height:"20%"}),Object(v.a)(z,S("xs"),{width:"100%",height:"10%"}),z),backButton:{color:"white",width:"100px",height:"30px",position:"absolute",cursor:"pointer",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:1}},q=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(C.a)(t)),t.changeFormat=t.changeFormat.bind(Object(C.a)(t)),t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map(function(e){return r.a.createElement(P,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})});return r.a.createElement("div",{className:l.Palette},r.a.createElement(M,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(V,{paletteName:t,emoji:o}))}}]),a}(r.a.Component),J=Object(x.a)(W)(q),K=t(545),Y=t(541),_=t(542),Q=t(543),X=t(538),$=t(497),Z=t(544),ee=t(546),ae=t(98),te=t.n(ae),oe=t(99),ne=t.n(oe),re=t(162),le=t.n(re),ie=t(122),ce=t.n(ie),se=function(e){function a(){var e,t;Object(m.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).deletePalette=function(e){e.stopPropagation(),t.props.openDialog(t.props.id)},t.handleClick=function(){t.props.goToPalette(t.props.id)},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map(function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(ce.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))}}]),a}(r.a.PureComponent),me=Object(x.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg ":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relactive",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(se),de=t(228),ue={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(t.n(de).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},link:{fontSize:"1rem"},container:(U={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(v.a)(U,S("xl"),{width:"80%"}),Object(v.a)(U,S("xs"),{width:"75%"}),U),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(H={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(v.a)(H,S("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(v.a)(H,S("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),H),button:{color:"white",fontSize:"1rem"}},pe=function(e){function a(){var e,t;Object(m.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={openDeleteDialog:!1,openResetDialog:!1,deletingId:""},t.openDialog=function(e){t.setState({openDeleteDialog:!0,deletingId:e})},t.openResetDialog=function(e){t.setState({openResetDialog:!0})},t.handleDelete=function(){t.props.deletePalette(t.state.deletingId),t.closeDialog()},t.handleReset=function(){t.props.resetPaletteList(),t.closeResetDialog()},t.closeResetDialog=function(){t.setState({openResetDialog:!1})},t.closeDialog=function(){t.setState({openDeleteDialog:!1,deletingId:""})},t.goToPalette=function(e){t.props.history.push("/palette/".concat(e))},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state,l=n.openDeleteDialog,i=n.openResetDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors"),r.a.createElement(Y.a,{variant:"outlined",className:o.button,onClick:this.openResetDialog},"Reset"),r.a.createElement(c.b,{className:o.link,to:"/palette/new"},"Create New Palette")),r.a.createElement(f.a,{className:o.palettes},t.map(function(a){return r.a.createElement(b.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(me,Object.assign({},a,{openDialog:e.openDialog,goToPalette:e.goToPalette,key:a.id,id:a.id})))}))),r.a.createElement(_.a,{open:l,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(Q.a,{id:"delete-dialog-title"},"Delete Palette?"),r.a.createElement(X.a,null,r.a.createElement($.a,{button:!0,onClick:this.handleDelete},r.a.createElement(Z.a,null,r.a.createElement(K.a,{style:{backgroundColor:te.a[100],color:te.a[600]}},r.a.createElement(le.a,null))),r.a.createElement(ee.a,{primary:"Delete"})),r.a.createElement($.a,{button:!0,onClick:this.closeDialog},r.a.createElement(Z.a,null,r.a.createElement(K.a,{style:{backgroundColor:ne.a[100],color:ne.a[600]}},r.a.createElement(L.a,null))),r.a.createElement(ee.a,{primary:"Cancel"})))),r.a.createElement(_.a,{open:i,"aria-labelledby":"reset-dialog-title",onClose:this.closeResetDialog},r.a.createElement(Q.a,{id:"reset-dialog-title"},"Restore default Colors?"),r.a.createElement(X.a,null,r.a.createElement($.a,{button:!0,onClick:this.handleReset},r.a.createElement(Z.a,null,r.a.createElement(K.a,{style:{backgroundColor:te.a[100],color:te.a[600]}},r.a.createElement(le.a,null))),r.a.createElement(ee.a,{primary:"Reset"})),r.a.createElement($.a,{button:!0,onClick:this.closeResetDialog},r.a.createElement(Z.a,null,r.a.createElement(K.a,{style:{backgroundColor:ne.a[100],color:ne.a[600]}},r.a.createElement(L.a,null))),r.a.createElement(ee.a,{primary:"Cancel"})))))}}]),a}(r.a.Component),he=Object(x.a)(ue)(pe),ge=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(C.a)(t)),t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,t=e.emoji,o=e.id,n=this.props.classes,l=this.state.format,i=this._shades.map(function(e){return r.a.createElement(P,{key:e.name,name:e.name,background:e[l],showingFullPalette:!1})});return r.a.createElement("div",{className:n.Palette},r.a.createElement(M,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:n.colors},i,r.a.createElement("div",{className:n.goBack},r.a.createElement(c.b,{to:"/palette/".concat(o),className:n.backButton},"GO BACK"))),r.a.createElement(V,{paletteName:a,emoji:t}))}}]),a}(r.a.Component),fe=Object(x.a)(W)(ge);t(322);var be,Ce=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},ve=t(558),Ee=t(550),ye=t(551),we=t(84),xe=t(230),je=t.n(xe),ke=t(231),Se=t.n(ke),Oe=t(6),Ne=t(549),Pe=t(547),Fe=t(548),Be=t(53),De=t(237),Ie=(t(331),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.showEmojiPicker=function(){t.setState({stage:"emoji"})},t.savePalette=function(e){var a={paletteName:t.props.newPaletteName,emoji:e.native};t.props.handleSubmit(a),t.setState({stage:""})},t.state={stage:"form"},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Be.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"render",value:function(){var e=this.props,a=e.hideForm,t=e.newPaletteName,o=e.handleChange,n=this.state.stage;return r.a.createElement("div",null,r.a.createElement(_.a,{open:"emoji"===n,onClose:a},r.a.createElement(Q.a,{id:"form-dialog-title"},"Pick a Palette Emoji"),r.a.createElement(De.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),r.a.createElement(_.a,{open:"form"===n,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"Save Palette"),r.a.createElement(Be.ValidatorForm,{onSubmit:this.showEmojiPicker,ref:"form"},r.a.createElement(Pe.a,null,r.a.createElement(Fe.a,null,"Please enter the name of your new Palette below."),r.a.createElement(Be.TextValidator,{label:"Palette Name",name:"newPaletteName",value:t,onChange:o,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Palette Name already in use!"]})),r.a.createElement(Ne.a,null,r.a.createElement(Y.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(Y.a,{variant:"contained",color:"primary",type:"submit"},"Save")))))}}]),a}(r.a.Component)),Re=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(v.a)({marginRight:"1rem","& a":{textDecoration:"none"}},S("xs"),{marginRight:0}),button:Object(v.a)({margin:"0 0.5rem"},S("xs"),{margin:"0 0.2rem",padding:"0.3rem"}),link:{textDecoration:"none"}}},Le=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.showForm=function(){t.setState({formShowing:!0})},t.hideForm=function(){t.setState({formShowing:!1})},t.state={newPaletteName:"",formShowing:!1},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleDrawerOpen,l=this.state,i=l.newPaletteName,s=l.formShowing;return r.a.createElement("div",{className:a.root},r.a.createElement(ve.a,null),r.a.createElement(Ee.a,{position:"fixed",color:"default",className:w()(a.appBar,Object(v.a)({},a.appBarShift,t))},r.a.createElement(ye.a,{disableGutters:!t},r.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:n,className:w()(a.menuButton,Object(v.a)({},a.hide,t))},r.a.createElement(je.a,null),r.a.createElement(Se.a,null)),r.a.createElement(we.a,{variant:"h6",color:"inherit",noWrap:!0},"Create a Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/"},r.a.createElement(Y.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),r.a.createElement(Y.a,{variant:"contained",color:"primary",className:a.button,onClick:this.showForm},"Save Palette"))),s&&r.a.createElement(Ie,{handleSubmit:this.props.handleSubmit,handleChange:this.handleChange,palettes:o,newPaletteName:i,hideForm:this.hideForm}))}}]),a}(r.a.Component),Ae=Object(Oe.a)(Re,{withTheme:!0})(Le),Te=t(232),Ge={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},Me=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).updateCurrentColor=function(e){t.setState({currentColor:e.hex})},t.handleChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){var e={color:t.state.currentColor,name:t.state.newColorName};t.props.addNewColor(e),t.setState({newColorName:""})},t.state={currentColor:"teal",newColorName:""},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Be.ValidatorForm.addValidationRule("isColorNameUnique",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),Be.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.props.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(Te.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(Be.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Be.TextValidator,{value:l,className:t.colorNameInput,placeholder:"Color Name",name:"newColorName",margin:"normal",variant:"filled",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a Color name","Color name must be unique.","Color already in use!"]}),r.a.createElement(Y.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),a}(r.a.Component),ze=Object(Oe.a)(Ge)(Me),Ue=t(557),He=t(552),Ve=t(235),We=t.n(Ve),qe=t(123),Je={root:(be={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(v.a)(be,S("lg"),{width:"25%",height:"20%"}),Object(v.a)(be,S("md"),{width:"50%",height:"10%"}),Object(v.a)(be,S("xs"),{width:"100%",height:"5%"}),be),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return k()(e.color).luminance()<=.08?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.5)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Ke=Object(qe.b)(function(e){var a=e.classes,t=e.handleClick,o=e.color,n=e.name;return r.a.createElement("div",{className:a.root,style:{backgroundColor:o}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,n),r.a.createElement(ce.a,{className:a.deleteIcon,onClick:t})))}),Ye=Object(x.a)(Je)(Ke),_e=Object(qe.a)(function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return r.a.createElement(Ye,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))}),Qe=t(233),Xe=t.n(Qe),$e=t(234),Ze=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object($e.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{height:"100%",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},ea=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],aa=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.addNewColor=function(e){t.setState({colors:[].concat(Object(s.a)(t.state.colors),[e]),newColorName:""})},t.handleSubmit=function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=t.state.colors,t.props.savePalette(e),t.props.history.push("/")},t.removeColor=function(e){t.setState({colors:t.state.colors.filter(function(a){return a.name!==e})})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState(function(e){var t=e.colors;return{colors:Xe()(t,a,o)}})},t.clearColors=function(){t.setState({colors:[]})},t.addRandomColor=function(){for(var e,a=t.props.palettes.map(function(e){return e.colors}).flat(),o=a[e],n=!0;n;)e=Math.floor(Math.random()*a.length),o=a[e],n=t.state.colors.some(function(e){return e.name===o.name});t.setState({colors:[].concat(Object(s.a)(t.state.colors),[o])})},t.state={open:!0,currentColor:"teal",colors:ea[0].colors},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(Ae,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(Ue.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(I.a,{onClick:this.handleDrawerClose},r.a.createElement(We.a,null))),r.a.createElement(He.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(we.a,{variant:"h4",gutterBottom:!0},"Design your own Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(Y.a,{variant:"contained",color:"secondary",className:a.button,onClick:this.clearColors},"Clear Palette"),r.a.createElement(Y.a,{variant:"contained",color:"primary",className:a.button,onClick:this.addRandomColor,disabled:c},"Random Color")),r.a.createElement(ze,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),r.a.createElement("main",{className:w()(a.content,Object(v.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(_e,{colors:i,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd})))}}]),a}(r.a.Component);aa.defaultProps={maxColors:20};var ta=Object(Oe.a)(Ze,{withTheme:!0})(aa),oa=[50,100,200,300,400,500,600,700,800,900];function na(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=oa[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var i=r.value;a.colors[i]=[]}}catch(C){o=!0,n=C}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var c,s,m=!0,d=!1,u=void 0;try{for(var p,h=e.colors[Symbol.iterator]();!(m=(p=h.next()).done);m=!0){var g=p.value,f=(c=g.color,s=10,k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(c)).mode("lab").colors(s)).reverse();for(var b in f)a.colors[oa[b]].push({name:"".concat(g.name," ").concat(oa[b]),id:g.name.toLowerCase().replace(/ /g,"-"),hex:f[b],rgb:k()(f[b]).css(),rgba:k()(f[b]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(C){d=!0,u=C}finally{try{m||null==h.return||h.return()}finally{if(d)throw u}}return a}var ra=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).findPalette=function(e){return t.state.palettes.find(function(a){return a.id===e})},t.deletePalette=function(e){t.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},t.syncLocalStorage)},t.savePalette=function(e){t.setState({palettes:[].concat(Object(s.a)(t.state.palettes),[e])},t.syncLocalStorage)},t.resetPaletteList=function(){window.localStorage.clear(),t.setState({palettes:ea}),console.log("Reset Palette List! ",t.state.palettes)},t.syncLocalStorage=function(){window.localStorage.setItem("palettes",JSON.stringify(t.state.palettes))};var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||ea},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{render:function(a){var t=a.location;return r.a.createElement(f.a,null,r.a.createElement(b.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(g.c,{location:t},r.a.createElement(g.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(Ce,null,r.a.createElement(ta,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(Ce,null,r.a.createElement(fe,{colorId:a.match.params.colorId,palette:na(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(Ce,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette,resetPaletteList:e.resetPaletteList},a)))}}),r.a.createElement(g.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(Ce,null,r.a.createElement(J,{palette:na(e.findPalette(a.match.params.id))}))}}),r.a.createElement(g.a,{render:function(a){return r.a.createElement(Ce,null,r.a.createElement(he,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette,resetPaletteList:e.resetPaletteList},a)))}}))))}})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,null,r.a.createElement(ra,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[254,1,2]]]);
//# sourceMappingURL=main.6fd18770.chunk.js.map