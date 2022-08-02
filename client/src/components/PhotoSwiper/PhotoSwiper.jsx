import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useLocation } from "react-router-dom"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./style.css"

export default function PhotoSwiper() {
  const { state } = useLocation()
  return (
    <Swiper
      // install Swiper modules
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className="image_of_brand"
          src={state.profile_picture}
          alt={state.profile_picture}
        />
      </SwiperSlide>
      ))
    </Swiper>
  )
}
