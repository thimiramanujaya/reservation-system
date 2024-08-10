import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPatients } from '../../states/patientState'
import DetailsCard from '../../components/DetailsCard/DetailsCard'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Stack from '@mui/material/Stack';
import './Patients.scss'

const Patients = () => {

  const patients = useSelector(state => state.patients.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients())
  }, [dispatch]);
  //console.log(patients)

  return (
    <div className="patients">
      <h1>Patients</h1>
      <div className="main">
        <Stack spacing={2} className='stack'>
          {patients && patients.map((patient) => (
              <DetailsCard key={patient.patient_id} entityData={patient} entity={'patient'}/>
            ))
          }
        </Stack>
        <RegisterForm entity={'patient'}/>
      </div>
    </div>
  )
}

export default Patients