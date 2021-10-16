import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react';
import PizzaForm from './PizzaForm';
import PizzaTicket from './PizzaTickets';
import * as yup from 'yup';
import schema from './Schema';
import { Route, Link } from 'react-router-dom';

const initialFormValues = {
  name: '',
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

  const postNewPizza = () => {
    axios.post('https://reqres.in/api/orders')
        .then(res => {
          addPizzaTicket([res.data, ...pizzaTicket])
        }).catch(err => {
          console.error(err);
        }).finally(() => {
          setFormValues(initialFormValues);
        })
  }


  //we need to use axios here for our .get and .post

  //validate our forms with yup here

  //change handlers
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      special: formValues.special,
    }
    postNewPizza(newPizza);
  }

  //side effects / useEffect + schema useEffect

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);


  //format return
  return (
    <div className="App">
      <Route exact path="/">
        <div>
          <h2>Lambda Eats</h2>
          <p>Are you a hungry, hungry Lambda?</p>
        </div>

        <div>
          <Link id='order-pizza' to='/pizza'><button className="pizza-button">Pizza?</button></Link>
        </div>

        <div>
          <p>All Lambda students need pizza. You know you wanna.</p>
        </div>
      </Route>
      
      <Route exact path="/pizza">
        <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
        />
      </Route>
    </div>
  );
};
export default App;
