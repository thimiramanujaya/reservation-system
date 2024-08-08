import { Routes, Route } from 'react-router-dom';
import Appbar from './components/AppBar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Reservations from './pages/Reservations';
import './App.scss'

const App = () => {

  return (
    <div className="app">
      <Sidebar/>
      <div className="content">
        <Appbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/patients' element={<Patients/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
