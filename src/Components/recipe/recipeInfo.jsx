import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import { BiBarChartAlt,BiCircleThreeQuarter } from "react-icons/bi";

const RecipeInfo=({name,time,servings,calories,difficulty,image})=>{
    return(
        <li>
            <img src={image} />
            <h2>{name}</h2>
            <div>
                <GiAlarmClock/> {time} min
                <BiCircleThreeQuarter/> {servings} servings
                <BiBarChartAlt/> {calories} calories 
            </div>
            <div>
                <h2>Difficulty</h2>
                <div>
                    <div></div>
                </div>
            </div>
        </li>
    )
}