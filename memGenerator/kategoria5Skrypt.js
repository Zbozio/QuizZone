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

const Questions=["Kto zagrał główną rolę w filmie \"Leon zawodowiec\"?","Która z poniższych postaci została zagrana przez Heatha Ledgera w \"Mrocznym Rycerzu\"?","Który film jest adaptacją książki Stephena Kinga o grupie dzieci walczących z istotą zwaną \"To\"?","Który reżyser jest odpowiedzialny za film \"Interstellar\"?"];
const AnswersAll=[["Bruce Willis","Al Pacino","Jean Reno",'Keanu Reeves'],["Joker","Batman","Harvey Dent","Ra's al Ghul"],["\"Straszny dom\"","\"The Green Mile\"","\"To\"","\"Martwa strefa\""],["Tim Burton","Quentin Tarantino","Christopher Nolan","Stanley Kubrick"]];
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


