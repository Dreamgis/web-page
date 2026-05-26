# nosotros-agent — Recursos gráficos pendientes

Generado por el agente de construcción de la página **nosotros.html**.  
Fecha: 2026-05-25

---

## ⚠️ Recursos faltantes

Los siguientes archivos gráficos son necesarios para completar la página. Mientras no existan, se muestran placeholders en su lugar.

---

### 1. Foto del equipo o instalaciones (sección "Nuestra historia")

| Campo         | Valor |
|---------------|-------|
| **Ruta**      | `img/nosotros-equipo-min.jpg` |
| **Formato**   | JPG (JPEG progresivo) |
| **Dimensiones** | 1200 × 900 px mínimo |
| **Aspect ratio** | 4:3 |
| **Descripción** | Foto grupal del equipo DreamGIS, o imagen de trabajo en oficina/campo con contexto geoespacial (pantallas GIS, mapas, trabajo de campo). Fondo con branding coherente. |
| **Referencia CSS** | `.nos-about__image` en `css/v2-nosotros.css` |
| **Referencia HTML** | `<figure class="nos-about__image">` en `nosotros.html` línea ~113 |
| **Nota** | Reemplazar el bloque `<figure class="nos-about__image--placeholder">` por `<img src="img/nosotros-equipo-min.jpg" alt="Equipo DreamGIS" />` |

---

### 2. Fotos individuales del equipo (sección "Equipo")

> Se necesitan 4 fotos (o más si el equipo es mayor). Formato idéntico para todas.

| Campo         | Valor |
|---------------|-------|
| **Ruta**      | `img/team/[nombre-apellido].jpg` |
| **Formato**   | JPG |
| **Dimensiones** | 400 × 400 px (cuadrado) |
| **Aspect ratio** | 1:1 |
| **Descripción** | Retrato profesional con fondo neutro o corporativo. Encuadre: busto/cabeza. Iluminación uniforme. |

#### Archivos específicos esperados:

| Archivo | Nombre en página | Cargo |
|---------|-----------------|-------|
| `img/team/fabian-heredia.jpg` | Fabian Heredia | CEO & Founder |
| `img/team/director-tecnico.jpg` | (nombre real) | GIS Architect / Director Técnico |
| `img/team/director-comercial.jpg` | (nombre real) | Business Development / Director Comercial |
| `img/team/gis-specialist.jpg` | (nombre real) | Remote Sensing & SAR / GIS Senior |

**Referencia CSS:** `.team-card__avatar` en `css/v2-nosotros.css`  
**Referencia HTML:** `<div class="team-card__avatar team-card__avatar--placeholder">` → reemplazar SVG placeholder por `<img src="img/team/[nombre].jpg" alt="[Nombre completo]" />`

---

### 3. Hero background dedicado (sección hero, opcional)

| Campo         | Valor |
|---------------|-------|
| **Ruta**      | `img/nosotros-hero-min.png` |
| **Formato**   | PNG o JPG |
| **Dimensiones** | 1920 × 1080 px mínimo |
| **Descripción** | Imagen satelital o aérea diferente a la del home. Puede ser Colombia desde el espacio, territorio andino o mapa de ciudad visto desde arriba. Tonalidad azul predominante para coherencia con paleta navy. |
| **Referencia HTML** | `<img src="img/new-slider-min.png"` en hero de `nosotros.html` — reemplazar con la ruta nueva |
| **Estado actual** | ⚠️ Reutilizando `img/new-slider-min.png` del home como placeholder |

---

## ✅ Recursos disponibles (ya integrados)

| Recurso | Uso en página |
|---------|--------------|
| `img/new-design/logo-dreamgis.svg` | Logo nav y footer |
| `img/new-design/logo-dreamgis-isotipo-12.svg` | Favicon |
| `img/new-slider-min.png` | Hero background (placeholder) |
| `img/icon-linkedin.svg` | Footer social |
| `logos/anm-min.png` … `logos/esant-min.png` | Grid de 18 clientes |

---

## 🔧 Instrucciones de integración

Una vez entregado cada recurso:

1. Colocarlo en la ruta indicada
2. Optimizar (WebP o `imagemin` a ≤150 KB para fotos de equipo, ≤300 KB para hero)
3. Reemplazar el bloque placeholder en `nosotros.html` por el tag `<img>` real
4. Ejecutar `npm run validate` para verificar que no hay imágenes rotas ni alt faltantes
