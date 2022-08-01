import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { useLocation } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./style.css"

export default function PhotoSwiper() {
  const location = useLocation()
  const { state } = location
  return (
    <Swiper
      // install Swiper modules
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{clickable: true}}
      onSlideChange={() => console.log("slide change")}
    >
      {state.vehicle.photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <img className="image_of_brand" src={photo} alt={photo} />
        </SwiperSlide>
      ))}
      
    </Swiper>
  )
}
