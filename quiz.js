const quizDB = [
    {
        question:"Q1:What is the full form of HTML?",
        a:"hyper text markdown language ",
        b:"Hey text markup language",
        c:"Hyper text markup language",
        d:"Hyper text maker language",
        ans:"ans3"
    },
    {
        question:"Q2:How many sizes of headers are available in HTML by default?",
        a:"6",
        b:"3",
        c:"7 ",
        d:"5",
        ans:"ans1"
    },
    {
        question:"Q3:What are the types of lists available in HTML?",
        a:"named , unnamed list",
        b:"ordered, unordered list",
        c:"dottet list",
        d:"none of the above",
        ans:"ans2"
    },
    {
        question:"Q4:How to create an ordered list in HTML??",
        a:"ol",
        b:"ul",
        c:"b",
        d:"uol",
        ans:"ans1"
    },
    {
        question:"Q5:Which of the following tags doesn’t require a closing tag?",
        a:"br",
        b:"hr",
        c:"both",
        d:"none of the above",
        ans:"ans3"
    },
    {
        question:"Q6: Which attribute is used to provide a unique name?",
        a:"tag",
        b:"class",
        c:"ID",
        d:"none of the above",
        ans:"ans3"
    },
    {
        question:"Q7:Properties is used to change the font of text?",
        a:" font-family",
        b:" font-size",
        c:"text-decoration",
        d:"text-align",
        ans:"ans1"
    },
    {
        question:"Q8:which of the following tag is used to render a text in italics?",
        a:"strong",
        b:"em",
        c:"B",
        d:"tilt",
        ans:"ans2"
    },
    {
        question:"Q9:What is the correct syntax to write an HTML comment?",
        a:"!--comment--",
        b:"//comment",
        c:"#comment",
        d:"*comment*",
        ans:"ans1"
    },
    {
        question:"Q10:Colors are defined in HTML using?",
        a:"  RGB",
        b:" HEX",
        c:"RGBA",
        d:"ALL",
        ans:"ans4"
    },

];

const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2  = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showScore= document.querySelector('#showScore')
const answers = document.querySelectorAll('.answer');
const cls=document.querySelector('#closebtn');

let questionCount = 0;
let score = 0;
const loadQuestion=()=>{
    const questionList = quizDB[questionCount];

    question.innerHTML=questionList.question;
    
    option1.innerHTML= questionList.a;
    option2.innerHTML= questionList.b;
    option3.innerHTML= questionList.c;
    option4.innerHTML= questionList.d;

}


var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + " sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        // alert("Time out!! :(");


        let popup = document.getElementById('popup')



        popup.classList.add('open-popup')
      
      cls.addEventListener('click',()=>{
          popup.classList.remove('open-popup')
        })
      
      
        document.getElementById('showscore1').innerHTML=   "time out." ; 
        document.getElementById('closebtn').style.display="none";
        document.getElementById('showscore1').style.color=   "red" ; 
        


        
    }
}


function Timer(){
    alert("time out")
}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;

}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false)
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    
    console.log(checkedAnswer)


if(checkedAnswer === quizDB[questionCount].ans){
    score++;
};
questionCount++;
deselectAll();
if(questionCount<quizDB.length){
    loadQuestion();
}else{

let sc = score;


// document.getElementById('showscore').classList.remove('scorearea');





let popup = document.getElementById('popup')



  popup.classList.add('open-popup')

cls.addEventListener('click',()=>{
    popup.classList.remove('open-popup')
  })


  document.getElementById('showscore1').innerHTML= `You scored ${sc}/${quizDB.length} 
  
  `

}

})