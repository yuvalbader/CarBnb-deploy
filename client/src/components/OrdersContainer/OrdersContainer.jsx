import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyTripsCard from "../MyTripsCard/MyTripsCard";
import MyReservationsCard from "../MyReservationsCard/MyReservationsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useOutletContext } from "react-router-dom";
import { fetchMyVehicles } from "../../app/actions/fetch-vehicles-actions";

import "swiper/css";
import "swiper/css/pagination";
import "./OrdersContainer.css";
import {
  fetchMyReservations,
  fetchMyOrders,
} from "../../app/actions/user-actions";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const OrdersContainer = (props, navBar) => {
  const handleOutletChange = useOutletContext();
  const loading = useSelector((state) => state.viewSlice.isLoading);
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.userSlice.orders);
  const myReservations = useSelector((state) => state.userSlice.reservations);
  const ordersList = Object.values(myOrders);
  const reservationsList = Object.values(myReservations);
  const { page } = props;
  const data = page === "trips" ? ordersList : reservationsList;
  let myCars = useSelector((state) => state.vehiclesSlice);

  const pageLabel = `No past ${page}`;
  const pageTitle = `My ${page}`;
  handleOutletChange(page);
  console.log("loading", loading);
  useEffect(() => {
    fetchMyData();
    if (page !== "trips") {
    }
  }, []);

  const fetchMyData = () => {
    dispatch(fetchMyVehicles());
    dispatch(fetchMyReservations());
    dispatch(fetchMyOrders());
    addCarsDetailsToReservations();
  };

  const addCarsDetailsToReservations = () => {
    reservationsList.forEach((reservation) => {
      const car = myCars[reservation.car_id];
      reservation.profile_picture = car.profile_picture;
      reservation.brand = car.brand;
      reservation.model = car.model;
      reservation.type = car.type;
    });
  };

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

  if (loading) return <LoadingSpinner />;
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
          {page === "trips"
            ? ordersList.map(
                ({
                  car_brand,
                  car_id,
                  car_model,
                  car_type,
                  end_date,
                  id,
                  location,
                  owner_first_name,
                  owner_last_name,
                  owner_profile_picture,
                  start_date,
                  total_price,
                  user_id,
                  car_picture,
                }) => (
                  <SwiperSlide key={id} className="swiper-slide">
                    <MyTripsCard
                      car_id={car_id}
                      id={id}
                      car_picture={car_picture}
                      brand={car_brand}
                      model={car_model}
                      type={car_type}
                      start_date={start_date}
                      end_date={end_date}
                      location={location}
                      owner_first_name={owner_first_name}
                      owner_last_name={owner_last_name}
                      total_price={total_price}
                      user_id={user_id}
                      owner_profile_picture={owner_profile_picture}
                    />
                  </SwiperSlide>
                )
              )
            : reservationsList.map(
                ({
                  car_id,
                  costumer_first_name,
                  costumer_last_name,
                  costumer_profile_picture,
                  end_date,
                  id,
                  start_date,
                  total_price,
                  user_id,
                }) => (
                  <SwiperSlide key={id} className="swiper-slide">
                    <MyReservationsCard
                      car_id={car_id}
                      id={id}
                      start_date={start_date}
                      end_date={end_date}
                      total_price={total_price}
                      user_id={user_id}
                      costumer_first_name={costumer_first_name}
                      costumer_last_name={costumer_last_name}
                      costumer_profile_picture={costumer_profile_picture}
                    />
                  </SwiperSlide>
                )
              )}
        </Swiper>
      )}
    </>
  );
};

export default OrdersContainer;
