import * as yup from 'yup';

export default yup.object().shape({
    Name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters long"),
    
    
    OriginalRed: yup
        .boolean(),
    GarlicRanch: yup
        .boolean(),
    BBQ: yup
        .boolean(),
    SpinachAlfredo: yup
        .boolean(),
    Pepperoni: yup
        .boolean(),
    Sausage: yup
        .boolean(),
    CanadianBacon: yup
        .boolean(),
    SpicyItalianSausage: yup
        .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    // SpinachAlfredo: yup
    //     .boolean(),
    Size: yup
        .string(),

    Toppings: yup 
        .boolean(),
    Substitute:yup
        .boolean(),

    SpecialInstructions: yup
        .string()
        .required("Add Special Instructions")

    // Toppings: yup
    //     .boolean()
    //     .required("Must have at least 4 toppings")
    //     .min(4, "Must have at least 4 toppings")
})