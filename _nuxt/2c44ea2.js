(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,4,5],{334:function(t,e,r){"use strict";r.r(e);r(341);var n=r(66),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",{staticClass:"footer mt-auto py-3"},[t("div",{staticClass:"container text-center"},[t("span",{staticClass:"text-muted"},[this._v("問い合わせ先：P2HACKS2022実行委員会（p2hacks[a]fun.ac.jp）")])])])}],!1,null,"2731d61f",null);e.default=component.exports;installComponents(component,{Footer:r(334).default})},335:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("b54e39fc",content,!0,{sourceMap:!1})},336:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("80636d90",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";var n;!function(t){t[t.HOME=0]="HOME",t[t.SEMINNER=1]="SEMINNER",t[t.QA=2]="QA",t[t.PREGROUP=3]="PREGROUP",t[t.POSTGROUP=4]="POSTGROUP"}(n||(n={})),e.a=n},338:function(t,e,r){t.exports=r.p+"img/p2hacksSkeltonLogo.f221ab1.png"},339:function(t,e,r){"use strict";r(335)},340:function(t,e,r){var n=r(84)(!1);n.push([t.i,".navbar[data-v-49b7e3ce]{position:fixed;width:100%;z-index:1;transition:all .3s ease 0s}.transparent[data-v-49b7e3ce]{background:transparent!important}",""]),t.exports=n},341:function(t,e,r){"use strict";r(336)},342:function(t,e,r){var n=r(84)(!1);n.push([t.i,".footer[data-v-2731d61f]{background-color:#f5f5f5}",""]),t.exports=n},343:function(t,e,r){"use strict";r.r(e);r(238);var n=r(337),o={name:"NavBar",data:function(){return{menu:n.a}},props:{active:{type:Number,required:!0,default:n.a.HOME},transparent:{type:Boolean,required:!1,default:!1}}},c=(r(339),r(66)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[t._e(" ソースコードを見に来るとはやりますね。P2HACKSでお待ちしています！"),t._v(" "),e("b-navbar",{class:{transparent:t.transparent},attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:r(338),alt:"p2hacks2022",width:"40",height:"40"}}),t._v("\n        P2HACKS 2022\n    ")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[t.active==t.menu.HOME?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page"}},[t._v("ホーム")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("ホーム")])],1),t._v(" "),t.active==t.menu.SEMINNER?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("勉強会")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/seminner"}},[t._v("勉強会")])],1),t._v(" "),t.active==t.menu.QA?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Q&A")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/qa"}},[t._v("Q&A")])],1),t._v(" "),t.active==t.menu.PREGROUP?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Pre-PBL部門")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/pregroup"}},[t._v("Pre-PBL部門")])],1),t._v(" "),t.active==t.menu.POSTGROUP?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Post-PBL部門")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/postgroup"}},[t._v("Post-PBL部門")])],1)])],1)],1)],1)}),[],!1,null,"49b7e3ce",null);e.default=component.exports},346:function(t,e,r){var content=r(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("4c53b2e2",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";var n=r(10),o=r(355).start;n({target:"String",proto:!0,forced:r(356)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},355:function(t,e,r){var n=r(14),o=r(67),c=r(30),l=r(168),d=r(41),f=n(l),v=n("".slice),_=Math.ceil,h=function(t){return function(e,r,n){var l,h,m=c(d(e)),C=o(r),w=m.length,k=void 0===n?" ":c(n);return C<=w||""==k?m:((h=f(k,_((l=C-w)/k.length))).length>l&&(h=v(h,0,l)),t?m+h:h+m)}};t.exports={start:h(!1),end:h(!0)}},356:function(t,e,r){var n=r(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},357:function(t,e,r){t.exports=r.p+"img/p2hacks_2022.917ef27.png"},358:function(t,e,r){"use strict";r(346)},359:function(t,e,r){var n=r(84)(!1);n.push([t.i,".hero-black-bg[data-v-7dc47f48]{background:radial-gradient(#000,#323232)}.hero-red-bg[data-v-7dc47f48]{background:radial-gradient(#331c1c,#323232)}.hero-green-bg[data-v-7dc47f48]{background:radial-gradient(#1c331d,#323232)}.hero-blue-bg[data-v-7dc47f48]{background:radial-gradient(#1c2033,#323232)}.hero-purple-bg[data-v-7dc47f48]{background:radial-gradient(#251c33,#323232)}.hero-image[data-v-7dc47f48]{background-position:50%;background-size:cover;color:#c8c8c8;height:100vh}.hero-image-content[data-v-7dc47f48]{-webkit-animation:fadeIn 2s cubic-bezier(.33,1,.68,1) 1 forwards;animation:fadeIn 2s cubic-bezier(.33,1,.68,1) 1 forwards}.timer-day[data-v-7dc47f48]{font-size:calc(1.375rem + 1.5vw)}.timer-counter[data-v-7dc47f48]{font-size:calc(1rem + 1.5vw)}.a-no-all[data-v-7dc47f48]{cursor:pointer;color:inherit;text-decoration:none}",""]),t.exports=n},363:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(85).default)("416d1fe6",content,!0,{sourceMap:!1})},365:function(t,e,r){"use strict";r.r(e);r(354),r(1),r(38),r(37);var n,o=r(8);!function(t){t[t.BLACK=0]="BLACK",t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=3]="BLUE",t[t.PURPLE=4]="PURPLE"}(n||(n={}));var c=n,l=o.default.extend({data:function(){return{days:0,diff:0,timer:0,countDownTimer:{days:0,hours:0,minutes:0,seconds:0},heroBgColor:c,bgColor:c.BLACK}},fetch:function(){this.bgColor=c.BLACK},mounted:function(){var t=new Date(2022,11,18,13,0),e=new Date;this.diff=Math.max(t.getTime()-e.getTime(),0),this.tick(this);var r=this;this.timer=window.setInterval((function(){r.tick(r)}),1e3)},methods:{tick:function(t){t.diff=t.diff-1e3;var e=t.countDownTimer;e.days=Math.floor(t.diff/1e3/60/60/24),e.hours=Math.floor(t.diff/1e3/60/60)%24,e.minutes=Math.floor(t.diff/1e3/60)%60,e.seconds=Math.floor(t.diff/1e3)%60},getRandomInt:function(t){return Math.floor(Math.random()*t)}}}),d=(r(358),r(66)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container-fluid text-center d-flex align-items-center justify-content-center hero-image",class:{"hero-black-bg":t.bgColor===t.heroBgColor.BLACK,"hero-red-bg":t.bgColor===t.heroBgColor.RED,"hero-green-bg":t.bgColor===t.heroBgColor.GREEN,"hero-blue-bg":t.bgColor===t.heroBgColor.BLUE,"hero-purple-bg":t.bgColor===t.heroBgColor.PURPLE}},[e("div",{staticClass:"row hero-image-content"},[e("div",{staticClass:"col-12"},[e("img",{staticStyle:{width:"60%"},attrs:{alt:"p2hacks2022",src:r(357)}}),t._v(" "),e("p",{staticClass:"mt-3"},[t._v("2022/12/10 - 12/18")]),t._v(" "),e("h4",{staticClass:"mt-3 mb-0"},[t._v("ハッカソン終了まで")]),t._v(" "),e("div",{staticClass:"timer-counter"},[e("div",{staticClass:"mb-0"},[e("span",{staticClass:"timer-day",attrs:{id:"day"}},[t._v(t._s(t.countDownTimer.days))]),t._v("days\n          ")]),t._v(" "),e("div",{staticClass:"mt-0"},[e("span",{attrs:{id:"hour"}},[t._v(t._s(t.countDownTimer.hours.toString().padStart(2,"0")))]),t._v(" : "),e("span",{attrs:{id:"min"}},[t._v(t._s(t.countDownTimer.minutes.toString().padStart(2,"0")))]),t._v(" : "),e("span",{attrs:{id:"sec"}},[t._v(t._s(t.countDownTimer.seconds.toString().padStart(2,"0")))])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-12 mt-3"},[e("h3",[t._v("Share")]),t._v(" "),e("a",{staticClass:"a-no-all",attrs:{href:"//twitter.com/intent/tweet?&text=%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%85%AC%E5%BC%8F%20%E8%82%B2%E6%88%90%E5%9E%8B%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3%E3%80%8CP2HACKS%202022%E3%80%8D%0A2022%2F12%2F10%20%7E%2012%2F18%0A%23p2hacks%0Ahttps%3A%2F%2Fp2hacks2022.github.io%2F",rel:"nofollow noopener noreferrer"}},[e("i",{staticClass:"d-inline fab fa-twitter fa-2x p-1"})]),t._v(" "),e("a",{staticClass:"a-no-all",attrs:{href:"//www.facebook.com/sharer/sharer.php?u=https://p2hacks2022.github.io/&t=",rel:"nofollow noopener noreferrer"}},[e("i",{staticClass:"d-inline fab fa-facebook fa-2x p-1"})])])}],!1,null,"7dc47f48",null);e.default=component.exports},379:function(t,e,r){t.exports=r.p+"img/prePBL.796711b.png"},380:function(t,e,r){t.exports=r.p+"img/postPBL.db76037.png"},381:function(t,e,r){t.exports=r.p+"img/cyberagent.a13b803.png"},382:function(t,e,r){t.exports=r.p+"img/cybozu.515783a.png"},383:function(t,e,r){t.exports=r.p+"img/directorz.217fcc6.png"},384:function(t,e,r){t.exports=r.p+"img/fenrir.be3ba78.png"},385:function(t,e,r){t.exports=r.p+"img/infiniteloop.9019895.png"},386:function(t,e,r){t.exports=r.p+"img/pixiv.4f563b9.png"},387:function(t,e,r){t.exports=r.p+"img/softcreate.682fc91.png"},388:function(t,e,r){t.exports=r.p+"img/wantedly.674fe06.png"},389:function(t,e,r){"use strict";r(363)},390:function(t,e,r){var n=r(84)(!1);n.push([t.i,".title[data-v-07573c4c]{font-size:2.5rem;font-weight:700}.semi-title[data-v-07573c4c]{font-size:2rem;font-weight:700}.thanks-links[data-v-07573c4c]{list-style:none;margin:0;padding:0;font-weight:700}.thanks-links a[data-v-07573c4c]{text-decoration:underline;color:#000;font-weight:700}.thanks-link[data-v-07573c4c]{margin-bottom:8px;font-weight:700}",""]),t.exports=n},397:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r(337),c=r(343),l=r(334),d=n.default.extend({name:"IndexPage",head:function(){return{script:[{src:"https://platform.twitter.com/widgets.js"}]}},data:function(){return{active:o.a.HOME,isPageTop:!0}},components:{Navbar:c.default,Footer:l.default},created:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.onScroll)},destroyed:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){"undefined"!=typeof window&&(this.isPageTop=0===window.scrollY)}}}),f=(r(389),r(66)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Navbar",{attrs:{active:t.active,transparent:t.isPageTop}}),t._v(" "),e("hero"),t._v(" "),e("div",{staticClass:"container p-5 text-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"row mt-5"},[e("h2",{staticClass:"col-12 semi-title mb-3"},[t._v("部門紹介")]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/pregroup"}},[e("img",{staticStyle:{width:"100%",padding:"1rem"},attrs:{alt:"p2hacks2022",src:r(379)}})])],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/postgroup"}},[e("img",{staticStyle:{width:"100%",padding:"1rem"},attrs:{alt:"p2hacks2022",src:r(380)}})])],1)]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"row mt-5"},[e("h2",{staticClass:"col-12 mt-5 semi-title"},[t._v("スポンサー")]),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://www.cyberagent.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(381),alt:"株式会社サイバーエージェントのロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://cybozu.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(382),alt:"サイボウズ株式会社のロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://directorz.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(383),alt:"株式会社ディレクターズのロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://www.fenrir-inc.com/jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(384),alt:"フェンリル株式会社のロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://www.infiniteloop.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(385),alt:"株式会社インフィニットループのロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://www.pixiv.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(386),alt:"ピクシブ株式会社のロゴ"}})],1),t._v(" "),e("div",{staticClass:"col-md-2",attrs:{alt:"spacer"}}),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://www.softcreate-holdings.co.jp/",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(387),alt:"\t株式会社ソフトクリエイトホールディングスのロゴ"}})],1),t._v(" "),e("a",{staticClass:"col-md-4 col-6",attrs:{href:"https://wantedlyinc.com/ja",target:"_blank"}},[e("b-img",{staticStyle:{width:"100%"},attrs:{src:r(388),alt:"ウォンテッドリー株式会社のロゴ"}})],1),t._v(" "),e("div",{staticClass:"col-md-2",attrs:{alt:"spacer"}}),t._v(" "),t._m(5)]),t._v(" "),t._m(6)]),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"mb-4 title",staticStyle:{"letter-spacing":"0.25rem"}},[t._v("What is P2HACKS 2022?")]),t._v(" "),e("p",[t._v("はこだて未来大学の学部3年次に行われるプロジェクト学習を控えた、"),e("br"),t._v("学部1・2年生をメインターゲットとした9日間の学内ハッカソンです。")]),t._v(" "),e("p",[t._v("当日発表されるテーマに沿って、チームでプロダクトを開発してもらいます。"),e("br"),t._v(" 大会の最後には、表彰を行い、表彰されたチームには賞品が贈呈されます。")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-5"},[e("h2",{staticClass:"mb-4 semi-title"},[t._v("初めての参加でも安心")]),t._v(" "),e("p",[t._v("P2HACKS2022では、事前に勉強会を実施する他、ハッカソンへの参加経験が豊富な先輩がメンターとしてサポートします。"),e("br"),t._v("\n         また、期間中はSlack上でメンターへの技術相談が可能です！")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-5"},[e("h2",{staticClass:"mb-4 semi-title"},[t._v("はこだて未来大学にて"),e("br"),t._v("ハイブリッド開催")]),t._v(" "),e("p",[t._v("本イベントはオンラインとオフラインを交えたハイブリッド形式で開催します。")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mt-5"},[e("h2",{staticClass:"mb-4 semi-title"},[t._v("テーマは当日発表")]),t._v(" "),e("p",[t._v("ハッカソンのテーマは開会式でくじ引きをして決めます。")]),t._v(" "),e("p",[t._v("テーマによる使用技術・プラットフォームの制限は一切行いません。")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"mb-3 semi-title"},[t._v("スケジュール")]),t._v(" "),e("iframe",{staticClass:"d-none d-sm-block",staticStyle:{border:"solid 1px #777"},attrs:{src:"https://calendar.google.com/calendar/embed?src=a63fe7b8b7b72441f31495450d69b6eed74acf3b14a5ab159a7fd779944bcfac%40group.calendar.google.com&ctz=Asia%2FTokyo;&dates=20221201%2F20221231",width:"100%",height:"500",frameborder:"0",scrolling:"no"}}),t._v(" "),e("iframe",{staticClass:"d-sm-none",staticStyle:{border:"solid 1px #777"},attrs:{src:"https://calendar.google.com/calendar/embed?src=a63fe7b8b7b72441f31495450d69b6eed74acf3b14a5ab159a7fd779944bcfac%40group.calendar.google.com&ctz=Asia%2FTokyo;&dates=20221201%2F20221231&mode=AGENDA",width:"100%",height:"500",frameborder:"0",scrolling:"no"}})]),t._v(" "),e("div",{staticClass:"col-12 mt-2"},[e("p",[t._v("Safariで開いている場合正常に表示されない可能性があります。"),e("br"),t._v("別のブラウザで閲覧をお願いします。")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"col-12"},[e("h2",{staticClass:"mt-5 mb-3 semi-title"},[t._v("協力")]),t._v(" "),e("ul",{staticClass:"thanks-links"},[e("li",{staticClass:"thanks-link"},[e("a",{attrs:{href:"https://www.codeforhakodate.org/"}},[t._v("Code for Hakodate")])]),t._v(" "),e("li",{staticClass:"thanks-link"},[t._v("情報教育IRプロジェクト"),e("br"),t._v("（未来大特別研究費 重点領域・戦略研究）")]),t._v(" "),e("li",{staticClass:"thanks-link"},[e("a",{attrs:{href:"https://www.fun.ac.jp/advanced-ict"}},[t._v("公立はこだて未来大学　高度ICTコース")])])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12"},[e("h2",{staticClass:"mb-3 semi-title"},[t._v("Twitter")]),t._v(" "),e("a",{staticClass:"twitter-timeline",attrs:{"data-lang":"ja","data-height":"400",href:"https://twitter.com/p2hacks?ref_src=twsrc%5Etfw"}},[t._v("Tweets by p2hacks")])])])}],!1,null,"07573c4c",null);e.default=component.exports;installComponents(component,{Hero:r(365).default,Footer:r(334).default})}}]);