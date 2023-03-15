import React from 'react'

export function Appointments({appointments, setAppointments}) {

    const handleDeleteAppointment = (id) => {
        const indexOfAppointment = appointments.findIndex(appointment => appointment.id === id)
        appointments.splice(indexOfAppointment, 1)
        setAppointments([...appointments])
    }

    console.log('appointments', appointments)

    return (
        <div>
            {appointments.map(appointment => {
                return (
                    <div>
                        <Appointment appointment={appointment} />
                        <button
                            onClick={() => handleDeleteAppointment(appointment.id)}
                        >Delete Appointment</button>
                    </div>
                )
            })}
        </div>
    )
}

function Appointment({appointment}) {
    return (
        <div>
            <div>Doctor: {appointment.doctor}</div>
            <div>Date (1-365days){appointment.date}</div>
            <div>Time (1-24hr): {appointment.time}</div>
            <div>Patient: {appointment.patient}</div>
            <br></br>
        </div>
    )
}