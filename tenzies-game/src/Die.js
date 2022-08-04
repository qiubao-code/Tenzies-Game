import React from "react";

export default function Die(props){
    const styles= {
        backgroundColor:props.isheld?"#59E391":"wheat"
    }

    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}