import React from 'react';
import TShirt from '../TShirt/TShirt';
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional rendering options
    //1. element variable
    //2. ternary operator condition ? true : false
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please add at least one items</h5>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>

            {
                cart.map(TShirt => <p>
                    {TShirt.name}
                    <button onClick={() => handleRemoveFromCart(TShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;