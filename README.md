# Flex Systems - Instrucciones de Configuración

## 📁 Estructura de Carpetas para Imágenes y Videos

Debes crear las siguientes carpetas en la raíz del proyecto y agregar tus archivos:

```
webapp/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── slide1.png
│   │   │   ├── slide2.png
│   │   │   ├── slide3.png
│   │   │   ├── slide4.png
│   │   │   └── slide5.png
│   │   └── apps/
│   │       ├── flexg/
│   │       │   ├── screenshot1.png
│   │       │   ├── screenshot2.png
│   │       │   └── screenshot3.png
│   │       ├── appgym/
│   │       │   ├── screenshot1.png
│   │       │   ├── screenshot2.png
│   │       │   └── screenshot3.png
│   │       ├── toxicapp/
│   │       │   ├── screenshot1.png
│   │       │   ├── screenshot2.png
│   │       │   └── screenshot3.png
│   │       └── stockyventas/
│   │           ├── screenshot1.png
│   │           ├── screenshot2.png
│   │           └── screenshot3.png
│   └── videos/
│       ├── flexg-demo.mp4
│       ├── appgym-demo.mp4
│       ├── toxicapp-demo.mp4
│       └── stockyventas-demo.mp4
```

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias
```powershell
npm install
```

### 2. Ejecutar en modo desarrollo
```powershell
npm run dev
```

### 3. Abrir en el navegador
Visita: http://localhost:3000

## 🎨 Características Implementadas

✅ **Carrusel 3D Hero**: Rotación automática cada 3 segundos con soporte para PNG transparentes
✅ **4 Slots de Aplicaciones**: Cada uno con carrusel 3D, descripción, botón "Ver más" y video
✅ **Diseño Responsive**: Totalmente adaptable a móviles, tablets y desktop
✅ **Tema Oscuro**: Negro con acentos dorados y plateados
✅ **Animaciones Framer Motion**: Efectos suaves y profesionales en todos los elementos
✅ **Efectos de Partículas**: Background animado con partículas interactivas
✅ **Efectos Glow**: Resplandores dorados y plateados
✅ **Navbar Fijo**: Con efecto glass cuando haces scroll
✅ **Footer Profesional**: Con enlaces y información de contacto

## 🎯 Personalización

### Cambiar textos de aplicaciones
Edita el archivo `app/page.tsx` en la constante `applications`

### Modificar colores
Edita `tailwind.config.ts` en la sección `colors`

### Agregar más aplicaciones
Agrega objetos al array `applications` en `app/page.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Framer Motion**: Animaciones fluidas
- **Swiper**: Carruseles 3D profesionales
- **React Particles**: Efectos de fondo animados
