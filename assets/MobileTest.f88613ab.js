import{u as b,a as w}from"./useMobile.154f641c.js";import{D as r,Z as N,o as c,p as k,M as l,h as n,w as e,l as i,i as P,g as x,C,v as V,n as o}from"./vendor.e93d7830.js";const W={class:"d-flex flex-column align-center"},y={class:"d-flex flex-column"},I=o("Vibrate 200ms"),B=o("Vibrate with pattern"),S=o("Request notification permission"),A=o("Non persistent notification"),z=o("Persistent notification"),M=o("Share"),j=o("Intent"),D={setup(q){b();const{isMobile:u}=w(),f=()=>navigator.vibrate(200),d=()=>navigator.vibrate([100,50,100,50,200]),h=()=>{if(!("Notification"in window)){alert("Notification API not supported!");return}Notification.requestPermission()},s=r(Notification.permission),p=()=>{new Notification("Hi there - non-persistent!")},g=r(null);N(async()=>{let t=await navigator.serviceWorker.getRegistration();g.value=t});const v=()=>{if(s.value==="granted")navigator.serviceWorker.ready.then(function(t){t.showNotification("Vibration Sample",{body:"Buzz! Buzz!",icon:"./img/icons/favicon-32x32.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"})});else try{navigator.serviceWorker.getRegistration().then(t=>t.showNotification("Hi there - persistent!")).catch(t=>alert("Service Worker registration error: "+t))}catch(t){alert("Notification API error: "+t)}},_=()=>{if(!("share"in navigator)){alert("Web Share API not supported.");return}navigator.share({title:"Vue 3 Tailwind Vite Project",text:"A public testing playground",url:"https://gcpiarrou.github.io/vue3-tailwind-vite-project/"}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing:",t))},m=()=>{if(!("Intent"in window)){alert("Web Intents API not supported.");return}var t=new Intent("https://gcpiarrou.github.io/vue3-tailwind-vite-project/");navigator.startActivity(t,function(){console.log("Successful share")},function(a){console.log("Error sharing:",a)})};return(t,a)=>(c(),k("div",W,[l("div",y,[n(i,{class:"ma-2",onClick:f},{default:e(()=>[I]),_:1}),n(i,{class:"ma-2",onClick:d},{default:e(()=>[B]),_:1}),n(i,{class:"ma-2",onClick:h},{default:e(()=>[S]),_:1}),P(u)?C("",!0):(c(),x(i,{key:0,class:"ma-2",onClick:p},{default:e(()=>[A]),_:1})),n(i,{class:"ma-2",onClick:v},{default:e(()=>[z]),_:1}),n(i,{class:"ma-2",onClick:_},{default:e(()=>[M]),_:1}),n(i,{class:"ma-2",onClick:m},{default:e(()=>[j]),_:1})]),l("span",null,"Notification permissions: "+V(s.value),1)]))}};export{D as default};