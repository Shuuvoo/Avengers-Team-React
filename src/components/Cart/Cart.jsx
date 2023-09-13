/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'
const Cart = ({selectedActors}) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>Total Actors :{selectedActors.length}</h2>
            {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
            
        </div>
    );
};

export default Cart;