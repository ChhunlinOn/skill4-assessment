const article = {
  title: "How to code",
  description: "You can learn to code. Error is nothing to be afraid of.",
};
let display = document.getElementById('article');

document.querySelector('button').addEventListener('click',show);

function show(){
  display.innerHTML = `
  <p>${article.title}</p>
  <p>${article.description}</p>
  `
}
