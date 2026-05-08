# 🚀 Dashboard Interactivo - Project Break 1

## 📋 Descripción
Este proyecto es un **Dashboard Personalizado** desarrollado como parte del programa formativo de **The Bridge**. Se trata de una Single Page Application (SPA) modular que centraliza herramientas de productividad y consulta en una interfaz estética, moderna y altamente funcional.

La aplicación destaca por su diseño "Premium" basado en **Glassmorphism**, con fondos dinámicos y una navegación fluida entre sus diferentes componentes.

---

## ✨ Características Principales

### 🕒 Reloj Digital & Mensajes Dinámicos
*   Visualización en tiempo real (HH:MM:SS).
*   Fecha actual formateada.
*   **Mensajes Contextuales:** El sistema saluda al usuario con frases personalizadas según la hora del día (mañana, tarde, noche o descanso).

### 🔐 Generador de Contraseñas Seguras
*   Crea contraseñas robustas de forma instantánea.
*   Control de longitud ajustable mediante slider (12-50 caracteres).
*   Garantiza el uso de mayúsculas, minúsculas, números y símbolos.

### 🔗 Gestor de Enlaces (Link Collect)
*   Marcadores personalizados para tus sitios favoritos.
*   **Persistencia:** Los enlaces se guardan en el navegador mediante `localStorage`, por lo que no se pierden al cerrar la sesión.
*   Funcionalidad completa para añadir y eliminar enlaces.

### 🌤️ Estación Meteorológica
*   Consulta el clima de tu ubicación actual (o ciudad configurada).
*   Información detallada: temperatura, estado del cielo, humedad y viento.
*   **Previsión:** Incluye un desglose por horas para planificar tu día.

### 🖼️ Experiencia Visual Dinámica
*   **Background Changer:** Fondo de pantalla que rota automáticamente cada 30 segundos.
*   **Diseño Responsivo:** Adaptado para una visualización óptima tanto en escritorio como en dispositivos móviles.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Estructura semántica avanzada.
*   **CSS3:** Uso intensivo de variables (`:root`), Flexbox/Grid y efectos de desenfoque (backdrop-filter).
*   **JavaScript (ES6+):** Manipulación dinámica del DOM, gestión de eventos y lógica asíncrona.
*   **Weather API:** Integración de datos meteorológicos reales.
*   **LocalStorage:** Almacenamiento local para una experiencia de usuario persistente.

---

## 🚀 Instalación y Vista Previa

Si deseas ejecutar este proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Martabosquet/project-break-1.git
    ```
2.  **Abrir el proyecto:**
    Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador. No requiere de servidores especiales ni compilación, ya que utiliza JavaScript puro.

También puedes ver la demo del proyecto a través del siguiente enlace de GitHub Pages:
    
https://martabosquet.github.io/project-break-1/
---

## 💡 Uso del Dashboard

*   **Página Principal:** Tienes una visión resumida de todas las herramientas. Haz clic en **"VER MÁS DETALLES AQUÍ"** en cualquier tarjeta para ir a la vista a pantalla completa de esa herramienta.
*   **Generador de Contraseñas:** Desliza la barra para elegir la longitud y pulsa el botón para generar. Haz clic en el icono de los cuadros para copiar la contraseña al portapapeles.
*   **Gestor de Enlaces:** Escribe el nombre y la URL, pulsa "Añadir". Tus enlaces se guardarán automáticamente en tu navegador. Si haces click en el icono de los cuadros dentro de los enlaces guardados, se abrirá la URL en una nueva pestaña. Si haces click en la X se eliminará el enlace.
*   **Estación Meteorológica:** Muestra la temperatura actual, el estado del cielo, la humedad y el viento de la ciudad configurada. Incluye un desglose de las próximas 24 horas para planificar tu día.
*   **Navegación:** En todas las páginas internas encontrarás un botón **"GO HOME"** y una barra de navegación inferior para moverte rápidamente entre herramientas.

---

## ⚙️ Configuración (Opcional)

Si deseas cambiar la ciudad por defecto de la estación meteorológica:
1. Abre el archivo `JS/weather.js`.
2. Modifica la API Key en la constante `API_KEY` en la línea 1 y la constante `city` en la línea 2:
   ```javascript
   const API_KEY = "TuAPIKey";
   const city = "TuCiudad";
   ```
3. Guarda el archivo y refresca el navegador.


---

## 📂 Estructura de Archivos

```text
├── CSS/                # Estilos (Reset, Variables y Estilos Generales)
├── HTML/               # Vistas detalladas de cada funcionalidad
├── JS/                 # Lógica modular para cada componente
├── img/                # Activos visuales y fondos
├── index.html          # Punto de entrada principal
└── main.js             # Lógica global y gestión de fondos
```

---

## ✍️ Autor
Realizado con dedicación por **Marta Bosquet**.

---
*Este proyecto fue desarrollado como el primer "Project Break" para consolidar conocimientos de Front-End.*