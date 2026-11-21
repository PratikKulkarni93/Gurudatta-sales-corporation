/* ============ ABOUT PAGE EXTRAS + CERTIFICATIONS ============
   TO ADD A CERTIFICATE: put the image (jpg/png) in images/certificates/
   and add one line below, e.g.
   {t:"ISO 9001:2015",by:"Issuing body",y:"2024",img:"images/certificates/iso-9001.jpg"},
   Optional: pdf:"images/certificates/iso-9001.pdf" adds an "Open PDF" button.
   Delete the three "to be added" placeholder lines once real ones are in. */
var CERTS=[
{t:"Certificate name",by:"Issuing authority",y:"",img:"",ph:1},
{t:"Certificate name",by:"Issuing authority",y:"",img:"",ph:1},
{t:"Certificate name",by:"Issuing authority",y:"",img:"",ph:1}
];
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var SEAL='<svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.6 7 22l5-2.8 5 2.8-1.6-8.4"/><path d="m9.8 9 1.6 1.6L14.4 7.6"/></svg>';
function aboutFacts(){
var F=[["Government supplier","Supplying offices, institutions and public projects"],["Own manufacturing","Furniture made in-house, built for everyday use"],["Wide range","Seating, tables, storage, hostel, hospital and lab furniture"],["Based in","Garkheda Parisar, Chhatrapati Sambhajinagar"]];
return'<div class="afacts">'+F.map(function(f){return'<div class="afact"><b>'+f[0]+'</b><span>'+f[1]+'</span></div>'}).join("")+'</div>'}
function certTeaser(){return'<a class="cert-tease" href="#" data-go="certifications"><i>'+SEAL+'</i><span><h3>Certifications</h3><em>See the certificates held by Gurudatta Sales Corporation</em></span><u>View all certifications &rarr;</u></a>'}
function certPage(){
var h='<p style="max-width:720px;color:var(--mute)">Quality and compliance certificates held by Gurudatta Sales Corporation. Select any certificate to view it in full.</p><div class="cert-grid">';
h+=CERTS.map(function(c,i){return'<button type="button" class="cert-card" data-cert="'+i+'" aria-label="View '+esc(c.t)+'"><span class="cert-thumb">'+(c.img?'<img loading="lazy" alt="'+esc(c.t)+'" src="'+esc(c.img)+'">':'<span class="cert-ph">'+SEAL+'<small>Certificate to be added</small></span>')+'</span><span class="cert-meta"><b>'+esc(c.t)+'</b><em>'+esc([c.by,c.y].filter(Boolean).join(" · "))+'</em></span></button>'}).join("");
return h+'</div><p><a class="btn alt" href="#" data-go="about">&larr; Back to About us</a></p>'}
/* lightbox */
(function(){
var box,cur=0,last=null;
function build(){box=document.createElement("div");box.className="cert-lb";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-label","Certificate viewer");
box.innerHTML='<button class="lb-x" type="button" aria-label="Close">&times;</button><button class="lb-n lb-p" type="button" aria-label="Previous certificate">&#8249;</button><figure><div class="lb-img"></div><figcaption></figcaption></figure><button class="lb-n lb-f" type="button" aria-label="Next certificate">&#8250;</button>';
document.body.appendChild(box);
box.addEventListener("click",function(e){if(e.target===box||e.target.closest(".lb-x"))close();else if(e.target.closest(".lb-p"))go(-1);else if(e.target.closest(".lb-f"))go(1)})}
function show(){var c=CERTS[cur];box.querySelector(".lb-img").innerHTML=c.img?'<img alt="'+esc(c.t)+'" src="'+esc(c.img)+'">':'<div class="cert-ph big">'+SEAL+'<small>Certificate image will appear here</small></div>';
box.querySelector("figcaption").innerHTML='<b>'+esc(c.t)+'</b><span>'+esc([c.by,c.y].filter(Boolean).join(" · "))+'</span>'+(c.pdf?'<a class="btn alt" href="'+esc(c.pdf)+'" target="_blank" rel="noopener">Open PDF</a>':'')+'<em>'+(cur+1)+' / '+CERTS.length+'</em>';
box.classList.toggle("single",CERTS.length<2)}
function open(i){if(!box)build();cur=i;last=document.activeElement;show();box.hidden=false;document.documentElement.classList.add("lb-open");box.querySelector(".lb-x").focus()}
function close(){box.hidden=true;document.documentElement.classList.remove("lb-open");if(last&&last.focus)last.focus()}
function go(d){cur=(cur+d+CERTS.length)%CERTS.length;show()}
document.addEventListener("click",function(e){var b=e.target.closest(".cert-card");if(b)open(+b.dataset.cert)});
document.addEventListener("keydown",function(e){if(!box||box.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")go(-1);else if(e.key==="ArrowRight")go(1)});
addEventListener("hashchange",function(){if(box&&!box.hidden)close()});
})();
