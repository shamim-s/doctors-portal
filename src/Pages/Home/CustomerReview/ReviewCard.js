import React from "react";

const ReviewCard = ({ card }) => {
  const { name, country, img, review } = card;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <div>
          <p>{review}</p>
        </div>
        <hr />
        <div className="flex mt-2">
            <img src={img} className="w-14 border-2 border-secondary rounded-full mr-4" alt="" />
            <div>
                <h1 className="font-bold text-lg">{name}</h1>
                <h1 className="text-sm">{country}</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
