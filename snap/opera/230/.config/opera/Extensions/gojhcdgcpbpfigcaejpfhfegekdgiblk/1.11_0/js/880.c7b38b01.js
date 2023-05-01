"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[880],{90571:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col tracking-wide"},[s("top-bar",{attrs:{"test-parent-name":"buy_view",title:t.$t("general.buy")}}),s("div",{staticClass:"mt-5 mx-14",class:[{"overflow-hidden":t.isSelectingToken}]},[s("div",{staticClass:"mb-8 text-white"},[t._v(t._s(t.$t("views.buyView.buyDescription")))]),s("div",{staticClass:"mb-4 text-grey-D text-lg"},[t._v(t._s(t.$t("general.asset")))]),s("div",{staticClass:"flex items-center justify-center mb-12"},[s("asset-selector",{ref:"assetSelector",attrs:{options:t.buyableTokens},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1),s("div",{staticClass:"mb-4 text-grey-D text-lg"},[t._v(t._s(t.$t("general.serviceProvider")))]),t._l(t.promos.filter((function(t){return!t.hidden})),(function(e){return s("li",{key:e.key,staticClass:"bg-dark-N16 list-none mb-8 px-8 py-6 rounded-md",class:e.addClass},[s("img",{staticClass:"-ml-2 mr-6",attrs:{src:e.icon}}),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"font-semibold mt-4 tracking-wider"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"font-light mt-2 text-dark-N77 tracking-normal"},[s("i18n",{attrs:{path:"views.buyView.buyWithDescription",tag:"span"},scopedSlots:t._u([{key:"platform",fn:function(){return[s("span",[t._v(t._s(e.platform))])]},proxy:!0},{key:"here",fn:function(){return[s("a",{staticClass:"underline",attrs:{href:e.infoLink,rel:"noopener noreferrer",target:"_blank"}},[t._v(" "+t._s(t.$t("general.here").toLocaleLowerCase(t.$i18n.locale))+" ")])]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"flex flex-center mt-6"},[s("div",{staticClass:"flex-1"}),s("div",{staticClass:"t-buy_view-click",on:{click:function(s){return t.clickItem(e)}}},[s("primary-button",{staticClass:"flex-1 t-buy_view-action whitespace-nowrap",attrs:{title:e.action}})],1),s("div",{staticClass:"flex-1"})]),e.supportLink?s("div",{staticClass:"font-semibold mt-2 text-center text-dark-N77 text-xs underline"},[s("a",{staticClass:"t-buy_view-contact",attrs:{href:e.supportLink,rel:"noopener noreferrer",target:"_blank"}},[t._v(" "+t._s(t.$t("general.support"))+" ")])]):t._e()])])}))],2)],1)},i=[],o=s(7565),a=s(68461),r=s(56258),c=s(75619),l={name:"BuyView",components:{AssetSelector:o.Z,PrimaryButton:a.Z,TopBar:c.Z},data(){return{isSelectingToken:!1,token:this.setDefaultBuyableToken()}},computed:{address(){return this.$store.getters.accountsByCoinType[this.coinType]},buyableTokens(){return this.$store.getters.buyableTokens},chain(){return this.token.chain},coinType(){return this.token.chain.coinType},isBinanceBuyable(){return this.$store.getters.isBinanceBuyable(this.token)},isMoonPayBuyable(){return this.$store.getters.isMoonpayBuyable(this.token)},name(){return this.token.contract.name},promos(){const t=this.receivingAddress,e=this.$store.getters.productBuy,{symbol:n,symbolAliases:i}=this.token.contract;return[{action:this.$t("views.buyView.buyWithContinue",{platform:"Binance Connect"}),hidden:!this.isBinanceBuyable,icon:s(80818),infoLink:"https://www.binancecnt.com/en/contact-us",key:"binancecnt",link:`https://redirects.satoshi.opera-api.com/binance-connect?cryptoAddress=${t}&symbol_network=${i.binanceConnect}`,platform:"Binance Connect",stats:"wt_buy_binancecnt",supportLink:"https://www.binancecnt.com/en/contact-us",title:this.$t("views.buyView.buyWithTitle",{platform:"Binance Connect",symbol:n})},{action:this.$t("views.buyView.buyWithContinue",{platform:"MoonPay"}),hidden:!this.isMoonPayBuyable,icon:s(82820),infoLink:"https://support.moonpay.com/hc/",key:"moonpay",link:`https://satoshi.opera-api.com/v4/redirects/moonpay?currencyCode=${i.moonPay}&walletAddress=${t}&product=${e}`,platform:"MoonPay",stats:"wt_buy_moonpay",supportLink:"https://support.moonpay.com/hc/en-gb/requests/new",title:this.$t("views.buyView.buyWithTitle",{platform:"MoonPay",symbol:n})},{action:this.$t("views.buyView.buyWithContinue",{platform:"Ramp"}),hidden:!0,icon:s(82702),infoLink:"https://support.ramp.network",key:"ramp",link:`https://buy.ramp.network/?swapAsset=${n}&userAddress=${t}&hostApiKey=hq84sto6z2nry34dwhvoh76yxpzspggyjzavzuoe`,platform:"Ramp",stats:"wt_buy_ramp",supportLink:"https://support.ramp.network",title:this.$t("views.buyView.buyWithTitle",{platform:"Ramp",symbol:n})}]},receivingAddress(){return this.$store.getters.receivingAddress},statsPayload(){return{coin:this.token.contract.symbol,network:this.$store.getters.getNetworkName(this.chain)}}},watch:{token(){this.$store.dispatch("getReceivingAddress",this.chain)}},mounted(){this.$route.meta.preselectToken&&(r.Z.sendStatsEvent(r.Z.types.IMPRESSION,"wt_buy_entered",this.statsPayload),this.$store.dispatch("getReceivingAddress",this.chain)),this.$watch((()=>this.$refs.assetSelector.$refs.dialog.showing),(t=>{this.isSelectingToken=t}),{immediate:!0})},methods:{clickItem(t){t.stats&&r.Z.sendStatsEvent(r.Z.types.CLICK,t.stats,this.statsPayload);const{link:e}=t;window.open(e)},setDefaultBuyableToken(){return this.$store.getters.getBuyableToken(this.$route.params?.token)}}},u=l,p=s(1001),h=(0,p.Z)(u,n,i,!1,null,null,null),y=h.exports},80818:function(t,e,s){t.exports=s.p+"img/binancecnt.f04ec441.svg"},82820:function(t,e,s){t.exports=s.p+"img/moonpay.6b4c9c2a.svg"},82702:function(t,e,s){t.exports=s.p+"img/ramp.26a0a8eb.svg"}}]);