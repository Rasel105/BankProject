document.getElementById("login-submit").addEventListener("click", function() {
    // get user userEmail
    const userEmail = document.getElementById("user-email");
    const userEmailAddress = userEmail.value;
    //    get user password
    const userPassword = document.getElementById("user-password");
    const userPasswordGet = userPassword.value;

    if (userEmailAddress == "abc@gmail.com" && userPasswordGet == "secret") {
        window.location.href = "banking.html";
    } else {
        alert("Email or Password is incorrect");
    }
});