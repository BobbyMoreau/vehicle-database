import { Stack } from "@mantine/core";
import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles }) {
  return (
    <Stack spacing="sm">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </Stack>
  );
}
