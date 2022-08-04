import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ReservationCard from "../MyReservationsCard/MyReservationsCard"
import VehicleCard from "../vehicle-card/VehicleCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import dummyData from "../../pages/MyProfile/dummyData"
import { useOutletContext } from "react-router-dom"
import { fetchMyVehicles } from "../../app/actions/fetch-vehicles-actions"

import "swiper/css"
import "swiper/css/pagination"
import "./OrdersContainer.css"
import {
  fetchMyReservations,
  fetchMyOrders,
} from "../../app/actions/user-actions"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner"

const OrdersContainer = (props, navBar) => {
  const handleOutletChange = useOutletContext()
  const loading = useSelector((state) => state.viewSlice.isLoading)
  const dispatch = useDispatch()
  const myOrders = useSelector((state) => state.userSlice.orders)
  const myReservations = useSelector((state) => state.userSlice.reservations)
  const ordersList = Object.values(myOrders)
  const reservationsList = Object.values(myReservations)
  const { page } = props
  const data = page === "trips" ? ordersList : reservationsList
  const pageLabel = `No past ${page}`
  const pageTitle = `My ${page}`
  // handleOutletChange(page)
  console.log("loading", loading)
  useEffect(() => {
    fetchMyData()
  }, [])

  const fetchMyData = () => {
    dispatch(fetchMyVehicles())
    dispatch(fetchMyReservations())
    dispatch(fetchMyOrders())
  }

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
    )
  }

  if (loading) return <LoadingSpinner />
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
          {data.map(
            ({
              car_id,
              id,
              profile_picture,
              brand,
              model,
              type,
              location,
              start_date,
              end_date,
              total_price,
              user_id,
              owner_first_name,
              owner_last_name,
              owner_profile_picture,
            }) => {
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <ReservationCard
                    car_id={car_id}
                    id={id}
                    profile_picture={profile_picture}
                    brand={brand}
                    model={model}
                    type={type}
                    location={location}
                    start_date={start_date}
                    end_date={end_date}
                    total_price={total_price}
                    user_id={user_id}
                    owner_first_name={owner_first_name}
                    owner_last_name={owner_last_name}
                    owner_profile_picture={owner_profile_picture}
                  ></ReservationCard>
                </SwiperSlide>
              )
            }
          )}
        </Swiper>
      )}
    </>
  )
}

export default OrdersContainer
