import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
