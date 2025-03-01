import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import { BiBarChartAlt,BiCircleThreeQuarter } from "react-icons/bi";
import styled from "styled-components";

const ItemStyle=styled.li`
    list-style: none;
`
const ImgStyle=styled.img`
    width: 300px;
    height: 300px;
    border-radius: 40px;
`
const DivStyle=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    background: white;
    height: 38px;
    width: 310px;
`
const DifficultyDivStyle=styled.div`
    height: 71px;
    width: 161px;
    background: white;
`
const RecipeInfo=({name,time,servings,calories,difficulty,image})=>{
    return(
        <ItemStyle>
            <ImgStyle src={image} />
            <h2>{name}</h2>
            <DivStyle>
                <GiAlarmClock/> {time} min
                <BiCircleThreeQuarter/> {servings} servings
                <BiBarChartAlt/> {calories} calories
            </DivStyle>
            <DifficultyDivStyle>
                <h2>Difficulty</h2>
                <div>
                    <div>Easy</div>
                    <div>Medium</div>
                    <div>Hard</div>
                </div>
            </DifficultyDivStyle>
        </ItemStyle>
    )
}
export default RecipeInfo