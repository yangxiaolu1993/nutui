System.register(["./mobile-legacy.1e8bb402.js","./vendor-legacy.01386dd6.js","./index-legacy.751e0676.js"],(function(e){"use strict";var l,a,u,t,n,o,d;return{setters:[function(e){l=e.c},function(e){a=e.m,u=e.r,t=e.o,n=e.e,o=e.j,d=e.g},function(){}],execute:function(){const{createDemo:r}=l("textarea");var m=e("default",r({setup:()=>({value:a(""),value2:a(""),value3:a("")})}));const s={class:"demo full"},c=d("h2",null,"基础用法",-1),i=d("h2",null,"显示字数统计",-1),v=d("h2",null,"高度自定义，拉伸",-1),h=d("h2",null,"只读",-1),V=d("h2",null,"禁用",-1);m.render=function(e,l,a,d,r,m){const f=u("nut-textarea");return t(),n("div",s,[c,o(f,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l)},null,8,["modelValue"]),i,o(f,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),v,o(f,{modelValue:e.value3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),h,o(f,{readonly:"","model-value":"textarea直读状态"}),V,o(f,{disabled:"","model-value":"textarea禁用状态","limit-show":"","max-length":"20"})])}}}}));