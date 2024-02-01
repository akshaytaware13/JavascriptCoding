let p = document.querySelector ('para');
p.style.color = "red";
p.innerHTML = paragraph;

p.addEventListener('click', function(clicked){
})

const parent = document.querySelector('.parent');

console.log(parent);
console.log(parent.day );
console.log(parent.children[1].innerHTML);

const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "red";
div.style.padding = "15px";

div.innerText = " Hi, How are you ?";
const addText = document.createTextNode("Hi, How are you ?");
div.appendChild(addText);

document.body.appendChild(div)



// Add languages using function
// First Way
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").
    appendChild(li);
}
addLanguage("Python");
addLanguage("C++");
addLanguage("Java");
addLanguage("Angular");

// Second way
function addOptimizeLang(langName) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName))
  document.querySelector('.language').appendChild(li)
}

addOptimizeLang("GoLang")

Edit1
const secondLang = document.querySelector("li:nth-child(3)")
secondLang.innerHTML = "Bootstrap"
const newELe = document.createElement('li')
newELe.textContent = "Mojo"
secondLang.replaceWith(newELe)


Edit2
const FirstLang = document.querySelector("li:first-child");
console.log(FirstLang);
FirstLang.outerHTML = "<li>React</li>";

Remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()

