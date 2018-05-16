import React from "react";
import "./Cards.css";

const Cards = props => (

        <div className="col-md-3 show">
<img onClick={() => props.onClick()}className="imgs"   src={props.img} alt={props.name}/>

</div>
            

)

export default Cards