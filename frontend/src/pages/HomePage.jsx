import { useEffect, useState } from "react";
import { Container, Loader, Text, Center } from "@mantine/core";
import { getVehicles } from "../api/vehicleApi";
import VehicleList from "../components/VehicleList";

export default function HomePage() {
  const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    getVehicles()
      .then((res) => {
        setVehicles(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch vehicle.");
        setLoading(false);
      });
  }, []);

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

    const uniqueBrands = vehicles.reduce((acc, v) => {
      if (!acc.some(b => b.brandId === v.brandId)) {
        acc.push(v);
      }
      return acc;
    }, []);

  return (
    <Container size="sm" py="md">
      <Text align="center" size="xl" weight={700} mb="md">
        Vehicles
          </Text>
          <ul>
            {uniqueBrands.map(b => <li key={b.brandId}>{b.brandName}</li>)}
      </ul>
      <VehicleList vehicles={vehicles} onAddNew={() => alert("Add new clicked")} />
    </Container>
  );
}
