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

const Questions=["Który naukowiec znany jest jako \"ojciec genetyki\"?","Który naukowiec odkrył strukturę podwójnej helisy DNA?","Który naukowiec był pierwszym człowiekiem, który obserwował księżyc przez teleskop?","Kto zaproponował model atomu, w którym elektrony krążą wokół jądra atomowego?"];
const AnswersAll=[["Gregor Mendel","Charles Darwin","Louis Pasteur",'Marie Curie'],["James Watson","Francis Crick","Rosalind Franklin","Linus Pauling"],["Stephen Hawking","Galileusz","Louis Pasteur","Thomas Edison"],["Isaac Newton","Niels Bohr","Max Planck","Stephen Hawking"]];
let j=0;
const answers_good=["Albert Einstein","Gregor Mendel","Francis Crick","Galileusz","Niels Bohr"]

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
        score.textContent= "Twój wynik to: " +(totalCount-goodAnswer) +"/"+ totalCount;
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


