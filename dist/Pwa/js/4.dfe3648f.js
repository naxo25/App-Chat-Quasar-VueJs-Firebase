(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"322a":function(t,e,a){"use strict";var s=a("4666"),o=a.n(s);o.a},4666:function(t,e,a){},7045:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticStyle:{"max-width":"420px",margin:"auto"},attrs:{view:"lHh Lpr lFf"}},[1==t.$store.state.store.loader?a("div",[a("q-circular-progress",{staticClass:"absolute-center",attrs:{"show-value":"",value:t.$store.state.store.value,size:"120px",color:"blue-6","track-color":"grey-9"}},[a("q-avatar",{attrs:{size:"100px"}},[a("img",{attrs:{src:"statics/quasar-logo.svg"}})])],1)],1):t._e(),a("q-header",{class:{invisible:!t.show},staticStyle:{"max-width":"420px",margin:"auto"}},[t.userDetails.userId?a("q-toolbar",{staticClass:"text-black bg-secondary"},[t.$route.fullPath.includes("/chat")?a("div",[a("q-btn",{attrs:{flat:"",dense:"",to:"/users",color:"black",icon:"arrow_back","no-caps":""}},[a("img",{staticStyle:{width:"33px",height:"33px",margin:"0px 7px 0px 1px","border-radius":"50%"},attrs:{src:null!=t.other.img_thumb?t.other.img_thumb:t.noimg}}),t._v("\n          "+t._s(t.other.name)+"\n        ")]),a("q-btn-dropdown",{staticClass:"absolute-right text-secondary",attrs:{icon:"miscellaneous_services",dense:"",flat:"",color:"black"}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.clearFriend}},[a("q-item-section",[a("q-item-label",[t._v("Borrar amigo")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"remove",color:"black"}})],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.clearMessages}},[a("q-item-section",[a("q-item-label",[t._v("Borrar Mensajes")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"delete",color:"red"}})],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.LLamar}},[a("q-item-section",[a("q-item-label",[t._v("LLamar")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"phone",color:"green"}})],1)],1)],1)],1)],1):a("div",[a("q-btn",{staticClass:"text-primary",attrs:{flat:"","no-caps":"",icon:"info",label:"naxchat"},on:{click:function(e){t.info=!0}}}),a("q-btn",{staticClass:"absolute-right",attrs:{flat:"","no-caps":"",color:"black",icon:"exit_to_app",label:"salir"},on:{click:t.logoutUser}})],1)]):t._e()],1),a("q-page-container",{class:{invisible:!t.show}},[a("router-view")],1),t.userDetails.userId?a("q-toolbar",{staticClass:"fixed-bottom bg-white",class:{invisible:!t.show}},[a("q-tabs",{staticClass:"text-primary",staticStyle:{margin:"auto"},attrs:{"no-caps":"","active-color":"primary","indicator-color":"primary"},on:{click:function(e){return t.cambiarOpcion(t.opcion)}},model:{value:t.opcion,callback:function(e){t.opcion=e},expression:"opcion"}},[a("q-tab",{attrs:{name:"amigos",icon:"chat"}}),a("q-tab",{attrs:{name:"solicitudes",icon:"person_add"}}),a("q-tab",{attrs:{name:"perfil",icon:"account_circle"}})],1)],1):t._e(),a("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}},[a("Minfo")],1)],1)},o=[],i=a("ded3"),r=a.n(i),c=a("2f62"),n={data(){return{noimg:"",info:!1,show:!1,opcion:"amigos"}},mounted(){this.noimg=this.$store.state.store.noimg,setTimeout((()=>{this.show=!0}),this.$store.state.store.pretime),navigator.onLine,setTimeout((()=>this.loadings()),3200)},computed:r()(r()({},Object(c["e"])("store",["userDetails"])),{},{other(){return this.$store.state.store.amigos[this.$store.state.store.otherId]}}),methods:r()(r()(r()(r()({},Object(c["b"])("store",["logoutUser"])),Object(c["b"])("store_friends",["clearFriend","clearMessages"])),Object(c["d"])("store",["cambiarOpcion","loadings"])),{},{LLamar(){this.$router.push("/video")}}),components:{Minfo:a("c282").default}},l=n,m=(a("322a"),a("2877")),p=a("4d5a"),u=a("58ea"),d=a("cb32"),b=a("e359"),h=a("65c6"),g=a("9c40"),v=a("f20b"),f=a("1c1c"),q=a("66e5"),x=a("4074"),w=a("0170"),_=a("0016"),k=a("09e3"),C=a("429b"),Q=a("7460"),y=a("24e8"),L=a("7f67"),$=a("eebe"),S=a.n($),j=Object(m["a"])(l,s,o,!1,null,null,null);e["default"]=j.exports;S()(j,"components",{QLayout:p["a"],QCircularProgress:u["a"],QAvatar:d["a"],QHeader:b["a"],QToolbar:h["a"],QBtn:g["a"],QBtnDropdown:v["a"],QList:f["a"],QItem:q["a"],QItemSection:x["a"],QItemLabel:w["a"],QIcon:_["a"],QPageContainer:k["a"],QTabs:C["a"],QTab:Q["a"],QDialog:y["a"]}),S()(j,"directives",{ClosePopup:L["a"]})},8022:function(t,e,a){"use strict";var s=a("dbfd"),o=a.n(s);o.a},c282:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"text-weight-bold",staticStyle:{"max-height":"300px","min-width":"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Acerca de el autor")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("p",{staticClass:"text-center"},[t._v(" App de red social multiplataforma creado por Ignacio Labra ")]),a("p",{staticClass:"text-center"},[t._v(" Visita mi "),a("a",{attrs:{href:"https://nacholabraweb.000webhostapp.com",id:"a"}},[t._v(" página web ")]),t._v("\n      o escribeme un correo a "),a("a",{attrs:{href:"mailto:naxorojas25@gmail.com",id:"a"}},[t._v(" naxorojas25@gmail.com ")])]),a("p",{staticClass:"text-center"},[a("q-img",{staticStyle:{width:"2.5em"},attrs:{src:"firebase.png"}}),a("q-img",{staticStyle:{width:"2.5em"},attrs:{src:"vue.png"}}),a("q-img",{staticStyle:{width:"2.5em"},attrs:{src:"quasar-logo.svg"}})],1),a("p",{staticClass:"text-right"},[t._v(t._s(t.$store.state.store.V)),a("br")])])],1)},o=[],i={computed:{style(){return{height:.5*this.$q.screen.height+"px"}}}},r=i,c=(a("8022"),a("2877")),n=a("f09f"),l=a("a370"),m=a("068f"),p=a("eebe"),u=a.n(p),d=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=d.exports;u()(d,"components",{QCard:n["a"],QCardSection:l["a"],QImg:m["a"]})},dbfd:function(t,e,a){}}]);