function addUser(){
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    localStorage.setItem("number2", number2);
    localStorage.setItem("number1", number1);
    window.location.replace("game_page.html");
}