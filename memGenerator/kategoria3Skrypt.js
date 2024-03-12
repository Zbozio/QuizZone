const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");
const counterHandle=document.getElementById("counter");

let answered=false;
let currentCount=2;
const totalCount=5;

const Questions=["Które z poniższych miast leży nad rzeką Nile?","Które z poniższych państw nie graniczy z Morzem Śródziemnym?","Jak nazywa się największe jezioro w Afryce?","Gdzie znajduje się najwyższy szczyt Ameryki Północnej?"];
const AnswersAll=[["Nairobi%","Kair","Lagos",'Johannesburg'],["Włochy","Hiszpania","Grecja","Niemcy"],["Jezioro Bajkał","Jezioro Wiktorii","Jezioro Tanganika","Jezioro Michigan"],[" Kolumbia Brytyjska, Kanada","Alaska, USA","Meksyk","Gwatemala"]];
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

    selectedButton.style.backgroundColor = isCorrect ? 'green' : 'red';
    if (selectedButton.style.backgroundColor==='red')
    {
        buttons.forEach(button=>{
            if(answers_good.includes(button.innerText))
            button.style.backgroundColor = 'green';
            
        })
    }
    answered=true;
    nextButton.style.display='inline-block';

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
        currentCount++;
    }
     
    
    
);


