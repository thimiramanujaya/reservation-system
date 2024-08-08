import { useState, useEffect } from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import './Doctors.scss'

const Doctors = () => {

  const [doctors, setDoctors] = useState(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/api/doctors/', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const doctors = response.data;
        setDoctors(doctors);
        console.log(doctors);
  
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
  
    fetchDoctors();
  }, []);
  

  return (
    <div className="doctors">
      <h1>Doctors</h1>
      <Stack spacing={2} className='stack'>
        {doctors && doctors.map((doctor) => (
            <DetailsCard key={doctor.doctor_id} entityData={doctor} entity={'doctor'}/>
          ))
        }
      </Stack>
    </div>
  )
}

export default Doctors