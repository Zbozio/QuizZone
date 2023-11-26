const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
let answered=false;

answers=["Klikaj mnie","Paryż","20 wiek"]
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
            if(answers.includes(button.innerText))
            button.style.backgroundColor = 'green';
            
        })
    }
    answered=true;
    nextButton.style.display='inline-block';

}}

function checkIfCorrect(text)
{
  return answers.includes(text); 
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
}); 


nextButton.addEventListener('click',()=>{
    answered=false;
}

);


