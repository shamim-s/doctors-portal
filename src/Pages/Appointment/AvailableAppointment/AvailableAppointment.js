import React from 'react';
import { format } from "date-fns";

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='mt-16'>
            <h1 className='text-center text-secondary text-2xl font-bold'>Available Appointment {format(selectedDate, 'PP')}</h1>
        </section>
    );
};

export default AvailableAppointment;