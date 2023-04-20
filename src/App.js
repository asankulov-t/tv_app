import './App.css';
import React, {useEffect, useState} from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slider from "react-slick";
import 'swiper/css';
import {Autoplay, EffectCoverflow, EffectFade, EffectFlip, AnimationEffect, Pagination, EffectCreative} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const App = () => {
    //"https://image.tmdb.org/t/p/w500"
    // "https://api.themoviedb.org/3/movie/now_playing?api_key=f5a9497cc4b806e5898ca24b00f5cf33&language=ru&page=3"
    let [movies,setMovies]=useState();
    const url ="https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data"
  ;
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const res = await data.json();
        setMovies(res)
        console.log(res);
    };

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const AutoplaySlider = withAutoplay(AwesomeSlider);


    // const slider = (
    //     <AutoplaySlider
    //         infinite={true}
    //         buttons={false}
    //         play={true}
    //         cancelOnInteraction={false} // should stop playing on user interaction
    //         interval={5000}
    //         bullets={false}
    //     >
    //         {movies&&movies.map((item)=>{
    //             return <div>
    //                 <div data-src={item.poster}></div>
    //                 <h4>{item.name}</h4>
    //             </div>
    //
    //         })}
    //     </AutoplaySlider>
    // );
    //https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data
    //"https://image.tmdb.org/t/p/w500"
    return (
        <div className="App">
            {/*{slider}*/}
            <Swiper spaceBetween={15}
                    effect={"Creative"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay,EffectCreative]}
                    className="mySwiper">
                {movies&&movies.map((i,t)=>{
                    return <SwiperSlide key={t}><div>
                        <img src={i.poster} alt=""/>
                        <h3>{i.name}</h3>
                        <p>{i.description}</p>
                    </div></SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};




export default App;
