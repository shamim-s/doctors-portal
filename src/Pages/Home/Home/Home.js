import React from 'react';
import BottomHero from '../BottomHero/BottomHero';
import ContactForm from '../ContactForm/ContactForm';
import CustomerReview from '../CustomerReview/CustomerReview';
import Hero from '../Hero/Hero';
import Cards from '../InfoCards/Cards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurService from '../OurService/OurService';


const Home = () => {
    return (
        <div className='mx-5'>
            <Hero></Hero>
            <Cards></Cards>
            <OurService></OurService>
            <BottomHero></BottomHero>
            <MakeAppointment></MakeAppointment>
            <CustomerReview></CustomerReview>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;