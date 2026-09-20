(()=>{
"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const get=(o,p)=>p.split(".").reduce((a,k)=>a&&a[k],o),cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),z=v=>String(v).padStart(2,"0");
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
if("scrollRestoration" in history)history.scrollRestoration="manual";scrollTo(0,0);
let seed=0,R=[];

/* image helpers (placeholder if a file is missing) */
function ph(n){const hu=[32,28,36,24,40,20][n%6],x=20+(n*37)%60,y=25+(n*23)%50;
 return "data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000' preserveAspectRatio='xMidYMid slice'><defs><radialGradient id='a' cx='${x}%' cy='${y}%' r='70%'><stop offset='0' stop-color='hsl(${hu},45%,34%)'/><stop offset='.6' stop-color='hsl(${hu},25%,12%)'/><stop offset='1' stop-color='#050505'/></radialGradient></defs><rect width='100%' height='100%' fill='url(#a)'/></svg>`)}
const img=d=>{const i=new Image();i.alt=d.alt||"";i.decoding="async";i.src=d.src||ph(seed++);i.onerror=()=>{i.onerror=null;i.src=ph(seed++)};if(d.pos)i.style.objectPosition=d.pos;return i};

/* render content */
$$("[data-t]").forEach(e=>e.textContent=get(SITE,e.dataset.t)||"");
$$("[data-link]").forEach(a=>{const l=SITE.links[a.dataset.link];a.textContent=l.label;a.href=l.href;a.dataset.cur="Visit"});
$$("[data-img]").forEach(e=>e.appendChild(img(SITE.images[e.dataset.img])));
$$("[data-cap]").forEach(e=>e.textContent=(SITE.images[e.dataset.cap]||{}).caption||"");
$$("[data-seal]").forEach(e=>e.src=SITE.seals[e.dataset.seal]);
$("#finalText").innerHTML=`<span class="split">${SITE.final[0]}</span><span class="l2 split">${SITE.final[1]}</span>`;
const list=(id,rows)=>rows.forEach(r=>{if(!r[0]&&!r[1])return;const li=document.createElement("li");
 const nm=document.createElement("span");nm.className="nm";nm.textContent=r[0];li.appendChild(nm);
 if(r[1]){const d=document.createElement("i");d.className="dots";const s=document.createElement("span");s.className="rl";s.textContent=r[1];li.append(d,s)}
 $(id).appendChild(li)});
list("#work",SITE.work);list("#places",SITE.places);
SITE.contact.forEach(c=>{const a=document.createElement("a");a.textContent=c.label;a.href=c.href;a.dataset.cur="Go";
 if(c.href.startsWith("http")){a.target="_blank";a.rel="noopener"}$("#contactLinks").appendChild(a)});

/* film strip + blurred backdrops */
const N=SITE.frames.length,track=$("#track");
SITE.frames.forEach((f,k)=>{
 const b=document.createElement("div");b.className="back fb";b.appendChild(img(f));$("#shots").appendChild(b);
 const cel=document.createElement("figure");cel.className="cel";
 const pic=document.createElement("div");pic.className="pic";pic.appendChild(img(f));
 const fc=document.createElement("figcaption");const nb=document.createElement("b");nb.textContent=z(k+1);
 const cs=document.createElement("span");cs.textContent=f.caption||"";fc.append(nb,cs);cel.append(pic,fc);track.appendChild(cel);
 const t=document.createElement("button");t.dataset.cur="Play";t.setAttribute("aria-label",f.caption||"Frame "+(k+1));t.appendChild(img(f));$("#thumbs").appendChild(t);
 t.onclick=()=>scrollTo({top:R[5].a+(.05+.9*(k+.5)/N)*len(5),behavior:"smooth"})});

/* masked word reveal + staggered delays */
$$(".split").forEach(el=>{const words=el.textContent.trim().split(/\s+/);el.textContent="";
 words.forEach((w,i)=>{const s=document.createElement("span");s.className="w";const t=document.createElement("span");t.textContent=w;t.style.transitionDelay=(.25+i*.09)+"s";s.appendChild(t);el.append(s," ")})});
$$(".scene").forEach(s=>$$(":scope>.txt>*",s).forEach((e,i)=>e.style.setProperty("--d",i*.13+"s")));

/* typewriter — chars are inline spans (.tc) inside nowrap word wrappers, so nothing can stack vertically */
function typeEl(el,speed,hold=0){return new Promise(res=>{
 const text=el.textContent;el.textContent="";el.classList.add("tw");el.setAttribute("aria-label",text);
 const car=document.createElement("i");car.className="caret";const chars=[];
 text.split(" ").forEach((w,wi,a)=>{const ws=document.createElement("span");ws.className="tww";ws.setAttribute("aria-hidden","true");
  [...w].forEach(ch=>{const c=document.createElement("span");c.className="tc";c.textContent=ch;ws.appendChild(c);chars.push(c)});
  el.appendChild(ws);if(wi<a.length-1)el.append(" ")});
 el.appendChild(car);
 if(reduce){chars.forEach(c=>c.classList.add("on"));car.remove();return res()}
 let i=0;(function step(){if(i>=chars.length){setTimeout(()=>car.remove(),hold);return setTimeout(res,hold?0:280)}
  const c=chars[i++];c.classList.add("on");c.after(car);
  setTimeout(step,speed*(.6+Math.random()*.8)+(/[.,]/.test(c.textContent)?280:0))})()})}
async function start(){document.body.classList.remove("loading");document.body.classList.add("cursor","rolling");size();
 await new Promise(r=>setTimeout(r,reduce?0:900));
 await typeEl($("#tw1"),85);await typeEl($("#tw2"),64);await typeEl($("#tw3"),34,2600);$(".cue").classList.add("on")}

/* loader: letters fade in, hairline fills with real asset progress, shutters open */
const ld=$("#leader"),ldFill=$("#ldFill"),count=$("#count"),ldFr=$("#ldFrames"),ldName=$("#ldName");
{const nm=ldName.textContent;ldName.setAttribute("aria-label",nm);ldName.textContent="";
 [...nm].forEach((ch,i)=>{const s=document.createElement("span");s.className="l";s.textContent=ch===" "?"\u00a0":ch;s.style.animationDelay=(.15+i*.07)+"s";ldName.appendChild(s)})}
const urls=[...new Set([...Object.values(SITE.images).map(i=>i.src),...SITE.frames.map(f=>f.src),...Object.values(SITE.seals)].filter(Boolean))];
let loaded=0,fontsOk=false;
urls.forEach(u=>{const i=new Image();i.onload=i.onerror=()=>loaded++;i.src=u});
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>fontsOk=true);
const MIN=reduce?250:2800,MAX=8000,ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
let t0=0,shown=0;
function finish(){ld.classList.add("done");setTimeout(start,reduce?0:1300);setTimeout(()=>ld.classList.add("gone"),reduce?100:3400)}
function tick(t){if(!t0)t0=t;const el=t-t0,timeP=ease(cl(el/MIN)),realP=(loaded+(fontsOk?1:0))/(urls.length+1);
 const target=el>MAX?timeP:Math.min(timeP,realP);shown+=(target-shown)*.2;if(target>=1&&shown>.995)shown=1;
 count.textContent=String(Math.round(shown*100)).padStart(3,"0");ldFr.textContent="Frame "+String(Math.round(shown*240)).padStart(3,"0");
 ldFill.style.transform=`scaleX(${shown})`;
 shown<1?requestAnimationFrame(tick):finish()}
requestAnimationFrame(tick);

/* cursor */
const cur=$("#cur"),lab=$("#curLabel"),root=document.documentElement;let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my,pmx=0,pmy=0;
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY});
document.addEventListener("pointerover",e=>{const t=e.target.closest("[data-cur]");cur.classList.toggle("big",!!t);lab.textContent=t?t.dataset.cur:""});

