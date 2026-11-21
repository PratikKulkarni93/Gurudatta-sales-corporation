(function(){
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
var pg=document.createElement("div");pg.className="ux-progress";document.body.appendChild(pg);
var wa=document.createElement("a");wa.className="ux-fab ux-wa";wa.href="https://wa.me/917841974497?text="+encodeURIComponent("Hello Gurudatta Sales Corporation, I would like to enquire about your products.");wa.target="_blank";wa.rel="noopener";wa.setAttribute("aria-label","Chat on WhatsApp");wa.innerHTML='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>';
var up=document.createElement("button");up.className="ux-fab ux-up";up.setAttribute("aria-label","Back to top");up.innerHTML="&#8593;";
up.onclick=function(){scrollTo({top:0,behavior:rm?"auto":"smooth"})};
document.body.appendChild(wa);document.body.appendChild(up);
function onScroll(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;pg.style.transform="scaleX("+(m>0?scrollY/m:0)+")";up.classList.toggle("on",scrollY>500);var hd=document.querySelector("header.main");if(hd)hd.classList.toggle("scrolled",scrollY>20)}
addEventListener("scroll",onScroll,{passive:true});onScroll();
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);var b=e.target.matches(".stats > *")?e.target.querySelector("b"):null;if(b)count(b)}})},{threshold:.12,rootMargin:"0px 0px -40px 0px"}):null;
function count(b){var t=b.textContent.trim(),m=t.match(/^(\d[\d,]*)(.*)$/);if(!m||rm)return;var n=+m[1].replace(/,/g,""),s=m[2],st=null;function f(ts){st=st||ts;var p=Math.min((ts-st)/1100,1),v=Math.round(n*(1-Math.pow(1-p,3)));b.textContent=v.toLocaleString("en-IN")+s;if(p<1)requestAnimationFrame(f)}b.textContent="0"+s;requestAnimationFrame(f)}
function scan(root){if(!io||rm)return;root.querySelectorAll(".card,.pj,.person,.stats > *,.panel,.team,.credit,.tbl,section .wrap>h2,section .wrap>.eyebrow,.alt-bg .wrap>p,.alt-bg .wrap>.btn,.tabs").forEach(function(el,i){if(el.dataset.ux)return;el.dataset.ux=1;el.classList.add("ux-rev");el.style.transitionDelay=Math.min(i%8,7)*60+"ms";io.observe(el)})}
scan(document);new MutationObserver(function(){scan(document)}).observe(document.body,{childList:true,subtree:true});
})();
/* close mega menus after a choice (fixes menu staying open on click/tap) */
(function(){
function closeAll(){document.querySelectorAll(".nav>ul>li").forEach(function(li){if(li.querySelector(".mega"))li.classList.add("mega-off")});if(document.activeElement&&document.activeElement.blur)document.activeElement.blur()}
document.addEventListener("click",function(e){
var inMega=e.target.closest(".mega a");
if(inMega){closeAll();return}
var top=e.target.closest(".nav>ul>li>a");
if(top){var li=top.parentElement;if(li.classList.contains("mega-off")){document.querySelectorAll(".mega-off").forEach(function(x){x.classList.remove("mega-off")});li.classList.remove("mega-off")}}
else if(!e.target.closest(".nav")){document.querySelectorAll(".nav>ul>li").forEach(function(li){li.classList.add("mega-off")});if(document.activeElement&&document.activeElement.blur&&e.target.closest("header")===null)document.activeElement.blur()}
},true);
document.querySelectorAll(".nav>ul>li").forEach(function(li){li.addEventListener("mouseleave",function(){li.classList.remove("mega-off")});li.addEventListener("mouseenter",function(){li.classList.remove("mega-off")})});
})();

/* v1.11: gentle cursor parallax on the hero furniture cards (desktop only) */
(function(){
var st=document.querySelector(".hx-stage");
if(!st||matchMedia("(prefers-reduced-motion: reduce)").matches||!matchMedia("(hover:hover) and (min-width:861px)").matches)return;
var h=document.querySelector(".hero.hx"),raf=0;
h.addEventListener("mousemove",function(e){
var r=h.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){st.style.setProperty("--px",x.toFixed(3));st.style.setProperty("--py",y.toFixed(3))})});
h.addEventListener("mouseleave",function(){st.style.setProperty("--px",0);st.style.setProperty("--py",0)});
})();
