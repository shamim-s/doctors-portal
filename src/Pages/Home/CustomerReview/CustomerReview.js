import React from "react";
import qutes from '../../../assets/icons/quote.svg';
import peaople1 from '../../../assets/images/people1.png';
import peaople2 from '../../../assets/images/people2.png';
import peaople3 from '../../../assets/images/people3.png';
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
    const reCardData = [
        {
            id:1,
            name:'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: peaople1,
            country: 'California'
        },
        {
            id:2,
            name:'Lisa',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: peaople2,
            country: 'Canada'
        },
        {
            id:3,
            name:'Rosse',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: peaople3,
            country: 'England'
        },
    ]
  return (
    <section className="mt-20 mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-secondary text-2xl ">Testimonial</h1>
          <h1 className="text-4xl ">What Our Patients Says</h1>
        </div>
        <div>
            <img src={qutes} className="w-44" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
            {
                reCardData.map(card => <ReviewCard key={card.id} card={card}></ReviewCard>)
            }
      </div>
    </section>
  );
};

export default CustomerReview;
