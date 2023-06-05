

/////___QUIZ APP___///////



let questions = [
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Mars",
        option2: "Jupiter",
        option3: "Venus",
        option4: "Mercury",
        answer: "Mars"
    }
    ,
    {
        question: "What is the chemical symbol for gold?",
        option1: "Go",
        option2: "Au",
        option3: "Gl",
        option4: "Gd",
        answer: "Au"
    },
    {
        question: "Who is Quaid-e-Azam Mohd Ali Jinnah?",
        option1: "Founder of Pakistan",
        option2: "Politican of Pakistan",
        option3: "Prince of Pakistan",
        option4: "king of Pakistan",
        answer: "Founder of Pakistan"
    },
    {
        question: "Which country is famous for the Taj Mahal?",
        option1: "India",
        option2: "China",
        option3: "Egypt",
        option4: "Italy",
        answer: "India"
    },
    {
        question: "In which year did World War II end?",
        option1: "1939",
        option2: "1943",
        option3: "1945",
        option4: "1950",
        answer: "1945"
    },
    {
        question: "Who painted the Mona Lisa?",
        option1: "Pablo Picasso",
        option2: "Leonardo da Vinci",
        option3: "Vincent van Gogh",
        option4: "Michelangelo",
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Australia?",
        option1: "Melbourne",
        option2: "Sydney",
        option3: "Canberra",
        option4: "Perth",
        answer: "Canberra"
    },
    {
        question: "What is the largest ocean in the world?",
        option1: "Pacific Ocean",
        option2: "Atlantic Ocean",
        option3: "Indian Ocean",
        option4: "Arctic Ocean",
        answer: "Pacific Ocean"
    },
    {
        question: "What is the tallest mountain in the world?",
        option1: "Mount Kilimanjaro",
        option2: "Mount Everest",
        option3: "Mount McKinley",
        option4: "Mount Fuji",
        answer: "Mount Everest"
    },
    {
        question: "Who is the founder of Microsoft?",
        option1: "Bill Gates",
        option2: "Steve Jobs",
        option3: "Mark Zuckerberg",
        option4: "Jeff Bezos",
        answer: "Bill Gates"
    }
];

let ques = document.getElementById('question');
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
let index = 0;
let score = 0;



function nextQuestion() {

    let option = document.getElementsByName('answer')
    for (var i = 0; i < option.length; i++) {

        if (option[i].checked) {
            let selected = option[i].value;
            let userAnswer = questions[index - 1][`option${selected}`]
            let correctAnswer = questions[index - 1].answer

            if (userAnswer === correctAnswer) {
                score++;
            }

        }
        option[i].checked = false;
        btn.disabled = true;

    }



    if (index >= questions.length) {
        let nextBtn = document.getElementById('btn');
        nextBtn.style.display = 'none';
        let resultBtn = document.getElementById('modalBox');
        resultBtn.style.display = 'block'
    }
    else {
        ques.innerText = questions[index].question;
        option1.innerHTML = questions[index].option1
        option2.innerHTML = questions[index].option2
        option3.innerHTML = questions[index].option3
        option4.innerHTML = questions[index].option4
        heading.innerHTML = `Question no : ${index + 1}`;
        index++
    }
    let result = ((score * 100) / 10);
    console.log(result)
    const modalDiv = document.getElementById('modalDiv');
    const resultHeading = document.getElementById('resultHeading');

    resultHeading.innerText = `Your result is :  ${result} %`;
}

nextQuestion();

//__Modal box__//

document.getElementById('modalBox').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
})

const modalDiv = document.getElementById('modalDiv');
const resultHeading = document.getElementById('resultHeading');

//__funtion to enable a btn__//

function enablebtn() {
    let btn = document.getElementById('btn');
    btn.disabled = false;
}

let min = 1
let sec = 59

let timer = document.getElementById('timer')


let interval = setInterval(function () {
    timer.innerHTML = `${min} : ${sec}`
    sec--
    if (sec < 0) {
        if (min < 1) {
            nextQuestion();
            min = 1;
            sec = 59;
        } else {
            min--
            sec = 59;
        }
    }
}, 1000)
