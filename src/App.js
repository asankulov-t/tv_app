import './App.css';
import React, {useEffect, useState} from "react";
import 'swiper/css';
import {Autoplay, EffectCoverflow, EffectFade, EffectFlip, AnimationEffect, Pagination, EffectCreative} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const App = () => {
    const [goFull,setGoFull]=useState(false)

    //"https://image.tmdb.org/t/p/w500"
    // "https://api.themoviedb.org/3/movie/now_playing?api_key=f5a9497cc4b806e5898ca24b00f5cf33&language=ru&page=3"
    let [movies,setMovies]=useState();
    const url ="https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data"
  ;

    const fetchPopular = async () => {
        const data = await fetch(url);
        const res = await data.json();
        setMovies(res)
        console.log(res);
        let e= await document.getElementById('fullScreen');
        e?.requestFullscreen()
    };

    useEffect(() => {
        fetchPopular();


    }, [goFull]);


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    //https://64411cb4792fe886a89eaf4b.mockapi.io/tv_data
    //"https://image.tmdb.org/t/p/w500"
    return (

        <div onClick={(e)=>{setGoFull(!goFull)}} className="App" id="fullScreen">
            <Swiper
                grabCursor={true}
                effect={"creative"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[Autoplay, EffectCreative]}
                className="mySwiper"
                    // spaceBetween={15}
                    // effect={"Fade"}

                    // loop={true}
                    // modules={[Autoplay,EffectFade]}
                    // className="mySwiper"
                >
                {movies&&movies.map((i,t)=>{
                    return <SwiperSlide key={t}><div>
                        <div className={'img_container'}><img src={i.poster} alt=""/></div>
                        <div className={'some_info'}>
                            <h3>{i.name}</h3>
                            <p><span>Описание: </span>{i.description}</p>
                            <p><span>Жанр: </span>{i.janre}</p>
                            <p className={'age'}><span >Возрастное ограничение: </span>{i.age}+</p>
                        </div>
                    </div></SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};




export default App;
