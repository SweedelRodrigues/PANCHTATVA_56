# 💊 Smart Medicine Locator

![GitHub repo size](https://img.shields.io/github/repo-size/SweedelRodrigues/PANCHTATVA_56) 
![GitHub language count](https://img.shields.io/github/languages/count/SweedelRodrigues/PANCHTATVA_56)
![GitHub top language](https://img.shields.io/github/languages/top/SweedelRodrigues/PANCHTATVA_56)
![GitHub license](https://img.shields.io/github/license/SweedelRodrigues/PANCHTATVA_56)
![Last commit](https://img.shields.io/github/last-commit/SweedelRodrigues/PANCHTATVA_56)

---

## 📝 Project Overview
The **Smart Medicine Locator** is a full-stack web application that helps users find medicines at nearby pharmacies, compare prices, and discover substitute medicines with the same composition. Users can also upload prescriptions for AI-based medicine extraction (planned feature). The goal is to make finding medicines faster, easier, and more cost-effective, especially in real-time scenarios.

---

## 🚀 Core Features

### 💊 1. Medicine Search
- Search medicines by **name, city, and pincode**.  
- Displays nearby pharmacies with **availability, price, and quantity**.  
- Filter results by **distance, price, and stock availability**.

### 🔄 2. Substitute Medicines
- Find **equivalent substitutes** for a medicine.  
- Substitutes displayed in **card-based UI** showing name and details.  
- Backend API fetches substitutes based on **composition match**.

### 📄 3. Prescription Upload
- Upload prescriptions as images.  
- **AI extraction of medicine names** planned for automatic search.  
- Currently, uploads trigger a success message; integration is future work.

### 🌟 4. Popular Searches
- Displays **popular medicines** for quick selection.  
- One-click search auto-fills the medicine input.

### 🏥 5. Pharmacy Details
- Shows **pharmacy name, address, and location** (latitude/longitude).  
- Future enhancement: integrate **Google Maps/Mapbox** for navigation.

### 🎨 6. UI/UX
- Modern, clean, and **responsive card-based UI**.  
- Gradient colors and smooth **hover effects**.  
- Mobile and desktop friendly.

### 🧭 7. Routing
- `/` → Landing page with medicine search.  
- `/substitutes` → Page showing substitute medicines.  
- `*` → 404 Not Found page for invalid routes.  
- Navigation buttons for **back to home** and other actions.

### ⚠️ 8. Error Handling
- Toast notifications for **errors, warnings, and success messages**.  
- Handles empty search input and no results gracefully.

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **React.js with TypeScript** ⚛️  
- **React Router DOM** for navigation 🧭  
- **Tailwind CSS** for styling and UI components 🎨  
- **lucide-react** for icons 🖋️  
- **Sonner & Toaster** for notifications 🔔  
- **Axios / Fetch API** for HTTP requests 🌐  

**Key Components:**  
HeroSection, SearchSection, ResultsSection, SubstituteSection, Footer

### ⚡ Backend
- **Node.js with Express.js** 🟢  
- **REST API Endpoints:**  
  - `/api/search` → Search medicine in nearby pharmacies 🔎  
  - `/api/substitutes` → Get substitute medicines 🔄  

**Data storage:**  
- `medicineDataset.json` → Sample dataset with medicine details 📄  

**Middleware:**  
- Body parser for JSON requests 📦  
- Error handling for bad requests ⚠️  

### 💾 Database
- Currently uses **JSON files** for the dataset 📂  
- Can be upgraded to **MongoDB** or **SQL** for production 🗄️

### 🌐 APIs Used
- **Mapbox / Google Maps API** (planned) 🗺️ → Fetch user location and calculate distance  
- Custom medicine dataset for substitutes and pharmacy info 💊

---

## 🛠️ Development & Deployment
- **Local development:**  
  - Frontend: `npm start` 🏃‍♂️  
  - Backend: `node index.js` ⚡  
- Version control using **Git** 🐙, repository: [GitHub Link](https://github.com/rlrakshita123/PANCHTATVA_56)  
- Future deployment: Vercel (frontend) 🚀, Render/Heroku (backend) ☁️

---

## 🔮 Future Enhancements
- AI-based prescription parsing to extract medicine names from images 🤖  
- Real-time pharmacy stock updates with live database integration 📈  
- Map integration for navigation 🗺️  
- Price comparison & notifications 💰  
- User accounts to save favorite medicines and prescriptions 👤  
- Multi-language support for accessibility in different regions 🌎

---



