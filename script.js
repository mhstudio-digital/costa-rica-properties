const properties = [
  {id:1,name:"Villa Paraíso Frente al Mar",type:"Villa",zone:"Guanacaste",price:"$3,850,000",beds:5,baths:6,sqm:680,garage:3,badge:"Exclusivo",img:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop"],desc:"Villa de arquitectura contemporánea con acceso directo a playa privada en Playa Flamingo. Diseño de interiores firmado, piscina infinita con vista al Pacífico, sala de cine, bodega de vinos y sistema domótico integral. Un estándar de vida sin comparación en Costa Rica.",features:["Piscina infinita","Playa privada","Cine en casa","Bodega de vinos","Domótica Crestron","Generador 50kW","Pozo propio","Seguridad 24/7","Jacuzzi exterior","Cocina gourmet","Dock privado","Helipuerto"]},
  {id:2,name:"Penthouse Sky Residences",type:"Condominio",zone:"Escazú",price:"$1,280,000",beds:3,baths:4,sqm:320,garage:2,badge:"Nuevo",img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85"],desc:"Penthouse de doble altura en el proyecto más exclusivo de Escazú. Terrazas de 200m² con vistas panorámicas al Valle Central y el Volcán Irazú. Acabados europeos, cocina abierta de alta gama y amenidades de resort en el corazón del barrio más cosmopolita del país.",features:["Doble altura","Vista Volcán Irazú","Terraza 200m²","Acabados italianos","Piscina rooftop","Gym privado","Conserje 24h","Lobby boutique","Smart home","Valet parking"]},
  {id:3,name:"Casa La Hacienda",type:"Casa",zone:"Santa Ana",price:"$895,000",beds:5,baths:5,sqm:490,garage:3,badge:"Destacado",img:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85","https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85"],desc:"Residencia de estilo mediterráneo en comunidad cerrada premium de Santa Ana. Amplios espacios de entretenimiento, jardines tropicales diseñados por paisajista, cancha de tenis y sala de juegos. Ideal para familias que buscan privacidad y calidad de vida en el Gran Área Metropolitana.",features:["Cancha de tenis","Jardín tropical","Piscina temperada","Sala de juegos","Cuarto de servicio","Generador","Pozo","Seguridad 24/7","Sistemas de riego","Bodega"]},
  {id:4,name:"Villa Surf & Sunset",type:"Villa",zone:"Tamarindo",price:"$1,650,000",beds:4,baths:4,sqm:380,garage:2,badge:"Exclusivo",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85"],desc:"Villa diseñada para capturar cada puesta de sol de Tamarindo desde sus múltiples terrazas. A 200 metros de la playa, esta propiedad genera ingresos comprobados como alquiler vacacional de lujo con ocupación promedio del 78% anual.",features:["Vista al mar","200m de la playa","Alquiler vacacional","Piscina privada","Cocina gourmet","BBQ outdoor","Sala de yoga","Sistema solar","Renta comprobada","Decorada de lujo"]},
  {id:5,name:"Finca El Jaguar Lodge",type:"Finca",zone:"La Fortuna",price:"$2,200,000",beds:8,baths:9,sqm:1200,garage:6,badge:"Nuevo",img:"https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=85","https://images.unsplash.com/photo-1582407947304-fd86f28f7e27?w=1200&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85"],desc:"Ecolodge de lujo en plena zona de amortiguamiento del Parque Nacional Arenal. 8 bungalows privados con vista al volcán, spa, restaurante y senderos privados. Negocio en operación con revenue anual de $280,000 y permiso de construcción para 4 unidades adicionales.",features:["Vista Volcán Arenal","8 bungalows","Spa completo","Restaurante","Senderos 3km","Negocio operando","Permiso expansión","Fuente termal","Helipad","Generador solar"]},
  {id:6,name:"Loft Moderno Los Yoses",type:"Condominio",zone:"Escazú",price:"$445,000",beds:2,baths:2,sqm:145,garage:1,badge:"Nuevo",img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85"],desc:"Diseño editorial en planta abierta con doble altura y mezzanine. Acabados de vanguardia, cocina Bulthaup y baños revestidos en mármol travertino. En edificio boutique de solo 12 unidades a pasos de los mejores restaurantes de Escazú.",features:["Doble altura","Diseño editorial","Cocina Bulthaup","Mármol travertino","Gimnasio","Rooftop social","Sólo 12 unidades","Portero","A/C central","Vista montaña"]},
  {id:7,name:"Casa Zen Nosara",type:"Casa",zone:"Nosara",price:"$780,000",beds:3,baths:3,sqm:280,garage:1,badge:"Exclusivo",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85"],desc:"Arquitectura bioclimática en perfecta armonía con el entorno de Nosara. Maderas tropicales sostenibles, piedra volcánica y una piscina natural integrada al jardín. A 5 minutos de Playa Guiones, en una de las zonas de mayor demanda para retiro y bienestar.",features:["Arquitectura bioclimática","Maderas certificadas","Piscina natural","Jardín tropical","5 min playa","Paneles solares","Agua de lluvia","Estudio yoga","Sin HOA","Vista jungle"]},
  {id:8,name:"Residencia Las Palmas",type:"Casa",zone:"Jacó",price:"$620,000",beds:4,baths:4,sqm:340,garage:2,badge:"Destacado",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85"],desc:"Residencia de playa con diseño open concept a pasos del surf en Jacó. Alta demanda para alquiler vacacional con rentabilidad documentada del 8.2% anual. Comunidad cerrada con piscina compartida y acceso directo a la playa.",features:["100m de la playa","Rentabilidad 8.2%","Piscina comunal","Surf directo","Comunidad cerrada","BBQ deck","Cuarto de tablas","Sistema solar","Renta Airbnb","Decorada lista"]},
  {id:9,name:"Gran Villa Cielo Abierto",type:"Villa",zone:"Guanacaste",price:"$4,500,000",beds:7,baths:8,sqm:850,garage:4,badge:"Exclusivo",img:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85"],desc:"La propiedad más espectacular disponible en el Pacífico Norte. Siete suites con baño privado, múltiples piscinas, cancha de tenis, casita de huéspedes independiente y muelle privado. Ubicada en la punta más exclusiva de Playa Hermosa con 320° de vista oceánica.",features:["Vista 320° océano","Muelle privado","Múltiples piscinas","Cancha de tenis","Casita huéspedes","Chef's kitchen","Sala teatro","Gym completo","Staff quarters","Helipad certificado"]},
  {id:10,name:"Condominio Mirador Escazú",type:"Condominio",zone:"Escazú",price:"$560,000",beds:3,baths:3,sqm:210,garage:2,badge:"Nuevo",img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85"],desc:"En la cima de Escazú con vistas imbatibles al Valle Central y el Océano Pacífico en días despejados. Desarrollo premium de 45 unidades con amenidades de resort, sala de negocios y servicio de concierge disponible 24 horas.",features:["Vista Valle Central","Vista al Pacífico","45 unidades","Sala negocios","Concierge 24h","Piscina infinity","Spa","Wine cellar comunal","Cancha padel","Pet friendly"]},
  {id:11,name:"Hacienda San Ramón",type:"Finca",zone:"Santa Ana",price:"$1,100,000",beds:5,baths:5,sqm:620,garage:4,badge:"Exclusivo",img:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=85","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85"],desc:"Hacienda colonial restaurada en una propiedad de 15 hectáreas en las faldas de Santa Ana. Caballerizas para 12 caballos, café orgánico en producción, invernadero y casas para empleados. Una oportunidad única para quienes buscan un estilo de vida auténtico sin renunciar al lujo.",features:["15 hectáreas","Caballeriza 12 caballos","Café orgánico","Invernadero","Casa empleados","Río privado","Colonial restaurado","Piscina","Establo","Zona de cultivo"]},
  {id:12,name:"Casa Brisa del Pacífico",type:"Casa",zone:"Tamarindo",price:"$520,000",beds:3,baths:3,sqm:220,garage:1,badge:"Nuevo",img:"https://images.unsplash.com/photo-1582407947304-fd86f28f7e27?w=800&q=85&auto=format&fit=crop",imgs:["https://images.unsplash.com/photo-1582407947304-fd86f28f7e27?w=1200&q=85","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85","https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85"],desc:"Casa de playa en Tamarindo con diseño tropical moderno, lista para habitar y generar ingresos. Terminada en 2024 con materiales de primera calidad, domótica básica y acabados que elevan el estándar del vecindario. Historial de alquiler disponible para análisis.",features:["Terminada 2024","Domótica básica","Piscina privada","Alquiler listo","5 min playa","Materiales premium","Brisa natural","Jardín mango","Comunidad tranquila","Financiamiento CR"]},
];

let currentFilter = 'all';
let favorites = new Set();
let currentModalProp = null;
let currentGalleryIdx = 0;
let displayCount = 9;

function renderProperties(filter) {
  const grid = document.getElementById('propertiesGrid');
  const filtered = filter === 'all' ? properties : properties.filter(p => p.type === filter || p.zone === filter);
  const toShow = filtered.slice(0, displayCount);
  grid.innerHTML = toShow.map(p => `
    <div class="property-card" data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="prop-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="prop-badge badge-${p.badge === 'Nuevo' ? 'new' : p.badge === 'Exclusivo' ? 'exclusive' : 'new'}">${p.badge}</span>
        <div class="prop-fav ${favorites.has(p.id)?'active':''}" data-id="${p.id}" onclick="toggleFav(event,${p.id})">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
      </div>
      <div class="prop-info">
        <div class="prop-price">${p.price}</div>
        <div class="prop-name">${p.name}</div>
        <div class="prop-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>${p.zone}, Costa Rica</div>
        <div class="prop-meta">
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9v11h18V9"/><path d="M1 9l11-6 11 6"/><rect x="9" y="14" width="6" height="6"/></svg><span>${p.beds}</span> Hab.</div>
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M4 12a4 4 0 01-4-4V4h8v4a4 4 0 01-4 4zM20 4h-8v4a4 4 0 004 4"/><path d="M4 12v8h16v-8"/></svg><span>${p.baths}</span> Baños</div>
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg><span>${p.sqm}</span> m²</div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProperties(filter, el) {
  currentFilter = filter;
  displayCount = 9;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if(el) el.classList.add('active');
  renderProperties(filter);
}

function loadMore() {
  displayCount += 3;
  renderProperties(currentFilter);
}

function toggleFav(e, id) {
  e.stopPropagation();
  if(favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  renderProperties(currentFilter);
}

function openModal(id) {
  const p = properties.find(x => x.id === id);
  currentModalProp = p;
  currentGalleryIdx = 0;
  document.getElementById('modalImg').src = p.imgs[0];
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalLocationText').textContent = p.zone + ', Costa Rica';
  document.getElementById('modalBadge').textContent = p.badge;
  document.getElementById('modalBeds').textContent = p.beds;
  document.getElementById('modalBaths').textContent = p.baths;
  document.getElementById('modalSqm').textContent = p.sqm;
  document.getElementById('modalGarage').textContent = p.garage;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalFeatures').innerHTML = p.features.map(f => `
    <div class="modal-feature">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg>
      ${f}
    </div>
  `).join('');
  document.getElementById('propModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if(e === 'force' || e.target === document.getElementById('propModal')) {
    document.getElementById('propModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function changeGallery(dir) {
  if(!currentModalProp) return;
  currentGalleryIdx = (currentGalleryIdx + dir + currentModalProp.imgs.length) % currentModalProp.imgs.length;
  document.getElementById('modalImg').src = currentModalProp.imgs[currentGalleryIdx];
}

function toggleFavFromModal() {
  if(currentModalProp) {
    if(favorites.has(currentModalProp.id)) favorites.delete(currentModalProp.id);
    else favorites.add(currentModalProp.id);
  }
}

function applyHeroFilter() {
  const zone = document.getElementById('filterZone').value;
  const type = document.getElementById('filterType').value;
  if(zone) { filterProperties(zone, null); }
  else if(type) { filterProperties(type, null); }
  else { filterProperties('all', null); }
  document.getElementById('properties').scrollIntoView({behavior:'smooth'});
}

function advancedSearch() {
  const zone = document.getElementById('advZone').value;
  const type = document.getElementById('advType').value;
  const bedsMin = document.getElementById('advBeds').value;
  const priceMax = document.getElementById('advPrice').value;
  let filtered = properties;
  if(zone) filtered = filtered.filter(p => p.zone === zone);
  if(type) filtered = filtered.filter(p => p.type === type);
  if(bedsMin) filtered = filtered.filter(p => p.beds >= parseInt(bedsMin));
  if(priceMax) {
    const maxNum = parseFloat(priceMax);
    filtered = filtered.filter(p => {
      const pNum = parseFloat(p.price.replace(/[$,]/g,''));
      return pNum <= maxNum;
    });
  }
  const grid = document.getElementById('propertiesGrid');
  if(filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:span 3;text-align:center;padding:60px;font-family:var(--serif);font-size:1.3rem;color:var(--gray-mid)">No encontramos propiedades con esos criterios.<br><small style="font-family:var(--sans);font-size:13px">Intente ampliar su búsqueda o contáctenos para propiedades off-market.</small></div>';
  } else {
    currentFilter = 'search';
    const toShow = filtered.slice(0, 9);
    grid.innerHTML = toShow.map(p => `
      <div class="property-card" onclick="openModal(${p.id})">
        <div class="prop-img"><img src="${p.img}" alt="${p.name}" loading="lazy">
          <span class="prop-badge badge-${p.badge === 'Nuevo' ? 'new' : 'exclusive'}">${p.badge}</span>
          <div class="prop-fav" onclick="toggleFav(event,${p.id})">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </div>
        </div>
        <div class="prop-info">
          <div class="prop-price">${p.price}</div>
          <div class="prop-name">${p.name}</div>
          <div class="prop-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>${p.zone}, Costa Rica</div>
          <div class="prop-meta">
            <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9v11h18V9"/><path d="M1 9l11-6 11 6"/><rect x="9" y="14" width="6" height="6"/></svg><span>${p.beds}</span> Hab.</div>
            <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M4 12a4 4 0 01-4-4V4h8v4a4 4 0 01-4 4z"/></svg><span>${p.baths}</span> Baños</div>
            <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg><span>${p.sqm}</span> m²</div>
          </div>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('properties').scrollIntoView({behavior:'smooth'});
}

function calcMortgage() {
  const val = parseFloat(document.getElementById('propValue').value) || 500000;
  const dp = parseFloat(document.getElementById('downPct').value) / 100;
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const term = parseInt(document.getElementById('loanTerm').value) * 12;
  const loan = val * (1 - dp);
  const down = val * dp;
  let monthly;
  if(rate === 0) { monthly = loan / term; }
  else { monthly = loan * rate * Math.pow(1+rate,term) / (Math.pow(1+rate,term)-1); }
  const total = monthly * term;
  const interest = total - loan;
  const costPer1k = (monthly / loan) * 1000;
  const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
  document.getElementById('monthlyPayment').textContent = fmt(monthly);
  document.getElementById('loanAmount').textContent = fmt(loan);
  document.getElementById('downAmount').textContent = fmt(down);
  document.getElementById('totalPaid').textContent = fmt(total);
  document.getElementById('totalInterest').textContent = fmt(interest);
  document.getElementById('costPer1k').textContent = '$' + costPer1k.toFixed(2);
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById('contactForm').querySelectorAll('input,select,textarea,button').forEach(el => el.style.display='none');
  document.getElementById('formSuccess').classList.add('show');
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

// SCROLL EFFECTS
function initScrollEffects() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// COUNTERS
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.dataset.count);
  const dur = 2000;
  const step = target / (dur / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if(current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('en-US');
  }, 16);
}

function initCounters() {
  const counterEls = document.querySelectorAll('[data-count], .counter');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => obs.observe(el));
}

// NAVBAR
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const bt = document.getElementById('back-top');
  if(window.scrollY > 80) { nav.classList.add('scrolled'); bt.classList.add('show'); }
  else { nav.classList.remove('scrolled'); bt.classList.remove('show'); }
});

// KEYBOARD MODAL CLOSE
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal('force'); });

// INIT
renderProperties('all');
initScrollEffects();
initCounters();
calcMortgage();
