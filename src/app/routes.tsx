import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { IncidentsPage } from "../pages/IncidentsPage";
import { MetricsPage } from "../pages/MetricsPage";
import { SettingsPage } from "../pages/SettingsPage";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },

  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/app/incidents" replace /> },
      { path: "incidents", element: <IncidentsPage /> },
      { path: "metrics", element: <MetricsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },

  { path: "*", element: <Navigate to="/app" replace /> },
]);
