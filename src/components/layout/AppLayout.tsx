import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppTopbar } from "./AppTopbar";
import { AppSidebar } from "./AppSidebar";

export function AppLayout() {
  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 260, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <AppTopbar />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppSidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
