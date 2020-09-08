import React from 'react'
import '../css/Items.css'


function Items({id, name, price, qty, changeQty}) {

    // This will add 1 to the old quantity.
    const addQty = () => {
        changeQty(id, qty + 1);
    }

    // This will subtract 1 from the old quantity
    const minusQty = () => {
        if(qty > 0) {
            changeQty(id, qty - 1);
        }
    }

    return (
        <div className="Items">
            <h1>Item: {name}</h1>
            <h2>Price: {price}</h2>
            <h2>
                <button className="btn" onClick={minusQty}>-</button> 
                Quantity: {qty}
                <button className="btn" onClick={addQty}>+</button>
            </h2>  
            <h1>Total: ${price * qty}</h1>  
            <hr/>        
        </div>
    )
}

export default Items
