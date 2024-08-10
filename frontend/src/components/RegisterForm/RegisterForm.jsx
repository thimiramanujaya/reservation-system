import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDoctors } from '../../states/doctorState'

import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './RegisterForm.scss'

const RegisterForm = ({ entity }) => {

  const doctors = useSelector(state => state.doctors.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors())
  }, [dispatch]);

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
  

  const availabilites = [
    {
      value: 'yes',
      label: 'Yes',
    },
    {
      value: 'no',
      label: 'No',
    },
  ];

  const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
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
                  id="custom-outlined-required"
                  label="Name"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined-required"
                  label="Email"
                  type='email'
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined-required"
                  label="Phone"
                  type="number"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined-required"
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
                  id="custom-outlined-required"
                  label="Address"
                  className='text-field long-input1'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined-required"
                  label="Specialization"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  id="custom-outlined"
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
                  id="custom-outlined-required"
                  label="Name"
                  className='text-field'
                  size='small'
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <CustomDatePicker 
                      label="Date of Birth" 
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <CustomTextField
                  required
                  id="custom-outlined-required"
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
                  id="custom-outlined-required"
                  label="Email"
                  type='email'
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined-required"
                  label="Phone"
                  type="number"
                  className='text-field'
                  size='small'
                />
                <CustomTextField
                  required
                  id="custom-outlined"
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <CustomDatePicker 
                      label="Reservation Date" 
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <CustomTimePicker 
                      label="Reservation Time" 
                      slotProps={{ textField: { size: 'small', required: true } }}
                      className='text-field'
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <CustomTextField
                  required
                  id="custom-outlined-required"
                  select
                  label="Doctor"
                  className='text-field doctor'
                  size='small'
                >
                  {doctors.map((doctor)=> (
                    <MenuItem key={doctor.doctor_id} value={doctor.doctor_id}>
                      {doctor.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
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