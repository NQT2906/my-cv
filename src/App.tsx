import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "@layouts/MainLayout/MainLayout";
import { renderRoutes } from "@routes";
import { publicRoutes } from "@routes/routePath.config";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BrowserRouter>
        <MainLayout>{renderRoutes(publicRoutes)}</MainLayout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
