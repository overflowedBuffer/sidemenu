import{_ as e,a,b as o,h as l}from"./main-header.a1504962.js";import{b as n,p as t,q as s,h as i,o as r,c,i as m,a as p}from"./vendor.fd000bd2.js";const u={components:{sideMenu:e,navIcon:a,mainHeader:o},layout:"mobileMain",setup(){const e=s("emitter"),a=n(null);let o;return t((()=>{console.log(a.value),a.value&&(o=l(a.value)),console.log(o),o.on("swiperight",(a=>{console.log("swipe right"),e.emit("openmenu",a)})),o.on("panright",(a=>e.emit("partialopen",a))),o.on("panstart",(a=>e.emit("partialopen",a))),o.on("panend",(a=>e.emit("partialopen",a))),o.on("panleft",(a=>e.emit("partialopen",a)))})),{root:a,hammer:o,emitter:e}},methods:{logshit(e){console.log(e)}}},d={class:"block h-screen"},f={class:"flex flex-col justify-items-center h-screen",ref:"root",style:{height:"calc(var(--vh, 1vh) * 100)"}},h=p(),v={id:"main",class:"w-full flex flex-col h-full"},g=m("div",{class:"w-full mb-2 h-9 flex flex-shrink-0"},"aaa ",-1),b={id:"nav",class:"bg-gray-50 w-full h-auto border-t py-1 sticky bottom-0 left-0 z-30 bg-white"};u.render=function(e,a,o,l,n,t){const s=i("mainHeader"),p=i("sideMenu"),u=i("router-view"),w=i("navIcon");return r(),c("div",d,[m("div",f,[m(s),h,m(p,{ref:"sidemenu"},null,512),m("div",v,[g,m(u)]),m("div",b,[m(w)])],512)])};export default u;
