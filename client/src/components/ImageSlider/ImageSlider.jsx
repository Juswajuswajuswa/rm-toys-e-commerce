import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';



import jacket1 from '../../assets/jacket1.png'
import ImageCard from "./ImageCard";

export default function ImageSlider() {
  return (
  
<Swiper
  className="flex w-[360px] drop-shadow-md md:w-[542px] flex-col overflow-hidden justify-center mx-auto"
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={2} // Adjust this to control how much of the side slides are visible
  spaceBetween={40} // Adjust this to bring slides closer or farther apart
  coverflowEffect={{
    rotate: 0, // No rotation
    stretch: 0, // No stretch
    depth: 100, // Minimal depth for a flat effect
    modifier: 1, // Control the intensity of the effect
    slideShadows: false, // Disable slide shadows
  }}
 
  modules={[EffectCoverflow]}
  initialSlide={2} // Center the second slide initially
>
  <SwiperSlide>
    <ImageCard picture={jacket1} />
  </SwiperSlide>
  <SwiperSlide>
    <ImageCard picture={jacket1} />
  </SwiperSlide>
  <SwiperSlide>
    <ImageCard picture={jacket1} />
  </SwiperSlide>
  <SwiperSlide>
    <ImageCard picture={jacket1} />
  </SwiperSlide>
</Swiper>

  );
}
