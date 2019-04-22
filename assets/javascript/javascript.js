const questionList = [
    {Question:"As far as has ever been reported, no-one has ever seen an ostrich bury its head in the sand?", Answer: "True"},
    {Question:"Approximately one quarter of human bones are in the feet?", Answer: "True"},
    {Question:"Popeye’s nephews were called Peepeye, Poopeye, Pipeye and Pupeye?",Answer: "True"},
    {Question:"In ancient Rome, a special room called a vomitorium was available for diners to purge food in during meals?",Answer: "False"},
    {Question:"The average person will shed 10 pounds of skin during their lifetime?",Answer: "False"},
    {Question:"Sneezes regularly exceed 100 m.p.h.?",Answer: "True"},
    {Question:"A slug’s blood is green?",Answer: "True"},
    {Question:"The Great Wall Of China is visible from the moon?",Answer: "False"},
    {Question:"Virtually all Las Vegas gambling casinos ensure that they have no clocks.",Answer: "True"},
    {Question:"The total surface area of two human lungs have a surface area of approximately 70 square metres.",Answer: "True"},
];


let currentQuestion = "";
let currentAnswer = "";
let alreadyGene = [];
let isGameStart = false;
let score = 0;
const MaxQuestion = questionList.length;
let numQuestion = 0;
function QuestionGenerator(){
    let ind = Math.floor(Math.random()*questionList.length );
    while(alreadyGene.includes(ind)){
        ind = Math.floor(Math.random()*questionList.length );
    }
    alreadyGene.push(ind);
    console.log("ind = "+ ind);
    return questionList[ind];
}


$(document).ready(function(){
    //alert("document ready");
    document.onkeyup = function(event){
        console.log(event.key);
        isGameStart = true;
        console.log("game started!");

        if(isGameStart){
            let questionObj = QuestionGenerator();
            currentQuestion = questionObj.Question;
            currentAnswer = questionObj.Answer;
            $(".question").text(currentQuestion);
            numQuestion++;
        }
    };

    $(".btnTrue").on("click", function(){
        if(currentAnswer === "True"){
            score++;
            $(".grade").text(score);
        }
        if(numQuestion === MaxQuestion){
            alert("Game over!");
        }else{
            //generated next question
            let questionObj = QuestionGenerator();
            currentQuestion = questionObj.Question;
            currentAnswer = questionObj.Answer;
            $(".question").text(currentQuestion);
            numQuestion++;
        }
    })

    $(".btnFalse").on("click", function(){
        if(currentAnswer === "False"){
            score++;
            $(".grade").text(score);
        }

        if(numQuestion === MaxQuestion){
            alert("Game over!");
        }else{
            //generated next question
            let questionObj = QuestionGenerator();
            currentQuestion = questionObj.Question;
            currentAnswer = questionObj.Answer;
            $(".question").text(currentQuestion);
            numQuestion++;
        }
    })

    
    
    console.log("test passed");
    

});







 