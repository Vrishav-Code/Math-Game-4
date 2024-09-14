
function login() {
var player1 = document.getElementById("pl1").value;
var player2 = document.getElementById("pl2").value;

if (player1 === "" || player2 === "") {
    alert("Please enter names for both players.");
    return;
}

localStorage.setItem("Player 1",player1)
localStorage.setItem("Player 2",player2)
window.location.href = "game.html"
}