# Costa Rica Properties — Sitio inmobiliario de lujo

Sitio estático (HTML/CSS/JS puro, sin build ni dependencias). Se puede servir
desde cualquier hosting estático (Netlify, Vercel, GitHub Pages, cPanel).

## Estructura

| Archivo | Qué es | ¿Lo edito? |
|---|---|---|
| `properties.js` | **Datos**: propiedades + contacto del sitio | ✅ Sí — es el único que necesitás tocar |
| `index.html` | Estructura de la página | Solo para textos/fotos marcados `<!-- REEMPLAZAR: ... -->` |
| `styles.css` | Estilos | No |
| `script.js` | Lógica (render, filtros, WhatsApp, modal) | No |
| `privacidad.html` | Política de privacidad (Ley 8968) | Revisar antes de lanzar |

## Cómo agregar una propiedad nueva

1. Abrí `properties.js`.
2. Copiá el bloque de ejemplo de abajo y pegalo **dentro del array `PROPERTIES`**,
   antes del `];` final (con una coma después del objeto anterior).
3. Guardá. No hay que tocar nada más: la card, el detalle, los filtros y el
   botón de WhatsApp se generan solos.

```js
{
  id: 13,                            // único, no repetir
  titulo: "Villa Ejemplo del Mar",
  precio: 1250000,                   // USD, número SIN "$" ni comas
  zona: "Guanacaste",                // Escazú | Santa Ana | Guanacaste | Tamarindo | Nosara | Jacó | La Fortuna | Manuel Antonio
  tipo: "Villa",                     // Villa | Casa | Condominio | Finca | Lote | Penthouse
  habitaciones: 4,
  banos: 3,
  m2: 350,
  parqueos: 2,
  descripcion: "Descripción completa que se muestra al abrir el detalle de la propiedad.",
  imagenes: [                        // la PRIMERA es la portada de la card
    "https://ejemplo.com/foto-1.jpg",
    "https://ejemplo.com/foto-2.jpg",
    "https://ejemplo.com/foto-3.jpg"
  ],
  caracteristicas: ["Piscina privada", "Vista al mar", "Seguridad 24/7"],
  featured: true,                    // true = badge dorado "Destacado"
  status: "disponible"               // disponible | vendido | reservado
},
```

Notas:
- `status: "vendido"` o `"reservado"` muestra el badge oscuro correspondiente
  y excluye la propiedad del conteo "N propiedades disponibles" por zona.
- Para **quitar** una propiedad, borrá su objeto completo (de `{` a `},`).
- Los conteos de las cards de zonas se calculan automáticamente.

## Cambiar los datos de contacto

En `properties.js`, al inicio, editá `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  whatsapp: "50622884400",   // solo dígitos con código de país (506...)
  telefono: "+506 2288-4400",
  email: "info@costaricaproperties.cr",
  ...
};
```

El número de `whatsapp` alimenta el botón flotante, el submit del formulario
de contacto y los botones "Consultar por WhatsApp" de cada propiedad.

## Antes de lanzar con un cliente real

Buscá `REEMPLAZAR` en `index.html` y `properties.js`: cada comentario marca
una foto de stock, estadística o dato inventado que hay que sustituir por
información real. También actualizá la URL del sitio en las meta tags
`og:url` / `canonical` del `<head>`.
