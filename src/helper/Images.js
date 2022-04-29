
// imgs import
import Thunderstorm from "../Assets/Img/thunderstorm.png";
import Drizzle from "../Assets/Img/drizzle.png";
import Rain from "../Assets/Img/rain.png";
import Snow from "../Assets/Img/snow.png";
import Atmosphere from "../Assets/Img/atmosphere.png";
import Clear from "../Assets/Img/sun.png";
import Clouds from "../Assets/Img/clouds.png";

import ThunderstormBg from "../Assets/Img/ImgBg/Thunderstorm-bg.jpg";
import DrizzleBg from "../Assets/Img/ImgBg/Drizzle-bg.jpg";
import RainBg from "../Assets/Img/ImgBg/Rain-bg.jpg";
import SnowBg from "../Assets/Img/ImgBg/snow-bg.jpg";
import AtmosphereBg from "../Assets/Img/ImgBg/Atmosphere-bg.jpg";
import ClearBg from "../Assets/Img/ImgBg/Clear-bg.jpg";
import CloudsBg from "../Assets/Img/ImgBg/Clouds-bg.jpg";


function Images ({code}) {
    if(code >= 200 && code <= 232){
        return(
            <>
                <img className="bg" src={ThunderstormBg}/>
                <img className="img-icon" src={Thunderstorm} alt="weather icon"/>
            </>
        )
    }
    if(code >= 300 && code <= 321){
        return(
            <>
                <img className="bg"  src={DrizzleBg} alt="" />
                <img className="img-icon" src={Drizzle} alt="weather icon"/>
            </>
        ) 
    }
    if(code >= 500 && code <= 531){
        return(
            <>
                <img className="bg"  src={RainBg}/>
                <img src={Rain} alt="weather icon"/>
            </>
        ) 
    }
    if(code >= 600 && code <= 622){
        return(
            <>
                <img className="bg"  src={SnowBg} alt="" />
                <img className="img-icon" src={Snow} alt="weather icon"/>
            </>
        ) 
    }
    if(code >= 701 && code <= 781){
        return(
            <>
                <img className="bg"  src={AtmosphereBg} alt="" />
                <img className="img-icon" src={Atmosphere} alt="weather icon"/>            
            </>
        ) 
    }
    if(code === 800){
        return(
            <>
                <img className="bg"  src={ClearBg} alt="" />
                <img className="img-icon" src={Clear} alt="weather icon"/>       
            </>
        ) 
    }
    if(code >= 801 && code <= 804){
        return(
            <>
                <img className="bg"  src={CloudsBg} alt="" />
                <img className="img-icon" src={Clouds} alt="weather icon"/>            
            </>
        ) 
    }
}
export default Images;