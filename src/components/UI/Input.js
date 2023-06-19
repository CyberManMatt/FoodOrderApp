/*
Component Type: Presentation
Description: Custom HTML input component
*/

import classes from "./Input.module.css"

export function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* The spread operator below ensures all key/value pairs are added as properties */}
            <input {...props.input} />
        </div>
    )
}