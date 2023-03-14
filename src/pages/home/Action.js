import React, { useEffect, useState } from 'react';
import requests from "../../utils/API"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import "./styles.css"

const Action = () => {
    const [action, setAction] = useState([])

    useEffect(() => {
        fetch(requests.fetchActionMovies)
            .then((res) => res.json())
            .then((data) => setAction(data.results))
        }, [])

        return (
          <>
            <div>
              <h1 className="text-left text-2xl font-bold ml-20">
                Action Movies
              </h1>
            </div>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {action.map((movie) => (
                <SwiperSlide className="h-96 w-96" key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      movie.backdrop_path || movie.poster_path
                    }`}
                    alt=""
                    className="h-96 w-96"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )
};

export default Action;