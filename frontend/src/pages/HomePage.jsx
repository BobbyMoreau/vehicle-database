import { Container, Button, Title, Modal } from '@mantine/core';
import VehicleList from '../components/VehicleList';

const HomePage = () => {

    return (
        <Container size="md" mt="xl">
            <Title align="center" mb="lg">Vehicle Database</Title>
            <Button mb="md">
                Add New Vehicle
            </Button>
            <VehicleList />
        </Container>
    );
};

export default HomePage;
