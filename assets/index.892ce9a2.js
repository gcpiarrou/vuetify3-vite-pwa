import{c as v,a as g,u as w,b as E,d as I,e as O,f as T,g as m,h as y,w as d,i as c,V as L,o as b,j as l,k as A,l as k,m as P,n as R,p as V,q as x,r as S,s as W}from"./vendor.cc39b7be.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};N();const C="modulepreload",f={},F="./",n=function(t,i){return!i||i.length===0?t():Promise.all(i.map(s=>{if(s=`${F}${s}`,s in f)return;f[s]=!0;const e=s.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":C,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((p,D)=>{a.addEventListener("load",p),a.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},_=()=>n(()=>import("./Router.c3c9e660.js"),["assets/Router.c3c9e660.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),H=()=>n(()=>import("./Welcome.7c48da56.js"),["assets/Welcome.7c48da56.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),$=()=>n(()=>import("./Router.c3c9e660.js"),["assets/Router.c3c9e660.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),M=()=>n(()=>import("./WindowData.c3482c4d.js"),["assets/WindowData.c3482c4d.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),q=()=>n(()=>import("./Misc.d686c6f1.js"),["assets/Misc.d686c6f1.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),B=()=>n(()=>import("./Toasts.dcd8808a.js"),["assets/Toasts.dcd8808a.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),j=()=>n(()=>import("./Notification.3abd074f.js"),["assets/Notification.3abd074f.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]),K=()=>n(()=>import("./Router.c3c9e660.js"),["assets/Router.c3c9e660.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]);var Q=[{path:"/home/",name:"home",component:_,meta:{text:"Home",parentText:"Home",icon:"fas fa-home",visibleInDrawer:!1},children:[{path:"welcome",component:H,name:"home-welcome",meta:{text:"Welcome",icon:"fas fa-home",visibleInDrawer:!0}}]},{path:"/testing/",name:"testing",component:K,meta:{text:"Index",parentText:"Testing",icon:"fas fa-vial",visibleInDrawer:!1},children:[{path:"toast-test",name:"toast-test",component:B,meta:{text:"Toasts",icon:"fas fa-bread-slice",visibleInDrawer:!0}},{path:"notification-test",name:"notification-test",component:j,meta:{text:"Notifications",icon:"fas fa-bell",visibleInDrawer:!0}},{path:"window-data",name:"window-data",component:M,meta:{text:"Window data",icon:"fas fa-desktop",visibleInDrawer:!0}},{path:"misc-test",name:"misc-test",component:q,meta:{text:"Misc",icon:"fas fa-briefcase",visibleInDrawer:!0}}]},{path:"/logout",name:"logout",component:_,meta:{text:"Logout",icon:"power-off",visibleInDrawer:!1}},{path:"/:catchAll(.*)",component:$}];const U=[...Q],z=v({history:g(),routes:U}),G=w("(min-width: 1024px)"),J=w("(prefers-color-scheme: dark)");var h=E("isDark",J);const X=I({state(){return{auth:{user:{username:"",mail:""}},drawer:{isOpen:G},app:{isDark:h,name:"Cooking app"}}},mutations:{openDrawer(o){o.drawer.isOpen=!0},closeDrawer(o){o.drawer.isOpen=!1},toggleDrawer(o){o.drawer.isOpen=!o.drawer.isOpen},setDrawer(o,t){o.drawer.isOpen=t},setTheme(o,t){o.app.isDark=t,h=t}}});function Y(){const o=O(),t=T(()=>o.state.app.isDark),i=e=>o.commit("setTheme",e);return{isDark:t,toggleIsDark:()=>{i(!t.value)}}}const Z={setup(o){const{isDark:t}=Y(),i=m(()=>n(()=>import("./AppBar.f47d0c6a.js"),["assets/AppBar.f47d0c6a.js","assets/useDrawer.a2eff0e0.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"])),s=m(()=>n(()=>import("./Drawer.0936cecf.js"),["assets/Drawer.0936cecf.js","assets/useDrawer.a2eff0e0.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"])),e=m(()=>n(()=>import("./ReloadPWA.341ab602.js"),["assets/ReloadPWA.341ab602.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css","assets/plugin-vue_export-helper.21dcd24c.js"])),r=m(()=>n(()=>import("./Router.c3c9e660.js"),["assets/Router.c3c9e660.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.cc39b7be.js","assets/vendor.c3069acb.css"]));return(a,p)=>(b(),y(L,{theme:c(t)?"dark":"light",style:{height:"100vh"}},{default:d(()=>[l(c(i)),l(c(s)),l(c(e)),l(A,null,{default:d(()=>[l(c(r))]),_:1})]),_:1},8,["theme"]))}};async function ee(){(await n(()=>import("./webfontloader.f5e2b0ed.js").then(function(t){return t.w}),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const te={};ee();const oe=k({components:P,directives:R,icons:{defaultSet:"fa",aliases:V,sets:{fa:x}}}),u=S(Z);u.use(oe);u.use(z);u.use(X);u.use(W,te);u.mount("#app");export{Y as u};