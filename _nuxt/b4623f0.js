(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,5],{334:function(t,e,n){"use strict";n.r(e);n(341);var r=n(66),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",{staticClass:"footer mt-auto py-3"},[t("div",{staticClass:"container text-center"},[t("span",{staticClass:"text-muted"},[this._v("問い合わせ先：P2HACKS2022実行委員会（p2hacks[a]fun.ac.jp）")])])])}],!1,null,"2731d61f",null);e.default=component.exports;installComponents(component,{Footer:n(334).default})},335:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("b54e39fc",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("80636d90",content,!0,{sourceMap:!1})},337:function(t,e,n){"use strict";var r;!function(t){t[t.HOME=0]="HOME",t[t.SEMINNER=1]="SEMINNER",t[t.QA=2]="QA",t[t.PREGROUP=3]="PREGROUP",t[t.POSTGROUP=4]="POSTGROUP"}(r||(r={})),e.a=r},338:function(t,e,n){t.exports=n.p+"img/p2hacksSkeltonLogo.f221ab1.png"},339:function(t,e,n){"use strict";n(335)},340:function(t,e,n){var r=n(84)(!1);r.push([t.i,".navbar[data-v-49b7e3ce]{position:fixed;width:100%;z-index:1;transition:all .3s ease 0s}.transparent[data-v-49b7e3ce]{background:transparent!important}",""]),t.exports=r},341:function(t,e,n){"use strict";n(336)},342:function(t,e,n){var r=n(84)(!1);r.push([t.i,".footer[data-v-2731d61f]{background-color:#f5f5f5}",""]),t.exports=r},343:function(t,e,n){"use strict";n.r(e);n(238);var r=n(337),l={name:"NavBar",data:function(){return{menu:r.a}},props:{active:{type:Number,required:!0,default:r.a.HOME},transparent:{type:Boolean,required:!1,default:!1}}},c=(n(339),n(66)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[t._e(" ソースコードを見に来るとはやりますね。P2HACKSでお待ちしています！"),t._v(" "),e("b-navbar",{class:{transparent:t.transparent},attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:n(338),alt:"p2hacks2022",width:"40",height:"40"}}),t._v("\n        P2HACKS 2022\n    ")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[t.active==t.menu.HOME?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page"}},[t._v("ホーム")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("ホーム")])],1),t._v(" "),t.active==t.menu.SEMINNER?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("勉強会")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/seminner"}},[t._v("勉強会")])],1),t._v(" "),t.active==t.menu.QA?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Q&A")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/qa"}},[t._v("Q&A")])],1),t._v(" "),t.active==t.menu.PREGROUP?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Pre-PBL部門")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/pregroup"}},[t._v("Pre-PBL部門")])],1),t._v(" "),t.active==t.menu.POSTGROUP?e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Post-PBL部門")])]):e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/postgroup"}},[t._v("Post-PBL部門")])],1)])],1)],1)],1)}),[],!1,null,"49b7e3ce",null);e.default=component.exports},347:function(t,e,n){"use strict";n.r(e);var r=n(8).default.extend({props:{title:{type:String,required:!0,default:"これはテストだよ"}}}),l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container-fluid header text-center d-flex align-items-center justify-content-center",staticStyle:{color:"white","background-color":"#394046",height:"300px"}},[e("h1",[t._v(t._s(t.title))])])}),[],!1,null,null,null);e.default=component.exports},376:function(t){t.exports=JSON.parse('[{"id":1,"title":"未来大生以外でも参加できますか？","subTitle":"現在、公立はこだて未来大学に籍がある学生のみ参加できます。","description":"(休学中でも可)"},{"id":2,"title":"当日参加できないメンバーが発生しました。メンバーの追加は可能ですか？","subTitle":"原則、応募時のチームメンバーの変更はできません。","description":"従って新たなメンバーを追加することはできません。但し、ハッカソン開始前かつやむを得ない場合で運営が認めた場合のみ変更可能ですので、必ず運営へご連絡ください。 "},{"id":3,"title":"Pre-PBL部門とPost-PBL部門へ同時に参加することは可能ですか？","subTitle":"複数部門への参加・応募は認めません。どちらかの部門を選んでご参加ください。","description":"また、1人でもプロジェクト学習を履修したことがある学生がチーム内にいる場合、Pre-PBL部門への参加資格はありません。"},{"id":4,"title":"開発プラットフォームに制限はありますか？","subTitle":"開発プラットフォームの制限はありません。","description":"ネイティブアプリ、Webアプリ、ハードウェアなど、テーマに沿っていれば好きな物を開発して頂いて大丈夫です！"},{"id":5,"title":"ゲームを開発しても大丈夫ですか？","subTitle":"テーマに沿っていれば問題ありません！","description":"ゲームに限らず、ITが関わっていて開発が伴うものであればどんなものを制作しても構いません。安心して開発してください。"},{"id":6,"title":"作成した作品の取り扱いはどうなりますか？","subTitle":"本イベント内で作成した作品の権利は、作成者に帰属します。","description":"但し、広報に利用させていただく場合があります。"},{"id":7,"title":"開発用にパソコンをレンタルすることは可能ですか？","subTitle":"高度ICTコースからレンタル用のパソコンを提供していただく予定です!","description":"※数に限りがあるため、貸し出せない場合があります"},{"id":8,"title":"発表会はどのような形式で行われますか？","subTitle":"発表会は大学の教室にて対面で行います。","description":"チーム代表者のパソコンをプロジェクターに繋いで画面を映し出す形で発表していただきます。発表時間5分、質疑応答2分の計7分を予定しています。"},{"id":9,"title":"発表スライド・デモについての指定はありますか？","subTitle":" 発表スライド・デモについては、こちらから指定は行いません","description":"但し、どのように見せているかどうか(効果的に見せれているかどうか)は評価の対象となりますので、チームで効果的な方法を考えて決めてください。"},{"id":10,"title":"発表内容は公に発信されますか？","subTitle":"審査及び今後の広報活動のため発表を録画・公開する可能性があります。","description":"フォーム記載の応募規約に明記していますので、同意の上ご参加をお願いします。公開されることで不都合がある・やむを得ない事情がある場合、運営で対応しますので、必ず運営へご連絡ください。"},{"id":11,"title":"新型コロナ対策として参加における注意事項はなんでしょうか？","subTitle":"参加にあたって事前に体調の報告をお願いします。体調不良・発熱等の症状がある場合は対面での参加は認められません。","description":"会場では、こまめな消毒・マスクの着用・決められた場所での飲食へのご協力をお願いします。開発期間中にチームで集まって開発をする場合は、ご自身で必要な感染対策を行ってください。"},{"id":12,"title":"審査ポイントはどのようなものになりますか？","subTitle":"以下の項目を総合して審査を行います。 ※審査基準は検討段階のものであり変更になる可能性があります。","description":"アイデア  (テーマに沿って考えられてるか)、実装 (アイデアを実現できているか)、開発プロセス (円滑にチーム開発を進めるためのコミュニケーションが取れているか)、プレゼン (取り組んだ内容・プロダクトの内容を効果的に伝えられるか)"}]')},395:function(t,e,n){"use strict";n.r(e);n(4),n(59);var r=n(337),l=n(343),c=n(334),o=n(376),v={name:"IndexPage",data:function(){return{active:r.a.QA,qaJson:o}},components:{Navbar:l.default,Footer:c.default}},d=n(66),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar",{attrs:{active:t.active}}),t._v(" "),e("Headline",{staticClass:"pt-5",attrs:{title:"よくある質問"}}),t._v(" "),e("div",{staticClass:"container p-5"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12"},t._l(t.qaJson,(function(n){return e("div",{key:n.id,staticClass:"mb-5"},[e("h3",[t._v("Q. "+t._s(n.title))]),t._v(" "),e("p",[e("b",[t._v("A. "+t._s(n.subTitle))])]),t._v(" "),e("p",[t._v(t._s(n.description))])])})),0)])]),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"mb-5"},[e("h3",[t._v("Q. 1人での参加は可能ですか？")]),t._v(" "),e("p",[e("b",[t._v("A. 原則チームでのエントリーとなりますので、1人での参加は認めていません。")])]),t._v(" "),e("p",[t._v("事前に2〜5人のチームを組んでからエントリーをお願いします。"),e("br"),t._v("チーム結成に不安がある方は"),e("a",{attrs:{href:"/#matching"}},[t._v("マッチングサービス")]),t._v("を使用することが可能です")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Headline:n(347).default,Footer:n(334).default})}}]);