document.getElementById('registerform').addEventListener("submit", function(event){

    event.preventDefault();

    let usernamefield = document.getElementById('username')
    let emailfield = document.getElementById('email')
    let passwordfield = document.getElementById('password')
    let confpasswordfield = document.getElementById('confpassword')
    let malegenderfield = document.getElementById('male')
    let femalegenderfield = document.getElementById('female')
    let dobfield = document.getElementById('dob')
    let termsconditionfield = document.getElementById('termscondition')


    let username = usernamefield.value
    let email = emailfield.value
    let password = passwordfield.value
    let confpassword = confpasswordfield.value
    let male = malegenderfield.checked
    let female = femalegenderfield.checked
    let dob = dobfield.value
    let termscondition = termsconditionfield.checked

    if(username.length <= 5){
        alert('Username must consists of more than 5 letters')
        return
    }

    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('Email must be valid')
        return
    }

    if(password.length < 7){
        alert('Password must contain atleast 7 letters')
        return
    }

    if (confpassword !== password){
        alert('Confirm password must be the same as password')
        return
    }

    if(!male && !female){
        alert('Gender must be filled')
        return
    }

    if(!dob){
        alert('DOB must be filled')
        return
    }

    let dobdate = new Date(dob)
    let currentdate = new Date()

    let age = currentdate.getFullYear() - dobdate.getFullYear()

    let monthdiff = currentdate.getMonth() - dobdate.getMonth()

    if(monthdiff < 0 || (monthdiff == 0 && currentdate.getDate() < dobdate.getDate())){
        age--;
    }

    if(age < 20){
        alert('Age must be at least 20 years old')
        return
    }

    console.log(age)

    if(!termscondition){
        alert('You must agree with the terms of condition')
        return
    }

    alert("Registration Successful!")

    window.location.href = "../pages/loginpage.html"

})