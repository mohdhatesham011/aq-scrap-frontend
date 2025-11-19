// AQ Scrap Frontend - Vite + React + Tailwind
// File: main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-700">
          AQ Scrap Purchasing App
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome! This is your fresh frontend ready for deployment via Azure
          Static Web Apps.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}

// File: index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AQ Scrap</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>

// File: tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};

// File: package.json
{
  "name": "aq-scrap-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "vite": "^5.0.0"
  }
}

// File: postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
