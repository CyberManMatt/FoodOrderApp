/*
Component Type: Presentation
Description: Wrapper that wraps an element into a card
*/

import classes from "./Card.module.css"

export function Card(props) {
    return (
        <div className={classes.card}>{props.children}</div>
    )
}