/* ====== EDIT THESE ====== */
/* Paste any real photo links here, e.g. "Banarasi":"https://.../banarasi.jpg" (style or category name) */
const PHOTOS={};
const SHOP={
  phone:"919110539022",
  msg:"Hello Varthali Vastralayam! I'd like to know more about your dress collections.",
  mapQuery:"Varthali Vastralayam, Siddipet, Telangana" // replace with exact address or Google Maps place name
};
const ITEMS=[
 ["Sarees","🥻","Kanchipuram, Pochampally, Banarasi and everyday cottons. Timeless drapes for weddings, festivals and daily grace.","saree.jpg"],
 ["Lehengas","💃","Bridal and festive lehengas with rich embroidery, made to turn every celebration into a memory.","lehenga.jpg"],
 ["Salwar Suits","👗","Elegant Anarkalis, straight suits and dupatta sets in soft, comfortable fabrics.","salwar.jpg"],
 ["Kurtis","🌸","Stylish daily and office wear kurtis in cotton, rayon and silk blends.","kurti.jpg"],
 ["Half Sarees","✨","Traditional langa voni sets for young girls: the perfect coming-of-age and festival look.","halfsaree.jpg"],
 ["Gowns & Western","🌙","Modern gowns, dresses and fusion wear for parties, receptions and special evenings.","gown.jpg"]
];
const SUB={"Sarees": [["Kanchipuram Silk", "Pure zari silk with temple borders, the classic bridal choice."], ["Pochampally Ikat", "Handloom ikat patterns from Telangana, vibrant and unique."], ["Banarasi", "Rich brocade with gold weaving for weddings and festivals."], ["Gadwal", "Light cotton body with silk border, a Telangana favourite."], ["Narayanpet", "Traditional handloom cottons with elegant contrast borders."], ["Uppada Silk", "Featherlight silk with a soft, glossy finish."], ["Cotton & Handloom", "Breathable everyday sarees for comfort all day."], ["Georgette & Chiffon", "Flowy, lightweight party sarees with graceful fall."], ["Designer & Party Wear", "Sequin, stone and embroidery work for special evenings."], ["Bridal Sarees", "Heavy silk collections for the bride and her family."]], "Lehengas": [["Bridal Lehengas", "Heavily embroidered with zari, zardosi and stone work."], ["Party Wear Lehengas", "Stylish lehengas for receptions, sangeet and engagements."], ["Silk Lehengas", "Traditional silk sets with rich borders and dupattas."], ["Net & Organza", "Light, airy fabrics with modern floral detailing."], ["Crop Top Lehengas", "Trendy, contemporary cuts for young women."], ["Kids Lehengas", "Pretty festive lehengas for little girls."]], "Salwar Suits": [["Anarkali Suits", "Flowing floor-length silhouettes for festive occasions."], ["Straight Cut Suits", "Sleek and comfortable for daily and office wear."], ["Patiala Suits", "Classic pleated salwar with bright, cheerful colours."], ["Palazzo Sets", "Modern, breezy sets with wide-leg palazzo pants."], ["Sharara & Gharara", "Traditional flared bottoms with festive kurtas."], ["Party Wear Suits", "Heavy embroidery and dupatta sets for celebrations."], ["Cotton Daily Wear", "Simple, soft and washable suits for everyday."]], "Kurtis": [["Cotton Kurtis", "Easy daily wear in breathable prints."], ["Rayon Kurtis", "Smooth, drapey and colourful for every day."], ["A-Line Kurtis", "Flattering flared shape for all body types."], ["Long Kurtis", "Elegant ankle-length styles for a graceful look."], ["Party Wear Kurtis", "Embellished designs for outings and functions."], ["Office Wear Kurtis", "Neat, professional solids and subtle prints."], ["Kurti with Pants Sets", "Coordinated ready-to-wear two-piece sets."]], "Half Sarees": [["Pattu Langa Voni", "Silk half sarees for functions and festivals."], ["Bridal Half Sarees", "Special sets for coming-of-age and ceremonies."], ["Kids Pattu Langa", "Traditional pattu skirt sets for little girls."], ["Designer Half Sarees", "Modern colours with contemporary blouse designs."], ["Cotton Langa Sets", "Light, everyday ethnic wear for girls."]], "Gowns & Western": [["Party Gowns", "Floor-length gowns for receptions and parties."], ["Indo-Western Dresses", "Fusion outfits mixing tradition with trend."], ["Maxi Dresses", "Comfortable, flowing dresses for casual outings."], ["Co-ord Sets", "Matching tops and bottoms in modern cuts."], ["Tops & Jeans", "Everyday western wear for college and work."], ["Kids Frocks", "Cute frocks for birthdays and functions."]]};
const BEST={"Sarees": "Weddings, Bathukamma, Dussehra, temple visits & all festivals", "Lehengas": "Weddings, sangeet, engagements & receptions", "Salwar Suits": "Festivals, family functions, college & daily wear", "Kurtis": "Daily wear, office, college & casual outings", "Half Sarees": "Bathukamma, Dussehra, Sankranti & coming-of-age functions", "Gowns & Western": "Parties, receptions, birthdays & evening events", "Kanchipuram Silk": "Weddings, Dussehra, Varalakshmi Vratham", "Pochampally Ikat": "Bathukamma, festivals, office & cultural events", "Banarasi": "Weddings, receptions, Diwali", "Gadwal": "Bathukamma, pujas, family functions", "Narayanpet": "Bathukamma, temple visits, daily festive wear", "Uppada Silk": "Weddings, engagements, festive lunches", "Cotton & Handloom": "Daily wear, office, teaching, summer days", "Georgette & Chiffon": "Parties, receptions, farewells", "Designer & Party Wear": "Cocktail nights, receptions, engagements", "Bridal Sarees": "Wedding day, muhurtham, bridal trousseau", "Bridal Lehengas": "Wedding day & reception", "Party Wear Lehengas": "Sangeet, engagements, receptions", "Silk Lehengas": "Weddings, Diwali, festivals", "Net & Organza": "Cocktail nights, receptions, evening functions", "Crop Top Lehengas": "Sangeet, mehendi, bridesmaid looks", "Kids Lehengas": "Festivals, birthdays, family weddings", "Anarkali Suits": "Diwali, Eid, family functions", "Straight Cut Suits": "Office, college, daily wear", "Patiala Suits": "Festive gatherings, college events, family visits", "Palazzo Sets": "Casual outings, office, travel", "Sharara & Gharara": "Weddings, mehendi, Eid", "Party Wear Suits": "Engagements, receptions, parties", "Cotton Daily Wear": "Daily wear, home, college", "Cotton Kurtis": "Daily wear, summers, college", "Rayon Kurtis": "Daily wear, casual outings", "A-Line Kurtis": "Office, shopping, family visits", "Long Kurtis": "Festivals, temple visits, casual events", "Party Wear Kurtis": "Parties, birthdays, small functions", "Office Wear Kurtis": "Office, meetings, business days", "Kurti with Pants Sets": "Travel, office, casual events", "Pattu Langa Voni": "Bathukamma, Dussehra, Sankranti", "Bridal Half Sarees": "Coming-of-age functions, weddings", "Kids Pattu Langa": "Festivals, pujas, cultural events", "Designer Half Sarees": "Functions, farewells, ethnic day", "Cotton Langa Sets": "Daily festive wear, school cultural days", "Party Gowns": "Receptions, birthdays, farewell parties", "Indo-Western Dresses": "Sangeet, cocktails, engagements", "Maxi Dresses": "Outings, holidays, casual days", "Co-ord Sets": "Brunch, travel, smart-casual office", "Tops & Jeans": "College, shopping, daily wear", "Kids Frocks": "Birthdays, functions"};
const OCC=[["🌼", "Bathukamma", "Telangana's floral festival of women, celebrated over nine days before Dussehra. Women wear traditional pattu and handloom sarees, and girls wear half sarees, with fresh flowers and gold jewellery.", "Pochampally Ikat, Gadwal, Narayanpet, Pattu Langa Voni"], ["🏹", "Dussehra", "Vijayadashami is a day of new clothes, puja and family visits. Rich silks and bright colours mark the victory of good over evil.", "Kanchipuram Silk, Banarasi, Silk Lehengas"], ["🪔", "Diwali", "The festival of lights calls for glowing colours and zari shine for evening puja and family gatherings.", "Banarasi, Anarkali Suits, Silk Lehengas"], ["🌾", "Ugadi & Sankranti", "The Telugu new year and the harvest festival are celebrated in traditional silks and fresh festive colours.", "Uppada Silk, Pattu Langa Voni, Gadwal"], ["🛕", "Pujas & Temple Visits", "Varalakshmi Vratham, Sravana Fridays and temple visits call for graceful, modest, auspicious dressing.", "Narayanpet, Kanchipuram Silk, Long Kurtis"], ["💍", "Weddings & Engagements", "From muhurtham to reception, heavy silks and embroidered lehengas suit the bride, the family and the guests.", "Bridal Sarees, Bridal Lehengas, Uppada Silk"], ["🎉", "Parties & Receptions", "Evening glamour in light, shimmering fabrics and modern cuts.", "Georgette & Chiffon, Party Gowns, Net & Organza"], ["💼", "Office & College", "Comfortable, neat styles that stay fresh through a long day.", "Cotton & Handloom, Straight Cut Suits, Office Wear Kurtis"], ["🏡", "Daily Wear", "Soft, breathable, easy-care clothes for home and everyday errands.", "Cotton Daily Wear, Cotton Kurtis, Cotton Langa Sets"]];
/* ======================== */
const $=s=>document.querySelector(s);
$("#yr").textContent=new Date().getFullYear();
$("#wa").href=`https://wa.me/${SHOP.phone}?text=${encodeURIComponent(SHOP.msg)}`;
const q=encodeURIComponent(SHOP.mapQuery);
$("#mapBtn").href=`https://www.google.com/maps/search/?api=1&query=${q}`;
$("#mapFrame").src=`https://maps.google.com/maps?q=${q}&output=embed`;
$("#grid").innerHTML=ITEMS.map(([n,e,d,f])=>`<article class="card reveal" data-c="${n}" tabindex="0" role="button"><div class="img"><span>${e}</span><img src="${PHOTOS[n]||"images/"+f}" alt="${n}" onerror="this.remove()"></div><div class="t"><h3>${n}</h3><p>${d}</p><p class="best"><b>Best for:</b> ${BEST[n]}</p><span class="more">View all ${SUB[n].length} styles →</span></div></article>`).join("");
$("#ogrid").innerHTML=OCC.map(([e,t,x,r])=>`<article class="card reveal"><div class="oc">${e}</div><div class="t"><h3>${t}</h3><p>${x}</p><p class="best"><b>Suggested:</b> ${r}</p></div></article>`).join("");
/* 3D tilt */
document.querySelectorAll(".card").forEach(c=>{
 c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`});
 c.addEventListener("pointerleave",()=>c.style.transform="");
});
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
/* logo intro: centre -> top-left corner */
const il=$("#introLogo"),nl=$("#navLogo"),intro=$("#intro");
document.body.style.overflow="hidden";
setTimeout(()=>{
 const a=il.getBoundingClientRect(),b=nl.getBoundingClientRect();
 il.style.cssText=`position:fixed;left:${a.left}px;top:${a.top}px;width:${a.width}px;opacity:1;animation:none`;
 requestAnimationFrame(()=>{il.classList.add("fly");il.style.left=b.left+"px";il.style.top=b.top+"px";il.style.width=b.width+"px";intro.style.background="transparent";intro.style.pointerEvents="none"});
 setTimeout(()=>{nl.style.opacity=1;intro.remove();document.body.style.overflow=""},1400);
},2800);
/* hero: the real saree as animated silk cloth */
(function(){
 const hero=$("#hero");
 function fallback(){hero.style.background=`url(${window.SAREE_DATA}) center/cover`;hero.style.animation="kb 20s ease-in-out infinite alternate"}
 try{
 const cv=$("#bg"),R=new THREE.WebGLRenderer({canvas:cv,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
 const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100);C.position.z=10;
 const PW=12,PH=16,g=new THREE.PlaneGeometry(PW,PH,64,84);
 const cloth=new THREE.Mesh(g,new THREE.MeshPhongMaterial({map:new THREE.TextureLoader().load(window.SAREE_DATA),specular:0xffd27a,shininess:55}));S.add(cloth);
 const o=g.attributes.position.array.slice();
 S.add(new THREE.AmbientLight(0xffffff,.8));const L=new THREE.PointLight(0xffe0a0,1.5,80);S.add(L);
 const n=innerWidth<600?120:260,pp=new Float32Array(n*3);for(let i=0;i<n*3;i++)pp[i]=(Math.random()-.5)*(i%3==2?4:20);
 const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
 const dust=new THREE.Points(pg,new THREE.PointsMaterial({color:0xffe6a0,size:.07,transparent:true,opacity:.85}));dust.position.z=3;S.add(dust);
 let mx=0,my=0;addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
 function size(){R.setSize(innerWidth,innerHeight);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix();
  const h=2*Math.tan(25*Math.PI/180)*10,w=h*C.aspect,s=Math.max(w/PW,h/PH)*1.3;cloth.scale.set(s,s,1)}
 size();addEventListener("resize",size);
 (function loop(t){t*=.001;requestAnimationFrame(loop);if(scrollY>innerHeight*1.2)return;
  const a=g.attributes.position;
  for(let i=0;i<a.count;i++){const x=o[i*3],y=o[i*3+1];a.array[i*3+2]=Math.sin(x*1.3+t*.9)*.45+Math.sin(x*2.6-t*.7+y*.25)*.18+Math.cos(y*.45+t*.55)*.3}
  a.needsUpdate=true;g.computeVertexNormals();
  L.position.set(Math.sin(t*.5)*9,Math.cos(t*.4)*7,6);
  dust.rotation.y=t*.04;dust.position.y=Math.sin(t*.3)*.5;
  C.position.x+=(Math.sin(t*.2)*.7+mx*2-C.position.x)*.04;C.position.y+=(-my*1.5-C.position.y)*.04;C.lookAt(0,0,0);
  R.render(S,C)})(0);
 }catch(e){fallback()}
})();
/* category popup */
const md=$("#modal"),mg=$("#mgrid");
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-");
function openCat(n){
 const emoji=ITEMS.find(i=>i[0]==n)[1];
 $("#mtitle").textContent=n;$("#mdesc").textContent=ITEMS.find(i=>i[0]==n)[2]+" Best for: "+BEST[n]+".";
 mg.innerHTML=SUB[n].map(([t,d])=>`<article class="card sub"><div class="img"><span>${emoji}</span><img src="${PHOTOS[t]||"images/"+slug(t)+".jpg"}" alt="${t}" loading="lazy" onerror="this.remove()"></div><div class="t"><h3>${t}</h3><p>${d}</p><p class="best"><b>Best for:</b> ${BEST[t]||""}</p></div></article>`).join("");
 md.classList.add("open");document.body.style.overflow="hidden";md.scrollTop=0;
}
function closeCat(){md.classList.remove("open");document.body.style.overflow=""}
$("#grid").addEventListener("click",e=>{const c=e.target.closest(".card");c&&openCat(c.dataset.c)});
$("#grid").addEventListener("keydown",e=>{if(e.key=="Enter"){const c=e.target.closest(".card");c&&openCat(c.dataset.c)}});
$("#mclose").onclick=closeCat;addEventListener("keydown",e=>e.key=="Escape"&&closeCat());
