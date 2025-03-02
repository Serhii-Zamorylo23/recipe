import React from "react"
import RecipeInfo from "./recipeInfo";
import styled from "styled-components";

const ContainerStyle=styled.div`
    display: flex;
    justify-content: space-between;
`
const Recipe = ({recipes}) => {

    return(
        <ContainerStyle>
            {
                recipes.map((recipe)=>{
                    return(
                        <RecipeInfo name={recipe.name} time={recipe.time} servings={recipe.servings} calories={recipe.calories} image={recipe.image} difficulty={recipe.difficulty}/>
                    )
                })
            }    
        </ContainerStyle>
    )
};

export default Recipe