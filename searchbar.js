const usernameInputEL = document.getElementById("usernameInput");
let username;

usernameInputEL.addEventListener("keyup", function(){
    username = event.target.value.toLowerCase();
    console.log(username);

})