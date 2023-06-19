/*
Component Type: Presentation
Description: Displays MealsSummary text as well as the list of available meals
*/

import {MealsSummary} from "./MealsSummary";
import {AvailableMeals} from "./AvailableMeals";

export function Meals() {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    )
}