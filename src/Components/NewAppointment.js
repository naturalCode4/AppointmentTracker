import React, {useState, useRef} from 'react'

export function NewAppointment({appointments, setAppointments}) {

    const [doctor, setDoctor] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [patient, setPatient] = useState('')

    const [doctorIsNotAvailable, setDoctorIsNotAvailable] = useState(false)

    const counterRef = useRef(1)

    const checkIfAppointmentIsAvailable = () => {
        const doctorIsAvailable = appointments.findIndex(appointment => {
            return appointment.doctor === doctor
            && appointment.date === date
            && appointment.time === time
        })
        return doctorIsAvailable === -1
    }

    const refreshAppointmentInputs = () => {
        setDoctor('')
        setDate('')
        setTime('')
        setPatient('')
    }

    const handleAppointmentSubmit = () => {
        if (checkIfAppointmentIsAvailable()) {
            appointments.push({
                id: counterRef.current,
                createdAt: Date.now(),
                doctor: doctor,
                date: date,
                time: time,
                patient: patient
            })
            counterRef.current++
            setAppointments([...appointments])
            console.log('appointments', appointments)
            refreshAppointmentInputs()
        } else {
            setDoctorIsNotAvailable(true)
        }
    }

    const handleInputChange = (e, setVariable) => {
        setDoctorIsNotAvailable(false)
        setVariable(e.target.value)
    }

    return (
        <div>
            {doctorIsNotAvailable && <p>Sorry, doctor {doctor} is not available on Date: {date} at Time: {time}</p>}
            <input
                placeholder='Enter doctor'
                value={doctor}
                onChange={e => handleInputChange(e, setDoctor)}
                />
            <input
                placeholder='Enter date'
                value={date}
                max={365}
                min={1}
                type="number"
                onChange={e => handleInputChange(e, setDate)}
                />
            <input
                placeholder='Enter time'
                value={time}
                max={24}
                min={0}
                type="number"
                onChange={e => handleInputChange(e, setTime)}
                />
            <input
                placeholder='Enter patient'
                value={patient}
                onChange={e => handleInputChange(e, setPatient)}
                />
            <button
                onClick={handleAppointmentSubmit}
            >Submit New Appointment</button>
        </div>
    )
}