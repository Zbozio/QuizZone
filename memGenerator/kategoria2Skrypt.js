const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");
const counterHandle=document.getElementById("counter");

let answered=false;
let currentCount=2;
const totalCount=5;

const Questions=["Kto napisał \"Romeo i Julia\"?","Co jest głównym motywem w powieści \"Zbrodnia i kara\"?","Która powieść z poniższych nie została napisana przez Jane Austen?","Kim jest główny bohater \"Opowieści wigilijnej\" Charlesa Dickensa?"];
const AnswersAll=[["William Shakespeare","Charles Dickens","Jane Austen",'Fyodor Dostoevsky'],["Miłość","Zemsta"," Sprawiedliwość","Przestępczość i kara"],["Oczy","Uszy","Nos","Palce"],["15 milionów","23 miliony","19 milionów","38 milionów"]];
let j=0;
const answers_good=["William Shakespeare","29%","Warszawa","Nos","38 milionów"]

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


