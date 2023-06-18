import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { renderRoutes } from "@routes";
import { publicRoutes } from "@routes/routePath.config";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>{renderRoutes(publicRoutes)}</MainLayout>
    </BrowserRouter>
  );
}

export default App;