/* the projector: one fixed screen, scroll is the timeline */
const scenes=$$(".scene"),sps=$$(".sp"),n=scenes.length;
const S=scenes.map(el=>({el,back:$(":scope>.back",el),still:$(":scope>.still .pic img",el),out:el.dataset.zoom==="out"}));
const burn=$("#burn");
const bar=$("#bar"),hc=$("#hChap"),ht=$("#hTc"),he=$("#hExp"),hp=$("#hPct"),fl=$("#flash"),cw=$("#credits"),fCap=$("#fCap"),fNum=$("#fNum");
const backs=$$("#shots .fb"),cels=$$(".cel",track),tbs=$$("#thumbs button"),isos=[400,800,1600,3200],fs=["1.8","2.8","1.4","2.0"];
let vh=innerHeight,dh=0,cwH=0,sy=0,best0=-1,fa=-1,step=0;
const len=i=>R[i].b-R[i].a-(i===n-1?vh:0);
const reelL=$("#reelL"),reelR=$("#reelR");let reelH=0;
const rcel=(f,k)=>{const c=document.createElement("figure");c.className="rc";c.dataset.n=z(k%100);c.appendChild(img(f));return c};
function fillReels(){const need=vh*2.4;
 [[reelL,0],[reelR,3]].forEach(([el,off])=>{while(el.offsetHeight<need&&el.children.length<80){const i=el.children.length;el.appendChild(rcel(SITE.frames[(i+off)%N],i+1+(off?7:0)))}});
 reelH=reelL.offsetHeight}
function size(){vh=innerHeight;R=sps.map(s=>({a:s.offsetTop,b:s.offsetTop+s.offsetHeight}));dh=document.documentElement.scrollHeight;cwH=cw.offsetHeight;
 if(cels[0]){const g=parseFloat(getComputedStyle(track).columnGap)||0;step=cels[0].offsetWidth+g}
 fillReels();cwH=cw.offsetHeight}
