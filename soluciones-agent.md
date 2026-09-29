# soluciones-agent — Recursos gráficos pendientes

Generado por el agente de construcción de la página **soluciones.html**.  
Fecha: 2026-05-25

---

## ⚠️ Recursos faltantes

### 1. Logo Vantor

| Campo       | Valor |
|-------------|-------|
| **Ruta**    | `img/partners/vantor-logo.svg` |
| **Formato** | SVG (preferido) o PNG transparente |
| **Tamaño**  | Ancho máximo 160px · altura 28–36px visual |
| **Uso**     | Partner badge en sección Vantor + aliados cards en home |
| **Estado actual** | ⚠️ Mostrando texto "Vantor" como placeholder |
| **HTML ref** | `soluciones.html` sección `#vantor` → `partner-badge` · `index.html` sección aliados |

**Integración:** Reemplazar:
```html
<span class="partner-badge__logo--text" aria-label="Vantor">Vantor</span>
```
por:
```html
<img src="img/partners/vantor-logo.svg" alt="Vantor" class="partner-badge__logo" />
```

---

### 2. Logo Syspective

| Campo       | Valor |
|-------------|-------|
| **Ruta**    | `img/partners/syspective-logo.svg` |
| **Formato** | SVG (preferido). Si es sobre fondo oscuro, necesita versión blanca/monocromática |
| **Tamaño**  | Ancho máximo 160px · altura 28–36px visual |
| **Uso**     | Partner badge en sección Syspective (fondo dark) + aliados cards en home |
| **Estado actual** | ⚠️ Mostrando texto "Syspective" como placeholder |
| **HTML ref** | `soluciones.html` sección `#syspective` → `partner-badge` · `index.html` sección aliados |

**Integración:** Reemplazar:
```html
<span class="partner-badge__logo--text-dark" aria-label="Syspective">Syspective</span>
```
por:
```html
<img src="img/partners/syspective-logo.svg" alt="Syspective" class="partner-badge__logo" style="filter:brightness(0) invert(1)" />
```
_(el `filter` invierte el logo a blanco para el fondo oscuro; quitar si la versión ya es blanca)_

---

### 3. Screenshots de producto (secciones sol-section)

Las 4 secciones usan imágenes del folder `img/coolmap*.png` como placeholders funcionales. Si se quiere mostrar capturas reales de cada producto:

| Archivo | Sección | Contenido ideal |
|---------|---------|-----------------|
| `img/sol-arcgis-min.jpg` | `#arcgis` | Captura de ArcGIS Enterprise Portal o Experience Builder |
| `img/sol-vantor-min.jpg` | `#vantor` | Interfaz de producto Vantor |
| `img/sol-syspective-min.jpg` | `#syspective` | Imagen SAR de zona de monitoreo (Colombia) |
| `img/sol-vertigis-min.jpg` | `#vertigis` | Captura de VertiGIS Studio o Neo en campo |

**Formato:** JPG · 1200×900 · ≤200 KB  
**Nota:** Los coolmaps actuales son válidos temporalmente. Reemplazar cuando se tengan capturas de producto.

---

## ✅ Recursos disponibles (ya integrados)

| Recurso | Uso |
|---------|-----|
| `img/logo-esri-min.png` | Partner badge ArcGIS |
| `img/logo-vertigis.svg` | Partner badge VertiGIS |
| `img/coolmap1-min.png` | Imagen sección ArcGIS |
| `img/coolmap3-min.png` | Imagen sección Vantor |
| `img/coolmap2-min.png` | Imagen sección Syspective |
| `img/coomap4-min.png` | Imagen sección VertiGIS |
| `img/section2-min.png` | Fondo overlay sección Integración |
| `img/new-slider-min.png` | Hero background |

---

## 🔧 Post-integración

Una vez subidos los logos:
1. Colocar en `img/partners/`
2. Reemplazar los spans placeholder en `soluciones.html`
3. Hacer lo mismo en `index.html` sección aliados (`.ally-card`)
4. Ejecutar `npm run validate` para verificar sin errores
