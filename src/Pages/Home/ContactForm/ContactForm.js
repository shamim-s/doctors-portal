import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/Button/PrimaryBotton';

const ContactForm = () => {
    const style = {
        background: `url(${appointment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <section className="pb-16 pt-16 mb-10" style={style}>
            <h1 className='text-secondary text-2xl text-center'>Contact Us</h1>
                <h1 className='text-3xl text-center text-white'>Stay connected with us</h1>
            <div className='flex'>
                <form className='mx-auto mt-6'>
                    <input 
                     type="email" 
                     name="email" 
                     id="email"
                     placeholder='Email Address'
                     className='w-80 mb-4 p-2 rounded-md'
                     />
                    <br />
                    <input 
                     type="text" 
                     name="text" 
                     id="email" 
                     placeholder='Subject'
                     className='w-80 mb-4 p-2 rounded-md'
                     />
                    <br />
                    <textarea className="w-80 mb-4 textarea textarea-bordered" placeholder="Your message"></textarea>
                    <br />
                    <p className='text-center'><PrimaryButton>Submit</PrimaryButton></p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;