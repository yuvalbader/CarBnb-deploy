import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "@mui/material/Button"
import ListVahicleDialog from "../list-new-vehicle-form/ListVehicleDialog"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import VehicleCard from "../vehicle-card/VehicleCard"
import "swiper/css/pagination"
import { fetchMyVehicles } from "../../app/actions/fetch-vehicles-actions"

const MyCars = () => {
  let data = useSelector((state) => state.vehiclesSlice.myVehicles)
  const loading = useSelector((state) => state.viewSlice.isLoading)
  data = Object.values(data)
  console.log(data)
  const [isAddCarPressed, setIsAddCarPressed] = useState(false)
  const openFormHandler = () => setIsAddCarPressed(true)
  const closeFormHandler = () => setIsAddCarPressed(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMyVehicles())
  }, [])

  if (loading) return <LoadingSpinner />

  const userHadNoCars = () => {
    return (
      <div className="trips-view-container-img">
        <img
          src="https://resources.turo.com/client/v2/builds/assets/il_car_on_the_desert_@2xc6729191106bba04b948.png"
          alt=""
        />
        <div className="no-past-container">
          <p className="no-past title"> No cars to show </p>
          <label className="no-past-label"></label>
        </div>
        <div>This is where you can access information about your cars</div>
      </div>
    )
  }

  return (
    <div className="details-view-container">
      <p className="title"> My cars </p>
      {data.length === 0 && userHadNoCars()}
      {data.length !== 0 && (
        <Swiper
          style={{
            width: "100%",
            paddingBottom: "3rem",
          }}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map(
            (
              {
                brand,
                type,
                model,
                price_per_day,
                gear,
                location,
                engine,
                profile_picture,
                number_of_seats,
                user_id,
              },
              index
            ) => {
              return (
                <SwiperSlide key={index} className="swiper-slide">
                  <VehicleCard
                    page={"myCars"}
                    profile_picture={profile_picture}
                    brand={brand}
                    type={type}
                    model={model}
                    price_per_day={price_per_day}
                    gear={gear}
                    location={location}
                    engine={engine}
                    number_of_seats={number_of_seats}
                    user_id={user_id}
                  ></VehicleCard>
                </SwiperSlide>
              )
            }
          )}
        </Swiper>
      )}
      <Button variant="contained" onClick={openFormHandler}>
        Add car
      </Button>
      <ListVahicleDialog open={isAddCarPressed} onClose={closeFormHandler} />
    </div>
  )
}

export default MyCars
