class LoginPage{
    loginPageLocators ={

        userName: "//input[@name='username']",
        passWord : "//input[@name='password']",
        Login : "//button[@type='submit']",
        errorText :"p.oxd-text.oxd-text--p.oxd-alert-content-text",//Invalid credentials
    }



} export default LoginPage;