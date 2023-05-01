"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[166],{41888:function(t,e,n){n.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}]},"div",Object.assign({},t.$attrs.class),!1),[t._t("default")],2)},s=[],o={name:"SwitchingTab",props:{title:{default:"",type:String}},data(){return{active:!1}}},i=o,a=n(1001),l=(0,a.Z)(i,r,s,!1,null,null,null),c=l.exports},33157:function(t,e,n){n.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({},"div",Object.assign({},t.$attrs.class),!1),[t.tabs.length>1?n("div",{staticClass:"flex flex-row justify-between mb-6 mt-2"},[n("div",t._l(t.tabs,(function(e,r){var s;return n("button",{key:e.title,staticClass:"px-4 py-2 text-xs",class:(s={"bg-dark-N16 text-white font-semibold tracking-wider rounded-full":r===t.selected,"text-dark-N77 font-semibold tracking-wider rounded-full":r!==t.selected},s["t-tabs-tab_"+e.title+"_select"]=!0,s),on:{click:function(e){return t.selectTab(r)}}},[t._v(" "+t._s(e.title)+" ")])})),0),n("div",[t.settingsLink&&t.isAssetList?n("button",{staticClass:"cursor-pointer px-4 py-2 t-asset-settings text-brand-primary text-sm",attrs:{type:"button"},on:{click:function(e){return t.$emit("showAssetSettingsDialog")}}},[t._v(" "+t._s(t.settingsLink)+" ")]):t._e()])]):t._e(),t._t("default")],2)},s=[],o={name:"SwitchingTabs",props:{settingsLink:{default:"",type:String}},data(){return{isAssetList:!0,selected:0,tabs:[]}},created(){this.tabs=this.$children},mounted(){this.selectTab(0)},methods:{selectTab(t){this.selected=t,this.tabs.forEach(((e,n)=>{e.active=n===t,this.isAssetList=0===t})),this.$emit("selected",t)}}},i=o,a=n(1001),l=(0,a.Z)(i,r,s,!1,null,null,null),c=l.exports},44190:function(t,e,n){n.d(e,{Z:function(){return k}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-tokens-list flex flex-col flex-grow"},[r("div",{staticClass:"flex items-center justify-between"},[r("h6",{staticClass:"my-5 text-brand-primary text-sm"},[t._v(t._s(t.$t("general.customTokens")))]),t.addTokenCutoff?r("button",{staticClass:"border-2 border-brand-primary h-6 rounded-full w-6",attrs:{type:"button"},on:{click:t.goToAddToken}},[r("img",{attrs:{src:n(23189)}})]):t._e()]),t._l(t.tokens,(function(e){return r("div",{key:e.contract.contract,staticClass:"bg-dark-item flex items-center justify-between mb-3 px-4.5 py-4 rounded-lg w-full"},[r("div",{staticClass:"bg-gray mr-4 p-3 rounded-full"},[r("img",{staticClass:"w-5",attrs:{src:t.tokenIconUrl(e)}})]),r("div",{staticClass:"flex-grow font-semibold"},[r("div",[t._v(t._s(e.contract.name))]),r("div",{staticClass:"flex items-center text-dark-N77 text-xs"},[r("span",[t._v(t._s(e.contract.symbol))]),r("chain-badge",{staticClass:"text-2xs",attrs:{chain:e.chain}})],1)]),r("div",{staticClass:"flex"},[r("button",{staticClass:"h-6 mr-6 w-6",attrs:{type:"button"},on:{click:function(n){return t.editToken(e)}}},[r("i",{staticClass:"icon-cog text-dark-N77"})]),r("button",{attrs:{type:"button"},on:{click:function(n){return t.confirmTokenDelete(e)}}},[r("i",{staticClass:"icon-delete text-brand-primary"})])])])})),t.tokens.length?t._e():r("div",{staticClass:"flex flex-col flex-grow items-center justify-center text-dark-N77"},[r("img",{staticClass:"mb-5",attrs:{src:n(1593)}}),r("span",[t._v(t._s(t.$t("components.customTokensList.emptyTokensInfo")))]),t.addTokenCutoff?r("i18n",{staticClass:"mt-5",attrs:{path:"components.customTokensList.emptyListAdd",tag:"p"},scopedSlots:t._u([{key:"button",fn:function(){return[r("button",{staticClass:"align-middle border-2 border-brand-primary h-6 mx-1 rounded-full w-6",attrs:{type:"button"},on:{click:t.goToAddToken}},[r("img",{attrs:{src:n(23189)}})])]},proxy:!0}],null,!1,772322524)}):t._e()],1),r("multi-purpose-popup",{ref:"tokenPopup"})],2)},s=[],o=(n(57658),n(2714)),i=n(35210),a=n(83437),l=n(43941),c=n(20144),u=n(29652),h=n(25108),p=c.Z.extend({name:"CustomTokensList",components:{ChainBadge:a.Z,MultiPurposePopup:l.Z},props:{addTokenCutoff:{default:!1,type:Boolean},chain:{default:null,type:Object},onlyEnabled:{default:!1,type:Boolean}},computed:{tokenPopup(){return this.$refs.tokenPopup},tokens(){return this.chain?this.$store.getters.getAllTokensForChain(this.chain,o.i.FUNGIBLE):this.getTokensForAllChains()}},methods:{confirmTokenDelete(t){const{name:e}=t;this.tokenPopup.show({cancelButtonTitle:this.$t("general.cancel"),description:this.$t("views.networksView.deleteTokenPopupDescription",{tokenName:e}),popupType:"confirm",title:this.$t("views.networksView.deleteTokenPopupTitle")}),this.tokenPopup.$once("popupConfirmed",(()=>this.deleteCustomToken(t)))},async deleteCustomToken(t){const{contract:e,chain:n}=t,r=this.tokenPopup,s=e.name;r.show({description:this.$t("components.popovers.savingChanges"),popupType:"loader"}),await this.$store.dispatch("removeCustomToken",{address:e.contract,chain:n}).then((()=>{r.show({popupType:"success",title:this.$t("general.success")})})).catch((t=>{h.error(`Something went wrong during token ${s} delete:`,t),this.$errorReporter.reportError(t,{extraData:{tokenAddress:e,tokenName:s}}),r.show({description:this.$t("errors.generic.somethingWentWrong"),popupType:"error"})}))},editToken({chain:t,contract:e}){const n={address:e.contract,chain:t,decimals:e.decimals,name:e.name,symbol:e.symbol};this.$router.push({name:"TokenDetails",params:{token:n}})},encodeChainUi:i.sJ,getTokensForAllChains(){const{isChainEnabled:t}=this.$store.getters;let e=this.$store.getters.customNetworks.map((t=>t.chain));return this.onlyEnabled&&(e=e.filter((e=>t(e)))),e.reduce(((t,e)=>{const n=this.$store.getters.getAllTokensForChain(e,o.i.FUNGIBLE);return[...t,...n]}),[])},goToAddToken(){const{customNetworks:t,isNetworkEnabled:e}=this.$store.getters,n=t.filter((t=>e(t)));if(n.length){const[t]=n;this.$router.push({name:"AddToken",params:{chain:t.chain}})}else{const t=this.tokenPopup;t.show({cancelButtonTitle:this.$t("general.cancel"),confirmButtonTitle:this.$t("views.networksView.addNetwork"),description:this.$t("views.networksView.addNetworkPopupDescription"),popupType:"confirm",title:this.$t("views.networksView.addNetworkPopupTitle")}),t.$once("popupConfirmed",(()=>this.$router.push({name:"AddNetwork"})))}},tokenIconUrl(t){if(!t||!t.chain)return"";const{tokenIconUrl:e}=(0,u.Z)(t.chain);return e?e(""):""}}}),d=p,m=n(1001),f=(0,m.Z)(d,r,s,!1,null,null,null),k=f.exports},95166:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col network-details-view px-14 relative"},[n("top-bar",{staticClass:"-mx-14",attrs:{title:t.chainInfo&&t.chainInfo.name},scopedSlots:t._u([{key:"action",fn:function(){return[n("button",{attrs:{type:"button"},on:{click:t.removeCustomChain}},[n("i",{staticClass:"font-normal icon-delete text-brand-primary"})])]},proxy:!0}])}),n("switching-tabs",{staticClass:"flex flex-col flex-grow"},[n("switching-tab",{staticClass:"flex flex-col flex-grow",attrs:{title:t.$t("general.tokens")}},[n("custom-tokens-list",{staticClass:"flex flex-col flex-grow",attrs:{chain:t.chain}}),n("outlined-button",{staticClass:"mb-10 w-full",attrs:{title:t.$t("views.networksView.addToken")},on:{click:t.goToAddToken}})],1),n("switching-tab",{staticClass:"flex flex-col flex-grow",attrs:{title:t.$t("general.network")}},[n("network-form",{attrs:{"network-details":t.chainInfo},on:{networkFormCancelled:t.chainUpdateCancelled,networkFormConfirmed:t.chainUpdateConfirmed}})],1)],1),n("multi-purpose-popup",{ref:"networkPopup"})],1)},s=[],o=(n(57658),n(2714)),i=n(35210),a=n(44190),l=n(43941),c=n(53103),u=n(89504),h=n(41888),p=n(33157),d=n(75619),m=n(20144),f=n(59436),k=n(25108),w=m.Z.extend({name:"NetworkDetails",components:{CustomTokensList:a.Z,MultiPurposePopup:l.Z,NetworkForm:c.Z,OutlinedButton:u.Z,SwitchingTab:h.Z,SwitchingTabs:p.Z,TopBar:d.Z},data(){return{chainInfo:null}},computed:{chain(){const{chain:t}=this.$route.query;return t?JSON.parse(t):null},networkPopup(){return this.$refs.networkPopup}},mounted(){this.setUpChainInfo()},methods:{back(){this.$router.back()},async chainPostRemove(){await this.$store.dispatch("removeChainTokens",this.chain)},chainUpdateCancelled(){this.$router.back()},async chainUpdateConfirmed(t){const e={...this.chain,chainId:t.chainId},n={blockExplorerUrl:t.blockExplorerUrl,chain:e,chainName:t.name,nativeCurrency:{chain:e,symbol:t.symbol},rpcUrls:[t.rpcUrl]},r=this.networkPopup;this.showLoader(),await this.$store.dispatch("updateCustomChain",n).then((t=>{if(!t)return Promise.reject(new Error("Unknown error"));this.updateNativeCurrency(e),this.showSuccess(),r.$once("popupConfirmed",this.back)})).catch((e=>{k.error(`Error during custom chain update ${t.name}: ${e}`),this.$errorReporter.reportError(e,{extraData:{chain:n.chain,chainName:n.chainName}}),this.showError()}))},goToAddToken(){const{chain:t}=this;this.$router.push({name:"AddToken",query:{chain:JSON.stringify(t)}})},removeCustomChain(){const t=this.networkPopup;t.show({cancelButtonTitle:this.$t("general.cancel"),description:this.$t("views.networksView.deleteNetworkPopupDescription",{networkName:this.chainInfo&&this.chainInfo.name}),popupType:"confirm",title:this.$t("views.networksView.deleteNetworkPopupTitle")}),t.$once("popupConfirmed",this.removeCustomChainConfirmed)},async removeCustomChainConfirmed(){const{chain:t,chainInfo:e}=this,{name:n=""}=e,r=this.networkPopup;this.showLoader(),await this.$store.dispatch("removeCustomChain",t).then((t=>{if(!t)return Promise.reject(new Error("Unknown error"));this.chainPostRemove(),this.showSuccess(),r.$once("popupConfirmed",this.back)})).catch((e=>{k.error(`Error during custom network ${n} remove: ${e}`),this.$errorReporter.reportError(e,{extraData:{chain:t}}),this.showError()}))},async setUpChainInfo(){const{chain:t}=this;if(t){const e=await f.Z.getChains().then((e=>e.find((e=>(0,i.F2)(e.chain,t)))));if(e){const[t=""]=e.rpcUrls;this.chainInfo={blockExplorerUrl:e.blockExplorerUrls&&e.blockExplorerUrls[0]||"",chainId:e.chain.chainId,name:e.chainName,rpcUrl:t,symbol:e.nativeCurrency?.symbol??""}}}},showError(t){const e=this.networkPopup;e.show({description:t||this.$t("errors.generic.somethingWentWrong"),popupType:"error"})},showLoader(){const t=this.networkPopup;t.show({description:this.$t("components.popovers.savingChanges"),popupType:"loader"})},showSuccess(){const t=this.networkPopup;t.show({popupType:"success",title:this.$t("general.success")})},async updateNativeCurrency(t){await this.$store.dispatch("removeChainTokens",t),await this.$store.dispatch("getTokensForChain",{chain:t,type:o.i.NATIVE})}}}),b=w,g=n(1001),C=(0,g.Z)(b,r,s,!1,null,null,null),v=C.exports},53103:function(t,e,n){n.d(e,{Z:function(){return f}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col flex-grow network-form"},[t._l(t.formFieldsConfig,(function(e){return n("opera-input",t._b({key:"network-form-field-"+e.name,staticClass:"mb-8",attrs:{disabled:e.disabled,label:e.label,name:e.name,optional:e.optional,placeholder:e.label},on:{input:t.validate},model:{value:t.network[e.name],callback:function(n){t.$set(t.network,e.name,n)},expression:"network[field.name]"}},"opera-input",Object.assign({},t.showError(e.name)),!1))})),n("div",{staticClass:"flex-grow"}),n("div",{staticClass:"flex justify-between mb-10"},[n("outlined-button",{staticClass:"w-44",attrs:{title:t.$t("general.cancel")},on:{click:t.cancelNetworkForm}}),n("primary-button",{staticClass:"w-44",attrs:{disabled:t.formInvalid,title:t.$t("general."+(t.networkUpdate?"save":"add"))},on:{click:t.confirmNetworkForm}})],1)],2)},s=[],o=n(85512),i=n(70794),a=n(17482),l=n(89504),c=n(68461),u=n(20144),h=u.Z.extend({name:"NetworkForm",components:{OperaInput:a.Z,OutlinedButton:l.Z,PrimaryButton:c.Z},props:{networkDetails:{default:null,type:Object}},data(){return{error:{},formInvalid:!1,network:{blockExplorerUrl:"",chainId:null,name:"",rpcUrl:"",symbol:""}}},computed:{existingNetworks(){return this.$store.getters.allNetworks},formFieldsConfig(){return[{label:this.$t("general.networkName"),name:"name"},{label:this.$t("general.rpcUrl"),name:"rpcUrl"},{disabled:this.networkUpdate,label:this.$t("general.chainId"),name:"chainId"},{label:this.$t("general.symbol"),name:"symbol",optional:!0},{label:this.$t("general.blockExplorerUrl"),name:"blockExplorerUrl",optional:!0}]},networkFormFields(){const{$children:t}=this;return t.filter((({$options:t})=>t._componentTag.includes("opera-input")))},networkUpdate(){return null!==this.networkDetails}},watch:{error:{deep:!0,handler(t){this.formInvalid=!!Object.values(t).length}},networkDetails:{deep:!0,handler(t){t&&this.setInitialValues()}}},methods:{cancelNetworkForm(){this.$emit("networkFormCancelled")},confirmNetworkForm(){if(this.validateAll()){const{network:t}=this;t.chainId=new i.Z(t.chainId).toNumber(),this.$emit("networkFormConfirmed",t)}},setInitialValues(){this.network={...this.networkDetails}},showError(t){return t in this.error?{error:this.error[t],icon:"icon-error"}:null},validate(t,e){const{target:n}=e,{name:r}=n;let s={...this.error};const o=this.validator(r,t);o.fieldIsValid?delete s[r]:s=Object.assign({},s,{[r]:o.message}),this.error=s},validateAll(){const t={},e=this.networkFormFields;return e.forEach((({name:e,value:n})=>{const r=this.validator(e,n);r.fieldIsValid||(t[e]=r.message)})),this.error=t,!Object.entries(this.error).length},validator(t,e){let n,r,s=!0;const i=t=>this.$t("errors.generic.incorrectField",{fieldName:t});switch(t){case"name":s=!!e,n=i(this.$t("general.networkName"));break;case"rpcUrl":s=o.wC(e),n=i(this.$t("general.rpcUrl"));break;case"chainId":if(s=o.JW(e),!this.networkUpdate&&(r=this.existingNetworks.find((({chain:t})=>t.chainId===Number.parseInt(e))),r)){s=!1,n=this.$t("errors.networkAlreadyExists",{networkName:r.name});break}n=i(this.$t("general.chainId"));break;case"symbol":s=!e||!!e&&o.HA(e),n=i(this.$t("general.symbol"));break;case"blockExplorerUrl":s=!e||!!e&&o.Ff(e),n=i(this.$t("general.blockExplorerUrl"));break;default:s=!0,n=""}return{fieldIsValid:s,message:n}}}}),p=h,d=n(1001),m=(0,d.Z)(p,r,s,!1,null,null,null),f=m.exports},85512:function(t,e,n){n.d(e,{Ff:function(){return d},HA:function(){return p},JW:function(){return u},Ze:function(){return h},wC:function(){return c},xP:function(){return a}});var r=n(70794),s=n(38531),o=n.n(s);function i(t){return(0,r.Z)(t)}function a(t){return i(t).isPositive()}function l(t){return/^(https?):\/\/.+$/.test(t)}function c(t){return/^(|wss?):\/\/.+$/.test(t)||l(t)}function u(t){const e=i(t);return e.isInteger()&&e.isPositive()}function h(t){return o().validate(t,"ETH")}function p(t){return/^[a-zA-Z]+$/.test(t)}function d(t){return l(t)}},1593:function(t,e,n){t.exports=n.p+"img/empty_tokens.b24c5f8a.svg"},23189:function(t,e,n){t.exports=n.p+"img/plus.78985561.svg"}}]);