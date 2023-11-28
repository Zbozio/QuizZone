const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");

let answered=false;

const Questions=["Ile procent polaków pali papierosy?","Co jest stolicą Polski?","Co służy człowiekowi do oddychania?","Jak nazywa się dziewczyna Karola?"];
const AnswersAll=[["29%","15%","36%",'41%'],["Warszawa","Paryż","Madryt","Berlin"],["Oczy","Uszy","Nos","Palce"],["Basia","Małgosia","Marcelina :3","Ula"]];
let j=0;

answers_good=["2004","29%","Warszawa","Nos","Marcelina :3"]
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


