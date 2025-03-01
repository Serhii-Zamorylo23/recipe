import React from "react"
import RecipeInfo from "./recipeInfo";
import styled from "styled-components";

const ContainerStyle=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Recipe = ({recipes}) => {

    return(
        <ContainerStyle>
            {
                recipes.map((recipe)=>{
                    return(
                        <RecipeInfo name={recipe.name} time={recipe.time} servings={recipe.servings} calories={recipe.calories} image={recipe.image}/>
                    )
                })
            }    
        </ContainerStyle>
    )
};

export default Recipe