import React from 'react';
import './App.css'

export default function PizzaForm(props) {

    //create props

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    //prevent default
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    //onChange for state changes, valueToUse for checked boxes
    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    //return statement here
    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className='form-info'>
                <p>This is your pizza form! Build your own pizza below.</p>
            </div>

            <div className='form-inputs'>
                <div>
                    <label> Who is this pizza for? &nbsp;
                        <input
                            id='name-input'
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                </div>

                <div className='size-dropdown'>
                    <label> What size? &nbsp;
                        <select 
                            id='size-dropdown'
                            value={values.size}
                            onChange={onChange}
                            name='size'>
                                <option value=''> Select a size! </option>
                                <option value='tiny'>a tiny pizza!</option>
                                <option value='small'>a small pizza!</option>
                                <option value='big'>a big pizza!</option>
                                <option value='bigger'>a bigger pizza!</option>
                                <option value='biggest'>the biggest pizza!</option>
                        </select>
                    </label>
                </div>

                <div className='toppings-section'>
                    <h4>What toppings?</h4>
                    <label> Cheese? &nbsp;
                        <input
                            id='name-input'
                            checked={values.topping1}
                            onChange={onChange}
                            type='checkbox'
                            name='topping1'
                        />
                    </label>

                    <label> Olives? &nbsp;
                        <input
                            checked={values.topping2}
                            onChange={onChange}
                            type='checkbox'
                            name='topping2'
                        />
                    </label>

                    <label> Pepperoni? &nbsp;
                        <input
                            checked={values.topping3}
                            onChange={onChange}
                            type='checkbox'
                            name='topping3'
                        />
                    </label>

                    <label> Pineapple? &nbsp;
                        <input
                            checked={values.topping4}
                            onChange={onChange}
                            type='checkbox'
                            name='topping4'
                        />
                    </label>

                </div>

                <div>
                    <label> Do you have any special instructions for our staff?
                        <input
                            id='special-text'
                            value={values.special}
                            onChange={onChange}
                            type='text'
                            name='special'
                        />
                    </label>
                </div>
            
            {/* END OF FORM INPUTS */}
            </div>


            <div>
                <button id='order-button' disabled={disabled}>
                    Add to Order
                </button>
            </div>

            <div className='errors'>
                {/* DO I NEED ONE FOR EACH TOPPING? ITS NOT REQUIRED */}
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.topping1}</div>
                <div>{errors.topping2}</div>
                <div>{errors.topping3}</div>
                <div>{errors.topping4}</div>
                <div>{errors.special}</div>
            </div>

        </form>






            // FUNCTION ENDS BELOW HERE
    )
}



//ADD YOUR PIZZA FORM HERE

// inputs for 
// name
// size
// topping1
// topping2
// topping3
// topping4
// special instructions
// add to order button