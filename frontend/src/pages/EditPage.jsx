import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  TextInput,
  Button,
  Loader,
  Text,
  Center,
  Stack,
  Group,
  Modal,
} from "@mantine/core";
import { getVehicleById, updateVehicle, deleteVehicle } from "../api/vehicleApi";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
    setSaving(true);
    deleteVehicle(vehicle.id, vehicle)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to delete vehicle.");
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
      <Stack spacing="lg">
        <Text size="2xl" weight={700} align="center" mb="md">
          Edit Vehicle
        </Text>

        <TextInput
        label="Model Name"
        name="modelName"
        value={vehicle.modelName}
        onChange={handleInputChange}
        placeholder="Enter model name"
        required
        mb="md"           
      />

      <Group position="apart" mt="xl">  
        <Button color="red" variant="outline" onClick={() => setDeleteModalOpen(true)} loading={saving}>
          Delete vehicle
        </Button>

        <Button onClick={handleSave} loading={saving}>
          Save Changes
        </Button>
      </Group>

        <Modal
          opened={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          title="Confirm Delete"
          centered
        >
          <Text>Are you sure you want to delete this vehicle?</Text>
          <Group position="right" mt="md">
            <Button variant="default" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button color="red" onClick={handleDelete} loading={saving}>
              Delete
            </Button>
          </Group>
        </Modal>
      </Stack>
    </Container>
  );
}
