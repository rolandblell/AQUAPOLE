import g from"https://cdn.skypack.dev/dialog-polyfill@0.5.6";function u(d){d.keyCode===9&&(document.body.classList.add("user__is__tabbing"),window.removeEventListener("keydown",u))}window.addEventListener("keydown",u);document.addEventListener("DOMContentLoaded",function(){let d=document.querySelector(".parallax-placeholder"),n=document.querySelector(".footer-container"),a,o;window.addEventListener("resize",c),r(),s();function c(){r(),s()}function r(){}function s(){n.offsetHeight>window.innerHeight?(window.addEventListener("scroll",e),n.style.bottom="unset",n.style.top="0px"):(window.removeEventListener("scroll",e),n.style.top="unset",n.style.bottom="0px")}function e(){a=Math.round(d.getBoundingClientRect().top),i()}function i(){o||requestAnimationFrame(t),o=!0}function t(){o=!1,a<=0&&(n.style.top=`${a}px`)}});function l(d,n,a=!0){let o=document.querySelector(d),c=document.querySelector(n);if(!o||!c)return;typeof HTMLDialogElement!="function"&&g.registerDialog(o);let r=(e,i,t)=>{!i.target.closest(e)||t.close()},s=(e,i)=>{let t=i.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||i.close()};c.addEventListener("click",()=>{a?o.showModal():o.show()}),o.addEventListener("click",e=>{r(".close",e,o),s(e,o)})}l("#dialog-modal-gutter-cleaning","#show-dialog-modal-gutter-cleaning");l("#dialog-modal-residential","#show-dialog-modal-residential");l("#dialog-modal-commercial","#show-dialog-modal-commercial");l("#dialog-modal-hot-water","#show-dialog-modal-hot-water");l("#dialog-modal-insurance","#show-dialog-modal-insurance");l("#dialog-modal-environment","#show-dialog-modal-environment");
//# sourceMappingURL=main.js.map
