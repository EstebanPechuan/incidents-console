import { NavLink } from "react-router-dom";
import { Stack, Text, Group, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle, IconChartBar, IconSettings } from "@tabler/icons-react";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 10,
  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
});

export function AppSidebar() {
  return (
    <Stack gap="xs">
      <Group justify="space-between" mb="xs">
        <Text fw={700}>Incidents Console</Text>
      </Group>

      <NavLink to="/app/incidents" style={linkStyle}>
        <Group gap="sm">
          <ThemeIcon variant="light" radius="md">
            <IconAlertTriangle size={18} />
          </ThemeIcon>
          <Text size="sm">Incidents</Text>
        </Group>
      </NavLink>

      <NavLink to="/app/metrics" style={linkStyle}>
        <Group gap="sm">
          <ThemeIcon variant="light" radius="md">
            <IconChartBar size={18} />
          </ThemeIcon>
          <Text size="sm">Metrics</Text>
        </Group>
      </NavLink>

      <NavLink to="/app/settings" style={linkStyle}>
        <Group gap="sm">
          <ThemeIcon variant="light" radius="md">
            <IconSettings size={18} />
          </ThemeIcon>
          <Text size="sm">Settings</Text>
        </Group>
      </NavLink>
    </Stack>
  );
}
