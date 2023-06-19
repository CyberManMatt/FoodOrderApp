/*
Component Type: Logic
Description: Displays a list of available meals. Data is static.
*/

import { Card } from "../UI/Card";
import classes from "./AvailableMeals.module.css"
import { MealItem } from "./MealItem/MealItem";

// Dummy data of meals to display
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

export function AvailableMeals() {
    // Initialize list of meals by using the .map() method to return a list of JSX
    const meals = DUMMY_MEALS.map(m => <MealItem id={m.id} key={m.id} name={m.name} desc={m.description} price={m.price} />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </section>
    )
}