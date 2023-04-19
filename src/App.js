import './App.css';
import React, {useEffect, useState} from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const App = () => {
    let [movies,setMovies]=useState();
    const url =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=f5a9497cc4b806e5898ca24b00f5cf33&language=ru&page=3";
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const res = await data.json();
        setMovies(res)
        console.log(res);
    };



    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const slider = (
        <AutoplaySlider
            infinite={true}
            buttons={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
            bullets={false}
        >
            {movies&&movies.results.map((item)=>{
                return <img data-src={"https://image.tmdb.org/t/p/w500"+item.poster_path}/>
            })}
        </AutoplaySlider>
    );

    //"https://image.tmdb.org/t/p/w500"
    return (
        <div className="App">
            {slider}
        </div>
    );
};
export default App;
