/* ============ PROJECTS DATA ============
   To add a new project, copy one block below, change the text,
   put the photos in the images/ folder and list their file names.
   Each project = ONE card; all its photos open inside that card. */
var PROJECTS=[
{
loc:"Dharashiv, Maharashtra",
place:"Government Ayurvedic College",
logo:"dharashiv-ayurvedic.png",
title:"Auditorium Hall",
desc:"Auditorium seating installed at the Government Ayurvedic College, Dharashiv.",
images:["dharashiv-auditorium-4.jpg","dharashiv-auditorium-6.jpg","dharashiv-auditorium-5.jpg","dharashiv-auditorium-9.jpg","dharashiv-auditorium-7.jpg","dharashiv-auditorium-8.jpg","dharashiv-auditorium-3.jpg","dharashiv-auditorium-1.jpg","dharashiv-auditorium-2.jpg"]
},
{
loc:"Parbhani, Maharashtra",
place:"District Library",
logo:"parbhani-library.png",
title:"Library",
desc:"Library storage cupboards installed at the District Library, Parbhani.",
images:["parbhani-library-1.jpg","parbhani-library-2.jpg","parbhani-library-3.jpg","parbhani-library-4.jpg"]
},
{
loc:"Latur, Maharashtra",
place:"District Library",
logo:"latur-library.png",
title:"Library",
desc:"Library study desks with chairs installed at the District Library, Latur.",
images:["latur-library-2.jpg","latur-library-1.jpg","latur-library-3.jpg","latur-library-4.jpg","latur-library-5.jpg","latur-library-6.jpg"]
},
{
loc:"Amravati, Maharashtra",
place:"District Library",
logo:"amravati-library.png",
title:"Library",
desc:"Library desks with glass partitions installed at the District Library, Amravati.",
images:["amravati-library-2.jpg","amravati-library-3.jpg","amravati-library-4.jpg","amravati-library-1.jpg"]
},
{
loc:"Chhatrapati Sambhajinagar, Maharashtra",
place:"Tribal Caste Validity Office - 1",
logo:"sambhajinagar-tribal.png",
title:"Office",
desc:"Office tables, chairs and steel almirah installed at the Tribal Caste Validity Office, Chhatrapati Sambhajinagar.",
images:["sambhajinagar-tribal-2.jpg","sambhajinagar-tribal-3.jpg","sambhajinagar-tribal-4.jpg","sambhajinagar-tribal-1.jpg","sambhajinagar-tribal-5.jpg","sambhajinagar-tribal-6.jpg"]
},
{
loc:"Chhatrapati Sambhajinagar, Maharashtra",
place:"Tribal Caste Validity Office - 2",
logo:"sambhajinagar-tribal.png",
title:"Office",
desc:"Office tables, chairs and steel almirah installed at the Tribal Caste Validity Office, Chhatrapati Sambhajinagar.",
images:["sambhajinagar-tribal2-1.jpg","sambhajinagar-tribal2-2.jpg","sambhajinagar-tribal2-3.jpg","sambhajinagar-tribal2-4.jpg"]
},
{
loc:"Amravati, Maharashtra",
place:"Skill Development Office",
logo:"amravati-skill.png",
title:"Office",
desc:"Hall seating, conference table, workstations and reception counter installed at the Skill Development Office, Amravati.",
images:["amravati-skill-6.jpg","amravati-skill-5.jpg","amravati-skill-2.jpg","amravati-skill-3.jpg","amravati-skill-4.jpg","amravati-skill-1.jpg"]
},
{
loc:"Nandurbar, Maharashtra",
place:"Civil Hospital",
logo:"nandurbar-hospital.png",
title:"Hospital Furniture",
desc:"Steel almirahs, hostel beds, stainless steel dining tables with stools and waste bins supplied to the Civil Hospital, Nandurbar.",
images:["nandurbar-hospital-9.jpg","nandurbar-hospital-7.jpg","nandurbar-hospital-6.jpg","nandurbar-hospital-8.jpg","nandurbar-hospital-3.jpg","nandurbar-hospital-4.jpg","nandurbar-hospital-5.jpg","nandurbar-hospital-1.jpg","nandurbar-hospital-2.jpg"]
}
];

/* Logos: put each district logo in images/logos/ named like the district (see images/logos/README.txt).
   Order tried: district logo -> Maharashtra state logo -> coloured initials badge. */
