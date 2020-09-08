import React, { useState } from 'react';
import Items from './Items';
import '../css/ShoppingCart.css'

function ShoppingCart(props) {

    // Change the name instead of being props
    const initialItems = props.items;

    // Set state items as the props from parent
    const [items, setItems] = useState(initialItems);

    // State for submit
    const [submitted, setSubmit] = useState(false);

    // This method is being sent to the child in order to change the state. It takes the id param in order to figure if the id is === the states id. If it is then the new qty is changed
    const changeQty = (id, qty) => {
        const newItem = items.map((item) => {
            if(item.id === id) {
                return {...item, qty: qty}; 
            }
            return item;
        });
        // This will set the variable to the new state
        setItems(newItem);
    };

    const checkSubmit = () => {
        setSubmit(!submitted);
    }

    const total = items.reduce((total, item) => total + item.price * item.qty,0).toFixed(2);

    window.title = total;

    return (
        <div className="ShoppingCart">
            {submitted ? 
            <div>
                <h1>Thank you for your order. Your total is <span style={{color: 'green'}}>${total}</span></h1>
                <div className="order"> 
                    <h1 className="orderSummary">Your order summary</h1>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className="itemSummaryParent">
                                <ul className="itemSummary">
                                    <li>Product: {item.name}</li>
                                    <li>Price: ${item.price}</li>
                                    <li>Quantity: {item.qty}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            : <>
            <h1 className="title">Shopping Cart</h1>
            {items.map((item) => 
            <Items key={item.id} {...item} changeQty={changeQty}/>
            )}
            <h1>Total: ${total}</h1>
            <button className="submitBtn" onClick={checkSubmit}>Submit</button>
            </>
            }
        </div>
    )
}

export default ShoppingCart
