/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'
const Cart = ({selectedActors,remaining,totalCost}) => {
    console.log(selectedActors)
    return (
        <div className='cart-css'>
            <h2>Total Actors :{selectedActors.length}</h2>
            <h3>Total Cost : {totalCost}</h3>
            <h4>Remaining : {remaining} $</h4>
            {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
            
        </div>
    );
};

export default Cart;