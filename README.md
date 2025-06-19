# Vehicle Database

## About the Project

This is a vehicle management application built with **.NET 8 (LTS)** for the backend and **React** with the **Mantine** component library for the frontend.

The goal is to manage a vehicle database with functionality to create, view, edit, and delete vehicles.

Absolut! Här är ett förslag på hur du kan skriva det med lite mer glädje, tydlighet och "✨Ta-DA✨"-känsla, inklusive stjärnor och bättre URL-beskrivning:

---

## ✨ Endpoints You Care About ✨

* **⭐ `/`**  -  The homepage!  
  Here you'll find the list of all vehicles and a handy **"Create New Vehicle"** form right on the page.

* **⭐ `/vehicles/:id/edit`**  -  The edit page  
  On this page, you can **edit** or **delete** a vehicle.

---

### Technology Choices

* **.NET 8**: Chosen for its Long-Term Support (LTS) and modern capabilities.
* **Mantine (React UI Library)**: Selected for its clean design and ready-made components.

**Note:**
Mantine was not as "out-of-the-box" as expected. The frontend will need further cleanup and UI improvements in a future iteration.

---

## Table of Contents

* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Backend Setup](#backend-setup)
* [Frontend Setup](#frontend-setup)
* [Next Steps](#next-steps)
* [Platform Support](#platform-support)

---

## Getting Started

### Prerequisites

* [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
* Node.js and npm
* SQL Server LocalDB
* Entity Framework CLI
  Install with:

  ```bash
  dotnet tool install --global dotnet-ef
  ```

---

## Project Structure

```plaintext
vehicle-database/
├── Backend/                 # ASP.NET Core backend
│   ├── Controllers/
│   ├── Models/              # Data models and DTOs
│   ├── Repositories/
│   ├── Services/
│   ├── SeedData/
│   ├── VehiclesDbContext/
├── Data/                    # DbContext and configurations
├── frontend/                # React frontend application
│   ├── src/
│   ├── package.json
│   └── ...
├── Migrations/              # EF Core migrations
├── appsettings.json         # Configuration
└── README.md
```

---

## Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vehicle-database/Backend
   ```

2. Restore NuGet packages:

   ```bash
   dotnet restore
   ```

3. Apply database migrations:

   ```bash
   dotnet ef database update
   ```

4. Run the API:

   ```bash
   dotnet run
   ```

   The API will be available at:
   `https://localhost:5148`

---

## Frontend Setup

1. Navigate to the frontend:

   ```bash
   cd vehicle-database/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The React app will be available at:
   `http://localhost:5173`

---

## Next Steps

* Improve route structure (`vehicles/:id/edit` could be better designed)
* Add input validation
* Expand the **Edit Vehicle** functionality
* Implement search functionality
* Add unit tests
* Investigate data serialization if the application scales
* Clean up the frontend code and UI
* Deploy to a production environment

---

## Platform Support

* The project was originally developed on **Windows** using **SQL Server LocalDB**.
* For **Mac/Linux**, SQLite is recommended for development. Some adjustments in the database configuration may be required.
