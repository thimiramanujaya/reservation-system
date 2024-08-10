import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDoctors } from '../../states/doctorState'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Stack from '@mui/material/Stack'
import './Doctors.scss'

const Doctors = () => {

  const doctors = useSelector(state => state.doctors.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors())
  }, [dispatch]);
  //console.log(doctors)
  

  return (
    <div className="doctors">
      <h1>Doctors</h1>
      <div className="main">
        <Stack spacing={2} className='stack'>
          {doctors && doctors.map((doctor) => (
              <DetailsCard key={doctor.doctor_id} entityData={doctor} entity={'doctor'}/>
            ))
          }
        </Stack>
        <RegisterForm entity={'doctor'}/>
      </div>
    </div>
  )
}

export default Doctors