import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import { BiBarChartAlt,BiCircleThreeQuarter } from "react-icons/bi";
import styled from "styled-components";
 
const ItemStyle=styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 170px;
    background: white;
    margin-top: 20px;
    border-radius: 20px;
    height: 110px;
`
const DifficultyContainerStyle=styled.div`
    display: flex;
    justify-content: space-around;
`
const DifficultyItemStyle=styled.div`
    background: #FA7070;
    width: 60px;
    height: 254px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`
const RecipeInfo=({name,time,servings,calories,image,difficulty})=>{
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
                <DifficultyContainerStyle>
                    <DifficultyItemStyle>{difficulty}</DifficultyItemStyle>
                </DifficultyContainerStyle>
            </DifficultyDivStyle>
        </ItemStyle>
    )
}
export default RecipeInfo