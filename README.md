# APEX Emergency QR

QR de emergencia para motociclistas: genera un sticker escaneable con datos médicos, contacto ICE, información de la moto, vCard offline y vista online comprimida.

[Ver demo publicada](https://areivan.github.io/Apex_Ride_QR/)

## Contenido

- [Qué problema resuelve](#qué-problema-resuelve)
- [Por qué existe](#por-qué-existe)
- [Funcionalidades principales](#funcionalidades-principales)
- [Flujo del producto](#flujo-del-producto)
- [Arquitectura](#arquitectura)
- [Decisiones técnicas](#decisiones-técnicas)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts disponibles](#scripts-disponibles)
- [Rutas principales](#rutas-principales)
- [Privacidad y seguridad](#privacidad-y-seguridad)
- [Estado del proyecto](#estado-del-proyecto)
- [Autor](#autor)
- [Licencia](#licencia)

## Qué problema resuelve

En una emergencia vial no siempre hay señal, tiempo o una persona consciente para explicar datos críticos. APEX Emergency QR convierte esa información en un QR visible para casco, moto, cartera o chamarra.

El objetivo no es reemplazar documentos oficiales ni atención médica. El objetivo es reducir fricción en los primeros segundos: quién es el rider, a quién llamar, qué condiciones médicas importan y qué moto está involucrada.

## Por qué existe

El proyecto nace de una necesidad concreta para riders y clubs: llevar información de emergencia en un formato simple, portable y fácil de escanear.

La decisión técnica principal es **local-first**: no hay login, backend ni base de datos. La persona controla qué datos carga y el QR conserva una vCard dentro del propio código para funcionar incluso sin internet.

## Funcionalidades principales

- **Generador de QR de emergencia:** captura identidad, teléfono, contacto ICE, datos médicos, alergias, notas, moto, placas, color, póliza y datos extra.
- **vCard offline:** el QR contiene una vCard 3.0 con información crítica para que el escaneo funcione sin conexión.
- **Vista online comprimida:** el perfil también puede abrir `/emergencia` con datos comprimidos mediante LZString cuando hay internet.
- **Sticker exportable:** genera una vista imprimible y permite exportar el sticker como PNG.
- **Acciones rápidas:** copiar link, copiar vCard, guardar/cargar datos locales, imprimir y limpiar perfil.
- **Vista de emergencia:** muestra datos priorizados, botón para llamada, WhatsApp y resumen copiable.
- **Privacidad por diseño:** los datos no se envían a servidores; se guardan localmente en el navegador si la persona decide guardarlos.
- **Landing premium:** comunica el flujo con una experiencia visual orientada a señal, seguridad, QR y movimiento.

## Flujo del producto

1. El rider captura sus datos críticos en `/crear`.
2. La app construye dos payloads: una vCard offline y un link online comprimido.
3. El QR usa la vCard como contenido principal.
4. El sticker se descarga como PNG o se imprime.
5. En emergencia, cualquier persona escanea el QR y accede a la información disponible.

## Arquitectura

APEX Emergency QR está construido como una app frontend con Next.js App Router, React, TypeScript y Tailwind CSS.

```text
src/
├── app/                  # Rutas principales de Next.js
│   ├── page.tsx          # Landing principal
│   ├── crear/            # Generador de QR
│   ├── emergencia/       # Vista pública de emergencia
│   ├── como-funciona/    # Explicación del producto
│   └── stickers/         # Galería de formatos de sticker
├── components/
│   ├── creator/          # Formulario, preview, sticker y acciones
│   ├── emergency/        # Lectura y presentación de datos de emergencia
│   ├── landing/          # Secciones visuales de la landing
│   ├── layout/           # Header, footer y navegación móvil
│   └── shared/           # UI reusable
├── hooks/                # Clipboard, perfil y exportación de sticker
├── lib/emergency/        # QR, vCard, compresión, esquema y storage
├── store/                # Estado global con Zustand
└── styles/               # Tokens visuales
```

## Decisiones técnicas

- **Sin backend:** evita cuentas, servidores, sesiones y almacenamiento remoto de información sensible.
- **TypeScript estricto:** modela el perfil de emergencia, payload comprimido y validaciones del formulario.
- **Zod + React Hook Form:** valida datos antes de generar QR y mantiene errores claros en la UI.
- **Zustand:** centraliza el perfil activo sin introducir una arquitectura pesada.
- **LZString:** comprime el perfil para compartirlo en la URL de emergencia.
- **qrcode.react:** renderiza el QR del sticker como SVG.
- **html2canvas:** exporta el sticker visual como PNG.
- **Framer Motion:** agrega microinteracciones y transiciones en la landing sin afectar la lógica crítica.
- **Tailwind CSS + tokens:** mantiene una identidad visual oscura, tecnológica y consistente.

## Tech stack

- [Next.js](https://nextjs.org/) — App Router y estructura de rutas.
- [React](https://react.dev/) — interfaz y componentes.
- [TypeScript](https://www.typescriptlang.org/) — tipado estático.
- [Tailwind CSS](https://tailwindcss.com/) — sistema visual.
- [React Hook Form](https://react-hook-form.com/) — manejo del formulario.
- [Zod](https://zod.dev/) — validación de esquema.
- [Zustand](https://zustand-demo.pmnd.rs/) — estado local.
- [LZString](https://pieroxy.net/blog/pages/lz-string/index.html) — compresión de payload.
- [qrcode.react](https://github.com/zpao/qrcode.react) — generación de QR.
- [html2canvas](https://html2canvas.hertzen.com/) — exportación PNG.
- [Framer Motion](https://www.framer.com/motion/) — motion UI.
- [Lucide React](https://lucide.dev/) — iconografía.

## Getting started

Requiere Node.js 18.17 o superior.

```bash
git clone https://github.com/AREIVAN/Apex_Ride_QR.git
cd Apex_Ride_QR
npm install
npm run dev
```

Abrí [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Scripts disponibles

```bash
npm run dev      # inicia el servidor de desarrollo
npm run lint     # ejecuta TypeScript sin emitir archivos
npm run build    # genera el build de producción
npm run start    # inicia el servidor de producción
```

## Rutas principales

| Ruta | Propósito |
| --- | --- |
| `/` | Landing de producto. |
| `/crear` | Generador de QR y sticker. |
| `/emergencia` | Vista pública para leer datos comprimidos. |
| `/como-funciona` | Explicación del flujo offline/online. |
| `/stickers` | Formatos actuales y futuros de sticker. |

## Privacidad y seguridad

APEX Emergency QR no guarda datos en un servidor. Si usás la opción de guardar, la información queda en `localStorage` del navegador.

Aun así, cualquier persona que escanee el QR puede ver los datos que cargaste. Cargá solo información que aceptás exponer en una emergencia.

## Estado del proyecto

El MVP funcional incluye generación de QR, vCard offline, vista online comprimida, sticker cuadrado exportable, acciones rápidas y landing de producto.

Las plantillas adicionales de sticker están preparadas como variantes futuras, pero el formato implementado hoy es el sticker cuadrado.

## Autor

Desarrollado por [AREIVAN](https://github.com/AREIVAN) como proyecto de portfolio enfocado en producto, arquitectura frontend, diseño de experiencia y seguridad práctica para motociclistas.

## Licencia

Licencia no especificada por ahora. Si querés reutilizar el código, revisá primero los términos del repositorio o contactá al autor.
