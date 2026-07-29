# 🏛️ Punta Playa Condos | Landing Page de Lujo

Landing page oficial de **Punta Playa Condos**, un desarrollo residencial boutique exclusivo de 8 departamentos en El Pedregal, Playa del Carmen.

Este sitio web fue diseñado siguiendo la arquitectura de diseño, tipografía y estilo editorial de **[St. Regis Residences | Marriott Luxury Brands](https://marriottresidences.com/luxury_brand/st-regis-residences/)**.

---

## 🌟 Características Principales

- **Diseño St. Regis Luxury Aesthetic**:
  - Lienzo *Warm Luxury Cream* (`#FAF7F2`), azul marino profundo (`#0A1424`) y acentos en dorado champán cepillado (`#C5A059`).
  - Banner Hero con concepto de "Cuadro Enmarcado" (*Framed Canvas*) y emblema oficial central.
  - Narrativa editorial con encabezado insigna **"VIVE LO EXQUISITO"** y líneas divisorias de aguja (*Hairline Dividers*).
- **Plantas Arquitectónicas Interactivas**:
  - Planos de distribución para las 4 unidades disponibles (`Depto 302`, `Depto 101 Garden`, `Depto 201` y `Depto 301 Master`).
  - Visor modal Lightbox en pantalla completa al hacer clic o tocar cualquier planta.
- **Calculadora Financiera de Esquema de Pago**:
  - Cálculo interactivo en tiempo real para el enganche del **30%** (Firma de Contrato) y el **70%** a la Entrega (compatible con Crédito Bancario).
- **Filtro de Inventario**:
  - Filtrado en vivo de unidades por tipología (1 Recámara / 2 Recámaras / Todas las Unidades).
- **Pestañas de Acabados & Equipamiento**:
  - Presentación interactiva de pisos de Mármol Travertino, carpintería de Tzalam, microcemento, granito negro San Gabriel y equipamiento de cocina Teka.
- **Optimización Móvil con Barra de Acción Rápida (Sticky Bar)**:
  - Navegación responsive fluida y barra flotante en la parte inferior de pantallas móviles con accesos directos a WhatsApp y Cotización.

---

## 📂 Estructura del Proyecto

```text
punta-playa-web/
├── index.html              # Estructura semántica HTML5 y contenido St. Regis
├── styles.css              # Sistema de diseño, tokens CSS, paleta y responsive
├── script.js              # Lógica interactiva (Calculadora 30/70, filtros, modal)
├── package.json            # Scripts de ejecución local y metadatos del proyecto
├── .gitignore              # Archivos ignorados por Git
└── assets/                 # Recursos gráficos y multimedia
    ├── logo_transparent.png # Logotipo oficial transparente del proyecto
    ├── logo.png             # Logotipo oficial original
    ├── Fachada.jpg          # Render principal de fachada bioclimática
    ├── Alberca.jpg          # Render panorámico de alberca en Rooftop
    ├── Bar.jpg              # Render de Sunset Bar en Rooftop
    ├── Sala.jpg             # Render de interiores
    └── floorplans/          # Plantas arquitectónicas de las 4 unidades
        ├── depto_101_planta.png
        ├── depto_201_planta.png
        ├── depto_301_planta.png
        └── depto_302_planta.png
```

---

## 🛠️ Ejecución Local

Para visualizar y trabajar en el proyecto localmente:

### Opción A: Con Python 3
```bash
python3 -m http.server 8765
```
Abre en tu navegador: `http://localhost:8765`

### Opción B: Con Node.js / NPM
```bash
npm start
```

---

## 🚀 Instrucciones de Despliegue a Producción

### 1. Despliegue en GitHub Pages (Recomendado)
1. Sube este repositorio a tu cuenta de GitHub con el nombre `punta-playa-web`.
2. Ve a los **Settings** del repositorio en GitHub.
3. En el menú izquierdo, selecciona **Pages**.
4. En **Build and deployment** -> **Source**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, luego haz clic en **Save**.
6. En un par de minutos, tu sitio estará en vivo en `https://<tu-usuario>.github.io/punta-playa-web/`.

### 2. Despliegue en Netlify / Vercel
1. Conecta tu cuenta de GitHub a [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
2. Selecciona el repositorio `punta-playa-web`.
3. Haz clic en **Deploy** (no requiere configuración de build especial por ser un sitio estático puro).

### 3. Subir a GoDaddy (cPanel)
1. Comprime los archivos `index.html`, `styles.css`, `script.js` y la carpeta `assets/` en un archivo `.zip`.
2. Inicia sesión en **GoDaddy** -> **Mis Productos** -> **cPanel / Web Hosting** -> **Administrador de Archivos**.
3. Abre la carpeta `public_html`.
4. Carga y extrae el archivo `.zip`.

---

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
