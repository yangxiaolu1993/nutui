import{c as e}from"./mobile.fb93db1a.js";import{_ as l}from"./index.ccbbeb9f.js";import{m as s,r as n,e as r,j as a,k as t,g as u,o as c}from"./vendor.9cc7b6f2.js";const{createDemo:o}=e("price"),d=o({setup(){const e=s(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}}),i={class:"demo"},m=u("h2",null,"基本用法",-1),p=u("h2",null,"有人民币符号，无千位分隔",-1),f=u("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),b=u("h2",null,"异步随机变更",-1);var h=l(d,[["render",function(e,l,s,u,o,d){const h=n("nut-price"),v=n("nut-cell");return c(),r("div",i,[m,a(v,null,{default:t((()=>[a(h,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),p,a(v,null,{default:t((()=>[a(h,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),f,a(v,null,{default:t((()=>[a(h,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),b,a(v,null,{default:t((()=>[a(h,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])}]]);export{h as default};