import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import requests from '../../utils/API';

const Trending = () => {


    const [trending, setTrending] = useState([]);
    const [categories, setCategories] = useState([])
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch(requests.fetchTrending)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    useEffect(() => {
        fetch(requests.fetchTrending)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    useEffect(() => {
        fetch(requests.fetchTrending)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    useEffect(() => {
        fetch(requests.fetchTrending)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])
    useEffect(() => {
        fetch(requests.fetchTrending)
        .then(res => res.json())
        .then(data => setTrending(data.results))
    }, [])

    useEffect(() => {
        fetch("Category.json")
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])

    console.log(trending)

    return (
        <>
            <div>
            <h1 className="text-left text-4xl font-bold ml-24 text-primary">Trending Now</h1>
            </div>

            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 20,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >
            {
                trending.map(movie => 
                    <SwiperSlide className='' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} className='' />
                        <h2 className='text-center text-2xl font-bold text-secondary my-4'>{ movie.name || movie.title }</h2>
                    </SwiperSlide>
                )
            }
            </Swiper>
        </>
        )
};

export default Trending;