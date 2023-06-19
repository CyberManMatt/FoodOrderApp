/*
Component Type: Logic
Description: Singular meal item that that the DUMMY_DATA gets passed into in AvailableMeals.js
*/

import classes from "./MealItem.module.css"
import { MealItemForm } from "./MealItemForm"

export function MealItem(props) {
    // Initialize price to display in the JSX output
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}