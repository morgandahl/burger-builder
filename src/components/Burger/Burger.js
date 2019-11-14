import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

  let extractedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
      });
    })
    .reduce((prevValue, currentValue) => {
      return prevValue.concat(currentValue);
    }, []);

    if (extractedIngredients.length === 0) {
      extractedIngredients = <p>Please start adding ingredients!</p>
    }

  console.log(extractedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {extractedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default Burger;