(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();window.onload=()=>{const a=document.querySelector("#textArea"),s=document.querySelector("#finalize"),u=document.querySelectorAll(".help"),i=document.querySelector("#justify-content"),e=document.querySelector("#align-items"),t=document.querySelector("#flex-direction"),c=()=>{const n=document.querySelector("#pond"),r=n.style.justifyContent==="center",o=n.style.flexFlow==="column-reverse wrap-reverse",f=n.style.flexDirection==="column-reverse",x=n.style.flexWrap==="wrap-reverse",p=n.style.alignContent==="space-between",y=document.querySelector("#finalize");return r&&o&&p||r&&f&&x&&p?(y.style.opacity="1.0",y.setAttribute="enabled",!0):(y.style.opacity="0.5",!1)};a.addEventListener("keyup",()=>{const n=document.querySelector("#pond"),r=a.value;n.style.cssText=r,c()}),s.addEventListener("click",()=>{c()&&alert("pode terminar")});const d=[i,e,t];let l=null;u.forEach(n=>n.addEventListener("click",r=>{const o=d.find(f=>n.textContent===f.id);l&&(l.style.display="none"),o.style.display="flex",l=o,document.addEventListener("click",m),r.stopPropagation()}));const m=n=>{d.some(o=>o.contains(n.target))||(d.forEach(o=>{o.style.display="none"}),l=null)}};
