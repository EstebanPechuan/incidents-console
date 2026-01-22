import { Group, TextInput, Button, Avatar, Menu, Text } from "@mantine/core";
import { IconSearch, IconLogout, IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function AppTopbar() {
  const navigate = useNavigate();

  return (
    <Group h="100%" px="md" justify="space-between">
      <TextInput
        leftSection={<IconSearch size={16} />}
        placeholder="Search incidents..."
        w={360}
      />

      <Group gap="sm">
        <Button variant="light" onClick={() => navigate("/app/incidents")}>
          New incident
        </Button>

        <Menu width={200} position="bottom-end">
          <Menu.Target>
            <Avatar radius="xl" color="gray" style={{ cursor: "pointer" }}>
              EP
            </Avatar>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item leftSection={<IconUser size={16} />}>
              <Text size="sm">Esteban</Text>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="red"
              leftSection={<IconLogout size={16} />}
              onClick={() => navigate("/login")}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
}
