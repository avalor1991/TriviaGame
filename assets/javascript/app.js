var questions = [{
    "question":"At the beginning of Superman Returns, Superman has been away for five years. Where was he?",
    "option1":"Koncrete",
    "option2":"Krypton",
    "option3":"Kangaroo",
    "option4":"Krusty Burger",
    "answer":"Krypton",
    "gif":"assets/images/superman.gif"
}, {
    "question":"In Spider-Man 3, Topher Grace plays Eddie Brock Jr. who turns into Venom. On what TV Show did Topher Grace get his big break?",
    "option1":"That '70s Show",
    "option2":"Beverly Hills 90210",
    "option3":"The Hills",
    "option4":"That '80s Show",
    "answer":"That '70s Show",
    "gif":"assets/images/venom.gif"
}, {
    "question":"Halle Berry has won an Oscar Award, but also won a Razzie Award for Worst Actress for her role as what superhero?",
    "option1":"Super Girl",
    "option2":"Storm",
    "option3":"Cat Woman",
    "option4":"Wonder Woman",
    "answer":"Cat Woman",
    "gif":"assets/images/catWoman.gif"
}, {
    "question":"Bruce Banner became The Incredible Hulk after being exposed to what type of rays?",
    "option1":"X-rays",
    "option2":"Alpha rays",
    "option3":"Gamma rays",
    "option4":"Sting rays",
    "answer":"Gamma rays",
    "gif":"assets/images/hulk.gif"
}, {
    "question":"Gwyneth Paltrow plays Tony Stark's personal assistant in Iron Man. What is her character's name?",
    "option1":"Ginger Jones",
    "option2":"Pepper Potts",
    "option3":"Cinnamon Simpson",
    "option4":"Paprika Patrick",
    "answer":"Pepper Potts",
    "gif":"assets/images/ironPotts.gif"
}, {
    "question":"What is Jessica Alba's main superpower in The Fantastic Four?",
    "option1":"She can control the weather",
    "option2":"Telekinesis",
    "option3":"Invisibility",
    "option4":"Super strength",
    "answer":"Invisibility",
    "gif":"assets/images/fantastic.gif"
}, {
    "question":"In X-Men 3: The Last Stand, Jean Grey becomes consumed by her ultra powerful alter-ego known as what?",
    "option1":"The Sparrow",
    "option2":"The Eagle",
    "option3":"The Phoenix",
    "option4":"The Raven",
    "answer":"The Phoenix",
    "gif":"assets/images/xman.gif"
}, {
    "question":"Wolverine's claws are made out of what super strong metal?",
    "option1":"Titanium",
    "option2":"Diamond",
    "option3":"Scandium",
    "option4":"Adamantium",
    "answer":"Adamantium",
    "gif":"assets/images/wolverine.gif"
}, {
    "question":"At the end of Batman Begins, Batman finds a scorched playing card foreshadowing the presence of what legendary bad guy?",
    "option1":"The Queen of Hearts",
    "option2":"The Joker",
    "option3":"The King of Diamonds",
    "option4":"The Jack of Clubs",
    "answer":"The Joker",
    "gif":"assets/images/joker.gif"
}, {
    "question":"Jennifer Garner and Ben Affleck met and fell in love while starring together as what superheroes?",
    "option1":"Superman and Lois Lane",
    "option2":"Wonder Woman and Captain America",
    "option3":"Elektra and Daredevil",
    "option4":"Batman and Cat Woman",
    "answer":"Elektra and Daredevil",
    "gif":"assets/images/daredevil.gif"
}];
var wrong = "assets/images/trump.gif";
var counter = 30;
var intervalId;
var game;
var display;
var questionCounter = 0;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var selectedAnswer;

    function timeWrapper() {
        intervalId = setInterval(timer, 1000);
        function timer(){
            if (counter > 0) {
                counter--;
                }else if (counter === 0) {
                clearInterval(intervalId);
                timeOut();
            }
            $(".timer").html(counter);
        }
    }
   
    function startPage() {
        display = "<p class='text-center main-button-container'><a class='btn btn-warning  start-button' href='#' role='button'>Start Game</a></p>";
        $("#main").append(display);
    }

    function generateQuestions(index) {
        var q = questions[index];
        counter = 30;
        game = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>"+ counter +"</span></p><p class='text-center'>" + q.question + "</p><p class='answer'>" + q.option1 + "</p><p class='answer'>"+q.option2+"</p><p class='answer'>"+q.option3+"</p><p class='answer'>"+q.option4+"</p>";
        $("#main").html(game);
    }
    
    function wait(){
        if (questionCounter < 9){
        questionCounter++;
        generateQuestions(questionCounter);
        timeWrapper();}
        else {finalScreen();}
    }

    function win(){
        correctTally++;
        game = "<p class='text-center'>Correct! The answer is: " + questions[questionCounter].answer;
        var pic = $("<img>").attr("src",questions[questionCounter].gif);
        $("#main").html(game);
        $("#main").append(pic);
        setTimeout(wait, 3000);
    }

    function timeOut(){
        unansweredTally++
        game = "<p class='text-center'>You ran out of time!  The correct answer was: " + questions[questionCounter].answer + "</p>";
        $("#main").html(game);
        var pic = $("<img>").attr("src",questions[questionCounter].gif);
        $("#main").append(pic);
        setTimeout(wait, 3000);
    }

    function loss(){
        incorrectTally++;
        game = "<p class='text-center'>Wrong! The correct answer is: "+ questions[questionCounter].answer;
        var pic = $("<img>").attr("src",wrong);
        $("#main").html(game);
        $("#main").append(pic);
        setTimeout(wait, 3000);
    }

    function finalScreen() {
        game = "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset Movie Game</a></p>";
        $("#main").html(game);
    }

    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateQuestions(questionCounter);
        timeWrapper();
        }

$(document).ready(function() {
    startPage();
    $(".start-button").on("click", function(event){
        event.preventDefault();
        timeWrapper();
        generateQuestions(questionCounter);
    });

    $("body").on("click",".answer", function(event){
        selectedAnswer = $(this).text();
        if (selectedAnswer === questions[questionCounter].answer) {
            clearInterval(intervalId);
            win();
        }else{
            clearInterval(intervalId);
            loss();
        }
    
    });

    $("body").on("click", ".reset-button", function(event){
        resetGame();
    });
});