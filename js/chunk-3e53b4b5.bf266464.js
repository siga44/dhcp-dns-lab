(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e53b4b5"],{"0680":function(e,t,s){"use strict";s("56f2")},"0a01":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{class:e.className,style:e.styleString,attrs:{title:e.isCompleted?e.completedTitleText:e.isDisabled?e.titleText:""},on:{keypress:[function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;t.preventDefault()}]}},[s("transition",{attrs:{appear:"",name:"fade"}},[e.isCompleted?s("check-icon",{staticClass:"completed-icon"}):s("span",{staticClass:"btn-text"},[e._t("default")],2)],1)],1)},a=[],n=(s("a9e3"),s("99af"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}})])}),r=[],o=s("2877"),l={},u=Object(o["a"])(l,n,r,!1,null,null,null),d=u.exports,c={components:{"check-icon":d},name:"app-button",props:{width:{type:Number,default:230},height:{type:Number,default:50},borderRadius:{type:Number,default:25},background:{type:String,default:""},isDisabled:{type:Boolean,default:!1},isCompleted:{type:Boolean,default:!1},titleText:{type:String,default:""},shadowed:{type:Boolean,default:!0},completedTitleText:{type:String,default:"Функция заблокирована"}},computed:{className:function(){return"btn ".concat(this.background).concat(this.isDisabled?" disabled":"").concat(this.shadowed?" shadowed":"").concat(this.isCompleted?" completed":"")},styleString:function(){return"width: ".concat(this.width,"px; height: ").concat(this.height,"px; border-radius: ").concat(this.borderRadius,"px")}}},h=c,p=(s("0680"),Object(o["a"])(h,i,a,!1,null,null,null));t["a"]=p.exports},4286:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-wrapper",on:{click:e.onClose}},[s("div",{staticClass:"modal-body",on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2)])},a=[],n={name:"app-modal",props:{isClosable:{type:Boolean,default:!1}},methods:{onClose:function(){this.isClosable&&this.$emit("on-close")}}},r=n,o=(s("bfb7"),s("2877")),l=Object(o["a"])(r,i,a,!1,null,null,null);t["a"]=l.exports},"56f2":function(e,t,s){},"5bf0":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{appear:"",name:"fade"}},[e.isAuthorized?s("div",{staticClass:"wrapper"},[e.isFinalTestPassed?s("app-modal",[s("div",{staticClass:"end-wrapper"},[s("app-button",{attrs:{background:"red",width:280}},[s("a",{attrs:{href:e.tableLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("Таблица результатов")])])],1)]):[s("header",{ref:"pageHeader",staticClass:"header"},[s("h1",{staticClass:"header-title"},[e._v(" Принципы работы DHCP, DNS и почтового серверов ")])]),e._l(e.cards,(function(t){return s("app-button",{key:t.id,attrs:{width:e.cardMeasurements.width,height:e.cardMeasurements.height,borderRadius:e.cardMeasurements.borderRadius,background:t.background,isDisabled:t.isDisabled,isCompleted:t.isPassed,completedTitleText:t.completedTitleText,titleText:"Сначала выполните тест для допуска"},nativeOn:{click:function(s){return s.preventDefault(),e.onClick(t.id)}}},[e._v(e._s(t.title))])})),s("app-button",{key:e.finalTestCard.id,attrs:{width:e.cardMeasurements.width,height:e.cardMeasurements.height,borderRadius:e.cardMeasurements.borderRadius,background:e.finalTestCard.background,completedTitleText:e.finalTestCard.completedTitleText,isDisabled:e.finalTestCard.isDisabled,isCompleted:e.finalTestCard.isPassed,titleText:e.finalTestCard.notCompletedTitle},nativeOn:{click:function(t){return t.preventDefault(),e.onClick(e.finalTestCard.id)}}},[e._v(" "+e._s(e.finalTestCard.title)+" ")])]],2):s("app-modal",[s("div",{staticClass:"auth-wrapper",on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onAuth.apply(null,arguments)}}},[s("div",{staticClass:"auth-input"},[s("label",{attrs:{for:"user-group"}},[e._v("Группа")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userGroup,expression:"userGroup"}],ref:"userGroup",attrs:{id:"user-group",type:"text",placeholder:"ИТ-01б или 078"},domProps:{value:e.userGroup},on:{input:function(t){t.target.composing||(e.userGroup=t.target.value)}}})]),s("div",{staticClass:"auth-input"},[s("label",{attrs:{for:"user-name"}},[e._v("ФИО")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],ref:"userName",attrs:{id:"user-name",type:"text",placeholder:"Иванов И.И."},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),s("app-button",{attrs:{background:"red",width:150,height:35,isDisabled:!this.userName.trim()||!this.userGroup.trim()},nativeOn:{click:function(t){return e.onAuth.apply(null,arguments)}}},[e._v("Далее")])],1)])],1)},a=[],n=(s("99af"),s("d3b7"),s("25f0"),s("b65f"),s("7db0"),s("498a"),s("ac1f"),s("5319"),s("5fb0")),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.random()*t-e},o=function(){return r().toString()},l=s("0a01"),u=s("4286"),d={name:"home",components:{"app-button":l["a"],"app-modal":u["a"]},computed:{isAuthorized:function(){return this.$store.getters[n["b"].GET_USER_AUTH_STATUS]},isAccessTestPassed:function(){return this.$store.getters[n["b"].GET_ACCESS_TEST_PASSED_STATUS]},isPracticePassed:function(){return this.$store.getters[n["b"].GET_PRACTICE_RESULT]},isFinalTestPassed:function(){return this.$store.getters[n["b"].GET_FINAL_TEST_PASSED_STATUS]},attemptsCount:function(){return this.$store.getters[n["b"].GET_FINAL_TEST_ATTEMPTS_COUNTER]},finalTestDisabledUntil:function(){return this.$store.getters[n["b"].GET_FINAL_TEST_DISABLED_UNTIL]},finalTestTimer:function(){var e=Date.now();if(this.finalTestDisabledUntil&&e<this.finalTestDisabledUntil){var t=function(e){return"".concat(e.toString().length<2?"0":"").concat(e)},s=Math.trunc(this.finalTestTimeout/6e4),i=Math.trunc(this.finalTestTimeout/1e3%60);return"".concat(s,":").concat(t(i))}return null},cards:function(){return[{id:o(),title:"Тест для допуска",routeName:n["d"].ACCESS_TEST,isDisabled:this.isAccessTestPassed,isPassed:this.isAccessTestPassed,background:this.cardColors[0],completedTitleText:"Тест для допуска уже пройден"},{id:o(),title:"Теория",routeName:n["d"].THEORY,isDisabled:!1,background:this.cardColors[1]},{id:o(),title:"Практика",routeName:n["d"].PRACTICE,isDisabled:this.isPracticePassed||!this.isAccessTestPassed,isPassed:this.isPracticePassed,background:this.cardColors[2],completedTitleText:"Практика уже пройдена"}]},finalTestCard:function(){return{id:o(),title:this.attemptsCount?"Финальный тест, осталось попыток: ".concat(this.attemptsCount):this.finalTestTimer,routeName:n["d"].FINAL_TEST,isDisabled:this.isFinalTestPassed||!this.isAccessTestPassed||!this.isPracticePassed||!this.attemptsCount&&!!this.finalTestTimeout,isPassed:this.isFinalTestPassed,background:this.cardColors[3],completedTitleText:"Финальный тест уже пройден",notCompletedTitle:this.finalTestTimer?"Повторите попытку через ".concat(this.finalTestTimer):this.isAccessTestPassed?this.isPracticePassed?"":"Сначала выполните практику":"Сначала выполните тест для допуска"}}},data:function(){return{headerTimeout:null,cardColors:["red","purple","green","blue"],cardMeasurements:{width:250,height:250,borderRadius:30},finalTestTimeout:0,userGroup:"",userName:"",isAuthDebounced:!1,tableLink:n["f"].sheet}},methods:{onClick:function(e){var t,s=null!==(t=this.cards.find((function(t){return t.id===e})))&&void 0!==t?t:this.finalTestCard;s.isDisabled||this.$router.push({name:s.routeName})},onAuth:function(){var e=this;if(!this.isAuthDebounced){this.isAuthDebounced=!0;var t=setTimeout((function(){e.isAuthDebounced=!1,clearTimeout(t)}),1e3),s=this.userGroup.trim(),i=this.userName.trim().replace(/\. /,".");if(s&&i){var a=function(t,s){e[t]="";var i=e.$refs[t].placeholder;e.$refs[t].placeholder=s;var a=setTimeout((function(){e.$refs[t].placeholder=i,clearTimeout(a)}),2e3)};s.length<=3&&!/[0-9]{3}/.test(s)||s.length>3&&!/[А-Я]{2}-[0-9]{2}[а-я]$/.test(s)?a("userGroup","Группа указана некорректно"):i.length<6||!/[А-Я][а-я]{1,} [А-Я]\.[А-Я]\.$/.test(i)?a("userName","Имя указано некорректно"):this.$store.dispatch(n["a"].SET_USER_DATA,{name:i,group:s}).then(this.hideHeader)}}},hideHeader:function(){var e=this;this.headerTimeout=setTimeout((function(){clearTimeout(e.headerTimeout),e.$refs.pageHeader.classList.add("hidden")}),5e3)}},mounted:function(){var e=this;if(this.isAuthorized&&!this.isFinalTestPassed&&this.hideHeader(),this.finalTestTimeout=this.finalTestDisabledUntil&&this.finalTestDisabledUntil>Date.now()?this.finalTestDisabledUntil-Date.now():0,this.finalTestTimeout)var t=setInterval((function(){e.finalTestTimeout-=1e3,e.finalTestTimeout<=0&&(clearInterval(t),e.finalTestTimeout=0,e.$store.state.attemptsCount=1)}),1e3)},beforeDestroy:function(){this.headerTimeout&&(clearTimeout(this.headerTimeout),this.headerTimeout=null)}},c=d,h=(s("c57b"),s("2877")),p=Object(h["a"])(c,i,a,!1,null,null,null);t["default"]=p.exports},"5c7a":function(e,t,s){},"6e87":function(e,t,s){},bfb7:function(e,t,s){"use strict";s("6e87")},c57b:function(e,t,s){"use strict";s("5c7a")}}]);
//# sourceMappingURL=chunk-3e53b4b5.bf266464.js.map