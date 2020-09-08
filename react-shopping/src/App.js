import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';

const items  = [
  {id: 1, name: 'Chips', price: 1.25, qty: 1},
  {id: 2, name: 'Cheese', price: 3.00, qty: 2},
  {id: 3, name: 'Beef', price: 9.00, qty: 3},
]

function App() {  
  return (
    <div className="App">
      <ShoppingCart items={items}/>
    </div>
  );
}

export default App;
