import { useState, useEffect } from 'react'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import './Reservations.scss'

const Reservations = () => {

  const [reservations, setReservations] = useState(null)

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/api/reservations/', {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const reservations = response.data;
        setReservations(reservations);
        console.log(reservations);
  
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
  
    fetchReservations();
  }, []);


  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <Stack spacing={2} className='stack'>
        {reservations && reservations.map((reservation) => (
            <DetailsCard key={reservation.reservation_id} entityData={reservation} entity={'reservation'}/>
          ))
        }
      </Stack>
    </div>
  )
}

export default Reservations