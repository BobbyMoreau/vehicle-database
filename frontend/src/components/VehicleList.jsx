import { Stack, Button } from "@mantine/core";
import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles, onAddNew }) {
  return (
    <Stack spacing="sm">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
      <Button onClick={onAddNew} mt="md">
        Add New Vehicle
      </Button>
    </Stack>
  );
}
