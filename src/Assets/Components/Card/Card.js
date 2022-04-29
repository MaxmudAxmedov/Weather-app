
// js file import
import Weather from "../Weather/Weather";

// scss file import
import "./card.scss";

function Card () {
    return(
        <div className="card">
            <Weather/>
        </div>
    )
}

export default Card;