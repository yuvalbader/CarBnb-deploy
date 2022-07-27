import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ListApiService from '../../services/list-api-service';
import { fetchVehicles } from '../../app/actions/fetch-vehicles-actions';
const Testimonials = () => {
  const dispatch = useDispatch();
  const [vehicles, setVehicles] = React.useState([]);

  useEffect(() => {
    dispatch(fetchVehicles());
    ListApiService.getBrandList().then((res) => {
      setVehicles(res);
    });
  }, [dispatch]);

  return (
    <section id="testimonials">
      <h5>Find your drive</h5>
      <h2>Explore the world's largest car sharing marketplace</h2>

      <Swiper
        className="containerr testimonials__containerr"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {vehicles.map(({ id, brand }) => {
          return (
            <SwiperSlide key={id} className="testemonials">
              <div className="avatar">{/* <img src={avatar} alt="" /> */}</div>
              <h5 className="name">{brand}</h5>
              <small className="review"></small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
