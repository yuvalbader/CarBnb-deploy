import React, { useEffect } from "react"

import { useDispatch } from "react-redux"
import "./style.css"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import ListApiService from "../../services/list-api-service"
import { vehicleModelsWithPhotos } from "./dummyData"
import { fetchVehicles } from "../../app/actions/fetch-vehicles-actions"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import RatingOfCar from "../../components/Rating/Index"
import { useNavigate } from "react-router-dom"
const Testimonials = () => {
  const navigate = useNavigate()

  const onClick = (id) => {
    navigate(`/car/${id}`, {
      state: { vehicle: vehicleModelsWithPhotos.find((v) => v.id === id) },
    })
  }
  return (
    <section id="section">
      <h1>Find your drive</h1>
      <h5>Explore the world's largest car sharing marketplace</h5>

      <Swiper
        className="containerr testimonials__containerr"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        pagination={{ clickable: true }}
      >
        {vehicleModelsWithPhotos.map(({ id, brand, photos, ratingOfCar }) => {
          return (
            <SwiperSlide key={id} className="testemonials">
              <Card
                onClick={() => onClick(id)}
                className="card-brand"
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={photos[0]}
                    alt={brand}
                  />
                  <RatingOfCar rating={ratingOfCar} />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {brand}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
export default Testimonials
