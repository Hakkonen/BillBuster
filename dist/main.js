(()=>{"use strict";var e={361:(e,t,r)=>{var i=r(379),l=r.n(i),n=r(99);l()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;var a=r(466),o=r(116);const s=function(e){return a.createElement("div",{className:"about-page"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square",style:{marginTop:"18vh"}},"1")),a.createElement("div",{className:"middle-col"},a.createElement("p",{className:"middle-col-header",style:{height:"49.5%"}},"ABOUT"),a.createElement("p",{className:"middle-col-text",style:{height:"6%"}},a.createElement("span",{className:"limit-width"},"Bill Buster is a web app designed to help divvy the cost of living together. Simply input the cost of the bill, the bill period, the number of housemates, their stay period, and their respective share of the cost will be calculated."))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"25%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"29%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const h=function(e){var t,r,i=(t=(0,a.useState)(4),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,l=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],n=i[1];return a.createElement("div",{className:"bill-cost-page"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square",style:{marginTop:"18vh"}},"2")),a.createElement("div",{className:"middle-col"},a.createElement("p",{className:"middle-col-header",style:{height:"60%"}},"BILL COST"),a.createElement("div",{className:"bill-cost-input",style:{height:"9.5%"}},a.createElement("span",{className:"dollar"},"$"),a.createElement("input",{type:"text",value:e.billCost,placeholder:1.23,style:{width:l+"ch"},onChange:function(t){return function(t){for(var r=t.target.value,i=0,l=0;l<r.length&&"."!==r[l];l++)i+=1;if(i<=4){if(""===r||/^[.0-9\b]+$/.test(r)){if(r.includes(".")){var a=r.indexOf(".");r.length-a<=3||(r=r.slice(0,a+3))}("0"!==r.charAt(0)||"0"===r.charAt(0)&&"."==r.charAt(1)||"0"===r.charAt(0)&&1==r.length)&&e.setBillCost(r)}n(r.length)}}(t)}}))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"30%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"19.5%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))},d=function(e){return a.createElement("div",{className:"bill-period-page"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square",style:{marginTop:"18vh"}},"3")),a.createElement("div",{className:"middle-col"},a.createElement("div",{className:"middle-col-header",style:{height:"60%"}},a.createElement("p",null,"BILL PERIOD")),a.createElement("div",{className:"bill-period-page-input",style:{height:"7%"}},a.createElement("input",{type:"text",value:e.billPeriod,onChange:function(t){return function(t){var r=t.target.value;(""===r||/^[0-9\b]+$/.test(r))&&(r.length>1&&"0"===r.charAt(0)||e.setBillPeriod(r))}(t)},maxLength:"3",placeholder:"30"}),a.createElement("p",{className:"days"},"DAYS"))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"30%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"19.5%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))},g=function(e){return a.createElement("div",{className:"housemate-quantity"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square",style:{marginTop:"18vh"}},"4")),a.createElement("div",{className:"middle-col"},a.createElement("div",{className:"middle-col-header",style:{height:"60%"}},a.createElement("p",null,"NUMBER OF",a.createElement("br",null),"HOUSEMATES")),a.createElement("div",{className:"housemates-input",style:{height:"7.5%"}},a.createElement("input",{type:"text",value:e.housemateCount,onChange:function(t){return function(t){var r=t.target.value;(""===r||/^[0-9\b]+$/.test(r))&&(r.length>1&&"0"===r.charAt(0)||e.setHousemateCount(r))}(t)},maxLength:"1",placeholder:"2"}))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"30%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"20%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}const f=function(e){var t,r,i=(t=(0,a.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,l=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],n=i[1];return(0,a.useEffect)((function(){e.person.stay>e.billPeriod?n(!0):n(!1)}),[e.person.stay]),a.createElement("div",{className:"housemate"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square",style:{marginTop:"18vh"}},"5")),a.createElement("div",{className:"middle-col"},a.createElement("div",{className:"middle-col-header",style:{height:"60%"}},a.createElement("p",null,e.person.name," STAY")),a.createElement("div",{className:"housemate-input",style:{height:"7.5%"}},a.createElement("input",{id:"Stay_Input_"+e.person.key,type:"text",name:"period",value:e.person.stay,onChange:function(t){return e.handleChange(t,e.person.key)},maxLength:"3",placeholder:"30",style:{color:l?"red":"#000"}}),a.createElement("p",{className:"days"},"DAYS"))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"30%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"20%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))},u=function(e){return a.createElement("div",{className:"results-page"},a.createElement("div",{className:"left-col"},a.createElement("p",{className:"hover square"},"6")),a.createElement("div",{className:"middle-col"},a.createElement("div",{className:"middle-col-header",style:{height:"80%"}},a.createElement("p",null,"RESULTS"))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"40%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow",style:{height:"7.5%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))},p=function(e){return a.createElement("div",{className:"results-row"},a.createElement("div",{className:"left-col"}),a.createElement("div",{className:"middle-col"},a.createElement("div",{className:"results-list"},a.createElement("p",null,a.createElement("span",{className:"name"},e.name),a.createElement("br",null),"$",e.owes.toFixed(2)))),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow",style:{height:"32%"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"900",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}})),a.createElement("svg",{className:"arrow-connector",style:{height:"2px"}},a.createElement("line",{x1:"20",y1:"0",x2:"20",y2:"300",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}),a.createElement("line",{x1:-e.width/3,y1:"0",x2:"20",y2:"0",style:{stroke:"rgb(0,0,0)",strokeWidth:"1"}}))))};function y(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=E(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,n=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw n}}}}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,l=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw n}}return r}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function N(){var e=b((0,a.useState)(window.innerWidth),2),t=e[0],r=(e[1],b((0,a.useState)(window.innerHeight),2)),i=r[0],l=(r[1],b((0,a.useState)(250),2)),n=l[0],o=l[1],c=b((0,a.useState)(30),2),m=c[0],w=c[1],v=b((0,a.useState)(2),2),E=v[0],k=v[1],N=b((0,a.useState)([]),2),j=N[0],z=N[1],S=b((0,a.useState)(),2),W=S[0],O=S[1];function A(e){return["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"][e]}var I=function(){for(var e=[],t=0;t<E;t++){var r={key:t,name:"HOUSEMATE ".concat(A(t)),stay:30,owes:0,ratio:0};e.push(r)}z(e)};(0,a.useEffect)((function(){I()}),[E]);var q=function(e,t){var r=e.target.value;(""===r||/^[0-9\b]+$/.test(r))&&(r.length>1&&"0"===r.charAt(0)||z(j.map((function(r){return r.key===t?x(x({},r),{},{stay:e.target.value}):r}))))},C=function(e,r,l){var n,o=0,s=y(l);try{for(s.s();!(n=s.n()).done;){var c=n.value;o=parseInt(o+parseInt(c.stay))}}catch(e){s.e(e)}finally{s.f()}var h,d=y(l);try{for(d.s();!(h=d.n()).done;){var g=h.value;g.ratio=g.stay/o*100}}catch(e){d.e(e)}finally{d.f()}var m,f=l.map((function(e){return x({},e)})),u=y(f);try{for(u.s();!(m=u.n()).done;){var w=m.value;w.owes=parseFloat(e*w.ratio/100)}}catch(e){u.e(e)}finally{u.f()}var v,b=[],E=y(f);try{for(E.s();!(v=E.n()).done;){var k=v.value;b.push(a.createElement(p,{key:k.key,name:k.name,owes:k.owes,width:t,height:i}))}}catch(e){E.e(e)}finally{E.f()}O(b)};(0,a.useEffect)((function(){C(n,0,j)}),[j]);var B=j.map((function(e){return a.createElement(f,{height:i,width:t,key:e.key,person:e,setPerson:z,handleChange:q,BillBuster:C,billPeriod:m})}));return a.createElement("div",{className:"app-container dark"},a.createElement("div",{className:"splash-page sticky"},a.createElement("div",{className:"left-col"}),a.createElement("div",{className:"middle-col"},a.createElement("p",{className:"logo"},"BILL BUSTER")),a.createElement("div",{className:"right-col"},a.createElement("svg",{className:"arrow"},a.createElement("line",{x1:"20",y1:"150",x2:"20",y2:"800",style:{stroke:"rgb(255,255,255)",strokeWidth:"1"}}),a.createElement("line",{x1:"20",y1:"150",x2:"27",y2:"160",style:{stroke:"rgb(255,255,255)",strokeWidth:"1"}}),a.createElement("line",{x1:"20",y1:"150",x2:"13",y2:"160",style:{stroke:"rgb(255,255,255)",strokeWidth:"1"}})),a.createElement("p",{className:"swipe"},"Swipe"))),a.createElement(s,{height:i,width:t}),a.createElement(h,{billCost:n,setBillCost:o,height:i,width:t}),a.createElement(d,{billPeriod:m,setBillPeriod:w,height:i,width:t}),a.createElement(g,{height:i,width:t,housemateCount:E,setHousemateCount:k,handleHousemates:I}),0==B?null:B,a.createElement(u,{height:i,width:t,quantity:E,results:W}),W,a.createElement("div",{className:"spacer"}))}(0,o.render)(a.createElement(N,null),document.getElementById("root"))},99:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(705),l=r.n(i)()((function(e){return e[1]}));l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap);"]),l.push([e.id,'.dark{background:#f2f2f7;color:#1c1c1e}body{font-family:"Roboto",sans-serif;background-color:#f2f2f7;margin:0 auto;height:100vh;width:100vw}.app-container{width:100%;height:auto;min-height:100vh}.hover{z-index:1000;position:-webkit-sticky;position:sticky;top:22vh}.square{width:1.2rem;height:1.2rem;margin:0 0 0 5vw;text-align:center;color:#57909d;border:1px solid #57909d}.splash-page{width:100%;height:83vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center;background-color:#57909d;color:#f2f2f7}.splash-page .left-col{width:15vw;height:100%}.splash-page .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.splash-page .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.splash-page .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.splash-page .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.splash-page .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.splash-page .arrow{height:100%;width:100%}.splash-page .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.splash-page.sticky{z-index:1000;position:-webkit-sticky;position:sticky;top:-62vh}.splash-page .logo{width:6ch;font-size:48px;font-weight:400;position:absolute;top:59vh;left:13vw}.splash-page .swipe{position:relative;bottom:55vh;left:-10.5vw;margin:0;transform:rotate(270deg);font-weight:300;font-size:22px}.about-page{width:100%;height:100vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.about-page .left-col{width:15vw;height:100%}.about-page .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.about-page .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.about-page .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.about-page .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.about-page .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.about-page .arrow{height:100%;width:100%}.about-page .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.bill-cost-page{width:100%;height:100vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.bill-cost-page .left-col{width:15vw;height:100%}.bill-cost-page .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.bill-cost-page .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.bill-cost-page .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.bill-cost-page .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.bill-cost-page .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.bill-cost-page .arrow{height:100%;width:100%}.bill-cost-page .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.bill-cost-page .bill-cost-input{display:flex;justify-content:center;align-items:center;width:100%;margin:-15vh 0 0 0;padding:0 1rem 0 5ch;z-index:500;text-align:justify;position:relative}.bill-cost-page .bill-cost-input .dollar{margin:0;padding:0;align-self:center;font-size:3rem;font-weight:300;text-align:right;background-color:#f2f2f7}.bill-cost-page .bill-cost-input input{width:50vw;border:0;margin:0;padding:0;vertical-align:middle;background-color:#f2f2f7;color:#1c1c1e;font-size:3rem;font-family:"Roboto",sans-serif;font-weight:300;text-align:right;overflow:visible;text-align:left !important;font-weight:100}.bill-cost-page .bill-cost-input input:focus{outline:none}.bill-period-page{width:100%;height:100vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.bill-period-page .left-col{width:15vw;height:100%}.bill-period-page .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.bill-period-page .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.bill-period-page .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.bill-period-page .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.bill-period-page .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.bill-period-page .arrow{height:100%;width:100%}.bill-period-page .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.bill-period-page .middle-col-header{background-color:#f2f2f7}.bill-period-page .bill-period-page-input{display:flex;justify-content:center;align-items:center;width:100%;margin:-13.7vh 0 0 0;padding:0 1rem 0 1rem;z-index:500;text-align:justify;position:relative}.bill-period-page .bill-period-page-input .days{align-self:center;margin:0;padding:0;font-size:3rem;font-weight:100;text-align:right;background-color:#f2f2f7}.bill-period-page .bill-period-page-input input{align-self:center;width:3ch;border:0;margin:0;padding:0;vertical-align:middle;background-color:#f2f2f7;color:#1c1c1e;font-size:3rem;font-family:"Roboto",sans-serif;font-weight:300;text-align:right;overflow:visible}.bill-period-page .bill-period-page-input input:focus{outline:none}.housemate-quantity{width:100%;height:100vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.housemate-quantity .left-col{width:15vw;height:100%}.housemate-quantity .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.housemate-quantity .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.housemate-quantity .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.housemate-quantity .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.housemate-quantity .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.housemate-quantity .arrow{height:100%;width:100%}.housemate-quantity .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.housemate-quantity .middle-col-header>p{font-size:2.2rem;background-color:#f2f2f7;text-align:right}.housemate-quantity .housemates-input{display:flex;justify-content:center;align-items:flex-start;width:100%;margin:-13.5vh 0 0 0;padding:0 1rem 0 0;z-index:500;text-align:justify;position:relative}.housemate-quantity .housemates-input input{align-self:center;width:3ch;border:0;margin:0;padding:0;vertical-align:middle;background-color:#f2f2f7;color:#1c1c1e;font-size:3rem;font-family:"Roboto",sans-serif;font-weight:300;text-align:right;overflow:visible;font-weight:300}.housemate-quantity .housemates-input input:focus{outline:none}.housemate{width:100%;height:100vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.housemate .left-col{width:15vw;height:100%}.housemate .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.housemate .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.housemate .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.housemate .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.housemate .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.housemate .arrow{height:100%;width:100%}.housemate .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.housemate .middle-col-header{background-color:#f2f2f7;margin-right:1vw}.housemate .housemate-input{display:flex;justify-content:center;align-items:center;width:100%;margin:-13.5vh 0 0 0;padding:0 0 0 1rem;z-index:500;text-align:justify;position:relative}.housemate .housemate-input .days{align-self:center;margin:0;padding:0;font-size:3rem;font-weight:100;text-align:right;background-color:#f2f2f7}.housemate .housemate-input input{width:3ch;border:0;margin:0;padding:0;vertical-align:middle;background-color:#f2f2f7;color:#1c1c1e;font-size:3rem;font-family:"Roboto",sans-serif;font-weight:300;text-align:right;overflow:visible;align-self:center}.housemate .housemate-input input:focus{outline:none}.results-page{width:100%;height:25vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center;margin-top:20vh}.results-page .left-col{width:15vw;height:100%}.results-page .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.results-page .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.results-page .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.results-page .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.results-page .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.results-page .arrow{height:100%;width:100%}.results-page .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.results-page .middle-col-header>p{font-size:3rem;padding-left:.5rem;background-color:#f2f2f7}.results-row{width:100%;height:10vh;display:flex;flex-wrap:nowrap;flex-direction:row;align-content:center}.results-row .left-col{width:15vw;height:100%}.results-row .middle-col{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start;flex-grow:1;width:70vw;height:100%}.results-row .middle-col-header{display:flex;justify-content:center;align-items:center;width:auto;height:auto;margin:0;padding:0 1rem 0 1rem;z-index:500;text-align:right;position:relative;background-color:#f2f2f7;font-weight:300;font-size:2.5rem}.results-row .middle-col-text{display:flex;justify-content:center;align-items:center;width:100%;z-index:500;text-align:justify;position:relative;font-weight:100;font-size:1rem}.results-row .middle-col-text .limit-width{max-width:30ch;padding:0 1rem 0 1rem;background-color:#f2f2f7}.results-row .right-col{width:15vw;height:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:flex-start;align-content:flex-start}.results-row .arrow{height:100%;width:100%}.results-row .arrow-connector{z-index:200;height:auto;width:100%;position:relative;overflow:visible;margin:0}.results-row .results-list{display:flex;justify-content:center;align-items:flex-start;text-align:justify;position:relative}.results-row .results-list>p{background-color:#f2f2f7;width:100%;margin:0 0 0 0;padding:0 1rem 0 1rem;z-index:500;font-size:1.5rem;font-weight:100;text-align:right}.results-row .results-list>p>.name{font-weight:300}.spacer{height:30vh}',""]);const n=l}},t={};function r(i){if(t[i])return t[i].exports;var l=t[i]={id:i,exports:{}};return e[i](l,l.exports,r),l.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[361,462]],i=e=>{},l=(l,n)=>{for(var a,o,[s,c,h,d]=n,g=0,m=[];g<s.length;g++)o=s[g],r.o(e,o)&&e[o]&&m.push(e[o][0]),e[o]=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);for(h&&h(r),l&&l(n);m.length;)m.shift()();return d&&t.push.apply(t,d),i()},n=self.webpackChunkBillBuster=self.webpackChunkBillBuster||[];function a(){for(var i,l=0;l<t.length;l++){for(var n=t[l],a=!0,o=1;o<n.length;o++){var s=n[o];0!==e[s]&&(a=!1)}a&&(t.splice(l--,1),i=r(r.s=n[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),i}n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n));var o=r.x;r.x=()=>(r.x=o||(e=>{}),(i=a)())})(),r.x()})();