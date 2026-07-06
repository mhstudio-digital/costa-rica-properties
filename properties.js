/* ============================================================
   COSTA RICA PROPERTIES — ARCHIVO DE DATOS
   Este es el ÚNICO archivo que necesitás editar para:
   - Agregar, editar o quitar propiedades (array PROPERTIES)
   - Cambiar los datos de contacto del sitio (SITE_CONFIG)
   Ver README.md para instrucciones paso a paso.
   ============================================================ */

/* ---- CONFIGURACIÓN DEL SITIO ----
   whatsapp: solo dígitos, con código de país, sin "+" ni guiones. */
const SITE_CONFIG = {
  whatsapp: "50622884400",            /* REEMPLAZAR: número real de WhatsApp */
  telefono: "+506 2288-4400",         /* REEMPLAZAR: teléfono real */
  email: "info@costaricaproperties.cr", /* REEMPLAZAR: correo real */
  direccion: "Prospero Fernández, Escazú, San José, Costa Rica",
  nombre: "Costa Rica Properties",
};

/* ---- SCHEMA DE UNA PROPIEDAD ----
   id:            número único (no repetir)
   titulo:        nombre comercial de la propiedad
   precio:        número en USD, SIN símbolos ni comas (ej: 895000)
   zona:          "Escazú" | "Santa Ana" | "Guanacaste" | "Tamarindo" |
                  "Nosara" | "Jacó" | "La Fortuna" | "Manuel Antonio"
   tipo:          "Villa" | "Casa" | "Condominio" | "Finca" | "Lote" | "Penthouse"
   habitaciones:  número
   banos:         número
   m2:            número (construcción)
   parqueos:      número
   descripcion:   texto libre (se muestra en el detalle)
   imagenes:      array de URLs; la primera es la portada de la card
   caracteristicas: array de textos cortos (amenidades)
   featured:      true = muestra badge dorado "Destacado"
   status:        "disponible" | "vendido" | "reservado"
   ---------------------------------- */

