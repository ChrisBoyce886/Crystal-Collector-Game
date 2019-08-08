$(document).ready(function startGame() {
 
  //Set global variables
  var currentNum = 0;
  var randomNum = 0;
  var btnNum1 = 0;
  var btnNum2 = 0;
  var btnNum3 = 0;
  var btnNum4 = 0;
  var wins = 0;
  var losses = 0;

  //Grab the random numbers to begin the game
  resetNum()

  //Create function to assign random numbers to point target and to each crystal
  function resetNum() {
    //Randomly generate a number from 19 to 120 to match, then post to DOM
    randomNum = Math.floor(Math.random() * 101 + 19);
    $("#randomNum").text(randomNum);
    console.log("randomNum: " + randomNum);

    //Randomly assign a number between 1 -12 to each crystal
    btnNum1 = Math.floor(Math.random() * 12) + 1;
    console.log("btn1: " + btnNum1);

    btnNum2 = Math.floor(Math.random() * 12) + 1;
    console.log("btn2: " + btnNum2);

    btnNum3 = Math.floor(Math.random() * 12) + 1;
    console.log("btn3: " + btnNum3);

    btnNum4 = Math.floor(Math.random() * 12) + 1;
    console.log("btn4: " + btnNum4);
  }

  //When each crystal is clicked, add that corresponding number to the currentNum and display o DOM
  $("#pinkBtn").on("click", function() {
    currentNum += btnNum1;
    console.log("Pink is set to: " + currentNum); //DELETE FOR ACTUAL GAME PLAY
    $("#currentNum").text(currentNum);
    winloss();
  });

  $("#greenBtn").on("click", function() {
    currentNum += btnNum2;
    console.log("Green is set to: " + currentNum);  //DELETE FOR ACTUAL GAME PLAY
    $("#currentNum").text(currentNum);
    winloss();
  });

  $("#whiteBtn").on("click", function() {
    currentNum += btnNum3;
    console.log("White is set to: " + currentNum);  //DELETE FOR ACTUAL GAME PLAY
    $("#currentNum").text(currentNum);
    winloss();
  });

  $("#turqBtn").on("click", function() {
    currentNum += btnNum4;
    console.log("Turq is set to: " + currentNum);  //DELETE FOR ACTUAL GAME PLAY
    $("#currentNum").text(currentNum);
    winloss();
  });

  //Create function where if the user busts, losses++ -- OR -- if the user matches number, win ++
  function winloss() {
    if (currentNum === randomNum) {
      alert("Great Job! You got exactly " + randomNum + " !");
      wins++;
      console.log("Wins: " + wins);
      $("#wins").text("Wins: " + wins);
      alert("The Numbers have been reset, Let's play again!");
      currentNum = 0;
      $("#currentNum").text(currentNum);
      resetNum();
    } 
    
    else if (currentNum > randomNum) {
      alert("Oh no! You went too high above the target number!");
      losses++;
      $("#losses").text("Losses: " + losses);
      console.log("Losses: " + losses);
      alert("The Numbers have been reset, try again!");
      currentNum = 0;
      $("#currentNum").text(currentNum);
      resetNum();
    }

  //End of winloss Function
  }

//End of startGame function
});

//Start the game again
startGame();
