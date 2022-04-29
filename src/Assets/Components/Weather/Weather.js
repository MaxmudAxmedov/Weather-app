// React hooks import;
import React, {useState, useEffect } from "react";

// js file import 
import Images from "../../../helper/Images";

// scss file import
import "./weather.scss";

function Weather () {
    // Weather app key code
    const API_KEY = '55b8dc6ca20ec509d748af1a1175b4ae';

    const [country, setCountry] = useState("Tashkent");
    const [value, setValue] = useState({
        isFetched: false,
        data: {},
        error: false,
    })
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => setValue({
            isFetched: true,
            data: data,
            error:false
        }));
    }, [country])

    function getValue (evt) {
        if(evt.code === "Enter"){
            setCountry(evt.target.value);

            evt.target.value = "";
        }   
    }
    return(
        <>
            <input className="input" type="text" onKeyUp={getValue} />
            {
                value.isFetched ?   (
                    <div className="box">
                        <h1 className="title">{value.data.name}</h1>
                        <p className="description">{value.data.weather[0].description}</p>
                        <p className="temp">{Math.ceil(value.data.main.temp)}<sup>oC</sup></p>
                        <h2 className="country">country: {value.data.sys.country}</h2>
                        <Images code={value.data.weather[0].id}/>
                    </div> 
                ) : (
                    <strong>loading...</strong>
                ) 
            }
        </>
    )
} 

export default Weather;