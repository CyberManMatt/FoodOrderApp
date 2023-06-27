import {Header} from "./components/Layout/Header";
import {Meals} from "./components/Meals/Meals";
import {Cart} from "./components/Cart/Cart";
import { useState } from "react";

function App() {
    
    // Initialize state on displaying the cart
    const [displayCart, setDisplayCart] = useState(false);

    // Initialize handler to display the cart
    const displayCartHandler = () => {
        setDisplayCart(true)
    }

    // Initialize handler to hide the cart
    const hideCartHandler = () => {
        setDisplayCart(false)
    }

    return (
        <>
            {/* If displayCart state is true, display the Cart modal */}
            {displayCart && <Cart />}
            {/* Pass onDisplayCart prop that points to the displayCartHandler function */}
            <Header onDisplayCart={displayCartHandler} />
            <main>
                <Meals/>
            </main>
        </>
    );
}

export default App;
