(function(e){function a(a){for(var n,r,i=a[0],o=a[1],l=a[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);h&&h(a);while(d.length)d.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],n=!0,i=1;i<t.length;i++){var o=t[i];0!==c[o]&&(n=!1)}n&&(s.splice(a--,1),e=r(r.s=t[0]))}return e}var n={},c={app:0},s=[];function r(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)r.d(t,n,function(a){return e[a]}.bind(null,n));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var h=o;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},2768:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Hanja",{attrs:{msg:"Random Hanja"}})],1)},s=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("div",[t("label",[e._v("level ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{name:"level",id:"level"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.level=a.target.multiple?t:t[0]},e.changeLevel]}},[t("option",{attrs:{value:"0"}},[e._v("all")]),t("option",{attrs:{value:"9"}},[e._v("9")]),t("option",{attrs:{value:"8"}},[e._v("8")]),t("option",{attrs:{value:"7"}},[e._v("7")]),t("option",{attrs:{value:"6"}},[e._v("6")]),t("option",{attrs:{value:"5"}},[e._v("5")]),t("option",{attrs:{value:"4"}},[e._v("4")])])]),t("div",{staticClass:"row"},e._l(e.wordP,(function(a,n){return t("div",{key:a.id},[t("span",{staticClass:"notP"},[e._v(" "+e._s(n+1)+" ")]),t("span",{staticClass:"notP"},[e._v(" "+e._s(a.word[0])+" ")]),e._l(a.aList[1],(function(c){return t("a",{key:c.id,on:{click:function(t){return e.clickWordP(n,a.word,1,c)}}},[1===a.find&&c.hanja===a.word[1]?t("span",{staticClass:"successP"},[e._v(" "+e._s(c.hanja)+" ")]):(1===a.find&&(c.hanja,a.word[1]),t("span",{staticClass:"notP"},[e._v(" "+e._s(c.hanja)+" ")]))])}))],2)})),0),t("div",[t("div",{staticClass:"row card"},e._l(e.pList,(function(a,n){return t("div",{key:a.id,staticClass:"chip4"},[t("span",{class:["hanja",n===e.pIndex?"currP":"notP"]},[e._v(" "+e._s(a.hanja)+" ")])])})),0),t("div",{staticClass:"row  "},e._l(e.hList,(function(a){return t("button",{key:a.id,staticClass:"button-p",on:{click:function(t){return e.clickH(a)}}},[e._v(" "+e._s(a.mean)+" "+e._s(a.sound)+" ")])})),0)]),t("div",{staticClass:"row card"},e._l(e.cardList,(function(a){return t("div",{key:a.id,staticClass:"chip2"},[t("span",{class:["hanja",e.checkedHanja?"":"notchecked"]},[e._v(e._s(a.hanja)+" ")]),t("span",{class:["hangul",e.checkedHangul?"":"notchecked"]},[e._v(" "+e._s(a.mean)+" "+e._s(a.sound)+" ")])])})),0),t("div",{staticClass:"row"},[t("label",{staticClass:"check-container"},[e._v("한자 "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedHanja,expression:"checkedHanja"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkedHanja)?e._i(e.checkedHanja,null)>-1:e.checkedHanja},on:{change:function(a){var t=e.checkedHanja,n=a.target,c=!!n.checked;if(Array.isArray(t)){var s=null,r=e._i(t,s);n.checked?r<0&&(e.checkedHanja=t.concat([s])):r>-1&&(e.checkedHanja=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedHanja=c}}}),t("span",{staticClass:"checkmark"})]),t("label",{staticClass:"check-container"},[e._v("한글 "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedHangul,expression:"checkedHangul"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkedHangul)?e._i(e.checkedHangul,null)>-1:e.checkedHangul},on:{change:function(a){var t=e.checkedHangul,n=a.target,c=!!n.checked;if(Array.isArray(t)){var s=null,r=e._i(t,s);n.checked?r<0&&(e.checkedHangul=t.concat([s])):r>-1&&(e.checkedHangul=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedHangul=c}}}),t("span",{staticClass:"checkmark"})])]),t("div",{staticClass:"row"},[t("h3",[e._v("index : "+e._s(e.index)+" / "+e._s(e.size+1)+" ("+e._s(e.hanjaList.length)+")")])]),t("div",{staticClass:"row"},[t("button",{staticClass:"button button-card",on:{click:function(a){return e.getHanjaWordRandom("prev")}}},[e._v("‹")]),t("button",{staticClass:"button button-card",on:{click:function(a){return e.getHanjaWordRandom("next")}}},[e._v("›")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hanjaSearch,expression:"hanjaSearch"}],attrs:{type:"text"},domProps:{value:e.hanjaSearch},on:{input:function(a){a.target.composing||(e.hanjaSearch=a.target.value)}}}),e._v(" "),t("label",[e._v("한자/한글")]),t("button",{staticClass:"button",on:{click:function(a){return e.getHanjaWord()}}},[e._v("search")]),e._l(e.searchList,(function(a){return t("div",{key:a.hanja},[t("span",{staticClass:"hanja"},[e._v(e._s(a.hanja)+" ("+e._s(a.mean)+" "+e._s(a.sound)+")")])])}))],2)]),t("div",{staticClass:"row"},[t("label",[e._v("한자 "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedHanjaTable,expression:"checkedHanjaTable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkedHanjaTable)?e._i(e.checkedHanjaTable,null)>-1:e.checkedHanjaTable},on:{change:function(a){var t=e.checkedHanjaTable,n=a.target,c=!!n.checked;if(Array.isArray(t)){var s=null,r=e._i(t,s);n.checked?r<0&&(e.checkedHanjaTable=t.concat([s])):r>-1&&(e.checkedHanjaTable=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedHanjaTable=c}}}),t("span",{staticClass:"checkmark"})]),t("label",[e._v("한글 "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedHangulTable,expression:"checkedHangulTable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checkedHangulTable)?e._i(e.checkedHangulTable,null)>-1:e.checkedHangulTable},on:{change:function(a){var t=e.checkedHangulTable,n=a.target,c=!!n.checked;if(Array.isArray(t)){var s=null,r=e._i(t,s);n.checked?r<0&&(e.checkedHangulTable=t.concat([s])):r>-1&&(e.checkedHangulTable=t.slice(0,r).concat(t.slice(r+1)))}else e.checkedHangulTable=c}}}),t("span",{staticClass:"checkmark"})])]),t("table",{staticClass:"row",attrs:{id:"mytable"}},[e._m(0),e._l(e.hanjaList,(function(a,n){return t("tr",{key:a.hanja},[t("td",[t("span",[e._v(e._s(n+1)+"("+e._s(a.id)+")")])]),t("td",{staticClass:"hanja"},[e._v(e._s(a.hanja))]),t("td",{class:[" ",e.checkedHangulTable?"visble":"notvisble"]},[e._v(" ("+e._s(a.mean)+" "),t("span",[e._v(e._s(a.sound)+")")]),t("span",[e._v(" ×")])])])}))],2)])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("tr",{staticClass:"header"},[t("th",{staticStyle:{width:"15%"}},[e._v("번호")]),t("th",{staticStyle:{width:"30%"}},[e._v("한자")]),t("th",{staticStyle:{width:"55%"}},[e._v("한글")])])}],o=t("c7eb"),l=t("1da1"),h=(t("7db0"),t("d3b7"),t("4de4"),t("ac1f"),t("00b4"),t("d81d"),t("4e82"),t("fb6a"),t("159b"),t("898b")),u={name:"Hanja",props:{msg:String},data:function(){return{data:null,checkedHanja:!0,checkedHangul:!0,checkedHanjaTable:!0,checkedHangulTable:!0,hanjaData:null,level:5,columns:null,index:0,size:0,searchList:[],cardList:[],hanjaList:[],pIndex:0,pList:[],hList:[],hanjaSearch:"",wordP:[],hanjaSoundSearch:"",wordList:[]}},mounted:function(){this.getLocal()},methods:{clickWordP:function(e,a,t,n){var c=this.getSearch(a[t]);c.length>0?n.id===c[0].id&&(this.wordP[e].find=1):this.wordP[e].find=-1},clickH:function(e){console.log(e);var a=this.pList[this.pIndex];a.id===e.id&&(console.log("SU"),this.pIndex++),this.pIndex>=4&&this.getHanjaWordRandom("next")},getSearch:function(e){var a=/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,t=function(e,a,t){return e.filter((function(e){return e[a].indexOf(t)>=0}))};if(""===e)return[];var n="hanja";return a.test(e)&&(n="sound"),t(this.hanjaData,n,e)},getHanjaWord:function(){this.searchList=this.getSearch(this.hanjaSearch),console.log(this.getSearch("唱"))},getHanjaWordRandom:function(e){"prev"===e&&(this.index-=2,this.index<0&&(this.index=0)),this.pIndex=0;var a=this.index;this.cardList=this.hanjaList.filter((function(e,t){return parseInt(t/4)===a})),this.pList=this.getRandom(this.cardList,4),console.log(this.pList),this.hList=this.getRandom(this.cardList,4),a<this.size&&this.index++},getRandom:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1===a)return[e[Math.floor(Math.random()*e.length)]];function t(e){var a="number"===typeof e?h["b"](e).map((function(e,a){return a})):e;return a.sort((function(){return Math.random()-.5})),a}var n=t(e.length);return(isNaN(a)||void 0===a||0===a.length)&&(a=e.length),n.slice(0,a).map((function(a){return e[a]}))},changeLevel:function(){var e=this,a=function(e,a,t){return e.filter((function(e){return e[a].indexOf(t)>=0}))};this.hanjaList=a(this.hanjaData,"level",this.level),this.hanjaList=this.getRandom(this.hanjaList,this.hanjaList.length),this.size=parseInt(this.hanjaList.length/4),this.index=0,parseInt(this.hanjaList%4)>0&&this.size++,this.getHanjaWordRandom();var t=[];this.wordList.forEach((function(a,n){for(var c=[],s=0;s<a.length;s++){var r=e.getSearch(e.getSearch(a[s])[0].sound);c.push(r)}t.push({id:n,word:a,aList:c,find:0})})),console.log(t),this.wordP=t},getLocal:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function a(){var t,n,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,h["a"]("./hanja2.csv").then((function(e){return t=e.columns,e}));case 2:return n=a.sent,e.hanjaData=n,e.columns=t,a.next=7,h["a"]("./hanjaword.csv").then((function(e){return e}));case 7:c=a.sent,c.forEach((function(a){return e.wordList.push(a.word)})),e.changeLevel();case 10:case"end":return a.stop()}}),a)})))()}}},d=u,v=(t("5764"),t("2877")),p=Object(v["a"])(d,r,i,!1,null,"3b1c3432",null),f=p.exports,k={name:"App",components:{Hanja:f}},g=k,_=(t("034f"),Object(v["a"])(g,c,s,!1,null,null,null)),j=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},5764:function(e,a,t){"use strict";t("2768")},"85ec":function(e,a,t){}});