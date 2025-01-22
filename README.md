### Español:

# MusiTaste
MusiTaste es una aplicación web que te permite descubrir nueva música basada en tus preferencias actuales. Simplemente ingresa el nombre de un artista o banda, y la aplicación te dira tu perfil oyente y te sugerirá artistas similares que podrían gustarte.

### Características
 - **Búsqueda de Artistas**: Encuentra artistas similares a tus favoritos.
 - **Recomendaciones Personalizadas**: Obtén sugerencias basadas en tus gustos musicales.
 - Interfaz Intuitiva: Navegación sencilla y amigable para una mejor experiencia de usuario.

### Tecnologías Utilizadas
 - **Frontend**: hecho en Angular con TypeScript, desplegado en Netlify.
 - **Backend**: (Web API) desarrollada en ASP.NET Core con C#, con base de datos SQL Server, ambas desplegadas en Microsoft Azure.
 - **Autenticacion:** Endpoints de la API autenticados con JWT.
 - **APIs de Terceros**: Consumo de la API de Spotify para la busqueda de canciones y de GeminiAI para las recomendaciones.

#### Link al sitio web: https://musitaste.netlify.app 
#### Link a la documentacion de la Api: https://musitastebackend.azurewebsites.net/swagger/index.html

---

## Instalacion local
 - Clonar el repositorio:
```
git clone https://github.com/NicolasCorrea11/MusiTaste.git
```
### Backend
 - Navega al directorio del backend:
```
cd MusiTaste/MusiTaste-Backend
```
 - Restaura las dependencias y construye el proyecto:
```
dotnet restore
dotnet build
```
 - Configura las variables de entorno necesarias, incluyendo la clave de la API de Spotify y GeminiAi, y la conexion a la base de datos.
 -Inicia el servidor:
```
dotnet run
```
### Frontend:

- Navega al directorio del frontend:
```
cd ../MusiTaste-Frontend
```
 - Instala las dependencias:
```
npm install
```
 - Inicia la aplicación:
```
ng serve
```

### Uso
 - Abre la aplicación en tu navegador.
 - Crea un usuario e inicia sesion
 - Ingresa el nombre de tu artista o banda favorita en la barra de búsqueda.
 - Explora las recomendaciones y descubre nueva música que se ajuste a tus gustos.

---

### English:

# MusiTaste

MusiTaste is a web application that allows you to discover new music based on your current preferences. Simply enter the name of an artist or band, and the app will reveal your listener profile and suggest similar artists you might like.

### Features

- **Artist Search**: Find artists similar to your favorites.  
- **Personalized Recommendations**: Get suggestions tailored to your musical tastes.  
- **Intuitive Interface**: Simple and user-friendly navigation for a better experience.  

### Technologies Used

- **Frontend**: Built with Angular and TypeScript, deployed on Netlify.  
- **Backend**: Web API developed in ASP.NET Core with C#, using a SQL Server database, both hosted on Microsoft Azure.  
- **Authentication**: API endpoints secured with JWT.  
- **Third-Party APIs**: Uses the Spotify API for song search and GeminiAI for recommendations.  

### Website link: [https://musitaste.netlify.app](https://musitaste.netlify.app)  
### API documentation: [https://musitastebackend.azurewebsites.net/swagger/index.html](https://musitastebackend.azurewebsites.net/swagger/index.html)

---

## Local Installation

### Clone the Repository:

```
git clone https://github.com/NicolasCorrea11/MusiTaste.git
```
### Backend
 - Navigate to the backend directory:
```
cd MusiTaste/MusiTaste-Backend
```
 - Restore dependencies and build the project:
```
dotnet restore
dotnet build
```
 - Configure the necessary environment variables, including the API keys for Spotify and GeminiAI, as well as the database connection.
 - Start the server:
```
dotnet run
```
### Frontend:

 - Navigate to the frontend directory:
```
cd ../MusiTaste-Frontend
```
 - Install dependencies:
```
npm install
```
- Start the application:
```
ng serve
```
### Usage
 - Open the application in your browser.
 - Create an account and log in.
 - Enter the name of your favorite artist or band in the search bar.
 - Explore the recommendations and discover new music that matches your taste.


