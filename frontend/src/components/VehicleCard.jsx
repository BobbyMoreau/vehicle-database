import { Card, Group, Text, Stack } from "@mantine/core";
import { IconCar } from "@tabler/icons-react";

export default function VehicleCard({ vehicle, children }) {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Group position="apart" mb="xs" align="center">
        <Group spacing="xs" align="center">
          <IconCar size={24} />
          <Text size="lg" weight={500}>
            Model: {vehicle.modelName}
          </Text>
        </Group>
        <Text size="sm" color="dimmed">
          Brand: {vehicle.brandName}
        </Text>
        <Text size="sm" color="dimmed">
          VIN: {vehicle.vin}
        </Text>
        <Text size="sm" color="dimmed">
          Licensplate: {vehicle.licensePlateNumber}
        </Text>
      </Group>
      <Stack spacing="xs">
        <Text size="sm" color="dimmed">
          Equipment: {vehicle.equipments?.join(", ") || "No equipment"}
        </Text>
        {children}
      </Stack>
    </Card>
  );
}
