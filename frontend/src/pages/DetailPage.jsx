import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Loader, Text, Center } from "@mantine/core";
import { getVehicleById } from "../api/vehicleApi";
import VehicleCard from "../components/VehicleCard";

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

  if (loading)
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="lg" />
      </Center>
    );

  if (error)
    return (
      <Container size="sm" py="md">
        <Text color="red" align="center">
          {error}
        </Text>
      </Container>
    );

  if (!vehicle)
    return (
      <Container size="sm" py="md">
        <Text align="center">No vehicle found</Text>
      </Container>
    );

  return (
    <Container size="sm" py="md">
      <VehicleCard vehicle={vehicle} />
    </Container>
  );
}
