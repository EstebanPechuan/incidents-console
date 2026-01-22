import { useMemo, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Group,
  Select,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconDownload, IconPlus, IconSearch } from "@tabler/icons-react";

type Severity = "Low" | "Medium" | "High" | "Critical";
type Status = "Open" | "Investigating" | "Mitigated" | "Closed";

type Incident = {
  id: string;
  title: string;
  service: string;
  severity: Severity;
  status: Status;
  createdAt: string; // ISO
};

const MOCK: Incident[] = [
  {
    id: "INC-1024",
    title: "Payments timeouts in checkout",
    service: "Payments",
    severity: "High",
    status: "Investigating",
    createdAt: "2026-01-21T10:10:00Z",
  },
  {
    id: "INC-1023",
    title: "Login intermittent 500s",
    service: "Auth",
    severity: "Medium",
    status: "Open",
    createdAt: "2026-01-20T08:00:00Z",
  },
  {
    id: "INC-1022",
    title: "Search latency increased",
    service: "Search",
    severity: "Low",
    status: "Mitigated",
    createdAt: "2026-01-19T14:30:00Z",
  },
];

function severityColor(s: Severity) {
  switch (s) {
    case "Critical":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return "yellow";
    default:
      return "gray";
  }
}

function statusColor(s: Status) {
  switch (s) {
    case "Open":
      return "blue";
    case "Investigating":
      return "violet";
    case "Mitigated":
      return "teal";
    default:
      return "gray";
  }
}

export function IncidentsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<Status | "All">("All");
  const [severity, setSeverity] = useState<Severity | "All">("All");

  const rows = useMemo(() => {
    return MOCK.filter((i) => {
      const matchesQ =
        q.trim().length === 0 ||
        `${i.id} ${i.title} ${i.service}`.toLowerCase().includes(q.toLowerCase());

      const matchesStatus = status === "All" || i.status === status;
      const matchesSeverity = severity === "All" || i.severity === severity;

      return matchesQ && matchesStatus && matchesSeverity;
    });
  }, [q, status, severity]);

  return (
    <div>
      <Group justify="space-between" mb="md">
        <div>
          <Title order={2}>Incidents</Title>
          <Text c="dimmed" size="sm">
            Track, triage and resolve operational incidents.
          </Text>
        </div>

        <Group>
          <Button variant="light" leftSection={<IconDownload size={16} />}>
            Export CSV
          </Button>
          <Button leftSection={<IconPlus size={16} />}>Create incident</Button>
        </Group>
      </Group>

      <Card withBorder radius="md" p="md">
        <Group mb="md" wrap="wrap">
          <TextInput
            label="Search"
            value={q}
            onChange={(e) => setQ(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            placeholder="Search by id, title, service..."
            w={320}
          />

          <Select
            value={status}
            onChange={(v) => setStatus((v as any) ?? "All")}
            data={["All", "Open", "Investigating", "Mitigated", "Closed"]}
            label="Status"
            placeholder="All"
            w={200}
          />

          <Select
            value={severity}
            onChange={(v) => setSeverity((v as any) ?? "All")}
            data={["All", "Low", "Medium", "High", "Critical"]}
            label="Severity"
            placeholder="All"
            w={200}
          />
        </Group>

        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Service</Table.Th>
              <Table.Th>Severity</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Created</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {rows.map((i) => (
              <Table.Tr key={i.id}>
                <Table.Td>
                  <Text fw={600}>{i.id}</Text>
                </Table.Td>
                <Table.Td>{i.title}</Table.Td>
                <Table.Td>{i.service}</Table.Td>
                <Table.Td>
                  <Badge color={severityColor(i.severity)} variant="light">
                    {i.severity}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge color={statusColor(i.status)} variant="light">
                    {i.status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="dimmed">
                    {new Date(i.createdAt).toLocaleString()}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Button size="xs" variant="subtle">
                    View
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}

            {rows.length === 0 && (
              <Table.Tr>
                <Table.Td colSpan={7}>
                  <Text c="dimmed" size="sm">
                    No incidents found.
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </Card>
    </div>
  );
}
