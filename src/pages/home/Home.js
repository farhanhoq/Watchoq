import React from 'react';
import Action from './Action';
import Documentaries from './Documentaries';
import Horror from './Horror';
import TopRated from './TopRated';
import Trending from './Trending';
import VideoPlayer from './VideoPlayer';

const Home = () => {
    return (
        <div>
            <VideoPlayer></VideoPlayer>
            <Trending></Trending>
            <TopRated></TopRated>
            <Action></Action>
            <Horror></Horror>
            <Documentaries></Documentaries>
        </div>
    );
};

export default Home;