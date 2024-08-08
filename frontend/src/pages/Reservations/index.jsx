import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReservations } from '../../states/reservationState'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm'
import Stack from '@mui/material/Stack'
import './Reservations.scss'

const Reservations = () => {

  const reservations = useSelector(state => state.reservations.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch]);
  //console.log(reservations)


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