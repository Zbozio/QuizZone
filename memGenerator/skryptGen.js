const changeCategoryButton = document.getElementById("changeCategoryButton");
const changeTextButton = document.getElementById("changeTextButton");


const links = document.querySelectorAll('.list_option a');


const FrontPage=document.getElementById("FrontPage")
const category = ["kategoria1.html", "kategoria2.html", "kategoria3.html", "kategoria4.html", "kategoria5.html"];


changeCategoryButton.addEventListener("click", () => {
    const randomCategory = category[Math.floor(Math.random() * category.length)];
    window.location.href=randomCategory;
});

const headlines = [
    "Tekst 1",
    "Losowy tekst 2",
    "Inny tekst",
    "Jakiś tekst",
    "Tekst do wyświetlenia"
  ];
  const h1Element = document.querySelector('#FrontPage h1');
changeTextButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * headlines.length);
    h1Element.textContent = headlines[randomIndex];
});
