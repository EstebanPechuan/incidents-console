import { useState } from "react";
import { Button, Card, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ maxWidth: 420, margin: "64px auto" }}>
      <Title order={2} mb="xs">Welcome back</Title>
      <Text c="dimmed" size="sm" mb="md">
        Sign in to manage incidents.
      </Text>

      <Card withBorder radius="md" p="md">
        <TextInput
          label="Email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          mb="sm"
        />
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          mb="md"
        />

        <Button fullWidth onClick={() => nav("/app/incidents")}>
          Sign in (mock)
        </Button>

        <Text c="dimmed" size="xs" mt="md">
          Día 2: conectamos Supabase Auth real + session + protected routes.
        </Text>
      </Card>
    </div>
  );
}
