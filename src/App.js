import './App.css'
import React, {useState} from 'react'
import { NewAppointment } from './Components/NewAppointment'
import { Appointments } from './Components/Appointments'


export default function App() {

  const [appointments, setAppointments] = useState([]) // [{id, createdAt, doctor, date, time, patient}, {...}, {...}]

  return (
    <div>
      <NewAppointment
        appointments={appointments}
        setAppointments={setAppointments}
        />
      <Appointments
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  )
}
