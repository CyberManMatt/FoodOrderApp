/*
Component Type: Presentation

*/

import headerImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"

export function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img src={headerImage} alt="table of food"/>
            </div>
        </>
    )
}