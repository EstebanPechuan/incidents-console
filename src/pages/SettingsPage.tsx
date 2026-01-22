import { Card, Text, Title } from "@mantine/core";

export function SettingsPage() {
  return (
    <div>
      <Title order={2} mb="md">
        Settings
      </Title>
      <Card withBorder>
        <Text c="dimmed">Next: auth, roles, and user profile.</Text>
      </Card>
    </div>
  );
}
