import { Card, SimpleGrid, Text, Title } from "@mantine/core";

export function MetricsPage() {
  return (
    <div>
      <Title order={2} mb="md">
        Metrics
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>
        <Card withBorder>
          <Text c="dimmed" size="sm">MTTR</Text>
          <Text fw={700} size="xl">—</Text>
        </Card>
        <Card withBorder>
          <Text c="dimmed" size="sm">Open incidents</Text>
          <Text fw={700} size="xl">—</Text>
        </Card>
        <Card withBorder>
          <Text c="dimmed" size="sm">Incidents (30d)</Text>
          <Text fw={700} size="xl">—</Text>
        </Card>
      </SimpleGrid>
    </div>
  );
}