addEventListener("resize",size);addEventListener("load",size);if(document.fonts)document.fonts.ready.then(size);size();

/* montage: film strip slides frame to frame, backdrop crossfades */
function montage(p){const t=cl((p-.05)/.9)*N,pos=cl(t-.5,0,N-1);
 backs.forEach((b,k)=>{let o=cl((.7-Math.abs(t-(k+.5)))/.3);if(k===0&&t<.5)o=1;if(k===N-1&&t>N-.5)o=1;b.style.opacity=o;
  if(!reduce)b.firstChild.style.transform=`scale(${1.05+cl((t-k+.3)/1.6)*.14})`});
 track.style.transform=`translate3d(${-pos*step}px,-50%,0)`;
 cels.forEach((c,k)=>{const d=Math.abs(pos-k);c.style.transform=`scale(${1-.14*Math.min(d,1.4)})`;c.style.opacity=cl(1-.62*d,.22,1)});
 const a=Math.min(N-1,Math.round(pos));
 if(a!==fa){fa=a;fCap.textContent=SITE.frames[a].caption||"";fNum.textContent=`${z(a+1)} / ${z(N)}`;tbs.forEach((b,k)=>b.classList.toggle("on",k===a))}}
function credits(p){const q=cl((p-.03)/.94),from=vh*.62,to=-(cwH-vh*.72),ex=Math.max(0,reelH-vh);
 cw.style.transform=`translate3d(-50%,${from+(to-from)*q}px,0)`;
 reelL.style.transform=`translate3d(0,${-ex*q}px,0)`;reelR.style.transform=`translate3d(0,${-ex*(1-q)}px,0)`}

function frame(){
 sy+=(scrollY-sy)*(reduce?1:.085);if(Math.abs(scrollY-sy)<.3)sy=scrollY;
 cx+=(mx-cx)*.2;cy+=(my-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`;
 if(fine&&!reduce){const nx=+((cx/innerWidth-.5)*2).toFixed(3),ny=+((cy/innerHeight-.5)*2).toFixed(3);
  if(nx!==pmx||ny!==pmy){pmx=nx;pmy=ny;root.style.setProperty("--mx",nx);root.style.setProperty("--my",ny)}}
 const g=dh>vh?cl(sy/(dh-vh)):0;bar.style.width=g*100+"%";
 const s=Math.floor(g*5400);ht.textContent=`${z(Math.floor(s/3600))}:${z(Math.floor(s/60)%60)}:${z(s%60)}:${z(Math.floor(sy/9)%24)}`;
 hp.textContent=String(Math.round(g*100)).padStart(3,"0");
 let best=0,bo=-1,f=0,bt=9;
 S.forEach((o,i)=>{const p=(sy-R[i].a)/len(i);let a=1;
  if(i>0)a*=cl((p+.05)/.15);if(i<n-1)a*=cl((1.05-p)/.15);
  const e=o.el;e.style.opacity=a;e.style.visibility=a>.004?"visible":"hidden";e.style.pointerEvents=a>.6?"auto":"none";
  e.classList.toggle("show",(i===0||p>.1)&&(i===n-1||p<.9));
  if(!reduce){if(a<.999){e.style.filter=`blur(${((1-a)*15).toFixed(1)}px)`;e.style.transform=`scale(${(1+(1-a)*.035).toFixed(4)})`}else if(e.style.filter){e.style.filter="";e.style.transform=""}}
  if(i<n-1){const t=(sy-R[i].b)/(vh*.32);if(Math.abs(t)<Math.abs(bt))bt=t}
  if(a>bo){bo=a;best=i}
  if(a>.004){const q=cl(p);
   if(!reduce){if(o.back)o.back.style.transform=`scale(${1+q*.1})`;if(o.still)o.still.style.transform=`scale(${o.out?(1.26-q*.25).toFixed(4):(1.02+q*.12).toFixed(4)})`}
   if(i===5)montage(p);if(i===6)credits(p)}
  if(i<n-1)f=Math.max(f,1-Math.abs(sy-R[i].b)/(vh*.28))});
 fl.style.opacity=reduce?0:cl(f)*.1;
 const bw=!reduce&&Math.abs(bt)<1?Math.pow(1-Math.abs(bt),1.4):0;
 if(bw>0){burn.style.opacity=(bw*(innerWidth<821?.5:.8)).toFixed(3);burn.style.transform=`translate3d(${(-2.5-95*bt).toFixed(2)}vw,0,0)`}else if(burn.style.opacity!=="0")burn.style.opacity="0";
 if(best!==best0){best0=best;hc.textContent=scenes[best].dataset.chap;he.textContent=`ISO ${isos[best%4]} · f/${fs[best%4]} · 1/${best%2?48:50}`}
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
})();
