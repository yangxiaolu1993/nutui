import{c as t}from"./mobile.1b7061a1.js";import{a as e,W as o,r as s,o as n,e as a,j as l}from"./vendor.3379a4e5.js";import"./index.d8e175d8.js";const{createDemo:i}=t("shortpassword");var r=i({setup(){let{proxy:t}=o();const s=e({visible:!1,noButton:!0,value:"",errorMsg:"",length:6}),n={onChange(e){e&&t.$toast.text(e)},onOk(e){e&&t.$toast.text(e),s.visible=!1},onComplete(){},onTips(){t.$toast.text("执行忘记密码逻辑")},close(){t.$toast.text("点击icon关闭弹窗")},cancel(){t.$toast.text("点击取消按钮关闭弹窗")}};return{state:s,methods:n}}});const m={class:"demo"};r.render=function(t,e,o,i,r,c){const u=s("nut-shortpassword"),d=s("nut-cell");return n(),a("div",m,[l(u,{modelValue:t.state.value,"onUpdate:modelValue":e[0]||(e[0]=e=>t.state.value=e),visible:t.state.visible,"onUpdate:visible":e[1]||(e[1]=e=>t.state.visible=e),"no-button":t.state.noButton,length:t.state.length,"error-msg":t.state.errorMsg,onChange:t.methods.onChange,onComplete:t.methods.onComplete,onOk:t.methods.onOk,onTips:t.methods.onTips,onClose:t.methods.close,onCancel:t.methods.cancel},null,8,["modelValue","visible","no-button","length","error-msg","onChange","onComplete","onOk","onTips","onClose","onCancel"]),l(d,{title:"基础用法","is-link":"",onClick:e[2]||(e[2]=e=>{t.state.visible=!0,t.state.noButton=!0,t.state.length=6,t.state.errorMsg=""})}),l(d,{title:"显示按钮组","is-link":"",onClick:e[3]||(e[3]=e=>{t.state.visible=!0,t.state.noButton=!1,t.state.length=6,t.state.errorMsg=""})}),l(d,{title:"自定义密码长度4","is-link":"",onClick:e[4]||(e[4]=e=>{t.state.visible=!0,t.state.noButton=!0,t.state.length=4,t.state.errorMsg=""})}),l(d,{title:"忘记密码提示语事件回调","is-link":"",onClick:e[5]||(e[5]=e=>{t.state.visible=!0,t.state.length=6,t.state.errorMsg="",t.state.noButton=!0})}),l(d,{title:"错误提示语","is-link":"",onClick:e[6]||(e[6]=e=>{t.state.visible=!0,t.state.length=6,t.state.noButton=!0,t.state.errorMsg="请输入正确密码"})})])};export{r as default};