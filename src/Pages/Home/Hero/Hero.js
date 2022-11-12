import React from "react";
import bannerImg from '../../../assets/images/chair.png';
import PrimaryButton from "../../../components/Button/PrimaryBotton";
import './Hero.css';

const Hero = () => {
    const bannerStyle = {
        backgroundImage:` url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <section className="hero min-h-screen mb-5 relative main-hero" style={bannerStyle}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="rounded-lg shadow-2xl lg:w-1/2"
          alt=""/>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
