import{c as e}from"./mobile.1b7061a1.js";import{a as s,m as o,B as r,C as t,r as a,o as l,e as i,g as d,j as n,k as p,J as u,l as c}from"./vendor.3379a4e5.js";import"./index.d8e175d8.js";const{createDemo:v}=e("circleprogress");var g=v({props:{},setup(){const e=s({radius:50,strokeOutWidth:10,backColor:"#d9d9d9",progressColor:"red"}),r=o(50),t=o(10);return{progressOption:e,isAuto:o(!0),setAddVal:()=>{t.value=10,r.value>=100||(r.value+=10)},setReduceVal:()=>{if(r.value-10<=0)return t.value=0,void(r.value=0);r.value-=10},percent:r}}});r("data-v-57d9cb92");const m={class:"demo full"},_=d("h2",null,"基础用法",-1),f={class:"demo__piece"},k=d("h2",null,"环形进度条自定义样式",-1),h={class:"demo__piece"},b=d("h2",null,"环形进度条自定义内容",-1),C={class:"demo__piece"},j=c("自定义"),y=d("h2",null,"动态改变环形进度条的进度",-1),A={class:"demo__piece"},O={class:"demo__btn"},V=c("减少"),w=c("增加");t(),g.render=function(e,s,o,r,t,c){const v=a("nut-circleprogress"),g=a("nut-button");return l(),i("div",m,[_,d("div",f,[n(v,{progress:10})]),k,d("div",h,[n(v,{progress:50,"progress-option":e.progressOption},null,8,["progress-option"])]),b,d("div",C,[n(v,{progress:50,"is-auto":e.isAuto},{default:p((()=>[u(e.$slots,"default",{},(()=>[j]),{})])),_:3},8,["is-auto"])]),y,d("div",A,[n(v,{progress:e.percent,"progress-option":e.progressOption,"stroke-inner-width":e.strokeInnerWidth},null,8,["progress","progress-option","stroke-inner-width"])]),d("div",O,[n(g,{type:"primary",onClick:e.setReduceVal},{default:p((()=>[V])),_:1},8,["onClick"]),n(g,{type:"primary",onClick:e.setAddVal},{default:p((()=>[w])),_:1},8,["onClick"])])])},g.__scopeId="data-v-57d9cb92";export{g as default};