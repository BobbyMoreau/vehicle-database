import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Text, Loader, Group, Stack, Center } from "@mantine/core";
import { IconCar } from "@tabler/icons-react";
import { getVehicleById } from "../api/vehicleApi"; 

export default function VehicleDetail() {
  const { id } = useParams(); 
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    getVehicleById(id)
      .then((res) => {
        setVehicle(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Not able to fetch vehicle.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Center style={{ height: "100vh" }}>
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

  if (!vehicle) {
    return (
      <Container size="sm" py="md">
        <Text align="center">No vehicle found</Text>
      </Container>
    );
  }

  return (
    <Container size="sm" py="md">
      <Card shadow="sm" radius="md" withBorder>
        <Group position="apart" mb="xs" align="center">
          <Group spacing="xs" align="center">
            <IconCar size={24} />
            <Text size="lg" weight={500}><strong>Model:</strong> {vehicle.modelName}</Text>
          </Group>
          <Text size="sm" color="dimmed"><strong>Brand:</strong> {vehicle.brandName}</Text>
        </Group>
        <Stack spacing="xs">
          <Text><strong>Equipment:</strong> {vehicle.equipments?.join(", ") || "No equipment"}</Text>
        </Stack>
      </Card>
    </Container>
  );
}
