var questions = [{
    "question":"At the beginning of Superman Returns, Superman has been away for five years. Where was he?",
    "option1":"Koncrete",
    "option2":"Krypton",
    "option3":"Kangaroo",
    "option4":"Krusty Burger",
    "answer":"option2"
}, {
    "question":"In Spider-Man 3, Topher Grace plays Eddie Brock Jr. who turns into Venom. On what TV Show did Topher Grace get his big break?",
    "option1":"That '70s Show.",
    "option2":"Beverly Hills 90210.",
    "option3":"The Hills.",
    "option4":"That '80s Show.",
    "answer":"option1"
}, {
    "question":"Halle Berry has won an Oscar Award, but also won a Razzie Award for Worst Actress for her role as what superhero?",
    "option1":"Super Girl.",
    "option2":"Storm.",
    "option3":"Cat Woman.",
    "option4":"Wonder Woman.",
    "answer":"option3"
}, {
    "question":"Bruce Banner became The Incredible Hulk after being exposed to what type of rays?",
    "option1":"X-rays.",
    "option2":"Alpha rays.",
    "option3":"Gamma rays.",
    "option4":"Sting rays.",
    "answer":"3"
}, {
    "question":"Gwyneth Paltrow plays Tony Stark's personal assistant in Iron Man. What is her character's name?",
    "option1":"Ginger Jones.",
    "option2":"Pepper Potts.",
    "option3":"Cinnamon Simpson.",
    "option4":"Paprika Patrick.",
    "answer":"2"
}, {
    "question":"What is Jessica Alba's main superpower in The Fantastic Four?",
    "option1":"She can control the weather.",
    "option2":"Telekinesis.",
    "option3":"Invisibility.",
    "option4":"Super strength.",
    "answer":"3"
}, {
    "question":"In X-Men 3: The Last Stand, Jean Grey becomes consumed by her ultra powerful alter-ego known as what?",
    "option1":"The Sparrow.",
    "option2":"The Eagle.",
    "option3":"The Phoenix.",
    "option4":"The Raven.",
    "answer":"3"
}, {
    "question":"Wolverine's claws are made out of what super strong metal?",
    "option1":"Titanium.",
    "option2":"Diamond.",
    "option3":"Scandium.",
    "option4":"Adamantium.",
    "answer":"4"
}, {
    "question":"At the end of Batman Begins, Batman finds a scorched playing card foreshadowing the presence of what legendary bad guy?",
    "option1":"The Queen of Hearts.",
    "option2":"The Joker.",
    "option3":"The King of Diamonds.",
    "option4":"The Jack of Clubs.",
    "answer":"2"
}, {
    "question":"Jennifer Garner and Ben Affleck met and fell in love while starring together as what superheroes?",
    "option1":"Superman and Lois Lane.",
    "option2":"Wonder Woman and Captain America.",
    "option3":"Elektra and Daredevil.",
    "option4":"Batman and Cat Woman.",
    "answer":"3"
}];

var counter = 30;
var intervalId;
var gameHTML;
var questionCounter = 0;
var totalQuestions = questions.length;
var currentQuestion = 0;
var selectedAnswer;

$(document).ready(function() {

    function timeWrapper() {
        intervalId = setInterval(timer, 1000);
        function timer(){
            if (counter === 0) {
            clearInterval(intervalId);
            console.log("Time Up!");
            
            }
            else if (counter > 0) {
                counter--;
                }
            $("#timer").html(counter);
            console.log(counter);

        }
    }
   
    function startPage() {
        display = "<p class='text-center main-button-container'><a class='btn btn-warning  start-button' href='#' role='button'>Start Game</a></p>";
        $("#button").append(display);
    }

    function generateQuestions(index) {
        var q = questions[index];
        var quest = $("#question").text((index+1) + ". " + q.question);
        var opt1 = $("#opt1").text(q.option1);
        var opt2 = $("#opt2").text(q.option2);
        var opt3 = $("#opt3").text(q.option3);
        var opt4 = $("#opt4").text(q.option3);
    }; 
    
    function nextQuestion(){


    }
    $('.jumbotron').hide();
    startPage();
    $(".start-button").on("click", function(){
    $('.jumbotron').show();
    timeWrapper();
    $("#button").hide();
    generateQuestions(currentQuestion);
    });

    $("body").on("click", ".btn-secondary", function(event){
        selectedAnswer = $(this).text();
 
        if (selectedAnswer === questions[questionCounter].answer) {clearInterval(counter);}
        //     generateWin()) :
      
        //     clearInterval(counter),
        //     generateLoss()
    
    });
});