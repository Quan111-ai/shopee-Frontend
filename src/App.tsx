import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AppRoutes from "./routes/routes";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;