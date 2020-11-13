import * as yup from 'yup';

export default yup.object().shape({
    Name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters long"),
    
    Sauce: yup
        .boolean()
    // Toppings: yup
    //     .boolean()
    //     .required("Must have at least 4 toppings")
    //     .min(4, "Must have at least 4 toppings")
})