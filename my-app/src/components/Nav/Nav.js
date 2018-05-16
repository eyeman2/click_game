import React from "react";
import "./Nav.css";


const Nav = props => (

<div>
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
            Click Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse head" id="navbarText">

            <span className="navbar-text"><strong>Get Started</strong></span>
        </div>
        <div className="score" >
            <span className="navbar-text">Score: </span> {props.score} 
            <span>| </span>   
            <span>Top Score: </span>  {props.topScore}
        </div>
        {/* <span className="navbar-text"></span> */}


    </nav>    
</div>

)

export default Nav