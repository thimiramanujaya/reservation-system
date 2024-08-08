import { useState, useEffect } from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import './Patients.scss'

const Patients = () => {

  const [patients, setPatients] = useState(null)

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/patients/', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const patients = response.data;
        setPatients(patients);
        console.log(patients);
  
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
  
    fetchPatients();
  }, []);


  return (
    <div className="patients">
      <h1>Patients</h1>
      <Stack spacing={2} className='stack'>
        {patients && patients.map((patient) => (
            <DetailsCard key={patient.patient_id} entityData={patient} entity={'patient'}/>
          ))
        }
      </Stack>
    </div>
  )
}

export default Patients