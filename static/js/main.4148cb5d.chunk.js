(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("h2",null,"Your Wallet")}),o=n(2),i=n(7),m=n(3),s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(m.a)(Object(m.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},d={transactions:[{id:1,text:"Pizza",amount:-600},{id:2,text:"Groceries",amount:3e3},{id:3,text:"Gulab Wala",amount:-500},{id:4,text:"Haldirams",amount:-750}]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(s,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},b=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your Balance "),r.a.createElement("h1",{id:"balance"},"\u20b9 ",e))},p=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=Math.abs(e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0).toFixed(2));return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Recieved"),r.a.createElement("p",{id:"money-plus",className:"money plus"},"+ \u20b9",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Spent"),r.a.createElement("p",{id:"money-minus",className:"money minus"},"- \u20b9",n)))},v=function(e){var t=e.transaction,n=t.amount<0?"-":"+",c=t.amount<0?"minus":"plus",l=Object(a.useContext)(E).deleteTransaction;return r.a.createElement("li",{className:c},t.text,r.a.createElement("strong",null,r.a.createElement("span",null,n," \u20b9",Math.abs(t.amount))),r.a.createElement("button",{className:"delete-btn",onClick:function(){return l(t.id)}},"X"))},O=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"HISTORY"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},h=function(){var e=Object(a.useContext)(E).addTransaction,t=Object(a.useContext)(E).transactions,n=Object(a.useState)(""),c=Object(o.a)(n,2),l=c[0],u=c[1],i=Object(a.useState)(0),m=Object(o.a)(i,2),s=m[0],d=m[1],f=1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"ADD NEW TRANSACTION"),r.a.createElement("form",{id:"form"},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Description"),r.a.createElement("input",{type:"text",id:"text",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Diya Gave / Payed Shubh ..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("button",{id:"addBtn",className:"btn2",onClick:function(e){e.preventDefault(),f=1}},"+"),r.a.createElement("button",{id:"payBtn",className:"btn2",onClick:function(e){e.preventDefault(),f=-1}},"-"),r.a.createElement("input",{type:"number",id:"amount",value:s,onChange:function(e){return d(f*e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn",onClick:function(n){n.preventDefault();var a={id:t.length,text:l,amount:s};e(a)}},"Add Transaction")))};n(14);var x=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(O,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4148cb5d.chunk.js.map