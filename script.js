/* ============================================================
   COSTA RICA PROPERTIES — LÓGICA DEL SITIO
   Los datos viven en properties.js (PROPERTIES y SITE_CONFIG).
   No hace falta editar este archivo para agregar propiedades.
   ============================================================ */

let currentCriteria = {};      // filtros activos {zona, tipo, habitacionesMin, precioMax}
let favorites = new Set();
let currentModalProp = null;
let currentGalleryIdx = 0;
let displayCount = 9;

/* ---- HELPERS ---- */

function formatPrice(n) {
  return '$' + n.toLocaleString('en-US');
}

/* Genera srcset con 2 tamaños a partir de una URL de Unsplash */
function unsplashSrcset(url) {
  const small = url.replace(/([?&])w=\d+/, '$1w=500');
  const large = url.replace(/([?&])w=\d+/, '$1w=1000');
  return `${small} 500w, ${large} 1000w`;
}

function getBadge(p) {
  if (p.status === 'vendido') return { text: 'Vendido', cls: 'badge-sold' };
  if (p.status === 'reservado') return { text: 'Reservado', cls: 'badge-sold' };
  if (p.featured) return { text: 'Destacado', cls: 'badge-exclusive' };
  return { text: 'Disponible', cls: 'badge-new' };
}

function filterList(criteria) {
  return PROPERTIES.filter(p => {
    if (criteria.zona && p.zona !== criteria.zona) return false;
    if (criteria.tipo && p.tipo !== criteria.tipo) return false;
    if (criteria.habitacionesMin && p.habitaciones < criteria.habitacionesMin) return false;
    if (criteria.precioMax && p.precio > criteria.precioMax) return false;
    return true;
  });
}

/* ---- WHATSAPP ---- */

function waLink(message) {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function waPropertyLink(p) {
  return waLink(`Hola, me interesa la propiedad "${p.titulo}" (${p.zona}, ${formatPrice(p.precio)}) que vi en su sitio web. ¿Podrían darme más información?`);
}

/* ---- RENDER DE CARDS ---- */

function propertyCard(p) {
  const badge = getBadge(p);
  return `
    <div class="property-card" data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="prop-img">
        <img src="${p.imagenes[0]}" srcset="${unsplashSrcset(p.imagenes[0])}" sizes="(max-width:768px) 100vw, 33vw" alt="${p.titulo}" loading="lazy">
        <span class="prop-badge ${badge.cls}">${badge.text}</span>
        <div class="prop-fav ${favorites.has(p.id) ? 'active' : ''}" onclick="toggleFav(event,${p.id})">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
      </div>
      <div class="prop-info">
        <div class="prop-price">${formatPrice(p.precio)}</div>
        <div class="prop-name">${p.titulo}</div>
        <div class="prop-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>${p.zona}, Costa Rica</div>
        <div class="prop-meta">
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9v11h18V9"/><path d="M1 9l11-6 11 6"/><rect x="9" y="14" width="6" height="6"/></svg><span>${p.habitaciones}</span> Hab.</div>
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M4 12a4 4 0 01-4-4V4h8v4a4 4 0 01-4 4zM20 4h-8v4a4 4 0 004 4"/><path d="M4 12v8h16v-8"/></svg><span>${p.banos}</span> Baños</div>
          <div class="prop-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg><span>${p.m2}</span> m²</div>
        </div>
        <a class="prop-wa" href="${waPropertyLink(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/><path d="M12 2a10 10 0 00-8.62 15.06L2 22l5.09-1.33A10 10 0 1012 2zm0 18.3a8.3 8.3 0 01-4.23-1.16l-.3-.18-3.02.79.8-2.95-.19-.3A8.3 8.3 0 1112 20.3z"/></svg>
          Consultar por WhatsApp
        </a>
      </div>
    </div>`;
}

function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  const filtered = filterList(currentCriteria);
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:span 3;text-align:center;padding:60px;font-family:var(--serif);font-size:1.3rem;color:var(--gray-mid)">No encontramos propiedades con esos criterios.<br><small style="font-family:var(--sans);font-size:13px">Intente ampliar su búsqueda o contáctenos para propiedades off-market.</small></div>';
  } else {
    grid.innerHTML = filtered.slice(0, displayCount).map(propertyCard).join('');
  }
  const loadBtn = document.getElementById('loadMoreBtn');
  if (loadBtn) loadBtn.style.display = filtered.length > displayCount ? '' : 'none';
}

/* ---- FILTROS ---- */

function applyFilters(criteria) {
  currentCriteria = criteria;
  displayCount = 9;
  // sincroniza las tabs de tipo con el criterio activo
  const soloTipo = criteria.tipo && Object.keys(criteria).length === 1;
  document.querySelectorAll('.filter-tab').forEach(t => {
    const active = soloTipo ? t.dataset.filter === criteria.tipo
      : Object.keys(criteria).length === 0 && t.dataset.filter === 'all';
    t.classList.toggle('active', active);
  });
  renderProperties();
}

/* Tabs de tipo en la sección de propiedades */
function filterProperties(filter, el) {
  applyFilters(filter === 'all' ? {} : { tipo: filter });
}

