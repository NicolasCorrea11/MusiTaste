### Español:

# MusiTaste
MusiTaste es una aplicación web que te permite descubrir nueva música basada en tus preferencias actuales. Simplemente ingresa el nombre de una cancion, agregala a favoritos y la aplicación te dira tu perfil oyente y te sugerirá artistas similares que podrían gustarte.

### Características
 - **Búsqueda de Artistas**: Encuentra artistas similares a tus favoritos.
 - **Recomendaciones Personalizadas**: Obtén sugerencias basadas en tus gustos musicales.
 - **Interfaz Intuitiva**: Navegación sencilla y amigable para una mejor experiencia de usuario.

### Tecnologías Utilizadas
 - **Frontend**: Hecho en Angular.
 - **Backend**:
    - Web API desarrollada en ASP.NET Core con .NET 8.
    - Base de datos SQL Server.
    - Acceso a datos con Entity Framework Core, utilizando Patron Repositorio.
    - **Autenticacion:**
       - Endpoints de la API autenticados con JWT.
    - **APIs de Terceros:**
       - Consumo de la API de Spotify para la busqueda de canciones y de GeminiAI para las recomendaciones.

#### Link a la documentacion de la Api: http://{tu-localhost}/swagger/index.html

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
 - Migre el esquema de datos a su base de datos:
```
dotnet ef migrations add {nombre}
dotnet ef database update
```
 - Inicia el servidor:
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
 - En src/app/services, cambia myApiUrl a tu direccion de localhost donde corra la api
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

MusiTaste is a web application that allows you to discover new music based on your current preferences. Simply enter the name of a song, add it to your favorites, and the application will identify your listener profile and suggest similar artists you might like.

### Features

- **Artist Search**: Find artists similar to your favorites.  
- **Personalized Recommendations**: Get suggestions tailored to your musical tastes.  
- **Intuitive Interface**: Simple and user-friendly navigation for a better experience.  

### Technologies Used
- **Frontend**: Built with Angular.
- **Backend**:
   - Web API developed in ASP.NET Core with .NET 8.
   - SQL Server database.
   - Data access implemented with Entity Framework Core, following the Repository Pattern.
   - **Authentication**:
      - API endpoints secured with JWT.
   - **Third-Party APIs**:
      - Integration with the Spotify API for song search and GeminiAI for recommendations.

### API documentation: http://{your-localhost}/swagger/index.html

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
 - Migrate the data schema to your database:
```
dotnet ef migrations add {name}
dotnet ef database update
```
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
- In src/app/services, change myApiUrl to your localhost address where the API is running.
- Start the application:
```
ng serve
```
### Usage
 - Open the application in your browser.
 - Create an account and log in.
 - Enter the name of your favorite artist or band in the search bar.
 - Explore the recommendations and discover new music that matches your taste.


