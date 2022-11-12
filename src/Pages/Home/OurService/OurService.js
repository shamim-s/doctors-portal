import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const OurService = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]
    return (
        <div className='mt-32 mb-10'>
            <h2 className='text-center text-secondary font-semibold text-2xl'>Our Services</h2>
            <h1 className='text-center font-semibold text-3xl'>Services We Provide</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16'>
                {
                    cardData.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default OurService;