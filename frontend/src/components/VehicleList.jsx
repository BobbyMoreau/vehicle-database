import { useEffect, useState } from 'react';
import { getVehicles } from '../api/vehicleApi';
import { Card, Text } from '@mantine/core';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        const response = await getVehicles();
        setVehicles(response.data);
    };

    return (
        <div>
            {vehicles.map(vehicle => (
                <Card key={vehicle.id} shadow="sm" p="lg" mb="sm">
                    <Text>{vehicle.modelName} - {vehicle.brandName}</Text>
                </Card>
            ))}
        </div>
    );
};

export default VehicleList;