function pjSlug(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function pjParts(loc){var a=loc.split(","),st=(a.pop()||"").trim();return{dist:a.join(",").trim(),state:st}}
function pjInit(t){var w=t.split(/\s+/);return(w.length>1?w[0][0]+w[1][0]:t.slice(0,2)).toUpperCase()}
function pjLogoErr(im){
 var st=im.getAttribute("data-state");
 if(st&&!im.getAttribute("data-tried")){im.setAttribute("data-tried","1");im.src="images/logos/"+st+".png";return}
 var s=document.createElement("span");s.className="pjmono";s.textContent=im.getAttribute("data-init");
 im.parentNode.replaceChild(s,im)}
function pjLogo(p){var q=pjParts(p.loc),f=p.logo||(pjSlug(q.dist)+".png");
 return'<span class="pjlogo" title="'+p.place+', '+q.dist+'"><img alt="'+p.place+' logo" src="images/logos/'+f+'" data-state="'+pjSlug(q.state)+'" data-init="'+pjInit(q.dist)+'" onerror="pjLogoErr(this)"></span>'}
function projHtml(){
 if(!PROJECTS.length)return'<p style="color:var(--mute)">Our project gallery is coming soon. Send an enquiry to ask for references.</p>';
 var seen={},chips=[],states={};
 PROJECTS.forEach(function(p){var q=pjParts(p.loc);states[q.state]=1;if(!seen[q.dist]){seen[q.dist]=1;chips.push(q.dist)}});
 var stl=Object.keys(states).join(", ");
 return'<p style="color:var(--mute);max-width:640px;margin-top:0">Places where Gurudatta Sales Corporation has supplied furniture. Open a project to see all its photos.</p>'
 +'<div class="pjsum"><b>'+stl+'</b><span>'+chips.length+' districts</span>'+chips.map(function(d){return'<i>'+d+'</i>'}).join("")+'</div>'
 +'<div class="grid3">'+PROJECTS.map(function(p,i){var q=pjParts(p.loc);
  return'<div class="card pj" role="button" tabindex="0" data-proj="'+i+'" aria-label="Open '+p.title+', '+p.loc+'"><div class="pjimg"><img loading="lazy" alt="'+p.title+', '+p.place+'" src="images/'+p.images[0]+'">'+pjLogo(p)+'<span class="pjn">'+p.images.length+' photos</span></div><div class="b"><div class="pjloc"><b>'+q.dist+'</b><span>'+q.state+'</span></div><h3>'+p.title+'</h3><p>'+p.place+'</p></div></div>'}).join("")+'</div>'}

(function(){
 var cur=0,idx=0,box=null;
 function build(){
  box=document.createElement("div");box.className="lb";box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");
  box.innerHTML='<div class="lbin"><button class="lbx" aria-label="Close">&times;</button><div class="lbh"></div><div class="lbm"><button class="lbp" aria-label="Previous photo">&#8249;</button><img alt=""><button class="lbq" aria-label="Next photo">&#8250;</button></div><div class="lbc"></div><div class="lbt"></div></div>';
  document.body.appendChild(box);
  box.addEventListener("click",function(e){
   if(e.target===box||e.target.classList.contains("lbx"))close();
   else if(e.target.classList.contains("lbp"))go(idx-1);
   else if(e.target.classList.contains("lbq"))go(idx+1);
   else if(e.target.dataset&&e.target.dataset.t!==undefined)go(+e.target.dataset.t)});
 }
 function go(n){var p=PROJECTS[cur],L=p.images.length;idx=(n+L)%L;
  box.querySelector(".lbm img").src="images/"+p.images[idx];
  box.querySelector(".lbc").textContent=(idx+1)+" / "+L;
  [].forEach.call(box.querySelectorAll(".lbt img"),function(t,i){t.classList.toggle("on",i===idx)})}
 function open(i){cur=i;var p=PROJECTS[i];if(!box)build();
  box.querySelector(".lbh").innerHTML='<b>'+p.title+'</b><span>'+p.place+' · '+p.loc+'</span>';
  box.querySelector(".lbt").innerHTML=p.images.map(function(f,k){return'<img data-t="'+k+'" alt="Photo '+(k+1)+'" src="images/'+f+'">'}).join("");
  box.classList.add("on");document.body.style.overflow="hidden";go(0)}
 function close(){if(box)box.classList.remove("on");document.body.style.overflow=""}
 document.addEventListener("click",function(e){var c=e.target.closest("[data-proj]");if(c)open(+c.dataset.proj)});
 document.addEventListener("keydown",function(e){
  var c=e.target.closest&&e.target.closest("[data-proj]");
  if(c&&(e.key=="Enter"||e.key==" ")){e.preventDefault();open(+c.dataset.proj);return}
  if(!box||!box.classList.contains("on"))return;
  if(e.key=="Escape")close();else if(e.key=="ArrowLeft")go(idx-1);else if(e.key=="ArrowRight")go(idx+1)});
 window.addEventListener("hashchange",close);
})();
