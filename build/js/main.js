import g from"https://cdn.skypack.dev/dialog-polyfill@0.5.6";function u(l){l.keyCode===9&&(document.body.classList.add("user__is__tabbing"),window.removeEventListener("keydown",u))}window.addEventListener("keydown",u);document.addEventListener("DOMContentLoaded",function(){let l=document.querySelector(".parallax-placeholder"),n=document.querySelector(".footer-container"),d,o;window.addEventListener("resize",c),r(),s();function c(){r(),s()}function r(){}function s(){n.offsetHeight>window.innerHeight?(window.addEventListener("scroll",e),n.style.bottom="unset",n.style.top="0px"):(window.removeEventListener("scroll",e),n.style.top="unset",n.style.bottom="0px")}function e(){d=Math.round(l.getBoundingClientRect().top),i()}function i(){o||requestAnimationFrame(t),o=!0}function t(){o=!1,d<=0&&(n.style.top=`${d}px`)}});function a(l,n,d=!0){let o=document.querySelector(l),c=document.querySelector(n);if(!o||!c)return;typeof HTMLDialogElement!="function"&&g.registerDialog(o);let r=(e,i,t)=>{!i.target.closest(e)||t.close()},s=(e,i)=>{let t=i.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||i.close()};c.addEventListener("click",()=>{d?o.showModal():o.show()}),o.addEventListener("click",e=>{r(".close",e,o),s(e,o)})}a("#dialog-modal-gutter-cleaning","#show-dialog-modal-gutter-cleaning");a("#dialog-modal-residential","#show-dialog-modal-residential");a("#dialog-modal-commercial","#show-dialog-modal-commercial");a("#dialog-modal-hot-water","#show-dialog-modal-hot-water");a("#dialog-modal-insurance","#show-dialog-modal-insurance");
//# sourceMappingURL=main.js.map
