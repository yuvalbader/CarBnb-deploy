import { useState, useEffect } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import VehicleCard from "../vehicle-card/VehicleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import dummyData from "../../pages/MyProfile/dummyData";
import { useOutletContext } from "react-router-dom";


import 'swiper/css';
import 'swiper/css/pagination';
import './OrdersContainer.css';

const OrdersContainer = ( props, navBar ) => {
  const [data, setData] = useState(dummyData);
  const handleOutletChange = useOutletContext();

  const { page } = props;
  const pageLabel = `No past ${page}`;
  const pageTitle = `My ${page}`;
  handleOutletChange(page);

  useEffect(() => {}, [props.title, props.label]);
  
  const defaultOuput = () => {
    return (
      <div className="trips-view-container-img">
        <img
          src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
          alt=""
        />
        <p className="no-past title">{pageLabel}</p>
        <div>This is where you can access information about your {page}</div>
      </div>
    );
  };

  return (
    <>
      <div className="details-view-container">
        <p className="title"> {pageTitle} </p>
        {data.length === 0 && defaultOuput()}
      </div>
      {data.length !== 0 && (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide className="swiper-slide">
                <VehicleCard
                  item={{ ...item, seats: 5, engine: "petrol", gear: "Auto" }}
                ></VehicleCard>
                {/* <ReservationCard item={item}></ReservationCard> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default OrdersContainer;
