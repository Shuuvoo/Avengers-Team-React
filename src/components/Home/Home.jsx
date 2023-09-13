/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
// import '@sweetalert2/themes/dark/dark.scss';
import swal from 'sweetalert';

const Home = () => {

    const [allActors, setAllActors] = useState([])

    const [selectedActors, setSelectedActors] = useState([])

    const [remaining, setRemaining] = useState([])

    const [totalCost, setTotalCost] = useState([])
 
        useEffect(() => {
            fetch('./data.json')
            .then(res =>res.json())
            .then(data => setAllActors(data))
        }
        ,[])

        const handleSelectActor = (actor) =>{
            const isExit = selectedActors.find((item) => item.id === actor.id)
            let count = actor.salary
            if(isExit) {
                return alert('Already selected')
            }
            else{

                selectedActors.forEach((item) => {
                    count =  count + item.salary 
                })
                console.log(count)
                const totalRemaining = 20000 - count
                

                if(count > 30000){
                    return alert('You Have exceeded')
                }

                setTotalCost(count)
                setRemaining(totalRemaining)
                setSelectedActors([...selectedActors, actor])
            }
            
            
        }

        console.log(selectedActors)

    return (
        <div className='container'>
           <div className="home-container">
            <div className="card-container">
                <h1>Avengers Team</h1>
            {
                allActors.map(actor =>(<div key={actor.id} className="card">
                <div  className="card-img">
                    <img className='photo' src={actor.image} alt="Photo" />
                </div>
                <h2>{actor.name}</h2>
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem laborum libe necessitatibus!</small></p>
                <div className="info">
                    <p>Salary:{actor.salary} $</p>
                    <p>{actor.role}</p>
                   
                </div>
                <button onClick={() => handleSelectActor(actor)} className='cart-btn'>Select</button>
            </div>))
            }
            </div>
            <div className="cart">
               <Cart selectedActors={selectedActors}
               remaining={remaining}
               totalCost={totalCost}></Cart>
            </div>
           </div>
           
            
        </div>
    );
};

export default Home;