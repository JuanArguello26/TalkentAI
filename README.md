# TalkentAI 🎓

**TalkentAI** es una plataforma de aprendizaje de inglés interactiva diseñada para que domines el idioma a tu propio ritmo. Con ejercicios dinámicos, seguimiento de progreso y una experiencia de usuario moderna, TalkentAI te ayuda a mejorar tus habilidades en inglés de forma divertida y efectiva.

---

## 🚀 Características Principales

### 📚 Sistema de Autenticación
- **Registro de usuarios** con validación de datos
- **Inicio de sesión** seguro
- **Recuperación de contraseña** integrada
- Persistencia de datos en **localStorage**

### 🎯 Sistema de Niveles
- **5 niveles de dificultad**: Principiante, Básico, Intermedio, Avanzado, Nativo
- Progreso personalizado para cada usuario
- Desbloqueo progresivo de niveles

### 📝 Ejercicios Interactivos
- Ejercicios de **arrastrar y soltar**
- **Completar oraciones** con palabras faltantes
- **Selección multiple** con feedback instantáneo
- Validación de respuestas en tiempo real

### 🎨 Interfaz Moderna
- Diseño **responsive** (adaptable a móviles y escritorio)
- Animaciones suaves y transiciones elegantes
- Modo oscuro integrado
- Tema visual con gradientes紫色-azules

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| **HTML5** | Estructura de la aplicación |
| **CSS3** | Estilos, animaciones y diseño responsive |
| **JavaScript (ES6+)** | Lógica de la aplicación |
| **Node.js** | Servidor local estático |

---

## 📁 Estructura del Proyecto

```
TalkentAI/
├── index.html          # Archivo principal HTML
├── server.js           # Servidor Node.js
├── package.json        # Dependencias del proyecto
├── iniciar.bat         # Script de inicio (Windows)
├── css/
│   ├── styles.css      # Estilos principales
│   ├── animations.css  # Animaciones y transiciones
│   └── responsive.css  # Diseño responsive
├── js/
│   ├── app.js          # Lógica principal de la app
│   ├── auth.js         # Sistema de autenticación
│   ├── db.js           # Gestión de base de datos local
│   ├── levels.js       # Sistema de niveles
│   └── exercises.js    # Generador de ejercicios
└── assets/             # Recursos multimedia (vacío)
```

---

## ⚡ Instalación y Uso

### Prerequisites
- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JuanArguello26/TalkentAI.git
   cd TalkentAI
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor**
   - **Windows**: Ejecuta `iniciar.bat` o haz doble clic
   - **Mac/Linux**: 
     ```bash
     npm start
     ```

4. **Acceder a la aplicación**
   Abre tu navegador y visita: `http://localhost:3000`

---

## 🎮 Cómo Usar

### Registro e Inicio de Sesión
1. Completa el formulario de registro con tu nombre, correo y contraseña
2. Inicia sesión con tus credenciales
3. Tu progreso se guardará automáticamente

### Sistema de Ejercicios
1. **Selecciona un nivel** desde el menú principal
2. **Elige un ejercicio** disponible en ese nivel
3. **Completa los ejercicios** arrastrando elementos o seleccionando respuestas
4. **Recibe feedback** instantáneo sobre tus respuestas
5. **Guarda tu progreso** automáticamente

### Niveles Disponibles
| Nivel | Descripción |
|-------|-------------|
| 🌱 Principiante | Vocabulario básico, saludos y frases simples |
| 📖 Básico | Gramática fundamental, verbos regulares |
| 💼 Intermedio | Conversaciones, tiempos verbales avanzados |
| 🎓 Avanzado | Expresiones idiomáticas, escritura formal |
| 🌟 Nativo | Dominio completo, matices culturales |

---

## 🔧 Desarrollo

### Ejecutar en modo desarrollo
```bash
npm run start
```

### Servidor con hot-reload (opcional)
```bash
npx http-server -p 3000 -c-1
```

---

## 📋 Funcionalidades Detalladas

### Sistema de Progreso
- Seguimiento de ejercicios completados por nivel
- Porcentaje de avance en cada nivel
- Guardado automático en localStorage

### Tipos de Ejercicios
1. **Arrastrar y soltar**: Arrastra palabras a los espacios correctos
2. **Completar**: Escribe la palabra correcta en el espacio vacío
3. **Opción múltiple**: Selecciona la respuesta correcta entre varias opciones

### Validación de Respuestas
- Feedback visual inmediato (verde/rojo)
- Mensajes explicativos para respuestas incorrectas
- Opción de reintentar ejercicios

---

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
}
```

---

## 🤝 Contribuir

1. Fork del repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👨‍💻 Autor

**Juan Arguello**
- GitHub: [@JuanArguello26](https://github.com/JuanArguello26)

---

## 🙏 Agradecimientos

Gracias por usar TalkentAI. ¡Espero que te ayude a mejorar tu inglés! 🇺🇸🇬🇧

---

<div align="center">
  <p>Hecho con ❤️ y JavaScript</p>
  <p>⭐ Si te gusta este proyecto, ¡danos una estrella!</p>
</div>