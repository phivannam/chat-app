const controller = {};
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

controller.validateLoginInfo = (email,password) => {
    if(!email){
        view.renderErrorMessage ('email-error-message','Please input email');
    }else if(!emailRegex.test(email)){
        
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    }else {
        view.renderErrorMessage('email-error-message', '');
    } 

    if(!password){
        view.renderErrorMessage('password-error-message', 'Please input password');
    }else{
        view.renderErrorMessage('password-error-message', '');
    }

    if(email &&password){
        // call model => to database
        model.loginUser(email, password);
    }
};

controller.validateRegisterInfo = (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
) => {

    //firstName
    if(!firstName){
        view.renderErrorMessage('firstName-error-message', 'Please input firstName');
    }else{
        view.renderErrorMessage('firstName-error-message', '');
    }

        //lastName
    if(!lastName){
        view.renderErrorMessage('lastName-error-message', 'Please input lastName');
    }else{
        view.renderErrorMessage('lastName-error-message', '');
    }

        //email
    if(!email){
        view.renderErrorMessage ('email-error-message','Please input email');
    }else if(!emailRegex.test(email)){
        
        view.renderErrorMessage('email-error-message', 'Invalid email address');
    }else {
        view.renderErrorMessage('email-error-message', '');
    } 

    //password
    if(!password){
        view.renderErrorMessage('password-error-message', 'Please input password');
    }else{
        view.renderErrorMessage('password-error-message', '');
    }

    //confirmPassword
    if(!confirmPassword){
        view.renderErrorMessage('confirmPassword-error-message', 'Please input Confirm Password');
    }else if(confirmPassword !== password){
        view.renderErrorMessage('confirmPassword-error-message', 'Confirm Password didnt match');
    }else{
        view.renderErrorMessage('confirmPassword-error-message', '');
    }

        //
    if(firstName && lastName && email && emailRegex.test(email) && password && confirmPassword === password){
        // call model => to database
        model.createNewUser (
            firstName,
            lastName,
            email,
            password,
        );
    }
};
//check database
