import React from "react";
import { useState, useEffect } from 'react';

const initialFormValues = {
  name: 'insert name',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  topping3: '',
  topping4: '',
  special: '',
}

const initialPizzaTickets = [];
const initialDisabled = true; //this is for our button later

const App = () => {

  //set our states
  //we need pizzas
  const [pizzaTicket, addPizzaTicket] = useState(initialPizzaTickets);
  //inital form values and form errors
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //disable our button
  const [disabled, setDisabled] = useState(initialDisabled);


  //add our helpers (axios) and event handlers

  //we need to use axios here for our .get and .post

  //validate our forms with yup here

  //change handlers

  //side effects / useEffect + schema useEffect

  //format return
  return (
    <>
      <div>
        <h1>Lambda Eats</h1>
        <p>Are you a hungry, hungry Lambda?</p>
      </div>
      <div>
        <p>This is where the pizza button goes!</p>
      </div>
      <div>
        <p>This is where you'll see pizza tickets (or other restaurants?) show up!</p>
      </div>

  {/* ADD BUTTON HERE that says "order a pizza!"*/}

    </>
  );
};
export default App;
