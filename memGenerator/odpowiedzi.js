const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
let answered=false;
Answers_1=["29%","15%","36%",'41%'];
Answers_2=[""];
Answers_3=[""];
Answers_4=[""];
Answers_5=[""];
Questions=["Ile procent polaków pali papierosy?"];


answers_good=["Klikaj mnie","Paryż","20 wiek"]
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
}

);


