/*
Component Type: Logic
Description: Cart modal that appears when the user clicks the Cart button in the header. Cart contents is
dynamic.
*/

import classes from "./Cart.module.css"
import {Modal} from "../UI/Modal";

export function Cart(props) {

    // Initialize cart items content
    const cartItems = <ul className={classes["cart-items"]}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(i => <li>{i.name}</li>)}</ul>

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}