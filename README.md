# Rumbo 2027 · Querétaro
React + Vite + TypeScript + Tailwind CSS + React Leaflet + Lucide.

## Inicio
Clona el repositorio, entra a la carpeta y ejecuta:
```sh
npm install
npm run dev
npm run build
```
En Vercel importa el repositorio GitHub, selecciona Vite, comando `npm run build`, salida `dist`. No requiere variables de entorno ni servidor.

## Datos
Edita `src/data/profilesData.ts`: perfiles, fotos y aspiraciones. Los perfiles incluidos son ficticios, no candidaturas reales. `src/data/types.ts` contiene las interfaces.
El archivo original `src/data/geoData.ts` contiene secciones electorales; `shapes.json` reúne sus polígonos por municipio y distrito usando Turf dissolve, sin dibujar resultados electorales. La numeración municipal es la proporcionada por el usuario. La geometría adjunta es la fuente, sin afirmación de vigencia de la distritación para 2027.

## Escenarios
La exclusividad se aplica por persona y por posición/partido. Al confirmar se retira al perfil de otras posiciones y se oculta al resto de aspirantes en la posición confirmada; liberar restaura sus aspiraciones. Guardar escribe en localStorage; exportar/importar usa JSON v1 validado. Los escenarios son locales al navegador; no se comparten entre dispositivos salvo exportación.
