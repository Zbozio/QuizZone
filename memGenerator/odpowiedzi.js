const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
let answered=false;
Answers1=["29%","15%","36%",'41%'];
Answers2=["","","",""];
Answers3=["","","",""];
Answers4=["","","",""];
Answers5=["","","",""];
Questions=["Ile procent polaków pali papierosy?"];


answers_good=["Klikaj mnie","Paryż","20 wiek","tak"]
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
            button.innerText=Answers1[i];
            i++;
        })
        
    }
    

);


