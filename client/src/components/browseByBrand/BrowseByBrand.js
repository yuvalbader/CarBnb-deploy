import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import "./style.css"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { fetchVehicles } from "../../app/actions/fetch-vehicles-actions"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import LoadingSpinner from "../loadingSpinner/LoadingSpinner"
const Testimonials = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state) => state.viewSlice.isLoading)
  useEffect(() => {
    dispatch(fetchVehicles())
  }, [dispatch])

  const vehicles = useSelector((state) => state.vehiclesSlice)
  const onClick = (id) => {
    navigate(`/car/${id}`, {
      state: { vehicle: vehicles.find((v) => v.id === id) },
    })
  }
  if (loading)
    return (
      <section id="section_loader">
        <LoadingSpinner />
      </section>
    )
  return (
    <section id="section">
      <h1>Find your drive</h1>
      <h5>Explore the world's largest car sharing marketplace</h5>

      <Swiper
        className="containerr testimonials__containerr"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {Object.keys(vehicles).map((index) => {
          return (
            <SwiperSlide
              key={Object.values(vehicles)[index - 1].id}
              className="testemonials"
            >
              <Card
                onClick={() => onClick(Object.values(vehicles)[index - 1].id)}
                className="card-brand"
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Object.values(vehicles)[index - 1].profile_picture}
                    alt={Object.values(vehicles)[index - 1].brand}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {Object.values(vehicles)[index - 1].brand}
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
