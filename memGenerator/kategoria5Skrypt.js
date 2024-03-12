const buttons = document.querySelectorAll('.quizButton');
const nextButton=document.getElementById("nextButton");
const quizQuestion=document.getElementById("quizQuestion");
const counterHandle=document.getElementById("counter");

let answered=false;
let currentCount=2;
const totalCount=5;

const Questions=["Kto zagrał główną rolę w filmie \"Leon zawodowiec\"?","Która z poniższych postaci została zagrana przez Heatha Ledgera w \"Mrocznym Rycerzu\"?","Który film jest adaptacją książki Stephena Kinga o grupie dzieci walczących z istotą zwaną \"To\"?","Który reżyser jest odpowiedzialny za film \"Interstellar\"?"];
const AnswersAll=[["Bruce Willis","Al Pacino","Jean Reno",'Keanu Reeves'],["Joker","Batman","Harvey Dent","Ra's al Ghul"],["\"Straszny dom\"","\"The Green Mile\"","\"To\"","\"Martwa strefa\""],["15 milionów","23 miliony","19 milionów","38 milionów"]];
let j=0;
const answers_good=["Forrest Gump","Jean Reno","Joker","\"To\"","Christopher Nolan"]

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


