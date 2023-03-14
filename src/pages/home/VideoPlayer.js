import React, { useEffect, useState } from 'react';
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { useQuery } from 'react-query';
import requests from '../../utils/API';
import Loader from '../shared/Loading';

const VideoPlayer = () => {


    const { data: trending = [], isLoading } = useQuery({
        queryKey: ["trending"],
        queryFn: async () => {
                const res = await fetch(requests.fetchTrending)
            const data = await res.json();
                return data.results;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }


    const movie = (trending[Math.floor(Math.random() * trending.length)]);
    console.log(trending)

    return (
        <div>
            <div className='w-2/3 mx-auto p-20'>
            <Video autoPlay loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                >
                <source src="" type="video/webm" />
                </Video>
        </div>
        </div>
    );
};

export default VideoPlayer;