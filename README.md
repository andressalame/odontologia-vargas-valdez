# Odontología Vargas Valdez

Sitio estático de 10 páginas, HTML/CSS y fuentes locales. No necesita compilación ni dependencias.

## Vista previa y comprobación

```sh
python3 -m http.server 8768 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8768/. Comprobar portada, blog y ocho artículos a 320, 390, 768 y 1440 px. Los enlaces de WhatsApp deben apuntar al 987 484 791; no enviar mensajes de prueba. `analytics.js` no carga Google Analytics fuera del dominio de producción. En producción conserva G-RDZCFR4JHZ y `clic_whatsapp`, cargando GA tras `load` para dar prioridad a los recursos de la página.

## Mejora local del 7 de octubre de 2026 — EN REVISIÓN

- CTA de WhatsApp en la portada de escritorio y móvil; ubicación accesible desde la portada.
- Navegación móvil visible sin JavaScript, enlaces de 44 px, espacio para la barra fija y safe area.
- Dirección y enlace de Maps en contenido visible y schema Dentist. Verificación pública: ficha «Odontología Vargas Valdez», teléfono 987 484 791, Las Palmeras 103, 15076, Jesús María. No se añadieron horarios, precios, reseñas ni estrellas.
- Analytics compartido y diferido hasta completar la carga inicial. No se mide aquí un aumento de velocidad en producción ni de conversiones.
- Ocho enlaces rotos del blog corregidos: `#servicios` apuntaba a un ID inexistente; ahora van a `#tratamientos`.
- CSS versionado para evitar que una caché conserve el diseño anterior.

El contenido clínico y la cita atribuida al doctor ya existían; este encargo no acredita su autoría médica. Confirmarlos con el consultorio antes de publicar si no existe validación previa. Falta foto real autorizada; se conserva el marcador gráfico existente. La ficha de Maps muestra «Agregar sitio web»: vincular el dominio requiere una acción aparte del administrador.

Evidencia, respaldo y aprobación: `Second Brain/proyectos/web-express/resenas-google-2026-10-07.md` y `odontologia-mejoras-2026-10-07/`.

## Publicación, solo tras aprobación de Andrés

GitHub Pages confirmado por API de solo lectura el 7-oct: repositorio `andressalame/odontologia-vargas-valdez`, rama `main`, raíz `/`, build legacy; dominio en `CNAME`. Un push a main publica. Este encargo NO lo ejecuta.

1. Revisar diff y commit local: `git status --short` y `git show --stat HEAD`.
2. Con aprobación, comprobar el remoto y cambios concurrentes con `git fetch origin` y `git log --oneline --left-right HEAD...origin/main`. Si hay divergencia, conciliar sin force push. Si se trabaja desde otra rama, incorporar el commit revisado a main primero.
3. Publicar desde main con `git push origin main`.
4. Esperar GitHub Pages y comprobar https://www.odontologiavargasvaldez.com/ y las nueve páginas de blog: CSS `?v=20261007`, botón inicial, dirección, enlaces, móvil y ausencia de errores. Comprobar el evento `clic_whatsapp` en GA con un clic autorizado, sin enviar un mensaje.
5. Solo después de la comprobación pública y aceptación del consultorio, considerar el borrador de reseña. No declarar publicado ni entregado por el commit.

Para revertir una publicación aprobada, preparar y revisar `git revert <commit-de-la-mejora>` y publicar el revert; no reset destructivo ni force push. El respaldo anterior completo está en la carpeta de evidencia.

## Foto del equipo · 7-oct-2026

Portada original del reel DWCXFl8EeSU descargada desde la cuadrícula oficial de Instagram: 3375 × 6000 px, sin control de play. Recorte (0,1570,3375,6000) para retirar texto superior; sin inpainting, rostros generados ni cambios corporales. WebP 864 × 1134, 86.570 bytes. Pie fuera de la foto para conservar el encuadre y contraste. Carga prioritaria por estar en el hero de escritorio. Push inmediato autorizado expresamente para este encargo; comprobar publicación en el dominio tras el push.
