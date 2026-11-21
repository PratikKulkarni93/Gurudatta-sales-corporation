/* ============ ABOUT PAGE EXTRAS + CERTIFICATIONS (v1.15) ============
   TO ADD A CERTIFICATE: put the image + pdf in images/certificates/ and add one object to CERTS.
   The card "cover" is designed from the fields below (the certificate picture is shown only when opened).
   k=icon key, g=filter group (qs / pc / gv), std=big title on the cover, wm=faint watermark,
   kind=what it is, what=one-line meaning, vl/vv=validity label+value shown on the card,
   rows=details list in the viewer, scope=text in the viewer. */
var CERTS=[
{k:"quality",g:"qs",std:"ISO 9001:2015",wm:"9001",kind:"Quality Management System",what:"Independently audited processes for consistent quality, from order to delivery.",by:"Paramount Quality Certifications",vl:"Valid till",vv:"14 Dec 2025",
 rows:[["Certificate no.","INQ/MH-13156/1222"],["Issued by","Paramount Quality Certifications (PQC)"],["Issued","15 Dec 2022"],["Valid till","14 Dec 2025"]],
 scope:"Installation and repair of office, lab and school furniture; supply of stationery and textile items; wholesale trading of furniture; civil, CCTV and electrical work.",
 img:"images/certificates/iso-9001.jpg",pdf:"images/certificates/iso-9001.pdf"},
{k:"safety",g:"qs",std:"ISO 45001:2018",wm:"45001",kind:"Occupational Health & Safety",what:"A safer workplace for the people who build and install our furniture.",by:"International Standards Certification",vl:"Valid till",vv:"17 Oct 2027",
 rows:[["Certificate no.","OHSAS/230620/2756"],["Issued by","International Standards Certification (ISC)"],["Issued","18 Oct 2024"],["Valid till","17 Oct 2027"]],
 scope:"Manufacturers and suppliers of all furniture: commercial, hospital, home, school, air cooler, steel and metal furniture.",
 img:"images/certificates/iso-45001.jpg",pdf:"images/certificates/iso-45001.pdf"},
{k:"eco",g:"qs",std:"ISO 14001:2015",wm:"14001",kind:"Environmental Management",what:"Responsible use of materials and care for the environment in how we work.",by:"International Standards Certification",vl:"Valid till",vv:"17 Oct 2027",
 rows:[["Certificate no.","EMS/230620/2755"],["Issued by","International Standards Certification (ISC)"],["Issued","18 Oct 2024"],["Valid till","17 Oct 2027"]],
 scope:"Manufacturers and suppliers of all furniture: commercial, hospital, home, school, air cooler, steel and metal furniture.",
 img:"images/certificates/iso-14001.jpg",pdf:"images/certificates/iso-14001.pdf"},
{k:"chair",g:"pc",std:"ANSI/BIFMA E3",wm:"E3",kind:"Furniture Sustainability Standard",what:"Our furniture is assessed against a recognised sustainability standard.",by:"U.S. Certification",vl:"Renewal due",vv:"17 Oct 2027",
 rows:[["Certificate no.","US-GTPS-24-183220"],["Standard","ANSI/BIFMA E3-2012"],["Issued by","U.S. Certification (IAB)"],["Certified","18 Oct 2024"],["Re-certification due","17 Oct 2027"]],
 scope:"Manufacturers and suppliers of all furniture: commercial, hospital, home, school, air cooler, steel and metal furniture.",
 img:"images/certificates/ansi-bifma-e3.jpg",pdf:"images/certificates/ansi-bifma-e3.pdf"},
{k:"rohs",g:"pc",std:"RoHS",wm:"RoHS",kind:"Restriction of Hazardous Substances",what:"Compliance with EU Directive 2011/65/EU on restricted hazardous substances.",by:"Target Quality Certifications",vl:"Valid till",vv:"23 Oct 2029",
 rows:[["Certificate no.","RGJ202610854"],["Directive","2011/65/EU, amended (EU) 2015/863"],["Issued by","Target Quality Certifications (TQC)"],["Issued","24 Oct 2026"],["Valid till","23 Oct 2029"]],
 scope:"Installation and repair of office, lab and school furniture; supply of stationery and textile items; wholesale trading of furniture; civil, CCTV and electrical work.",
 img:"images/certificates/rohs.jpg",pdf:"images/certificates/rohs.pdf"},
{k:"pwd",g:"gv",std:"PWD Class VII",wm:"VII",kind:"Government Contractor Registration",what:"Registered contractor with the Public Works Department, Maharashtra.",by:"Public Works Department, Maharashtra",vl:"Valid till",vv:"11 Jun 2027",
 rows:[["Registered with","Public Works Division, Chhatrapati Sambhajinagar"],["Class","VII"],["Work capacity","Up to \u20B910 lakh"],["Issued","12 Jun 2024"],["Valid till","11 Jun 2027"]],
 scope:"Contractor registration in the name of M/S Gurudatta Sales Corporation, Proprietor Mr. Prasad Dnyaneshwar Autade.",
 img:"images/certificates/pwd-contractor.jpg",pdf:"images/certificates/pwd-contractor.pdf"},
{k:"udyam",g:"gv",std:"Udyam Registration",wm:"MSME",kind:"Ministry of MSME, Government of India",what:"Officially registered as a Micro enterprise engaged in manufacturing.",by:"Ministry of MSME, Government of India",vl:"Registered",vv:"25 Apr 2022",
 rows:[["Udyam no.","UDYAM-MH-04-0072641"],["Enterprise type","Micro"],["Major activity","Manufacturing"],["Registered","25 Apr 2022"]],
 scope:"Manufacture of furniture, made-up textile articles and plywood products, with wholesale trade on a commission or contract basis.",
 img:"images/certificates/udyam.jpg",pdf:"images/certificates/udyam.pdf"}
];
var GRP=[["all","All"],["qs","Quality & safety"],["pc","Product compliance"],["gv","Government"]];
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var SEAL='<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.6 7 22l5-2.8 5 2.8-1.6-8.4"/><path d="m9.8 9 1.6 1.6L14.4 7.6"/></svg>';
function aboutFacts(){
var F=[["Government supplier","Supplying offices, institutions and public projects"],["Own manufacturing","Furniture made in-house, built for everyday use"],["Wide range","Seating, tables, storage, hostel, hospital and lab furniture"],["Based in","Garkheda Parisar, Chhatrapati Sambhajinagar"]];
return'<div class="afacts">'+F.map(function(f){return'<div class="afact"><b>'+f[0]+'</b><span>'+f[1]+'</span></div>'}).join("")+'</div>'}
var ICO={
quality:'<path d="M12 3.5l2.2 1.3 2.5-.2 1.2 2.2 2.1 1.4-.4 2.5 1 2.3-1.6 2-.2 2.5-2.4.8-1.6 2-2.4-.9-2.4.9-1.6-2-2.4-.8-.2-2.5-1.6-2 1-2.3-.4-2.5 2.1-1.4 1.2-2.2 2.5.2z"/><path d="M8.6 12.2l2.2 2.2 4.6-4.8"/>',
safety:'<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
eco:'<path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14"/><path d="M5 19c3-5 6-8 10-10"/>',
chair:'<path d="M7 4h10v7H7z"/><path d="M5 11h14v3H5z"/><path d="M7 14v6M17 14v6"/>',
rohs:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
pwd:'<path d="M3 9l9-5 9 5H3z"/><path d="M5.5 9v9M9.8 9v9M14.2 9v9M18.5 9v9M3 21h18"/>',
udyam:'<path d="M3 21V10l6 4v-4l6 4V6h3v15z"/><path d="M3 21h18"/>'};
function ico(k,s){return'<svg viewBox="0 0 24 24" width="'+(s||26)+'" height="'+(s||26)+'" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICO[k]+'</svg>'}
function certTeaser(){return'<a class="cert-tease" href="#" data-go="certifications"><i>'+SEAL+'</i><span><h3>Certifications</h3><em>ISO, RoHS, ANSI/BIFMA and government registrations held by Gurudatta Sales Corporation</em><span class="ct-chips">'+CERTS.map(function(c){return'<b>'+esc(c.std)+'</b>'}).join("")+'</span></span><u>View all certifications &rarr;</u></a>'}
function certPage(){
var iso=CERTS.filter(function(c){return/^ISO/.test(c.std)}).length,gv=CERTS.filter(function(c){return c.g=="gv"}).length;
var h='<p style="max-width:720px;color:var(--mute)">Quality, safety and compliance certificates held by Gurudatta Sales Corporation. Select any certificate to read the details and view it in full.</p>';
h+='<div class="cs-row"><div class="cs"><b data-n="'+CERTS.length+'">'+CERTS.length+'</b><span>Certificates</span></div><div class="cs"><b data-n="'+iso+'">'+iso+'</b><span>ISO standards</span></div><div class="cs"><b data-n="'+gv+'">'+gv+'</b><span>Government registrations</span></div></div>';
h+='<div class="cc-chips" role="group" aria-label="Filter certificates">'+GRP.map(function(g,i){return'<button type="button" class="cc-chip" data-g="'+g[0]+'" aria-pressed="'+(i==0)+'">'+g[1]+'</button>'}).join("")+'</div><div class="cert-grid">';
h+=CERTS.map(function(c,i){return'<button type="button" class="cert-card" data-cert="'+i+'" data-g="'+c.g+'" style="--i:'+i+'" aria-label="View '+esc(c.std+" – "+c.kind)+'"><span class="cc-cover"><span class="cc-wm" aria-hidden="true">'+esc(c.wm)+'</span><span class="cc-seal"><svg class="cc-ring" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46"/></svg>'+ico(c.k,30)+'</span><span class="cc-std">'+esc(c.std)+'</span><span class="cc-kind">'+esc(c.kind)+'</span><span class="cc-sheen" aria-hidden="true"></span></span><span class="cert-meta"><em class="cc-what">'+esc(c.what)+'</em><span class="cc-foot"><span><small>'+esc(c.vl)+'</small><b>'+esc(c.vv)+'</b></span><u>View &rarr;</u></span></span></button>'}).join("");
return h+'</div><p class="cc-empty" hidden>No certificates in this group.</p><p><a class="btn alt" href="#" data-go="about">&larr; Back to About us</a></p>'}
function trustStrip(){var el=document.getElementById("trust");if(!el)return;
var ch=CERTS.map(function(c){return'<a class="tr-chip" href="#" data-go="certifications"><i>'+ico(c.k,16)+'</i>'+esc(c.std)+'</a>'}).join("");
el.innerHTML='<div class="wrap tr-in"><span class="tr-l">Certified &amp; registered</span><div class="tr-mq"><div class="tr-track"><div class="tr-set">'+ch+'</div><div class="tr-set" aria-hidden="true">'+ch.replace(/<a /g,'<a tabindex="-1" ')+'</div></div></div><a class="tr-more" href="#" data-go="certifications">All certificates &rarr;</a></div>'}
trustStrip();
/* card motion: staggered reveal, ring draw, count-up, filter, pointer tilt */
(function(){
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("cc-in");io.unobserve(e.target);if(e.target.classList.contains("cs"))cnt(e.target.querySelector("b"))}})},{threshold:.15}):null;
function cnt(b){var n=+b.dataset.n;if(rm||!n)return;var st=null;function f(t){st=st||t;var p=Math.min((t-st)/900,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}b.textContent="0";requestAnimationFrame(f)}
function scan(){document.querySelectorAll(".cert-card:not([data-cc]),.cs:not([data-cc]),.cc-chips:not([data-cc])").forEach(function(el){el.dataset.cc=1;if(io&&!rm)io.observe(el);else el.classList.add("cc-in")})}
scan();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});
document.addEventListener("click",function(e){var c=e.target.closest(".cc-chip");if(!c)return;var g=c.dataset.g,w=c.parentNode;
[].forEach.call(w.children,function(x){x.setAttribute("aria-pressed",x===c)});var n=0;
[].forEach.call(document.querySelectorAll(".cert-card"),function(k){var on=g=="all"||k.dataset.g==g;k.hidden=!on;if(on){k.classList.remove("cc-pop");void k.offsetWidth;k.style.setProperty("--i",n++);k.classList.add("cc-pop")}});
var em=document.querySelector(".cc-empty");if(em)em.hidden=n>0});
if(fine&&!rm){var cur=null;
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".cert-card");if(cur&&cur!==c)rst(cur);cur=c;if(!c)return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
c.style.setProperty("--rx",((.5-y)*6).toFixed(2)+"deg");c.style.setProperty("--ry",((x-.5)*8).toFixed(2)+"deg");c.style.setProperty("--mx",(x*100).toFixed(1)+"%");c.style.setProperty("--my",(y*100).toFixed(1)+"%")});
function rst(c){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}
document.addEventListener("pointerleave",function(){if(cur)rst(cur)},true)}
})();
/* certificate viewer */
(function(){
var box,cur=0,last=null,tx=0;
function build(){box=document.createElement("div");box.className="cert-lb";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-label","Certificate viewer");
box.innerHTML='<button class="lb-x" type="button" aria-label="Close">&times;</button><button class="lb-n lb-p" type="button" aria-label="Previous certificate">&#8249;</button><figure><div class="lb-img" title="Click to zoom"></div><figcaption></figcaption></figure><button class="lb-n lb-f" type="button" aria-label="Next certificate">&#8250;</button>';
document.body.appendChild(box);
box.addEventListener("click",function(e){var im=e.target.closest(".lb-img");
if(im){var r=im.getBoundingClientRect();im.style.setProperty("--ox",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");im.style.setProperty("--oy",((e.clientY-r.top)/r.height*100).toFixed(1)+"%");im.classList.toggle("zoom");return}
if(e.target===box||e.target.closest(".lb-x"))close();else if(e.target.closest(".lb-p"))go(-1);else if(e.target.closest(".lb-f"))go(1)});
box.addEventListener("mousemove",function(e){var im=box.querySelector(".lb-img.zoom");if(!im)return;var r=im.getBoundingClientRect();im.style.setProperty("--ox",((e.clientX-r.left)/r.width*100).toFixed(1)+"%");im.style.setProperty("--oy",((e.clientY-r.top)/r.height*100).toFixed(1)+"%")});
box.addEventListener("touchstart",function(e){tx=e.changedTouches[0].clientX},{passive:true});
box.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>60&&!box.querySelector(".lb-img.zoom"))go(d<0?1:-1)},{passive:true})}
function show(dir){var c=CERTS[cur],f=box.querySelector("figure");
box.querySelector(".lb-img").classList.remove("zoom");
box.querySelector(".lb-img").innerHTML='<img alt="'+esc(c.std+" certificate")+'" src="'+esc(c.img)+'">';
box.querySelector("figcaption").innerHTML='<span class="lb-ico">'+ico(c.k,28)+'</span><b>'+esc(c.std)+'</b><span class="lb-kind">'+esc(c.kind)+'</span><p class="lb-what">'+esc(c.what)+'</p><dl>'+c.rows.map(function(r){return'<div><dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join("")+'</dl>'+(c.scope?'<p class="lb-scope"><small>Scope</small>'+esc(c.scope)+'</p>':'')+'<span class="lb-act">'+(c.pdf?'<a class="btn alt" href="'+esc(c.pdf)+'" target="_blank" rel="noopener">Open PDF</a>':'')+'<em>'+(cur+1)+' / '+CERTS.length+'</em></span>';
f.style.setProperty("--dir",(dir||0)*40+"px");f.classList.remove("lb-swap");void f.offsetWidth;f.classList.add("lb-swap");
var n=CERTS[(cur+1)%CERTS.length],p=new Image();p.src=n.img}
function open(i){if(!box)build();cur=i;last=document.activeElement;show(0);box.hidden=false;document.documentElement.classList.add("lb-open");box.querySelector(".lb-x").focus()}
function close(){box.hidden=true;document.documentElement.classList.remove("lb-open");if(last&&last.focus)last.focus()}
function go(d){cur=(cur+d+CERTS.length)%CERTS.length;show(d)}
document.addEventListener("click",function(e){var b=e.target.closest(".cert-card");if(b)open(+b.dataset.cert)});
document.addEventListener("keydown",function(e){if(!box||box.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")go(-1);else if(e.key==="ArrowRight")go(1);
else if(e.key==="Tab"){var f=[].filter.call(box.querySelectorAll("button,a[href]"),function(x){return x.offsetParent!==null});if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
addEventListener("hashchange",function(){if(box&&!box.hidden)close()});
})();
