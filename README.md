# Proyecto: Virtual Banking Widgets - BABEL - Prueba Técnica Virtual Banking

Este proyecto implementa dos widgets independientes, `<span>Widget A</span>` y `<span>Widget B</span>`, que se comunican en tiempo real utilizando WebSockets. Ambos widgets están empaquetados como bibliotecas independientes y también se pueden visualizar juntos en un archivo HTML combinado.

## Funcionalidades

* **Widget A**: Permite ingresar un mensaje y enviarlo al servidor WebSocket.
* **Widget B**: Recibe los mensajes enviados por `<span>Widget A</span>` en tiempo real y los muestra en pantalla.
* **Servidor WebSocket**: Maneja la conexión entre los widgets para la comunicación en tiempo real.

---

## Requisitos Previos

* Node.js (v14 o superior)
* npm (v6 o superior)
* Navegador moderno compatible con ES Modules

---

## Estructura del Proyecto

```
.
├── dist/                      # Directorio de salida para los widgets empaquetados
│   ├── widget-a/
   │   └── widget-a.umd.js     # Widget A empaquetado en formato UMD
│   ├── widget-b/
│   │   └── widget-b.umd.js    # Widget B empaquetado en formato UMD
├── src/
│   ├── widgets/
│   │   ├── WidgetA.tsx        # Código fuente de Widget A
│   │   ├── WidgetB.tsx        # Código fuente de Widget B
│   ├── utils/
│   │   └── communication.ts   # Configuración del WebSocket
|   |   └── WebSocketClient.ts # WebSockets Helper
│   └── main.tsx               # Combinación de los widgets en un solo archivo
├── server.js                  # Servidor WebSocket
├── index.html                 # Página principal del proyecto
├── combined.html              # HTML que combina ambos widgets
├── vite.config.ts             # Configuración de Vite
├── widget-a.html              # html para mostrar el Widget A integrando su librería
├── widget-b.html              # html para mostrar el Widget B integrando su librería
├── widgets.html               # página principal que contiene ambos widgets
└── README.md                  # Este archivo
```

---

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/joeliranzo/virtualbanking
   cd virtualbanking
   ```
2. Instala las dependencias:
   ```
   npm install
   ```

---

## Ejecución del Servidor WebSocket

1. Asegúrate de que `<span>server.js</span>` está configurado correctamente.
2. Inicia el servidor WebSocket en el puerto 9000:

   ```
   node server.js
   ```

---

## Construcción de los Widgets

Los widgets están empaquetados como bibliotecas independientes en formato UMD.

1. Construir `<span>Widget A</span>`:
   ```
   npm run build:widget-a
   ```
2. Construir `<span>Widget B</span>`:
   ```
   npm run build:widget-b
   ```
3. Construir ambos widgets:
   ```
   npm run build:widgets
   ```
4. Construir la aplicación principal:
   ```
   npm run build
   ```

---

## Probar la Aplicación

### Ver Widgets Combinados

Abre `<span>widgets.html</span>` en tu navegador:

Ejecuta en una consola separada del servidor este comando

```
 npx live-server
```

Verifica la interacción en tiempo real entre los widgets.

El servidor estará disponible en `<span>ws://localhost:8080/widgets.html</span>`.

---

### Ver Widget A

1. Abre `<span>widget-a.html</span>` en tu navegador:
   ```
   npx live-server
   ```
2. Verifica que puedes ingresar y enviar mensajes.

---

### Ver Widget B

1. Abre `<span>widget-b.html</span>` en tu navegador:
   ```
   npx live-server
   ```
2. Verifica que los mensajes enviados desde `<span>Widget A</span>` se reciben en tiempo real.

---

## Scripts Disponibles

* `<span>npm run build:widget-a</span>`: Construye `<span>Widget A</span>`.
* `<span>npm run build:widget-b</span>`: Construye `<span>Widget B</span>`.
* `<span>npm run build:widgets</span>`: Construye ambos widgets.
* `<span>npm run build</span>`: Construye la aplicación completa.
* `<span>npm run dev</span>`: Inicia el entorno de desarrollo.

---

## Tecnologías Utilizadas

* **Frontend**: React, TypeScript, Vite
* **Backend**: Node.js, WebSocket
* **Comunicación en Tiempo Real**: WebSockets
* **Empaquetado**: Vite con Rollup

---

## Contribuciones

1. Haz un fork del repositorio.
2. Crea tu rama de características (`<span>git checkout -b feature/nueva-caracteristica</span>`).
3. Confirma tus cambios (`<span>git commit -m 'Añadida nueva característica'</span>`).
4. Haz push a tu rama (`<span>git push origin feature/nueva-caracteristica</span>`).
5. Crea un Pull Request.

---

## Contacto

Para cualquier pregunta o sugerencia, contáctame en [[joeliranzo@gmail.com]()].