/* Cards de zonas */
function filterByZone(zona) {
  applyFilters({ zona });
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

/* Buscador del hero: zona + tipo + precio máximo */
function applyHeroFilter() {
  const criteria = {};
  const zona = document.getElementById('filterZone').value;
  const tipo = document.getElementById('filterType').value;
  const precioMax = document.getElementById('filterPrice').value;
  if (zona) criteria.zona = zona;
  if (tipo) criteria.tipo = tipo;
  if (precioMax) criteria.precioMax = parseInt(precioMax);
  applyFilters(criteria);
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

/* Búsqueda avanzada: zona + tipo + habitaciones + precio */
function advancedSearch() {
  const criteria = {};
  const zona = document.getElementById('advZone').value;
  const tipo = document.getElementById('advType').value;
  const beds = document.getElementById('advBeds').value;
  const precioMax = document.getElementById('advPrice').value;
  if (zona) criteria.zona = zona;
  if (tipo) criteria.tipo = tipo;
  if (beds) criteria.habitacionesMin = parseInt(beds);
  if (precioMax) criteria.precioMax = parseFloat(precioMax);
  applyFilters(criteria);
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

function loadMore() {
  displayCount += 3;
  renderProperties();
}

function toggleFav(e, id) {
  e.stopPropagation();
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  renderProperties();
}

/* Rellena los contadores "N propiedades disponibles" de las cards de zona */
function fillZoneCounts() {
  document.querySelectorAll('[data-zone-count]').forEach(el => {
    const zona = el.dataset.zoneCount;
    const n = PROPERTIES.filter(p => p.zona === zona && p.status === 'disponible').length;
    el.textContent = n + (n === 1 ? ' propiedad disponible' : ' propiedades disponibles');
  });
}

/* Formulario de contacto → abre WhatsApp con el mensaje precargado.
   ALTERNATIVA (Formspree/Web3Forms): si preferís recibir las consultas
   por correo, creá un form gratuito en formspree.io, agregá
   action="https://formspree.io/f/TU_ID" method="POST" al <form> de
   index.html (los campos ya tienen name=) y eliminá el onsubmit. */
function submitForm(e) {
  e.preventDefault();
  const val = id => (document.getElementById(id) || {}).value || '';
  const lines = [
    'Hola, les escribo desde el sitio web.',
    `Nombre: ${val('cNombre').trim() || '—'}`,
    `Teléfono: ${val('cTelefono').trim() || '—'}`,
    `Correo: ${val('cEmail').trim() || '—'}`,
    `País: ${val('cPais').trim() || '—'}`,
    `Interés: ${val('cInteres')}`,
    `Presupuesto: ${val('cPresupuesto')}`,
    `Mensaje: ${val('cMensaje').trim() || '—'}`
  ];
  window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  document.getElementById('formSuccess').classList.add('show');
}

/* ---- MODAL ---- */

function openModal(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;
  currentModalProp = p;
  currentGalleryIdx = 0;
  const badge = getBadge(p);
  document.getElementById('modalImg').src = p.imagenes[0];
  document.getElementById('modalPrice').textContent = formatPrice(p.precio);
  document.getElementById('modalName').textContent = p.titulo;
  document.getElementById('modalLocationText').textContent = p.zona + ', Costa Rica';
  document.getElementById('modalBadge').textContent = badge.text;
  document.getElementById('modalBeds').textContent = p.habitaciones;
  document.getElementById('modalBaths').textContent = p.banos;
  document.getElementById('modalSqm').textContent = p.m2;
  document.getElementById('modalGarage').textContent = p.parqueos;
  document.getElementById('modalDesc').textContent = p.descripcion;
  const waBtn = document.getElementById('modalWa');
  if (waBtn) waBtn.href = waPropertyLink(p);
  document.getElementById('modalFeatures').innerHTML = p.caracteristicas.map(f => `
    <div class="modal-feature">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg>
      ${f}
    </div>
  `).join('');
  document.getElementById('propModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e === 'force' || e.target === document.getElementById('propModal')) {
    document.getElementById('propModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function changeGallery(dir) {
  if (!currentModalProp) return;
  currentGalleryIdx = (currentGalleryIdx + dir + currentModalProp.imagenes.length) % currentModalProp.imagenes.length;
  document.getElementById('modalImg').src = currentModalProp.imagenes[currentGalleryIdx];
}

function toggleFavFromModal() {
  if (currentModalProp) {
    if (favorites.has(currentModalProp.id)) favorites.delete(currentModalProp.id);
    else favorites.add(currentModalProp.id);
    renderProperties();
  }
}

/* ---- CALCULADORA HIPOTECARIA ---- */

function calcMortgage() {
  const val = parseFloat(document.getElementById('propValue').value) || 500000;
  const dp = parseFloat(document.getElementById('downPct').value) / 100;
  const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const term = parseInt(document.getElementById('loanTerm').value) * 12;
  const loan = val * (1 - dp);
  const down = val * dp;
  let monthly;
  if (rate === 0) { monthly = loan / term; }
  else { monthly = loan * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1); }
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

/* ---- UI GENERAL ---- */

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

function initScrollEffects() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.dataset.count);
  const dur = 2000;
  const step = target / (dur / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('en-US');
  }, 16);
}

function initCounters() {
  const counterEls = document.querySelectorAll('[data-count], .counter');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => obs.observe(el));
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const bt = document.getElementById('back-top');
  if (window.scrollY > 80) { nav.classList.add('scrolled'); bt.classList.add('show'); }
  else { nav.classList.remove('scrolled'); bt.classList.remove('show'); }
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal('force'); });

/* Botón flotante de WhatsApp: precarga el mensaje genérico */
function initWhatsAppFloat() {
  const fab = document.getElementById('waFloat');
  if (fab) fab.href = waLink('Hola, vi su sitio web y me gustaría más información sobre sus propiedades.');
}

/* ---- INIT ---- */
renderProperties();
fillZoneCounts();
initScrollEffects();
initCounters();
initWhatsAppFloat();
calcMortgage();
