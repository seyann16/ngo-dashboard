import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./components/dashboard/Dashboard";
import ErrorBoundary from "./components/ui/ErrorBoundary";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>      
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
