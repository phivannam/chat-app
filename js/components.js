const components = {};

components.welcomePage = `
    <div>Welcome Minx Chats</div>
`;

components.registerPage = `
    <div>Register page</div>
`;

components.loginPage = `
<div id="login-screen">
    <div id="login-form-container">
        <h2 class="logo">Mindx Chats</h2>
        <form action="" id="login-form">
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Email address"/><br>
                <div id="email-error-message"></div>
            </div>

            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password"/><br>
                <div id="password-error-message"></div>
            </div>

            <div class="button-group">
                <p>Dont have an account? Register</p><br>
                <input type="submit" value="Log In">
            </div>
        </form>
    </div>
</div>
`;

components.registerPage = `
<div id="login-screen">
    <div id="register-form-container">
        <h2>Mindx Chats</h2>
        <form action="" id="register-form">
            
            <div id="name-group">
                <div>
                    <input type="text" name="firstName" placeholder="firstName"/><br>
                    <div class="error" id="firstName-error-message"></div>
                </div>

                <div>
                    <input type="text" name="lastName" placeholder="lastName"/><br>
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
                <input type="password" name="confirmPassword" placeholder="confirmPassword"/><br>
                <div class="error" id="confirmPassword-error-message"></div>
            </div>
           

            <div class="button-group">
                <span id="login-link>Already have an account? Log In</span><br>
                <input type="submit" value="register">
            </div>
        </form>
    </div>
</div>
`;