
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <>


        <div className=' w-4/12 mx-auto items-center'>
            <p className='items-center text-center font-semibold '>---Form 11.00am to 10.00pm---</p>
           <h2 className='items-center text-center font-bold py-2 text-xl mb-9 border-y-4 '>order online</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" />
          <h2 className='text-center  uppercase font-bold text-blue-500 text-2xl -mt-12 '> salad</h2>
          </SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" />
          <h2 className='text-center  uppercase text-white text-2xl -mt-12 '> salad</h2>

          </SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" />          <h2 className='text-center  uppercase text-white text-2xl -mt-12 '> salad</h2>
</SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" />          <h2 className='text-center  uppercase text-white text-2xl -mt-12 '> salad</h2>
</SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" /></SwiperSlide>
          <SwiperSlide> <img src="https://i.ibb.co/vxg90QB/01.jpg" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default OrderOnline;