/*
Component Type: Logic
Description: Cart button that appears on the header
*/

import {CartIcon} from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export function HeaderCartButton(props) {
    return (
        // When this button is clicked, the onClick handler passed on from Header.js is executed
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}