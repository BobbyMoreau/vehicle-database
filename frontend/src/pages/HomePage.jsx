
import { useEffect, useState } from "react";
import { Card, Text, Container, Loader, Group, Stack, Center, Button } from "@mantine/core";
import { IconCar } from "@tabler/icons-react";
import { getVehicles } from "../api/vehicleApi";  

export default function HomePage() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVehicles()
      .then((response) => {
        setVehicles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Kunde inte hämta fordon.');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Container size="sm" py="md">
        <Text color="red" align="center">{error}</Text>
      </Container>
    );
  }

  return (
    <Container size="sm" py="md">
      <Text align="center" size="xl" weight={700} mb="md">
        Vehicles
      </Text>

      <Stack spacing="sm">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} shadow="sm" radius="md" withBorder>
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
            </Group>
            <Text size="sm" color="dimmed">
            Equipment: {vehicle.equipments.join(", ")}
            </Text>
            <Button mb="md">
            Add New Vehicle
            </Button>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
