(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1816:function(e,t,n){Promise.resolve().then(n.bind(n,9068))},9068:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var s=n(7437),r=n(2265),o=JSON.parse('[{"text":"Familiar with basic Python syntax and data types (strings, integers, lists, dictionaries).","type":"Beginner"},{"text":"Can write simple functions and use control flow statements (if, for, while).","type":"Beginner"},{"text":"Understands the concept of variables and variable scope.","type":"Beginner"},{"text":"Can use basic Python libraries like <i>math</i> and <i>random</i>.","type":"Beginner"},{"text":"Knows how to handle errors and exceptions using try/except blocks.","type":"Beginner"},{"text":"Can read from and write to files.","type":"Beginner"},{"text":"Understands the basics of object-oriented programming: classes, objects, methods.","type":"Beginner"},{"text":"Can use basic string and list methods for manipulation.","type":"Beginner"},{"text":"Knows how to use basic Python data structures like lists, tuples, sets and dictionaries","type":"Beginner"},{"text":"Can write simple Python scripts to automate tasks.","type":"Beginner"},{"text":"Can use Python libraries like flask, numpy, pandas","type":"Advance"},{"text":"Understands and uses generators and decorators.","type":"Advance"},{"text":"Can write complex functions and classes with multiple methods and attributes.","type":"Advance"},{"text":"Understands and uses list comprehensions and lambda functions.","type":"Advance"},{"text":"Can use regular expressions for pattern matching in strings.","type":"Advance"},{"text":"Understands and uses context managers for resource management.","type":"Advance"},{"text":"Can use regular expressions for pattern matching in strings.","type":"Advance"},{"text":"Understands and uses context managers for resource management.","type":"Advance"},{"text":"Can use advanced Python data structures like sets and frozensets.","type":"Advance"},{"text":"Understands and uses Python\'s memory management and optimization techniques.","type":"Advance"},{"text":"Can use Python\'s built-in functions like map(), filter(), reduce()","type":"Advance"},{"text":"Understands and uses Python\'s module and package system.","type":"Advance"},{"text":"Understands and uses metaclasses and descriptors.","type":"Expert"},{"text":"Can write and understand asynchronous code using asyncio","type":"Expert"},{"text":"Understands and uses Python\'s concurrency and parallelism features.","type":"Expert"},{"text":"Can use Python\'s C API to extend Python with C/C++ code.","type":"Expert"},{"text":"Understands and uses Python\'s dynamic typing system to its full extent.","type":"Expert"},{"text":"Can write and understand complex decorators and context managers.","type":"Expert"},{"text":"Understands and uses Python\'s garbage collection system.","type":"Expert"},{"text":"Proficient in Python\'s debugging and profiling, using tools like pdb for debugging and cProfile for profiling to optimize code.","type":"Expert"},{"text":"Have a deep understanding of Python\'s Global Interpreter Lock (GIL) and how it affects multithreaded programs.","type":"Expert"},{"text":"Have a good understanding of Python\'s internals, such as bytecode, the Python interpreter\'s execution model, and how Python\'s data types are implemented at the C level.","type":"Expert"}]');function Question(e){let{question:t,onChecked:n}=e;return(0,s.jsxs)("div",{className:"flex py-2 font-light text-gray-700 hover:text-black",children:[(0,s.jsx)("div",{className:"flex h-6 items-center pe-4",children:(0,s.jsx)("input",{id:"q-".concat(t.id),name:"q-".concat(t.id),type:"checkbox",className:"focus:ring-none h-4 w-4 cursor-pointer rounded border-gray-300 accent-blue-800",checked:t.isChecked,onChange:e=>n(e.target.id,e.target.checked)})}),(0,s.jsx)("div",{children:(0,s.jsx)("label",{htmlFor:"q-".concat(t.id),dangerouslySetInnerHTML:{__html:t.text},className:"cursor-pointer"})})]})}function QuestionList(e){let{questions:t,questionTypes:n,onEvaluateClicked:r,onQuestionChecked:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"pt-16 text-lg font-light text-gray-700",children:"Sometimes you need to assess your own or a candidate's level of expertise in Python programming. Following statements roughly corresponds to varies level of expertise. A score will be calucalted at the end as a rough evaluation metric. After evaluation you will be able to download csv file to share."}),n.map(e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"pb-4 pt-10 text-xl font-normal",children:e}),(0,s.jsx)("div",{className:"",children:t.filter(t=>t.type==e).map(e=>(0,s.jsx)(Question,{question:e,onChecked:o},"".concat(e.id)))})]})),(0,s.jsx)("div",{className:"flex justify-center py-10",children:(0,s.jsx)("button",{type:"button",className:"rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",onClick:r,children:"Evaluate"})})]})}var a={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Z=e=>Object.assign({},a,e);let _=class _ extends Error{constructor(e){super(e),this.name="CsvGenerationError"}};let q=class q extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};let G=class G extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}};var W=e=>e,z=e=>e,H=e=>"object"==typeof e?W(e.key):W(e),D=e=>"object"==typeof e?W(e.displayLabel):W(e),F=(e,...t)=>t.reduce((e,t)=>t(e),e),K=e=>t=>e.useBom?W(z(t)+"\uFEFF"):t,L=e=>t=>e.showTitle?W(z(t)+e.title):t,O=e=>t=>W(z(e)+z(t)+"\r\n"),P=e=>(t,n)=>y(e)(W(t+n)),y=e=>t=>W(z(t)+e.fieldSeparator),E=(e,t)=>n=>{if(!e.showColumnHeaders)return n;if(t.length<1)throw new q("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let s=W("");for(let n=0;n<t.length;n++){let r=D(t[n]);s=P(e)(s,b(e,r))}return s=W(z(s).slice(0,-1)),O(n)(s)},R=(e,t,n)=>s=>{let r=s;for(var o=0;o<n.length;o++){let s=W("");for(let r=0;r<t.length;r++){let a=H(t[r]),i=void 0===n[o][z(a)]?e.replaceUndefinedWith:n[o][z(a)];s=P(e)(s,b(e,i))}s=W(z(s).slice(0,-1)),r=O(r)(s)}return r},V=e=>+e===e&&(!isFinite(e)||!!(e%1)),b=(e,t)=>{if("locale"===e.decimalSeparator&&V(t))return t.toLocaleString();if("."!==e.decimalSeparator&&V(t))return t.toString().replace(".",e.decimalSeparator);if("string"==typeof t){let n=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf("\n")>-1||t.indexOf("\r")>-1)&&(n=e.quoteCharacter+('"'==e.quoteCharacter&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t)+e.quoteCharacter),n}if("boolean"==typeof t&&e.boolDisplay){let n=t?"true":"false";return e.boolDisplay[n]}return t},Ix=e=>t=>{let n=Z(e),s=n.useKeysAsHeaders?Object.keys(t[0]):n.columnHeaders,r=F(W(""),K(n),L(n),E(n,s),R(n,s,t));if(z(r).length<1)throw new _("Output is empty. Is your data formatted correctly?");return r},Jx=e=>t=>{if(!window)throw new G("Downloading only supported in a browser environment.");let n=Z(e),s=z(t),r=n.useTextFile?"plain":"csv",o=n.useTextFile?"txt":"csv",a=new Blob([s],{type:`text/${r};charset=utf8;`}),i=document.createElement("a");i.download=`${n.filename}.${o}`,i.href=URL.createObjectURL(a),i.setAttribute("visibility","hidden"),document.body.appendChild(i),i.click(),document.body.removeChild(i)};let i=Z({useKeysAsHeaders:!0});function Result(e){let{questions:t,onBackClicked:n}=e,r=function(e){let t=e.filter(e=>e.isChecked),n=t.length/e.length*100;return parseInt(n.toString())}(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"pt-16 text-center text-lg font-normal text-gray-700",children:["Your score is ",(0,s.jsxs)("b",{className:"text-blue-800",children:[r,"/100"]})]}),(0,s.jsx)("div",{className:"pt-8 text-center font-light text-gray-700",children:"Click downalod to get a shareable csv file with results."}),(0,s.jsxs)("div",{className:"flex justify-center space-x-4 py-10",children:[(0,s.jsx)("button",{type:"button",className:"rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",onClick:n,children:"Back"}),(0,s.jsx)("button",{type:"button",className:"rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",onClick:function(){!function(e){let t=Ix(i)(e);Jx(i)(t)}(t)},children:"Download"})]})]})}function Home(){let[e,t]=(0,r.useState)(o.map((e,t)=>({...e,id:t,isChecked:!1}))),[n,a]=(0,r.useState)("questions");return(0,s.jsxs)("main",{className:"flex min-h-screen w-screen flex-col",children:[(0,s.jsxs)("div",{className:"mx-auto max-w-3xl grow px-8",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("img",{src:"/logo.svg",width:"250",className:"m-4",alt:"logo"}),(0,s.jsx)("div",{className:"text-center text-4xl font-bold",children:"Hey, let’s quickly self evaluate your Python expertise"})]}),"questions"==n?(0,s.jsx)(QuestionList,{questions:e,questionTypes:["Beginner","Advance","Expert"],onEvaluateClicked:function(){a("results")},onQuestionChecked:function(n,s){let r=parseInt(n.split("-")[1]),o=[...e];o[r].isChecked=s,t(o)}}):(0,s.jsx)(Result,{questions:e,onBackClicked:function(){a("questions")}})]}),(0,s.jsx)("div",{className:"flex justify-center py-10",children:(0,s.jsx)("div",{className:"font-light text-gray-500",children:(0,s.jsx)("a",{href:"https://github.com/xaventra/assess-python",children:"github.com/xaventra/assess-python"})})})]})}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(2265),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var s,o={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=1816)}),_N_E=e.O()}]);