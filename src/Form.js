import React from 'react';

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
                        <select
                            name='Size' 
                            value={values.Size}
                            onChange={onChange}
                        >
                            <option value = 'Small'>Small</option>
                            <option value = 'Medium'>Medium</option>
                            <option value = 'Large'>Large</option>
                            <option value = 'Extra Large'>Extra Large</option>
                        </select>
                </label>

                <label>
                    <h2>Choice of Sauce</h2>
                        <div>
                            Original Red
                                <input
                                    type='checkbox'
                                    name='OriginalRed'
                                    value={values.OriginalRed}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            Garlic Ranch
                                <input
                                    type='checkbox'
                                    name='GarlicRanch'
                                    value={values.GarlicRanch}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            BBQ Sauce
                                <input
                                    type='checkbox'
                                    name='BBQ'
                                    value={values.BBQ}
                                    onChange={onChange}
                                />
                        </div>
                        <div>
                            Spinach Alfredo
                                <input
                                    type='checkbox'
                                    name='SpinachAlfredo'
                                    value={values.SpinachAlfredo}
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
                                    name='Pepperoni'
                                    value={values.Pepperoni}
                                    onChange={onChange}
                                />
                   
                            Sausage
                                <input
                                    type='checkbox'
                                    name='Sausage'
                                    value={values.Sausage}
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Canadian Bacon
                                <input
                                    type='checkbox'
                                    name='CanadianBacon'
                                    value={values.CanadianBacon}
                                    onChange={onChange}
                                />
                    
                            Spicy Italian Sausage
                                <input
                                    type='checkbox'
                                    name='SpicyItalianSausage'
                                    value={values.SpicyItalianSausage}
                                    onChange={onChange}
                                />
                    </div>
                    {/* <div>
                            Grilled Chicken
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    
                            Onions
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Green Pepper
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    
                            Diced Tomatos
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Black Olives
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    
                            Roasted Garlic
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Artichoke Hearts
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    
                            Three Cheese
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    </div>
                    <div>
                            Pineapple
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    
                            Extra Cheese
                                <input
                                    type='checkbox'
                                    name='Toppings'
                                    value='Toppings'
                                    onChange={onChange}
                                />
                    </div> */}
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
                  
                    <button name="submitbutton"disabled={disabled}>Add to your order</button>
                </label>

                
            </div>
        </form>
    )
}