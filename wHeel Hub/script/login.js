console.log('tes')


document.getElementById('loginform').addEventListener("submit", function(event){

    event.preventDefault();

    let usernamefield = document.getElementById('username')
    let passwordfield = document.getElementById('password')


    let username = usernamefield.value
    let password = passwordfield.value

    if(username.length <= 5){
        alert('Username must consists of more than 5 letters')
        return
    }

    if(password.length < 7){
        alert('Password must contain atleast 7 letters')
        return
    }

    alert("Login Successful!")

    window.location.href = "../pages/home.html"
})