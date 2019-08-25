const components = {};

components.welcomePage = `
    <div>Welcome Minx Chats</div>
`;

components.loginPage = `
<div id="login-screen">
    <div id="login-form-container">
        <h2 class="logo">Mindx Chats</h2>
        <form action="" id="login-form">
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Email address"/><br>
                <div class="error" id="email-error-message"></div>
            </div>

            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password"/><br>
                <div class="error" id="password-error-message"></div>
            </div>

            <div class="button-group">
                <span id="register-link">Dont have an account? Register</span><br>
                <input type="submit" value="Log In">
            </div>
        </form>
    </div>
</div>
`;

components.registerPage = `
<div id="register-screen">
        <div id="register-form-container">
        <h2 class="logo">Mindx Chats</h2>
        <form class="register-form" action="" id="register-form">
    
            <div class="name-group" id="name-group">
                <div class="input-wrapper">
                    <input type="text" name="firstName" placeholder="FirstName"/><br>
                    <div class="error" id="firstName-error-message"></div>
                </div>

                <div class="input-wrapper">
                    <input type="text" name="lastName" placeholder="LastName"/><br>
                    <div class="error" id="lastName-error-message"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Email address"/><br>
                <div class="error" id="email-error-message"></div>
            </div>

            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password"/><br>
                <div class="error" id="password-error-message"></div>
            </div>
            
            <div class="input-wrapper">
                <input type="password" name="confirmPassword" placeholder="ConfirmPassword"/><br>
                <div class="error" id="confirmPassword-error-message"></div>
            </div>
        

            <div class="button-group">
                <span id="login-link">Already have an account? Log In</span><br>
                <input type="submit" value="register" />
            </div>
    </form>
</div>
`;

components.chatPage = `
    <div id=welcome>Login success</div>
`;