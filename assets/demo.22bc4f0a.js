import{c as e}from"./mobile.118e3176.js";import{a,s as l,x as o,r as t,o as n,c as s,f as r,q as d}from"./vendor.3b1206fa.js";import"./index.b50eb255.js";const{createDemo:c}=e("textarea");var u=c({setup(){const e=a({val0:"",val1:"初始数据"});setTimeout((function(){e.val1="异步测试数据，2秒"}),2e3);return{state:e,change:e=>{console.log("change: ",e)}}}});const m=d();l("data-v-1a007613");const h={class:"demo-nopading"},i=r("h2",null,"基础用法",-1),p=r("h2",null,"显示字数统计",-1),v=r("h2",null,"只读",-1);o();const g=m(((e,a,l,o,d,c)=>{const u=t("nut-textarea");return n(),s("div",h,[i,r(u,{modelValue:e.state.val0,"onUpdate:modelValue":a[1]||(a[1]=a=>e.state.val0=a),onChange:e.change,rows:"10",placeholder:"高度可拉伸",autosize:!0,label:"留言："},null,8,["modelValue","onChange"]),p,r(u,{modelValue:e.state.val1,"onUpdate:modelValue":a[2]||(a[2]=a=>e.state.val1=a),onChange:e.change,rows:"5","limit-show":!0,"max-length":"20",placeholder:"设置输入五行",label:"留言："},null,8,["modelValue","onChange"]),v,r(u,{readonly:"true",rows:"5",placeholder:"只读",label:"留言："})])}));u.render=g,u.__scopeId="data-v-1a007613";export default u;
