var player1_score = 0;
var player2_score = 0;
var question_turn = "player1";
var answer_turn = "player2";

// Retrieve player names from localStorage
var p1 = localStorage.getItem("Player 1");
var p2 = localStorage.getItem("Player 2");

// Update player names and question turn
document.getElementById("name1").textContent = p1;
document.getElementById("name2").textContent = p2;
document.getElementById("questioner").textContent = "Question Turn: " + p1;

function send() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    var input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check(" + (parseInt(number1) * parseInt(number2)) + ")'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function check(actual_answer) {
    var get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer);

    if (parseInt(get_answer) === actual_answer) {
        if (answer_turn === "player2") {
            player2_score += 1;
            document.getElementById("pl2_score").textContent = player2_score;
            answer_turn = "player1";
        } else {
            player1_score += 1;
            document.getElementById("pl1_score").textContent = player1_score;
            answer_turn = "player2";
        }
    }

    // Update question turn
    if (question_turn === "player1") {
        question_turn = "player2";
        document.getElementById("questioner").textContent = "Question Turn: " + p2;
    } else {
        question_turn = "player1";
        document.getElementById("questioner").textContent = "Question Turn: " + p1;
    }
}