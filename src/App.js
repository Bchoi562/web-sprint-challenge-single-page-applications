import React, { useEffect, useState } from "react";
import {Route, Link, Switch, Router} from 'react-router-dom';
import Home from "./Home";
import Help from "./Help";
import axios from 'axios';
import schema from './Schema';
import Form from './Form';
import * as yup from 'yup';
import User from './Order';



const initialFormValues = {
  Name:"",
  Size:"",
  OriginalRed:false,
  GarlicRanch:false,
  BBQ:false,
  SpinachAlfredo:false,
  Pepperoni:false,
  Sausage:false,
  CanadianBacon:false,
  SpicyItalianSausage:false,
  Substitute:false,
  SpecialInstructions:"",
  Quantity:""
}
// const Sauce = []

const initialFormErrors = {
  Name:""
}

const initialUsers = [];
const initialDisabled = true;



const App = () => {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then((res)=>{
      setUsers([res.data,...users]);
      setFormValues(initialFormValues);
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
      debugger;
    })

  }

  const inputChange = (name,value)=>{
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value, 
    });

  }

  const formSubmit = () => {
    const newUser = {
      Name:formValues.Name.trim(),
      Size:formValues.Size.trim(),
      // OriginalRed:formValues.OriginalRed,
      // GarlicRanch:formValues.GarlicRanch,
      // BBQ:formValues.BBQ,
      // SpinachAlfredo:formValues.SpinachAlfredo,
      // Pepperoni:formValues.Pepperoni,
      // Sausage:formValues.Sausage,
      // CanadianBacon:formValues.CanadianBacon,
      // SpicyItalianSausage:formValues.SpicyItalianSausage,
      // Toppings:formValues.Toppings,
      // Substitute:formValues.Substitute,
      // SpecialInstructions:formValues.SpecialInstructions.trim(),
      // Quantity:formValues.Quantity,
    };

    postNewUser(newUser);

  };

  // useEffect(()=>{
  //   getUsers();
  // },[]);

useEffect(()=>{
  schema.isValid(formValues).then((valid)=>{
    setDisabled(!valid);
  });
}, [formValues]);


  return (
    
      <div className='App'>
        <nav>
          <h1 className='store-header'>Lambda Eats!</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>  

            <Link to="/order">Order</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/order">
          <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        
        {/* <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        /> */}

        {users.map((user)=>{
          return <User key={user.Name} details={user}/>;
        })}
      </div>
    
  );
};
export default App;
