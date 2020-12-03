import React from 'react'
import style from "./recipe.module.css"

function Recipe({ingredients,title,calories,image}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p><span className={style.calories}>Calories: </span>{calories}</p>
            <img className={style.image} src={image} alt=""/>

        </div>
    )
}

export default Recipe
