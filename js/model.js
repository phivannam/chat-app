const model = {};

model.loginUser = undefined;
model.createNewUser = (
    firstName,
    lastName,
    email,
    password,
) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) =>{
        console.log(registerResult);

        // update displayName
        registerResult.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
        });

        //emailVerified
        registerResult.user.sendEmailVerification();

        window.alert('Register success. Please check your mail !!!');
        view.clearRegisteInfo();
    })
    .catch((error) => {
        console.log(error);
        window.alert(error.code);
    })
};

model.loginUser = (
    email,
    password
) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult) => {
        // check emailVerified
        if(loginResult.user.emailVerified){
            //user success
            model.loginUser = {
                id: 'loginResult.user.id',
                displayName: 'loginResult.user.displayName',
                email: 'loginResult.user.email',
            }
            view.setActiveScreen('chatPage');
        }else{
            window.alert('This account is not activate. Please verify your email!!');
        }
    })
    .catch((error) =>{
        console.log(error);
        window.alert(error.message);
    })
};