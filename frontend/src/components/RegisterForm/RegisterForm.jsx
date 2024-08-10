import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDoctors } from '../../states/doctorState'
import { fetchPatients } from '../../states/patientState'

import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './RegisterForm.scss'
import dayjs from 'dayjs';


const CustomTextField = styled(TextField)({
  '& label': {
    color: '#6F7E8C',
  },
  '& label.Mui-focused': {
    color: '#6F7E8C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
  '& .MuiSelect-select': {
    color: 'aliceblue',
  },
  '& .MuiSvgIcon-root': {
    color: '#6F7E8C',
  },
});

const pickerStyles = {
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E0E3E7', // input normal
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#B2BAC2', // input hover
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#6F7E8C', // input focused and hover out
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#6F7E8C',
  },
  '& label': {
    color: '#6F7E8C',
  },
  '& label.Mui-focused': {
    color: '#6F7E8C',
  },
  '& .MuiButtonBase-root': {
    color: '#6F7E8C', // icon
  },
};

const CustomDatePicker = styled(DatePicker)(pickerStyles);
const CustomTimePicker = styled(TimePicker)(pickerStyles);


const RegisterForm = ({ entity }) => {

  const doctors = useSelector(state => state.doctors.doctors);
  const patients = useSelector(state => state.patients.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors())
    dispatch(fetchPatients())
  }, [dispatch]);

  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    phone: '',
    isAvailable: false,
    address: '',
    specialization: '',
    description: '',
  })

  const [patient, setPatient] = useState({
    name: '',
    dob: dayjs(),
    gender: '',
    email: '',
    phone: '',
    address: '',
  })

  const [reservation, setReservation] = useState({
    reservedDate: dayjs(),
    reservedTime: dayjs(),
    state: '',
    doctorId: '',
    patientId: '',
  })

  const handleDoctorChange = (prop) => (e) => {
    setDoctor((prevDoctor) => ({
      ...prevDoctor, 
      [prop]: e.target.value,
    }))
  }

  const handlePatientChange = (prop) => (e) => {
    setPatient((prevPatient) => ({
      ...prevPatient,
      [prop]: e.target.value,
    }));
  }

  const handleReservationChange = (prop) => (e) => {
    setReservation((prevReservation) => ({
      ...prevReservation,
      [prop]: e.target.value,
    }));
  }
  

  const availabilites = [
    {
      value: true, label: 'Yes',
    },
    {
      value: false, label: 'No',
    },
  ];

  const genders = [
    {
      value: 'male', label: 'Male',
    },
    {
      value: 'female', label: 'Female',
    },
  ];
  
  switch(entity) {
    case 'doctor':
      return (
        <div className="form">
            <h2>Doctor Registration</h2>
            <form>
              <div className="form-inputs">
                <CustomTextField
                  required
                  id="d-name"
                  onChange={ handleDoctorChange('name') }
                  value={doctor.name}
                  label="Name"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="d-email"
                  onChange={ handleDoctorChange('email') }
                  value={doctor.email}
                  label="Email"
                  type='email'
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="d-phone"
                  onChange={ handleDoctorChange('phone') }
                  value={doctor.phone}
                  label="Phone"
                  type="number"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="is-available"
                  onChange={ handleDoctorChange('isAvailable') }
                  value={doctor.isAvailable}
                  label="Is Available"
                  select
                  className='text-field'
                  size='small'
                >
                  {availabilites.map((option)=> (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  required
                  id="d-address"
                  onChange={ handleDoctorChange('address') }
                  value={doctor.address}
                  label="Address"
                  className='text-field long-input1'
                  size='small'
                />
                <CustomTextField
                  required
                  id="d-specialization"
                  onChange={ handleDoctorChange('specialization') }
                  value={doctor.specialization}
                  label="Specialization"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  id="d-description"
                  onChange={ handleDoctorChange('description') }
                  value={doctor.description}
                  label="Description"
                  multiline
                  rows={2}
                  className='text-field long-input2'
                  size='small'
                />
              </div>
              <div className="button">
                <Button
                  type='submit'
                  variant='contained'
                > Register
                </Button>
              </div>
            </form>
        </div>
      )
    
    case 'patient':
      return (
        <div className="form">
            <h2>Patient Registration</h2>
            <form>
              <div className="form-inputs">
                <CustomTextField
                  required
                  id="p-name"
                  onChange={ handlePatientChange('name') }
                  value={patient.name}
                  label="Name"
                  className='text-field'
                  size='small'
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <CustomDatePicker 
                      label="Date of Birth" 
                      value={patient.dob}
                      onChange={ (date) => setPatient((prevPatient) => ({
                          ...prevPatient,
                          dob: date,
                        }))
                      }
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <CustomTextField
                  required
                  id="p-gender"
                  onChange={ handlePatientChange('gender') }
                  value={patient.gender}
                  select
                  label="Gender"
                  className='text-field'
                  size='small'
                >
                  {genders.map((option)=> (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  required
                  id="p-email"
                  onChange={ handlePatientChange('email') }
                  value={patient.email}
                  label="Email"
                  type='email'
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="p-phone"
                  onChange={ handlePatientChange('phone') }
                  value={patient.phone}
                  label="Phone"
                  type="number"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="p-address"
                  onChange={ handlePatientChange('address') }
                  value={patient.address}
                  label="Address"
                  multiline
                  rows={2}
                  className='text-field long-input3'
                  size='small'
                />
              </div>
              <div className="button">
                <Button
                  type='submit'
                  variant='contained'
                > Register
                </Button>
              </div>
            </form>
        </div>
      )
    
    case 'reservation':
      return (
        <div className="form">
            <h2>Reservation Booking</h2>
            <form>
              <div className="form-inputs">
              <CustomTextField
                  required
                  id="r-doctor"
                  onChange={ handleReservationChange('doctorId') }
                  value={reservation.doctorId}
                  select
                  label="Doctor"
                  className='text-field'
                  size='small'
                >
                  {doctors.map((doctor)=> (
                    <MenuItem key={doctor.doctor_id} value={doctor.doctor_id}>
                      {doctor.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <CustomTextField
                  required
                  id="r-patient"
                  onChange={ handleReservationChange('patientId') }
                  value={reservation.patientId}
                  select
                  label="Patient"
                  className='text-field'
                  size='small'
                >
                  {patients.map((patient)=> (
                    <MenuItem key={patient.patient_id} value={patient.patient_id}>
                      {patient.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <CustomDatePicker 
                      label="Reservation Date" 
                      value={reservation.reservedDate}
                      onChange={(date) =>
                        setReservation((prevReservation) => ({
                          ...prevReservation,
                          reservedDate: date,
                        }))
                      }
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <CustomTimePicker 
                      label="Reservation Time" 
                      value={reservation.reservedTime}
                      onChange={(time) =>
                        setReservation((prevReservation) => ({
                          ...prevReservation,
                          reservedTime: time,
                        }))
                      }
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="button">
                <Button
                  type='submit'
                  variant='contained'
                > Book Reservation
                </Button>
              </div>
            </form>
        </div>
      )
  }
}

export default RegisterForm