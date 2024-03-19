const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");
const counterHandle=document.getElementById("counter");
const popUp=document.getElementById("popUp");
const score=document.getElementById("score");

let answered=false;
let currentCount=1;
const totalCount=5;
let goodAnswer=0;

const Questions=["Które z poniższych miast leży nad rzeką Nile?","Które z poniższych państw nie graniczy z Morzem Śródziemnym?","Jak nazywa się największe jezioro w Afryce?","Gdzie znajduje się najwyższy szczyt Ameryki Północnej?"];
const AnswersAll=[["Nairobi","Kair","Lagos",'Johannesburg'],["Włochy","Hiszpania","Grecja","Niemcy"],["Jezioro Bajkał","Jezioro Wiktorii","Jezioro Tanganika","Jezioro Michigan"],[" Kolumbia Brytyjska, Kanada","Alaska, USA","Meksyk","Gwatemala"]];
let j=0;
const answers_good=["Grenlandia","Kair","Niemcy","Jezioro Wiktorii","Alaska, USA"]

function handleButtonClick(event) {
    if (!answered) {
    const selectedButton=event.target;
    const isCorrect=checkIfCorrect(selectedButton.innerText);
    buttons.forEach(button => {
        if (button !== selectedButton) {
            button.style.backgroundColor = 'white';
        }
    });

    selectedButton.style.backgroundColor = isCorrect ? 'rgb(76, 175, 80)' : 'rgb(229, 57, 53)';
    if (selectedButton.style.backgroundColor==='rgb(229, 57, 53)')
    {
        buttons.forEach(button=>{
            if(answers_good.includes(button.innerText))
            {
            button.style.backgroundColor = 'rgb(76, 175, 80)';
            goodAnswer++;
            }
        })
    }
    answered=true;
    currentCount++;
    console.log(currentCount);
    if(currentCount<=5) nextButton.style.display='inline-block';

    if(currentCount>=6){
        score.innerHTML = "Brawo " + person +"!"+ "<br>Twój wynik to: " + (totalCount - goodAnswer) + "/" + totalCount;
        popUp.classList.add("open")
        nextButton.style.display="hide";
         

  }

}}

function checkIfCorrect(text)
{
  return answers_good.includes(text); 
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
 


nextButton.addEventListener('click',()=>{
    answered=false;
    counterHandle.textContent= currentCount +"/"+ totalCount;
    nextButton.style.display='none'
    let i=0;
        buttons.forEach(button => {
            button.style.backgroundColor = 'white';
            button.innerText=AnswersAll[j][i];
            i++;     
        })
        quizQuestion.innerText=Questions[j];
        j++;
        
    }
     
    
    
);


function requiredFunction() {
    var answer = prompt('Podaj swoje imie?');
    if (answer == "") {
      requiredFunction();
    }
    return answer;
  }
  let person;
  document.addEventListener('DOMContentLoaded', function () {
      person = requiredFunction();
  });