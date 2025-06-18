import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextInput, Button, Loader, Text, Center, Stack } from "@mantine/core";
import { getVehicleById, updateVehicle, deleteVehicle } from "../api/vehicleApi";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVehicleById(id)
      .then((res) => {
        setVehicle(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch vehicle.");
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSaving(true);
    updateVehicle(vehicle.id, vehicle)
      .then(() => {
        navigate(`/vehicles/${vehicle.id}`); 
      })
      .catch(() => {
        setError("Failed to update vehicle.");
        setSaving(false);
      });
  };

  const handleDelete = () => {
    deleteVehicle(vehicle.id, vehicle)
      .then(() => {
        navigate("/"); 
      })
      .catch(() => {
        setError("Failed to update vehicle.");
        setSaving(false);
      });
  };

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

  return (
    <Container size="sm" py="md">
      <Stack spacing="md">
        <Text size="xl" weight={700}>
          Edit Vehicle
        </Text>

        <TextInput
          label="Model Name"
          name="modelName"
          value={vehicle.modelName}
          onChange={handleInputChange}
        />

        <Button loading={saving} onClick={handleSave}>
          Save
        </Button>
        <Button loading={saving} onClick={handleDelete}>
          Delete vehicle
        </Button>
      </Stack>
    </Container>
  );
}