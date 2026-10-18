const SK={"Programming":["Python","R","Java","JavaScript","SQL","HTML","CSS"],"Frontend":["React.js","Responsive design","Component-based UI","API integration"],"Analytics":["Excel","Data cleaning","EDA","Visualisation","Predictive analytics"],"Statistics":["Regression","Hypothesis testing","Feature engineering","Model evaluation"],"Data & ML":["ML fundamentals","Relational databases","Data pipelines","ETL concepts","Data quality"],"Tools":["GitHub","VS Code","Jupyter","RStudio","JSON","Git","Debugging"]};
const LV=[["Programming","Working Knowledge"],["Frontend development","Working Knowledge"],["Data analysis & statistics","Proficient"],["Data science & AI","Learning"],["Data engineering & databases","Learning"],["Developer tools","Proficient"]];
const PR=[{t:"Student Performance Analysis",k:"Statistics & Research",s:"In progress",d:"An exploratory study of how study habits and attendance relate to academic outcomes, using cleaning, correlation and regression in R.",g:["R","Statistics","Regression","EDA"],b:[40,62,48,80,66,90]},
{t:"Retail Sales Dashboard",k:"Dashboards & Visualisation",s:"Demo project",d:"A clean sales dashboard concept built to practise data modelling, KPI design and readable visual storytelling for non-technical readers.",g:["Python","Pandas","Visualisation"],b:[30,50,45,70,85,100]},
{t:"ML Prediction Prototype",k:"Machine Learning",s:"Learning project",d:"A learning prototype that trains and evaluates simple classification models, documenting features, metrics and honest limitations.",g:["Python","Scikit-learn","Classification"],b:[55,40,72,60,88,76]}];
const SV=[["⚙","Data cleaning & analysis","Messy spreadsheets turned into tidy, reliable datasets ready for decisions.","Data analysis help"],["∿","Statistical analysis","Regression, correlation and hypothesis testing, explained in plain language.","Data analysis help"],["▤","Excel reports & dashboards","Readable summaries and dashboards your team can actually use.","Hiring / project"],["◔","Data visualisation","Charts that make the pattern obvious at a glance.","Hiring / project"],["›_","Python scripts & automation","Small tools that remove repetitive manual work.","Hiring / project"],["▥","SQL query development","Queries and views that answer real business questions.","Hiring / project"]];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa="https://wa.me/"+CONFIG.phone.replace(/\D/g,"");
/* theme */
const root=document.documentElement,tb=$("#theme");
function setTheme(t){root.dataset.theme=t;tb.textContent=t==="dark"?"☾":"☀";try{localStorage.setItem("lk-theme",t)}catch(e){}}
let st=null;try{st=localStorage.getItem("lk-theme")}catch(e){}
setTheme(st||(matchMedia("(prefers-color-scheme:light)").matches?"light":"dark"));
tb.onclick=()=>setTheme(root.dataset.theme==="dark"?"light":"dark");
/* menu */
const nav=$("#nav"),mb=$("#menu");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"✕":"☰"};
$$("nav a,.hm").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");mb.textContent="☰";mb.setAttribute("aria-expanded",false)}));
/* socials, links */
const soc=[["✉ Email me","mailto:"+CONFIG.email,1],["WhatsApp",wa],["GitHub",CONFIG.github],["LinkedIn",CONFIG.linkedin]].filter(x=>x[1]);
$("#social").innerHTML=soc.map(([l,h,p])=>`<a class="btn ${p?"":"g"}" href="${h}" ${h.startsWith("http")?'target="_blank" rel="noopener"':""}>${l}</a>`).join("");
$("#fsoc").innerHTML=[["GH",CONFIG.github,"GitHub"],["in",CONFIG.linkedin,"LinkedIn"],["✉","mailto:"+CONFIG.email,"Email"],["WA",wa,"WhatsApp"]].filter(x=>x[1]).map(([l,h,n])=>`<a class="btn ic" aria-label="${n}" href="${h}" ${h.startsWith("http")?'target="_blank" rel="noopener"':""}>${l}</a>`).join("");
$("#cm").textContent=CONFIG.email;$("#cm").href="mailto:"+CONFIG.email;$("#cw").textContent="WhatsApp — "+CONFIG.phoneLabel;$("#cw").href=wa;$("#cw").target="_blank";$("#cg").textContent=CONFIG.ghLabel;$("#cg").href=CONFIG.github;
$$("[data-gh]").forEach(a=>a.href=CONFIG.github);$("#yr").textContent=new Date().getFullYear();
/* skills */
const cats=["All",...Object.keys(SK)];
$("#tabs").innerHTML=cats.map((c,i)=>`<button class="tab ${i?"":"on"}" role="tab" aria-selected="${!i}">${c}</button>`).join("");
function showTags(c){$("#tags").innerHTML=(c==="All"?Object.values(SK).flat():SK[c]).map(t=>`<span class="tag">${t}</span>`).join("")}
showTags("All");
$$(".tab").forEach(b=>b.onclick=()=>{$$(".tab").forEach(x=>{x.classList.remove("on");x.setAttribute("aria-selected",false)});b.classList.add("on");b.setAttribute("aria-selected",true);showTags(b.textContent)});
$("#lv").innerHTML=LV.map(([a,b])=>`<li><b>${a}</b> · ${b}</li>`).join("");
/* projects */
$("#projects").innerHTML=PR.map((p,i)=>`<article class="card rv"><div class="thumb" aria-hidden="true">${p.b.map(h=>`<i style="height:${h}%"></i>`).join("")}</div><div class="meta"><span>${p.k}</span><span>2026</span></div><h3>${p.t}</h3><p>${p.d}</p><div class="tags" style="min-height:0;margin-bottom:16px">${p.g.map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="lk"><button data-p="${i}">Case study →</button><a href="${CONFIG.github}" target="_blank" rel="noopener">Repo ↗</a></div></article>`).join("");
const dlg=$("#dlg");
$$("[data-p]").forEach(b=>b.onclick=()=>{const p=PR[b.dataset.p];$("#dm").textContent=p.k+" · "+p.s;$("#dt").textContent=p.t;$("#dd").textContent=p.d;$("#dl").innerHTML=["Status: "+p.s+" — results are not final.","Tools: "+p.g.join(", ")+".","Full write-up and findings will be added as the work is completed."].map(x=>`<li>${x}</li>`).join("");$("#dg").href=CONFIG.github;dlg.showModal()});
$("#dx").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
/* services -> form */
$("#svc").innerHTML=SV.map(([i,t,d,q])=>`<button class="card sv rv" data-q="${q}" data-sub="${t}"><span>${i}</span><h3>${t}</h3><p>${d}</p></button>`).join("");
const sel=$("#t"),sub=$("#s");
function goForm(q,s){if(q)sel.value=q;if(s&&!sub.value)sub.value=s;$("#message").scrollIntoView({behavior:"smooth"});setTimeout(()=>$("#n").focus({preventScroll:true}),600)}
$$(".sv").forEach(b=>b.onclick=()=>goForm(b.dataset.q,"Enquiry: "+b.dataset.sub));
$$("[data-inq]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();goForm(a.dataset.inq)}));
/* form */
const m=$("#m");m.oninput=()=>$("#cnt").textContent=m.value.length+"/500";
const rules={n:v=>v.trim().length>1||"Please enter your name.",e:v=>/^\S+@\S+\.\S+$/.test(v)||"Enter a valid email address.",t:v=>!!v||"Choose an inquiry type.",s:v=>v.trim().length>2||"Add a short subject.",m:v=>v.trim().length>=10||"Please write at least 10 characters."};
function chk(id){const el=$("#"+id),r=rules[id](el.value),f=el.closest(".f");f.classList.toggle("bad",r!==true);$(".err",f).textContent=r===true?"":r;return r===true}
Object.keys(rules).forEach(id=>$("#"+id).addEventListener("blur",()=>chk(id)));
$("#form").addEventListener("submit",e=>{e.preventDefault();const okF=Object.keys(rules).map(chk).every(Boolean),okA=$("#a").checked;$("#aerr").textContent=okA?"":"Please tick the consent box to continue.";if(!okF||!okA)return;
const body=`Name: ${$("#n").value}\nEmail: ${$("#e").value}\nCompany: ${$("#c").value||"-"}\nType: ${sel.value}\n\n${m.value}`;
location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(sub.value)}&body=${encodeURIComponent(body)}`;
const o=$("#ok");o.style.display="block";o.textContent="Thank you, "+$("#n").value.trim().split(" ")[0]+"! Your email app should open with the message ready to send. If it does not, write to "+CONFIG.email+" directly.";e.target.reset();$("#cnt").textContent="0/500"});
/* scroll: spy, top button, reveal */
const secs=$$("main section[id]"),links=$$("nav a"),tp=$("#top");
addEventListener("scroll",()=>{tp.classList.toggle("show",scrollY>600);let c="";secs.forEach(s=>{if(scrollY+140>=s.offsetTop)c=s.id});if(c==="message")c="contact";links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+c))},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
$$(".rv").forEach(x=>io.observe(x));

let mine={photo:"",gallery:[]},GL=[],li=0;
const DB={open:()=>new Promise((ok,no)=>{const r=indexedDB.open("lk-media",1);r.onupgradeneeded=()=>r.result.createObjectStore("k");r.onsuccess=()=>ok(r.result);r.onerror=no}),
async get(){try{const d=await DB.open();return await new Promise(r=>{const q=d.transaction("k").objectStore("k").get("m");q.onsuccess=()=>r(q.result);q.onerror=()=>r()})}catch(e){}},
async set(v){try{const d=await DB.open();d.transaction("k","readwrite").objectStore("k").put(v,"m")}catch(e){}}};
const shrink=f=>new Promise(res=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const s=Math.min(1,1400/Math.max(i.width,i.height)),c=document.createElement("canvas");c.width=i.width*s;c.height=i.height*s;c.getContext("2d").drawImage(i,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.82))};i.src=r.result};r.readAsDataURL(f)});
function paint(){const p=mine.photo||MEDIA.photo,im=$("#phi");if(p){im.src=p;im.hidden=false;$("#phe").hidden=true}else{im.hidden=true;$("#phe").hidden=false}
GL=[...MEDIA.gallery.map(x=>({...x,own:0})),...mine.gallery.map((x,i)=>({...x,own:1,i}))];
$("#gal").innerHTML=GL.length?GL.map((x,k)=>`<figure class="gi"><button data-k="${k}" aria-label="Open photo ${k+1}"><img src="${x.src}" alt="${x.cap||"Gallery photo "+(k+1)}" loading="lazy"></button>${x.cap?`<figcaption>${x.cap}</figcaption>`:""}${MEDIA.edit&&x.own?`<button class="rm" data-i="${x.i}" aria-label="Remove photo">✕</button>`:""}</figure>`).join(""):`<div class="gempty">No photos yet.${MEDIA.edit?" Use “Add photos” to insert your images.":""}</div>`}
if(MEDIA.edit)$$("[data-edit]").forEach(e=>e.hidden=false);
$("#phf").onchange=async e=>{if(e.target.files[0]){mine.photo=await shrink(e.target.files[0]);DB.set(mine);paint()}e.target.value=""};
$("#gf").onchange=async e=>{for(const f of e.target.files)mine.gallery.push({src:await shrink(f)});DB.set(mine);paint();e.target.value=""};
const lb=$("#lb");
function show(k){li=(k+GL.length)%GL.length;$("#lbi").src=GL[li].src;$("#lbi").alt=GL[li].cap||"Gallery photo";$("#lbc").textContent=GL[li].cap||""}
$("#gal").addEventListener("click",e=>{const r=e.target.closest(".rm");if(r){mine.gallery.splice(+r.dataset.i,1);DB.set(mine);paint();return}const b=e.target.closest("[data-k]");if(b){show(+b.dataset.k);lb.showModal()}});
$("#lp").onclick=()=>show(li-1);$("#ln").onclick=()=>show(li+1);$("#lx").onclick=()=>lb.close();
lb.addEventListener("click",e=>{if(e.target===lb)lb.close()});
addEventListener("keydown",e=>{if(!lb.open)return;if(e.key==="ArrowLeft")show(li-1);if(e.key==="ArrowRight")show(li+1)});
paint();DB.get().then(v=>{if(v){mine=v;paint()}});
/* network background */
$$("canvas.net").forEach(cv=>{const x=cv.getContext("2d");let W,H,P=[];const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=Array.from({length:Math.min(55,W/22|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
function d(){x.clearRect(0,0,W,H);const ac=getComputedStyle(root).getPropertyValue("--ac").trim();x.fillStyle=ac;x.strokeStyle=ac;
P.forEach((p,i)=>{if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
x.globalAlpha=.8;x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],dd=Math.hypot(p.x-q.x,p.y-q.y);if(dd<130){x.globalAlpha=(1-dd/130)*.35;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
if(!rm)requestAnimationFrame(d)}
rs();d();addEventListener("resize",()=>{rs();if(rm)d()})});
