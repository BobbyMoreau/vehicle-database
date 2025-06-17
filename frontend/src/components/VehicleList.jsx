import { useEffect, useState } from 'react';
import { getVehicles } from '../api/vehicleApi';
import { Card, Text } from '@mantine/core';
import { FeaturesCard } from './VehicleCard';



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
              <FeaturesCard key={vehicle.id}>
                    <Text>{vehicle.modelName} - {vehicle.brandName}</Text>
                </FeaturesCard>
            ))}
        </div>
    );
};

export default VehicleList;
