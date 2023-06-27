/*
Component Type: Presentation
Description: Webpage Header
*/

import headerImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import {HeaderCartButton} from "./HeaderCartButton";

export function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                {/* When the Header Cart Button gets clicked, the function binded to onDisplayCart gets executed
                    from App.js. This gets passed to the HeaderCartButton component as props. */}
                <HeaderCartButton onCLick={props.onDisplayCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={headerImage} alt="table of food"/>
            </div>
        </>
    )
}