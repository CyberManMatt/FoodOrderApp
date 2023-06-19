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
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={headerImage} alt="table of food"/>
            </div>
        </>
    )
}