# Elliot Alderson — Portfolio (Proyecto 1: HTML + CSS - Victor Vigil Vela)

Portafolio ficticio desarrollado para el Máster. El sitio presenta a **Elliot Alderson** como desarrollador full-stack e incluye una sección _About_, un _Portfolio_ con 4+ proyectos y un _Contact_ con formulario básico.

> **Aviso legal**: Personaje ficticio inspirado en _Mr. Robot_. Proyecto con fines académicos.

---

## Web desplegada

- https://elliotportfolio.vercel.app

---

## 📁 Estructura

/
├─ index.html
├─ styles.css
└─ assets/
├─ img/
└─ js/
├─ nav-drawer.js
└─ theme-toggle.js

> El enunciado pedía **HTML + CSS**. He mantenido 2 JS **opcionales** (identificados) para mejorar UX:
>
> - `nav-drawer.js`: abre/cierra el menú móvil y sincroniza `aria-expanded`.
> - `theme-toggle.js`: interruptor de tema (además del auto-tema por `prefers-color-scheme`).

---

## Requisitos del proyecto e implementación

- **Estructura básica HTML** con `<!DOCTYPE html>`, `head` con metadatos (description, author, keywords, Open Graph, theme-color) y `meta viewport`.
- **Semántica**: `header`, `nav[aria-label="Primary"]`, `main#main`, `section`, `article` (cada uno con `h3`), `footer`.
- **Accesibilidad**:
  - **Skip link** (primer elemento del `body`) → `href="#main"` y `tabindex="-1"` en `main`.
  - Alternativas de texto `alt` en imágenes.
  - Estados de foco con `:focus-visible` (enlaces del nav, botones y CTAs).
  - `aria-expanded` y `aria-controls` en el botón _burger_.
  - Respeto a `prefers-reduced-motion`.
- **CSS**:
  - Reset ligero + **variables** en `:root` (colores, tipografías).
  - Organización por secciones comentadas (Header, Hero, About, Portfolio, Contact, Footer).
- **Flexbox + Grid**:
  - Header, listas de _tags_ y acciones → **Flexbox**.
  - Rejilla de proyectos → **CSS Grid** con `auto-fit` + `minmax`.
- **Responsive**:
  - _Breakpoints_ móviles (`max-width: 600px`).
  - Menú móvil con _drawer_.
- **Contenido**:
  - **Hero** con tarjeta de perfil.
  - **About** (3 párrafos).
  - **Portfolio** con **5** proyectos (imágenes, título, descripción, _tags_ y CTA).
  - **Contact**: formulario con `name`, `email` y `message`.
  - **Footer** con aviso legal y enlaces.
- **Validación**:
  - **HTML**: _No errors or warnings to show_ (W3C Nu Checker).
  - **CSS**: _¡Enhorabuena! No error encontrado_ (W3C CSS Validator).

---

## Decisiones de diseño

- **Tono sobrio** y “security-minded” (tipografía Roboto + Roboto Mono).
- **Paleta neutra** con acento verde/ámbar. Tema oscuro soportado por preferencia del sistema; interruptor manual opcional.
- **Accesibilidad** priorizada (foco visible, navegación por teclado, _skip link_).
- **Rendimiento**: imágenes optimizadas, `object-fit` en _cards_, layout sin frameworks.

---

## Scripts

- `nav-drawer.js`:

  - Alterna la clase `.open` en `#nav`.
  - Actualiza `aria-expanded="true|false"` en el botón burger.
  - Cierra el menú al seleccionar un enlace.

- `theme-toggle.js`:
  - Lee/guarda preferencia en `localStorage`.
  - Aplica/retira `data-theme="dark"` en `:root`.

---

## 📜 Créditos y licencias

- Imágenes: _uso educativo_ / _placeholders_ sin ánimo comercial.
- Personaje: **ficción** inspirada en _Mr. Robot_.
- Autor del proyecto: **Víctor Vigil Vela**.

---
