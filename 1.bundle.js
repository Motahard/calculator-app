/*! For license information please see 1.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{61:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(2),r=o.c.div.withConfig({displayName:"components__Container",componentId:"spdf8s-0"})(["max-width:1600px;margin:auto;padding:5rem;margin-top:5rem;border-radius:10px;background-color:",";color:",";"],(function(e){return e.theme.primaryBackColor}),(function(e){return e.theme.primaryFontColor})),i=o.c.h1.withConfig({displayName:"components__SettingsTitle",componentId:"spdf8s-1"})(["font-weight:normal;font-size:44px;margin:2rem 0;"]),s=o.c.legend.withConfig({displayName:"components__SettingTheme",componentId:"spdf8s-2"})(["margin:0.5rem 0;"]),a=o.c.select.withConfig({displayName:"components__SelectTheme",componentId:"spdf8s-3"})(["padding:1rem;border-radius:5px;width:300px;font-size:20px;margin-bottom:1rem;background:",";color:",";border:2px solid black;"],(function(e){return e.theme.secondaryBackColor}),(function(e){return e.theme.secondaryFontColor})),p=o.c.option.withConfig({displayName:"components__OptionTheme",componentId:"spdf8s-4"})([""]),c=o.c.button.withConfig({displayName:"components__Button",componentId:"spdf8s-5"})(["padding:1rem;border-radius:5px;width:300px;font-size:20px;cursor:pointer;background:",";color:",";border:2px solid black;"],(function(e){return e.theme.secondaryBackColor}),(function(e){return e.theme.secondaryFontColor})),d=Object(o.c)(c).withConfig({displayName:"components__ButtonClearHistory",componentId:"spdf8s-6"})([""])},62:function(e,t,n){var o=n(63),r=n(64),i=n(65);e.exports=function(e){return o(e)||r(e)||i()}},63:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},64:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},65:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},68:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),s=n.n(i),a=n(4),p=n.n(a),c=n(2),d=c.c.p.withConfig({displayName:"components__DisplayExpression",componentId:"sc-17khll6-0"})(["font-size:40px;margin-right:5rem;margin-bottom:1rem;"]),u=function(e){var t=e.expression;return r.a.createElement(d,{id:"display"},t)};u.propTypes={expression:s.a.string};var m=u,l=n(62),f=n.n(l),y=c.c.div.withConfig({displayName:"components__KeypadContainer",componentId:"mu052l-0"})(["display:grid;grid-template-columns:repeat(5,1fr);gap:1.5rem 4rem;padding:1rem;border-top:2px solid ",";height:100%;@media (max-width:1000px){&{gap:1.5rem 2rem;}}@media (max-width:800px){&{gap:0.75rem 1rem;}}@media (max-width:500px){&{gap:0.5rem;}}"],(function(e){return e.theme.secondaryBackColor})),h=c.c.input.withConfig({displayName:"components__KeypadButton",componentId:"mu052l-1"})(["padding:1rem;align-text:center;font-size:30px;border-radius:10px;border:3px solid ",";background-color:",";color:",";cursor:pointer;"],(function(e){return e.theme.secondaryBackColor}),(function(e){return e.theme.secondaryBackColor}),(function(e){return e.theme.secondaryFontColor})),g=["C","7","8","9","*","-","4","5","6","/","+","1","2","3","=",".","(","0",")","CE"],x=function(e,t){return"("!==t&&")"!==t&&("*"!==e&&"/"!==e||"+"!==t&&"-"!==t)},w=function(e,t,n){if(!n)return 0;switch(e){case"+":return parseFloat((n+t).toFixed(3));case"-":return parseFloat((n-t).toFixed(3));case"*":return parseFloat((n*t).toFixed(3));case"/":if(0===t)throw"Cannot divide by zero";return parseFloat((n/t).toFixed(3))}return 0},C=function(e){var t=e.expression,n=e.setExpression,o=(e.result,e.setResult),i=e.setHistory,s=e.history,a=function(e){var r=e.target.value;if("="===r){var a=function(e){var t=[],n=[],o="";"-"===e[0]&&(o+=e[0],e=""+e.substring(1));for(var r=0;r<e.length;r++)if(" "!==e[r])if(e[r]>="0"&&e[r]<="9"){var i=""+o;for(o="";r<e.length&&e[r]>="0"&&e[r]<="9"||"."===e[r];)i+=e[r++];t.push(parseFloat(i)),r--}else if("("===e[r])n.push(e[r]);else if(")"===e[r]){for(;"("!==n[n.length-1];)t.push(w(n.pop(),t.pop(),t.pop()));n.pop()}else if("+"===e[r]||"-"===e[r]||"*"===e[r]||"/"===e[r]){for(;n.length&&x(e[r],n[n.length-1]);)t.push(w(n.pop(),t.pop(),t.pop()));n.push(e[r])}for(;n.length;)t.push(w(n.pop(),t.pop(),t.pop()));return t.pop()}(t).toString();return o(a),n(a),void i([t].concat(f()(s)))}return"CE"===r?(n("0"),void o("")):"C"!==r?"0"!==t&&""!==t?r.match(/[*+\/-]/)?void(t.charAt(t.length-1).match(/[*+\/-]/)?n(t.slice(0,-1)+r):n(t+r)):void n(t+r):void(r.match(/[*+\/]/)||n(r)):void n(t.substring(0,t.length-1))};return r.a.createElement(y,{id:"keypad"},g.map((function(e){return r.a.createElement(h,{key:e,id:e.trim(),value:e.trim(),type:"button",onClick:a})})))};C.propTypes={expression:s.a.string,setExpression:s.a.func,result:s.a.string,setResult:s.a.func,history:s.a.array,setHistory:s.a.func};var b=C,v=c.c.div.withConfig({displayName:"components__HistoryContainer",componentId:"sc-1ydwq76-0"})(["padding:1rem;padding-top:0;border-left:2px solid ",";overflow-y:auto;"],(function(e){return e.theme.secondaryBackColor})),_=c.c.p.withConfig({displayName:"components__HistoryName",componentId:"sc-1ydwq76-1"})(["text-align:center;margin-bottom:1.5rem;"]),E=c.c.p.withConfig({displayName:"components__HistoryElement",componentId:"sc-1ydwq76-2"})(["word-wrap:break-word;margin-bottom:1rem;"]),H=function(e){var t=e.history;return e.showHistory?r.a.createElement(v,{id:"history"},r.a.createElement(_,null,"History"),t.length>0&&t.map((function(e,t){return r.a.createElement(E,{key:t},e)}))):r.a.createElement("div",null)};H.propTypes={history:s.a.array,showHistory:s.a.func};var k=H,I=n(61),N=Object(c.c)(I.a).withConfig({displayName:"components__ButtonSHHistory",componentId:"z3jwdb-0"})(["width:100%;margin-top:1rem;padding:0.25rem;"]),F=function(e){var t=e.showHistory,n=e.setShowHistory;return r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){n(!t)}},t?"Hide History":"Show History"))};F.propTypes={showHistory:s.a.bool,setShowHistory:s.a.func};var B=F,S=c.c.div.withConfig({displayName:"components__CalculatorContainer",componentId:"hlm1cj-0"})(["max-width:1300px;margin:auto;display:grid;grid-template-columns:5fr 1fr;padding:1rem;height:600px;background-color:",";color:",";margin-top:2rem;border-radius:10px;"],(function(e){return e.theme.primaryBackColor}),(function(e){return e.theme.primaryFontColor})),j=c.c.div.withConfig({displayName:"components__KeypadDisplayContainer",componentId:"hlm1cj-1"})(["display:flex;flex-direction:column;width:100%;padding:1rem;&:first-child{text-align:right;}"]),T=c.c.div.withConfig({displayName:"components__HistoryControlContainer",componentId:"hlm1cj-2"})(["display:flex;flex-direction:column;justify-content:space-between;overflow-x:auto;"]),R=function(e){var t=e.expression,n=e.setExpression,i=e.result,s=e.setResult,a=e.history,c=e.setHistory,d=Object(o.useState)(!0),u=p()(d,2),l=u[0],f=u[1];return r.a.createElement(S,null,r.a.createElement(j,null,r.a.createElement(m,{expression:t}),r.a.createElement(b,{expression:t,setExpression:n,result:i,setResult:s,history:a,setHistory:c})),r.a.createElement(T,null,r.a.createElement(k,{history:a,showHistory:l}),r.a.createElement(B,{showHistory:l,setShowHistory:f})))};R.propTypes={expression:s.a.string,setExpression:s.a.func,result:s.a.string,setResult:s.a.func,histrory:s.a.array,setHistory:s.a.func};var z=R,A=function(e){var t=e.expression,n=e.setExpression,o=e.result,i=e.setResult,s=e.history,a=e.setHistory;return r.a.createElement(z,{expression:t,setExpression:n,result:o,setResult:i,history:s,setHistory:a})};A.propTypes={expression:s.a.string,setExpression:s.a.func,result:s.a.string,setResult:s.a.func,history:s.a.array,setHistory:s.a.func};t.default=A}}]);