const PROPERTIES = [
  {
    id: 1,
    titulo: "Villa Paraíso Frente al Mar",
    precio: 3850000,
    zona: "Guanacaste",
    tipo: "Villa",
    habitaciones: 5,
    banos: 6,
    m2: 680,
    parqueos: 3,
    descripcion: "Villa de arquitectura contemporánea con acceso directo a playa privada en Playa Flamingo. Diseño de interiores firmado, piscina infinita con vista al Pacífico, sala de cine, bodega de vinos y sistema domótico integral. Un estándar de vida sin comparación en Costa Rica.",
    imagenes: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Piscina infinita","Playa privada","Cine en casa","Bodega de vinos","Domótica Crestron","Generador 50kW","Pozo propio","Seguridad 24/7","Jacuzzi exterior","Cocina gourmet","Dock privado","Helipuerto"],
    featured: true,
    status: "disponible"
  },
  {
    id: 2,
    titulo: "Penthouse Sky Residences",
    precio: 1280000,
    zona: "Escazú",
    tipo: "Condominio",
    habitaciones: 3,
    banos: 4,
    m2: 320,
    parqueos: 2,
    descripcion: "Penthouse de doble altura en el proyecto más exclusivo de Escazú. Terrazas de 200m² con vistas panorámicas al Valle Central y el Volcán Irazú. Acabados europeos, cocina abierta de alta gama y amenidades de resort en el corazón del barrio más cosmopolita del país.",
    imagenes: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Doble altura","Vista Volcán Irazú","Terraza 200m²","Acabados italianos","Piscina rooftop","Gym privado","Conserje 24h","Lobby boutique","Smart home","Valet parking"],
    featured: false,
    status: "disponible"
  },
  {
    id: 3,
    titulo: "Casa La Hacienda",
    precio: 895000,
    zona: "Santa Ana",
    tipo: "Casa",
    habitaciones: 5,
    banos: 5,
    m2: 490,
    parqueos: 3,
    descripcion: "Residencia de estilo mediterráneo en comunidad cerrada premium de Santa Ana. Amplios espacios de entretenimiento, jardines tropicales diseñados por paisajista, cancha de tenis y sala de juegos. Ideal para familias que buscan privacidad y calidad de vida en el Gran Área Metropolitana.",
    imagenes: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Cancha de tenis","Jardín tropical","Piscina temperada","Sala de juegos","Cuarto de servicio","Generador","Pozo","Seguridad 24/7","Sistemas de riego","Bodega"],
    featured: true,
    status: "disponible"
  },
  {
    id: 4,
    titulo: "Villa Surf & Sunset",
    precio: 1650000,
    zona: "Tamarindo",
    tipo: "Villa",
    habitaciones: 4,
    banos: 4,
    m2: 380,
    parqueos: 2,
    descripcion: "Villa diseñada para capturar cada puesta de sol de Tamarindo desde sus múltiples terrazas. A 200 metros de la playa, esta propiedad genera ingresos comprobados como alquiler vacacional de lujo con ocupación promedio del 78% anual.",
    imagenes: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Vista al mar","200m de la playa","Alquiler vacacional","Piscina privada","Cocina gourmet","BBQ outdoor","Sala de yoga","Sistema solar","Renta comprobada","Decorada de lujo"],
    featured: true,
    status: "disponible"
  },
  {
    id: 5,
    titulo: "Finca El Jaguar Lodge",
    precio: 2200000,
    zona: "La Fortuna",
    tipo: "Finca",
    habitaciones: 8,
    banos: 9,
    m2: 1200,
    parqueos: 6,
    descripcion: "Ecolodge de lujo en plena zona de amortiguamiento del Parque Nacional Arenal. 8 bungalows privados con vista al volcán, spa, restaurante y senderos privados. Negocio en operación con revenue anual de $280,000 y permiso de construcción para 4 unidades adicionales.",
    imagenes: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f28f7e27?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Vista Volcán Arenal","8 bungalows","Spa completo","Restaurante","Senderos 3km","Negocio operando","Permiso expansión","Fuente termal","Helipad","Generador solar"],
    featured: false,
    status: "disponible"
  },
  {
    id: 6,
    titulo: "Loft Moderno Los Yoses",
    precio: 445000,
    zona: "Escazú",
    tipo: "Condominio",
    habitaciones: 2,
    banos: 2,
    m2: 145,
    parqueos: 1,
    descripcion: "Diseño editorial en planta abierta con doble altura y mezzanine. Acabados de vanguardia, cocina Bulthaup y baños revestidos en mármol travertino. En edificio boutique de solo 12 unidades a pasos de los mejores restaurantes de Escazú.",
    imagenes: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Doble altura","Diseño editorial","Cocina Bulthaup","Mármol travertino","Gimnasio","Rooftop social","Sólo 12 unidades","Portero","A/C central","Vista montaña"],
    featured: false,
    status: "disponible"
  },
  {
    id: 7,
    titulo: "Casa Zen Nosara",
    precio: 780000,
    zona: "Nosara",
    tipo: "Casa",
    habitaciones: 3,
    banos: 3,
    m2: 280,
    parqueos: 1,
    descripcion: "Arquitectura bioclimática en perfecta armonía con el entorno de Nosara. Maderas tropicales sostenibles, piedra volcánica y una piscina natural integrada al jardín. A 5 minutos de Playa Guiones, en una de las zonas de mayor demanda para retiro y bienestar.",
    imagenes: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Arquitectura bioclimática","Maderas certificadas","Piscina natural","Jardín tropical","5 min playa","Paneles solares","Agua de lluvia","Estudio yoga","Sin HOA","Vista jungle"],
    featured: true,
    status: "disponible"
  },
  {
    id: 8,
    titulo: "Residencia Las Palmas",
    precio: 620000,
    zona: "Jacó",
    tipo: "Casa",
    habitaciones: 4,
    banos: 4,
    m2: 340,
    parqueos: 2,
    descripcion: "Residencia de playa con diseño open concept a pasos del surf en Jacó. Alta demanda para alquiler vacacional con rentabilidad documentada del 8.2% anual. Comunidad cerrada con piscina compartida y acceso directo a la playa.",
    imagenes: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["100m de la playa","Rentabilidad 8.2%","Piscina comunal","Surf directo","Comunidad cerrada","BBQ deck","Cuarto de tablas","Sistema solar","Renta Airbnb","Decorada lista"],
    featured: true,
    status: "disponible"
  },
  {
    id: 9,
    titulo: "Gran Villa Cielo Abierto",
    precio: 4500000,
    zona: "Guanacaste",
    tipo: "Villa",
    habitaciones: 7,
    banos: 8,
    m2: 850,
    parqueos: 4,
    descripcion: "La propiedad más espectacular disponible en el Pacífico Norte. Siete suites con baño privado, múltiples piscinas, cancha de tenis, casita de huéspedes independiente y muelle privado. Ubicada en la punta más exclusiva de Playa Hermosa con 320° de vista oceánica.",
    imagenes: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Vista 320° océano","Muelle privado","Múltiples piscinas","Cancha de tenis","Casita huéspedes","Chef's kitchen","Sala teatro","Gym completo","Staff quarters","Helipad certificado"],
    featured: true,
    status: "disponible"
  },
  {
    id: 10,
    titulo: "Condominio Mirador Escazú",
    precio: 560000,
    zona: "Escazú",
    tipo: "Condominio",
    habitaciones: 3,
    banos: 3,
    m2: 210,
    parqueos: 2,
    descripcion: "En la cima de Escazú con vistas imbatibles al Valle Central y el Océano Pacífico en días despejados. Desarrollo premium de 45 unidades con amenidades de resort, sala de negocios y servicio de concierge disponible 24 horas.",
    imagenes: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Vista Valle Central","Vista al Pacífico","45 unidades","Sala negocios","Concierge 24h","Piscina infinity","Spa","Wine cellar comunal","Cancha padel","Pet friendly"],
    featured: false,
    status: "disponible"
  },
  {
    id: 11,
    titulo: "Hacienda San Ramón",
    precio: 1100000,
    zona: "Santa Ana",
    tipo: "Finca",
    habitaciones: 5,
    banos: 5,
    m2: 620,
    parqueos: 4,
    descripcion: "Hacienda colonial restaurada en una propiedad de 15 hectáreas en las faldas de Santa Ana. Caballerizas para 12 caballos, café orgánico en producción, invernadero y casas para empleados. Una oportunidad única para quienes buscan un estilo de vida auténtico sin renunciar al lujo.",
    imagenes: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["15 hectáreas","Caballeriza 12 caballos","Café orgánico","Invernadero","Casa empleados","Río privado","Colonial restaurado","Piscina","Establo","Zona de cultivo"],
    featured: true,
    status: "disponible"
  },
  {
    id: 12,
    titulo: "Casa Brisa del Pacífico",
    precio: 520000,
    zona: "Tamarindo",
    tipo: "Casa",
    habitaciones: 3,
    banos: 3,
    m2: 220,
    parqueos: 1,
    descripcion: "Casa de playa en Tamarindo con diseño tropical moderno, lista para habitar y generar ingresos. Terminada en 2024 con materiales de primera calidad, domótica básica y acabados que elevan el estándar del vecindario. Historial de alquiler disponible para análisis.",
    imagenes: [
      "https://images.unsplash.com/photo-1582407947304-fd86f28f7e27?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format&fit=crop"
    ],
    caracteristicas: ["Terminada 2024","Domótica básica","Piscina privada","Alquiler listo","5 min playa","Materiales premium","Brisa natural","Jardín mango","Comunidad tranquila","Financiamiento CR"],
    featured: false,
    status: "disponible"
  }
];
