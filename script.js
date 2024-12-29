const questions=[
    {
        question: "What is the size of an int data type in Java?",
        answer: [
            { text: "8 bytes", correct: false },
            { text: "4 bytes", correct: true },
            { text: "2 bytes", correct: false },
            { text: "1 byte", correct: false },
        ],
    },
    {
        question: "Which keyword is used to define a class in Java?",
        answer: [
            { text: "function", correct: false },
            { text: "class", correct: true },
            { text: "method", correct: false },
            { text: "struct", correct: false },
        ],
    },
    {
        question: "Which method is the entry point of a Java program?",
        answer: [
            { text: "run()", correct: false },
            { text: "start()", correct: false },
            { text: "main()", correct: true },
            { text: "execute()", correct: false },
        ],
    },
    {
        question: "Which of the following is NOT a valid access modifier in Java?",
        answer: [
            { text: "public", correct: false },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "internal", correct: true },
        ],
    },
    {
        question: "What is the purpose of the 'this' keyword in Java?",
        answer: [
            { text: "To refer to the current object", correct: true },
            { text: "To refer to the parent class", correct: false },
            { text: "To import packages", correct: false },
            { text: "To define a constant", correct: false },
        ],
    },
    {
        question: "Which of the following is NOT a primitive data type in Java?",
        answer: [
            { text: "char", correct: false },
            { text: "float", correct: false },
            { text: "string", correct: true },
            { text: "boolean", correct: false },
        ],
    },
    {
        question: "Which is largest animal in the wrold?",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Girsffe",correct:false},
        ]
    },
    {
        question: "Which is smallest country in the wrold?",
        answer:[
            {text:"Vanican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false},
        ]
    },
    {
        question: "Which is largest desert in the wrold?",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Shara",correct:false},
            {text:"Antartica",correct:true},
        ]
    },
    {
        question: "Which is the smallest continent in the wrold?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function StartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML=" Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
});


StartQuiz();