import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AppProvider } from "./contexts/dashboard/dashboard-context.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
