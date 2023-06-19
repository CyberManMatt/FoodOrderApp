/*
Component Type: Presentation
Description: Form that appears on the side of each meal item. Allows the user to increase and decrease the
quantity as well as add an item to the Cart
*/

import { Input } from "../../UI/Input"
import classes from "./MealItemForm.module.css"

export function MealItemForm(props) {
    return (
        <form className={classes.form}>
            {/* Custom Input component takes an object as props */}
            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
        </form>
    )
}