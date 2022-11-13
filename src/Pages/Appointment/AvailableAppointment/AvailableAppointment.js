import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import AppointmentOptions from './AppointmentOptions/AppointmentOptions';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [apponitmentOptions, setApponitmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOption.json')
        .then(res => res.json())
        .then(data => setApponitmentOptions(data))
    },[])
    return (
        <section className='mt-16 mb-16'>
            <h1 className='text-center text-secondary text-2xl font-bold'>Available Appointment {format(selectedDate, 'PP')}</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                {
                    apponitmentOptions.map(appOption => <AppointmentOptions 
                        key={appOption._id} 
                        appOption={appOption}
                        setTreatment={setTreatment}
                        />)
                }
            </div>
            {
                treatment && <BookingModal 
                selectedDate={selectedDate} 
                treatment={treatment} 
                setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;