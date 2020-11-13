import React from 'react';
import QuantityPicker from './QuantityPicker';

export default function Form(props){
    const {values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const correctValue = type === 'checkbox' ? checked : value;
        change(name, correctValue);
    };

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Build Your Own Pizza</h2>
                <div className='errors'>
                    <div>{errors.Size}</div>
                    <div>{errors.Sauce}</div>
                    <div>{errors.Toppings}</div>
                    <div>{errors.Substitute}</div>
                    <div>{errors.SpecialInstructions}</div>
                    <div>{errors.Quantity}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <label>
                    Name
                        <input
                            type='text'
                            name='Name'
                            onChange={onChange}
                            value={values.Name}
                        />
                </label>
                <label>
                    Choice of Size
                        <select>
                            <option value = '1'>Small</option>
                            <option value = '2'>Medium</option>
                            <option value = '3'>Large</option>
                            <option value = '4'>Extra Large</option>
                        </select>
                </label>

                <label>
                    <h2>Choice of Sauce</h2>
                        <div>
                            Original Red
                                <input
                                    type='checkbox'
                                    name='Sauce'
                                    value='Sauce'
                                    checked={values.Sauce}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            Garlic Ranch
                                <input
                                    type='checkbox'
                                    name='Sauce'
                                    value='Sauce'
                                    checked={values.Sauce}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            BBQ Sauce
                                <input
                                    type='checkbox'
                                    name='Sauce'
                                    value='Sauce'
                                    checked={values.Sauce}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            Spinach Alfredo
                                <input
                                    type='checkbox'
                                    name='Sauce'
                                    value='Sauce'
                                    checked={values.Sauce}
                                    onChange={onChange}
                                />
                        </div>

                </label>

                <label>
                    <h2>Add Toppings</h2>
                    <div>
                            Pepperoni
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                   
                            Sausage
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Canadian Bacon
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Spicy Italian Sausage
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Grilled Chicken
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Onions
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Green Pepper
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Diced Tomatos
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Black Olives
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Roasted Garlic
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Artichoke Hearts
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Three Cheese
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Pineapple
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    
                            Extra Cheese
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    checked={values.Toppings}
                                    onChange={onChange}
                                />
                    </div>
                </label>

                <label>
                    Choice of Substitute
                        <div>
                        <input
                            type='checkbox'
                            name='Substitute'
                            value='Substitute'
                            checked={values.Substitute}
                            onChange={onChange}
                        />
                        'Gluten Free Crust (+$100)'
                        </div>
                </label>

                <label>
                    Special Instructions
                        <input
                            type='text'
                            name='SpecialInstructions'
                            onChange={onChange}
                            value={values.SpecialInstructions}
                        />
                </label>

                <label>
                    <QuantityPicker min={0} max={4} />
                    <button disabled={disabled}>Add to your order</button>
                </label>

                
            </div>
        </form>
    )
}