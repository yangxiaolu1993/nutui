import{c as s}from"./mobile.118e3176.js";import{a as t,s as e,x as a,r as o,o as l,c as n,f as r,q as c,j as d}from"./vendor.3b1206fa.js";import"./index.b50eb255.js";const{createDemo:u}=s("overlay");var h=u({props:{},setup:()=>({state:t({show:!1,show2:!1})})});const p=c();e("data-v-61ce3514");const w={class:"demo"},i=r("h2",null,"基础用法",-1),f=d("显示遮罩层"),m=r("h2",null,"嵌套内容",-1),v=d("嵌套内容"),_=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);a();const b=p(((s,t,e,a,c,d)=>{const u=o("nut-button"),h=o("nut-overlay"),b=o("nut-cell");return l(),n("div",w,[i,r(b,null,{default:p((()=>[r(u,{type:"primary",onClick:t[1]||(t[1]=t=>s.state.show=!0)},{default:p((()=>[f])),_:1}),r(h,{show:s.state.show,"onUpdate:show":t[2]||(t[2]=t=>s.state.show=t),"z-index":2e3},null,8,["show"])])),_:1}),m,r(b,null,{default:p((()=>[r(u,{type:"success",onClick:t[3]||(t[3]=t=>s.state.show2=!0)},{default:p((()=>[v])),_:1}),r(h,{show:s.state.show2,"onUpdate:show":t[4]||(t[4]=t=>s.state.show2=t),"z-index":2e3},{default:p((()=>[_])),_:1},8,["show"])])),_:1})])}));h.render=b,h.__scopeId="data-v-61ce3514";export default h;
