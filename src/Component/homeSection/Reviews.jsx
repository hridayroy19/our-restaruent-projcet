import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Reviews = () => {
  const [review, setRevies] = useState([]);

  useEffect(() => {
    fetch("/public/reviews.json")
      .then((res) => res.json())
      .then((data) => setRevies(data));
  }, []);
  return (
    <>
      <div className=" py-9 w-4/12 mx-auto mt-8 items-center">
        <p className="items-center text-center font-semibold ">
          ---What Our Clients Say---
        </p>
        <h2 className="items-center text-center font-bold py-2 text-xl mb-9 border-y-4 ">
          TESTIMONIALS
        </h2>
      </div>

      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((review) => (
          <SwiperSlide key={review._id}>

<div className=" flex flex-col text-center items-center ">
<Rating className="text-center"
      style={{ maxWidth: 180 }}
      value={review.rating}
    
    />
        </div>  
        
         <div className=" px-9 py-10">
              <p className="text-center items-center">  {review.details}  </p>
              <h3 className=" text-center mt-3 font-bold text-orange-400"> {review.name} </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
