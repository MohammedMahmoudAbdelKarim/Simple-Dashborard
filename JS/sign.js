document.forms.mySignin.addEventListener("submit", function(e) {
        /* Stop the process to check data */
        e.preventDefault();
        /* function to check the email and password */
        function checkData() {
            var valid = true;
            var email = e.target.elements.email.value;
            var password = e.target.elements.password.value;
            var mail = document.getElementById("email");
            var pass = document.getElementById("password");
            /* function to check email */
            var regforEmail = /^\w+([\.-\/]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (regforEmail.test(email) == true) {
                console.log("true");
                valid = true;
            } else {
                console.log("false");
                mail.innerHTML = "Invalid Email";
                valid = false;
            }
            /* If the email field is empty */
            if (email.length == 0) {
                mail.innerHTML = "This Field is Reqiured";
                valid = false;
            }
            var regforPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
            if (regforPassword.test(password) == true) {
                console.log("true");
                valid = true;
            } else {
                console.log("false");
                pass.innerHTML = "Invalid Password";
                valid = false;
            }
            /* If the email field is empty */
            if (password.length == 0) {
                pass.innerHTML = "This Field is Reqiured";
                valid = false;
            }
            if (regforEmail.test(email) == false || regforPassword.test(password) == false) {
                valid = false;
            }
            if (valid == true) {
                window.location.href = "dashboard.html";
            } else {
                console.log("sorry");
            }
            document.querySelector('.checkbox').addEventListener("click", function() {
                localStorage.setItem(email, email);
                localStorage.setItem(password, password);
            })
        }
        checkData();
    })
    //checkbox
    // check if the ckeck box is ckecked function
function ckeckBox() {
    if ($("#checks").prop("checked")) {
        localStorage.setItem("Email", $("#input_email").val());
        localStorage.setItem("Password", $("#input_password").val());
    }
}
// calling the function when ckecked
$("#checks").click(function() {
    ckeckBox()
})
$("#input_email").click(function() {
    if ($("#input_email").val(localStorage.getItem("Email"))) {
        $("#input_password").val(localStorage.getItem("Password"));
    }
})