(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[604],{12393:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"backdrop-blur-2xl bg-dark-N16 cursor-pointer fixed h-14 right-6 rounded-full transition-opacity w-14",style:{opacity:e.showBackToTopOpacity,bottom:e.showBackToTopBottom+"px"},on:{click:function(t){return t.stopPropagation(),e.scrollToTop.apply(null,arguments)}}},[a("img",{staticClass:"mx-auto",style:{marginTop:"23px"},attrs:{src:s(80779)}})])},i=[];const n=22,o=56,r=window.innerHeight;var l={name:"BackToTop",data(){return{showBackToTopBottom:-o,showBackToTopOpacity:0}},computed:{scrollableEl(){return this.$el.parentElement}},beforeUnmount(){this.scrollableEl.removeEventListener("scroll",this.onScroll)},mounted(){this.scrollableEl.addEventListener("scroll",this.onScroll)},methods:{onScroll(e){const t=r,{scrollTop:s}=e.target,a=s-t;if(a>0){this.showBackToTopOpacity=1;let e=-o+a;e>n&&(e=n),this.showBackToTopBottom=e}else this.showBackToTopOpacity=0},scrollToTop(){this.scrollableEl.scrollTo(0,0)}}},c=l,p=s(1001),u=(0,p.Z)(c,a,i,!1,null,null,null),d=u.exports},52020:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inline"},[a("img",{ref:"icon",staticClass:"h-4 inline-block mb-1 mx-2 w-4",attrs:{src:s(10442)("./help_"+e.iconColor+".svg")},on:{mouseout:e.hide,mouseover:e.show}}),e.display?a("div",{staticClass:"absolute z-10",class:[e.inset]},[a("div",{staticClass:"m-4 mt-1 transition-opacity",class:[e.opacityClass]},[a("div",{staticClass:"bg-dark-N16 h-4 rotate-45 rounded-sm w-4",style:{marginLeft:e.offsetLeft+"px"}}),a("div",{staticClass:"-mt-2 bg-dark-N16 font-semibold leading-5 px-6 py-5 rounded-lg shadow-md text-dark-N77 text-sm",class:[e.contentMargin]},[e._t("default")],2)])]):e._e()])},i=[],n=s(20144),o=n.Z.extend({name:"OperaExplainIcon",props:{contentMargin:{default:"",type:String},iconColor:{default:"gray",type:String},inset:{default:"",type:String}},data(){return{display:!1,offsetLeft:0,opacityClass:"opacity-0"}},watch:{display(){this.adjustCaretMargin()}},methods:{adjustCaretMargin(){const e=this.$refs.icon;if(e){const t=16,s=e.offsetLeft-t;this.$nextTick((()=>{this.offsetLeft=s}))}},hide(){const e=100;setTimeout((()=>{this.display=!1}),e),this.opacityClass="opacity-0"},show(){this.opacityClass="opacity-100",this.display=!0}}}),r=o,l=s(1001),c=(0,l.Z)(r,a,i,!1,null,null,null),p=c.exports},94232:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex items-center justify-center relative"},[s("input",{staticClass:"absolute appearance-none bg-white block border-4 h-6 rounded-full toggle-checkbox w-6",class:e.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{name:"toggle",type:"checkbox"},domProps:{checked:e.checked}}),s("label",{staticClass:"flex h-6 relative select-none w-12",class:e.disabled?"cursor-not-allowed":"cursor-pointer",attrs:{for:"toggle"}},[s("span",{staticClass:"absolute h-full left-0 rounded-full top-0 w-full",class:{"bg-accent":e.checked,"bg-dark-N20":!e.checked}}),s("span",{staticClass:"absolute bg-white border-2 duration-300 ease-in-out flex h-6 items-center justify-center rounded-full transition-transform w-6",class:{"right-0":e.checked,"border-accent":e.checked,"border-dark-N20":!e.checked}})])])},i=[],n={name:"OperaToggle",props:{checked:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean}}},o=n,r=s(1001),l=(0,r.Z)(o,a,i,!1,null,null,null),c=l.exports},58604:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col justify-between tracking-wide"},[s("div",[s("top-bar",{attrs:{"back-override":e.back,"test-parent-name":"settings_view",title:e.$t("general.settings")}}),s("div",{staticClass:"mx-8 my-5"},[s("div",{staticClass:"flex flex-wrap gap-2 ml-1"},e._l(e.options,(function(t){return s("li",{key:t.key,staticClass:"bg-dark-N77 bg-opacity-5 cursor-pointer flex hover:bg-opacity-10 py-4 rounded-xl",class:["t-settings_view-options-"+t.key,"tile"===t.type?"px-2":"px-5",t.addClass,e.settingsItemClass(t.type).item],on:{click:function(s){return e.clickItem(t)}}},[s("div",{staticClass:"flex flex-wrap items-center",class:[e.settingsItemClass(t.type).wrapper]},[s("img",{class:[t.iconAddClass,e.settingsItemClass(t.type).image],attrs:{src:t.icon}}),s("span",[e._v(e._s(e.$t(t.title)))]),"tile"!==t.type?s("div",{staticClass:"flex-grow"}):e._e(),t.addInfo?s("span",{staticClass:"font-semibold pl-2 text-brand-primary text-sm"},[e._v(" "+e._s(e.$t(t.addInfo))+" ")]):e._e(),"activate"===t.type?s("opera-explain-icon",{staticClass:"-mr-2",attrs:{"content-margin":"ml-32",inset:"right-4"}},[s("p",{staticClass:"whitespace-pre-line"},[e._v(" "+e._s(e.$t("cashback.cashbackLinkInfo"))+" ")])]):e._e()],1),s("div",{staticClass:"flex-grow"}),"toggle"===t.type?s("opera-toggle",{attrs:{checked:t.checked}}):e._e()],1)})),0)]),s("language-select-dialog",{ref:"langDialog"}),s("multi-purpose-popup",{ref:"signOutPopup"}),s("div",e._l(e.links,(function(t){return s("li",{key:t.key,staticClass:"flex flex-col font-semibold mx-8 p-4",class:["t-settings_view-links-"+t.key,t.addClass]},[s("p",{staticClass:"cursor-pointer",on:{click:function(s){return e.clickItem(t)}}},[e._v(e._s(e.$t(t.title)))]),t.helperText?s("p",{staticClass:"font-normal mt-1.5 text-dark-N77 text-xs tracking-[-0.005em]"},[e._v(" "+e._s(e.$t(t.helperText))+" ")]):e._e()])})),0)],1),s("footer",{staticClass:"pb-12 px-12 text-dark-N77 w-full"},[s("p",{staticClass:"pb-4 text-base"},[e._v(e._s(e.$t("general.version"))+" "+e._s(e.walletVersion))]),s("p",{staticClass:"text-xs"},[s("span",[e._v(" "+e._s(e.$t("termsOfService.walletProvider")+" "+e.$t("termsOfService.byProceeding"))+" ")]),s("a",{staticClass:"t-welcome_view-tos text-spectrum-blue underline",attrs:{href:"https://www.opera.com/terms/crypto",rel:"noopener noreferrer",target:"_blank"},on:{click:e.termsOfServiceClick}},[e._v(" "+e._s(e.$t("termsOfService.termsOfService"))+" ")])])])])},i=[],n=(s(57658),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.showing,expression:"showing"}],staticClass:"bg-background bottom-0 fixed left-0 overflow-y-scroll pb-20 right-0 top-0 z-30"},[s("top-bar",{attrs:{"emit-back":"","test-parent-name":"language_select_dialog",title:e.$t("general.language")},on:{back:function(t){e.showing=!1}}}),s("div",{staticClass:"px-4 py-4"},[s("opera-input",{staticClass:"t-language_select_dialog-search",attrs:{placeholder:e.$t("general.search"),"prepend-icon":"icon-search text-brand-primary text-opacity-40",type:"search",value:e.search},on:{input:e.updateSearch}})],1),s("ul",{staticClass:"px-4 py-4"},e._l(e.languagesList,(function(t){return s("li",{key:t.value,staticClass:"bg-dark-N16 border border-opacity-10 cursor-pointer flex items-center mb-2 px-4 py-3 rounded-lg",class:["t-language_select_dialog-"+t.value,{"border-brand-primary border-opacity-100":e.currentLang===t.value,"border-black":e.currentLang!==t.value}],on:{click:function(s){return e.switchLanguage(t)}}},[s("span",[e._v(e._s(t.label))])])})),0),s("back-to-top")],1)}),o=[],r=s(12393),l=s(17482),c=s(56258),p=s(75619),u=s(39474),d={name:"LanguageSelectDialog",components:{BackToTop:r.Z,OperaInput:l.Z,TopBar:p.Z},data(){return{currentLang:this.$i18n.locale,loading:!1,search:"",showing:!1}},computed:{languages(){return Object.entries(this.$i18n.messages).sort(((e,t)=>e[1].nativeName.localeCompare(t[1].nativeName))).map((e=>{const t=e[1].nativeName,[s]=e;return{label:t,value:s}})).filter((e=>e.value.includes("-"))).filter((e=>!("Español (Latinoamericano)"===e.label&&"es-419"!==e.value)))},languagesList(){return this.languages.filter((e=>e.label.toLowerCase().includes(this.search.toLowerCase())))}},methods:{finishLanguageSwitch(){this.$router.push("/"),setTimeout((()=>window.location.reload()))},show(){this.showing=!0},switchLanguage(e){c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_set_lang",{language:e.value}),u.Z.setItem("locale",e.value),this.$i18n.locale=e.value,this.finishLanguageSwitch()},updateSearch(e){this.search=e}}},h=d,g=s(1001),f=(0,g.Z)(h,n,o,!1,null,null,null),m=f.exports,w=s(43941),k=s(52020),v=s(94232),y=s(20144),b=y.Z.extend({name:"SettingsView",components:{LanguageSelectDialog:m,MultiPurposePopup:w.Z,OperaExplainIcon:k.Z,OperaToggle:v.Z,TopBar:p.Z},computed:{cashbackActive(){return this.$store.getters.isOperaServiceActive("cashback")},cashbackAvailable(){return this.$store.getters.isOperaServiceAvailable("cashback")},links(){return[{click:()=>window.open("https://opera.atlassian.net/servicedesk/customer/portal/20"),key:"support",stats:"wt_set_support",title:"general.support"},{click:()=>this.$router.push("/licenses"),key:"licenses",title:"general.thirdPartyLicenses"},{addClass:"text-red",click:()=>this.showSignOutPopup(),helperText:"views.settingsView.settingsWillBeReset",key:"signout",stats:"wt_set_signout",title:"general.signOut"}]},options(){return[{click:()=>this.$router.push("/networks"),icon:s(30795),key:"network",title:"general.networksAndTokens",type:"tile"},{click:()=>this.showRecovery(),icon:s(79679),key:"backup",title:"general.backupPhrase",type:"tile"},{addInfo:this.$store.getters.fioHandle()?"":"fio.freeRegistration",click:async()=>await this.showFio(),icon:s(18202),iconAddClass:this.$store.getters.isLoading("fio")?"animate-pulse":"",key:"fio",title:"general.fioHandle",type:"tile"},{click:()=>window.open("https://opr.as/eip2"),hidden:!this.$store.getters.showRegisterOperaDomainOption,icon:s(12126),key:"ud",title:"general.registerOperaUd",type:"tile"},{click:()=>this.showLangDialog(),icon:s(33687),key:"language",title:"general.language",type:"tile"},{click:()=>this.$router.push("/restore"),hidden:!0,icon:s(14964),key:"importWallet",stats:"wt_set_import",title:"general.importWallet",type:"tile"},{addClass:"mt-6 w-full self-center text-base font-semibold text-left",checked:this.$store.getters.showNews,click:async()=>{const{showNews:e}=this.$store.getters,{options:t,$store:s}=this,a=t.find((e=>"news"===e.key));await s.dispatch("setShowNews",e?"off":"on"),a.checked=e},icon:s(58893),key:"news",title:"general.showCryptoFeeds",type:"toggle"},{addClass:"mb-4 "+(this.cashbackActive?"":"text-dark-N77"),addInfo:this.cashbackActive?"":"general.activate",click:()=>this.$router.push("/cashback-onboarding"),hidden:!this.cashbackAvailable,icon:s(11264),key:"cashback",title:this.cashbackActive?"cashback.cashbackActive":"cashback.cashback",type:"activate"}].filter((e=>!e.hidden))},walletVersion(){return window.chrome.runtime.getManifest().version}},async mounted(){c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_setting_btn"),await this.prepareFioOption(),await this.$store.dispatch("getOperaDomainRegistrationStatus")},methods:{back(){this.$router.push({name:"Overview"})},clickItem(e){e.stats&&c.Z.sendStatsEvent(c.Z.types.CLICK,e.stats),e.click()},logOut(){this.$wallet.unload(),window.location.reload()},async prepareFioOption(){const{dispatch:e,getters:t}=this.$store;t.getTimesLoaded({fio:"handles"})||await e("fetchFioHandles")},settingsItemClass(e){const t={image:"h-6 w-6 mr-4",item:"w-full",wrapper:"w-full text-left justify-between"},s={image:"h-8 w-8 mx-10",item:"h-32 w-32 text-xs",wrapper:"text-center justify-center"};return["toggle","activate"].includes(e)?t:"tile"===e?s:{image:"",item:"",wrapper:""}},async showFio(){const{getters:e}=this.$store;if(e.isLoading("fio.handles"))return;const t=e.fioHandle();t?this.$router.push({name:"FioConnect",query:{handle:t}}):this.$router.push({name:"FioRegister",params:{successOverride:async()=>{await this.$store.dispatch("fetchFioHandles"),this.$router.push({name:"Settings"})}},query:{hasOperaDomain:"false"}})},showLangDialog(){const e=this.$refs.langDialog;e.show()},showRecovery(){this.$router.push({name:"BackupRevealWarning"})},showSignOutPopup(){const e=this.$refs.signOutPopup;e.show({cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("general.confirm"),description:this.$t("views.settingsView.signOutWarning"),popupType:"confirm",title:this.$t("views.settingsView.signOut?")}),e.$once("popupConfirmed",this.logOut)},termsOfServiceClick(){c.Z.sendStatsEvent(c.Z.types.CLICK,"wt_set_term")}}}),x=b,_=(0,g.Z)(x,a,i,!1,null,null,null),C=_.exports},10442:function(e,t,s){var a={"./help_cyan.svg":32375,"./help_gray.svg":87980,"./help_outlined.svg":22470,"./help_outlined_gray.svg":56391};function i(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id=10442},80779:function(e,t,s){"use strict";e.exports=s.p+"img/chevron_up.dbe760c6.svg"},22470:function(e,t,s){"use strict";e.exports=s.p+"img/help_outlined.5c627a61.svg"},11264:function(e,t,s){"use strict";e.exports=s.p+"img/opera_token_icon.f6b3d773.svg"},58893:function(e,t,s){"use strict";e.exports=s.p+"img/cc.49f11350.svg"},18202:function(e,t,s){"use strict";e.exports=s.p+"img/fio_handle.556d7a37.svg"},14964:function(e,t,s){"use strict";e.exports=s.p+"img/import_wallet.7d5b319f.svg"},33687:function(e,t,s){"use strict";e.exports=s.p+"img/language.f322e296.svg"},30795:function(e,t,s){"use strict";e.exports=s.p+"img/network.1c87a745.svg"},79679:function(e,t,s){"use strict";e.exports=s.p+"img/phrase.e43287b7.svg"},12126:function(e,t,s){"use strict";e.exports=s.p+"img/ud.9105cef7.svg"}}]);