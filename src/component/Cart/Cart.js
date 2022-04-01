import React from 'react';
import TShirt from '../TShirt/TShirt';
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional rendering options
    //1. element variable
    //2. ternary operator condition ? true : false
    //3. && operator  (shorthand)
    //4. ||
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
            {cart.length === 0 || <p className='orange'>Yay you are buying!!</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke gift diba ?</p>
            </div>
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;