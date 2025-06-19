import { useEffect, useState } from "react";
import { Container, Loader, Text, Center, Button, NativeSelect, MultiSelect } from "@mantine/core";
import { getVehicles } from "../api/vehicleApi";
import { getBrands } from "../api/brandApi";
import { createVehicle } from "../api/vehicleApi";
import VehicleList from "../components/VehicleList";
import { getEquipments } from "../api/equipmentApi";

export default function HomePage() {
  const [vehicles, setVehicles] = useState([]);
  const [brands, setBrands] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [modelName, setModelName] = useState('');
  const [brandValue, setBrandValue] = useState('');
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');


  const handleSelectedEquipmentsChange = (event) => {
    const { name, checked } = event.target;
    setSelectedEquipments(prev =>
      checked ? [...prev, name] : prev.filter(e => e !== name)
    );
  };

  const handleAddNewVehicle = async () => {
    const brandId = brands.find(b => b.name === brandValue)?.id;
    const equipmentIds = equipments
      .filter(e => selectedEquipments.includes(e.name))
      .map(e => e.id);
  
    const newVehicle = {
      vin: vin,
      licensePlateNumber: licensePlate,
      name: modelName,
      brandId: brandId,
      equipmentIds: equipmentIds
    }
  
    console.log(newVehicle);
  
    try {
      const response = await createVehicle(newVehicle);
      console.log('Vehicle created:', response?.data);
      setVehicles(prev => [...prev, response.data]); 
      setVin('');
      setLicensePlate('');
      setModelName('');
      setBrandValue('');
      setSelectedEquipments([]);
    } catch (error) {
      console.error('Error creating vehicle', error);
    }
  }

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
    
      getBrands()
      .then((res) => {
        setBrands(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch brands.");
        setLoading(false);
      });
    
      getEquipments()
      .then((res) => {
        setEquipments(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch equipment.");
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


  return (
    <Container size="sm" py="md">
  <Text align="center" size="xl" weight={700} mb="md">
    Vehicles
  </Text>

  <VehicleList vehicles={vehicles} />

  <hr />

  <div className="form-group">
    <span className="label-text">ModelName:</span>
    <input
      type="text"
      value={modelName}
      onChange={(e) => setModelName(e.target.value)}
    />
      </div>
      <div className="form-group">
  <span className="label-text">VIN:</span>
  <input
    type="text"
    value={vin}
    onChange={(e) => setVin(e.target.value)}
  />
</div>

<div className="form-group">
  <span className="label-text">License Plate Number:</span>
  <input
    type="text"
    value={licensePlate}
    onChange={(e) => setLicensePlate(e.target.value)}
  />
</div>

  <div className="form-group">
    <span className="label-text">Choose Brand:</span>
    <select
      value={brandValue}
      onChange={(event) => setBrandValue(event.target.value)}
    >
      <option value="">-- Choose Brand --</option>
      {brands.map((b) => (
        <option key={b.id} value={b.name}>
          {b.name}
        </option>
      ))}
    </select>
  </div>

  <div className="form-group">
    <span className="label-text">Equipments:</span>
    <ul className="checkbox-list">
      {equipments.map((e) => (
        <li key={e.name}>
          <input
            type="checkbox"
            id={e.name}
            name={e.name}
            value={e.name}
            onChange={handleSelectedEquipmentsChange}
            checked={selectedEquipments.includes(e.name)}
          />
          <label htmlFor={e.name}>{e.name}</label>
        </li>
      ))}
    </ul>
  </div>

  <Button mt="md" onClick={handleAddNewVehicle}>
    Add New Vehicle
  </Button>
</Container>

  );
}
