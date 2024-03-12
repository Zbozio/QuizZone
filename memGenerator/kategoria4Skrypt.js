const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");
const counterHandle=document.getElementById("counter");

let answered=false;
let currentCount=2;
const totalCount=5;

const Questions=["Który naukowiec znany jest jako \"ojciec genetyki\"?","Który naukowiec odkrył strukturę podwójnej helisy DNA?","Kto opracował teorię ewolucji przez dobór naturalny?","Który naukowiec sformułował słynne równanie E=mc^2?"];
const AnswersAll=[["Gregor Mendel","Charles Darwin","Louis Pasteur",'Marie Curie'],["James Watson","Francis Crick","Rosalind Franklin","Linus Pauling"],["Gregor Mendel","Charles Darwin","Louis Pasteur","Thomas Edison"],["Isaac Newton","Albert Einstein","Max Planck","Stephen Hawking"]];
let j=0;
const answers_good=["Albert Einstein","Gregor Mendel","Francis Crick","Charles Darwin","Albert Einstein"]

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


