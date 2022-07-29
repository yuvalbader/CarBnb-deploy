import { useState, useEffect } from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import VehicleCard from "../vehicle-card/VehicleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import dummyData from "../../pages/MyProfile/dummyData";

import "swiper/css";
import "swiper/css/pagination";
import "./OrdersContainer.css";

const DetailsContainer = (props) => {
  // const [page, setPage] = useState(props.page);
  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("Trips");
  const [data, setData] = useState(dummyData);
  const [text, setText] = useState("");

  useEffect(() => {
    const page = props.page;
    const pageTitle = `My ${page}`;
    console.log(pageTitle);
    const pageLabel = `No past ${page}`;
    const pageText = `This is where you can access information about your ${page}`;
    setTitle(pageTitle);
    setLabel(pageLabel);
    setText(pageText);
  }, [props.title, props.label]);

  if (data.length === 0) {
    return (
      <div className="details-view-container">
        <p className="title"> {title} </p>
        <div className="trips-view-container-img">
          <img
            src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
            alt=""
          />
          <div className="no-past-container">
            <p className="no-past title">{label}</p>
            <label className="no-past-label"></label>
          </div>
          <div> {text}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p className="title"> {title} </p>
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
                <VehicleCard item={{ ...item, seats: 5, engine: "petrol", gear:"Auto" }}> </VehicleCard>
                {/* <ReservationCard item={item}></ReservationCard> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailsContainer;
