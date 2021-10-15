import React from 'react';

function PizzaTicket(props) {
    const {details} = props;

    if (!details) {
        return <h3>Fetching your pizza order!</h3>
    }

    return (
        <div className='pizza-ticket'>
            <h3>Order #: 3456</h3>
            <p>{details.name}</p>
            <p>{details.size}</p>
            <p>{details.topping1}</p>
            <p>{details.topping2}</p>
            <p>{details.topping3}</p>
            <p>{details.topping4}</p>
            <p>{details.special}</p>
        </div>
    )
}

export default PizzaTicket;


//THIS IS WHAT YOUR PIZZA TICKET WILL LOOK LIKE AFTER ITS SUBMITTED
//THE DATA SHOULD LOOK LIKE THIS: 

//maybe add a ticket number as the first key?

// {
//     ticket: 3556, (this is not required)
//     name: 'string',
//     size: 'string',
//     topping1: 'boolean',
//     topping2: 'boolean',
//     topping3: 'boolean',
//     topping4: 'boolean',
//     special: 'string',
// }