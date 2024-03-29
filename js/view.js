const view = {};
 view.setActiveScreen = (screenName) => {
    const app = document.getElementById('app');
    switch(screenName){
        case 'loginPage':
        if(app){
            app.innerHTML = components.loginPage;
        }


        //lissten submit
        const loginForm = document.getElementById('login-form');
        if(loginForm){
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
    
                const email = loginForm.email.value;
                const password = loginForm.password.value;
    
                controller.validateLoginInfo(email,password);
            });
        }
        

        //listen click
        const registerLink = document.getElementById('register-link');
        if(registerLink){
            registerLink.addEventListener('click', (event) =>{
                view.setActiveScreen('registerPage');
            });
        }
        break;
        case 'registerPage':
                if(app){
                    app.innerHTML = components.registerPage;
                }

                // Listen link click
        const loginLink = document.getElementById('login-link');
        if(loginLink){
            loginLink.addEventListener('click', (event) => {
                view.setActiveScreen('loginPage');
            });
        }
                // Listen form submit
        const registerForm = document.getElementById('register-form');
        if(registerForm){
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault();

                controller.validateRegisterInfo(
                    registerForm.firstName.value,
                    registerForm.lastName.value,
                    registerForm.email.value,
                    registerForm.password.value,
                    registerForm.confirmPassword.value,
                )
            });
        }
        break;
        case 'chatPage':
            if(app){
                app.innerHTML = components.registerPage;
            }
            const welcomEle = document.getElementById('welcome');
            if(welcomEle){
                welcomEle.innerText = 'welcome back ${model.loginUser.email}'
            }

            
        break;
     }
 };

 view.renderErrorMessage = (elementId, errorMessage) => {
     const element = document.getElementById(elementId);
     if(element){
         element.innerText = errorMessage;
     }
 };

 view.clearRegisteInfo = () =>{
     const redisterForm = document.getElementById('register-form');
     if(redisterForm){
        redisterForm.firstName.value = '';
        redisterForm.lastName.value = '';
        redisterForm.email.value = '';
        redisterForm.password.value = '';
        redisterForm.confirmPassword.value = '';
     }
 }

 