import React, { useEffect, useState } from 'react';
import requests from "../../utils/API"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import "./styles.css"

const Documentaries = () => {
    const [documentaries, setDocumentaries] = useState([])

    useEffect(() => {
        fetch(requests.fetchDocumentaries)
            .then((res) => res.json())
            .then((data) => setDocumentaries(data.results))
        }, [])

        return (
        <>
            <div>
            <h1 className="text-left text-2xl font-bold ml-20">Documentaries</h1>
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
            {documentaries.map((movie) => (
                <SwiperSlide className="h-96 w-96">
                <img
                    src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                    }`}
                    className="h-96 w-96"
                />
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
};

export default Documentaries;