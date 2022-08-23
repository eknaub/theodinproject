const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redtext = document.createElement('p');
redtext.classList.add('red-text');
redtext.textContent = 'Hey I\'m red!';
redtext.style.color = 'red';
container.appendChild(redtext);

const blueh3 = document.createElement('h3');
blueh3.classList.add('blue-header');
blueh3.textContent = 'I\'m a blue h3!';
blueh3.style.color = 'blue';
container.appendChild(blueh3);

const outerdiv = document.createElement('div');
outerdiv.classList.add('outerdiv');
outerdiv.style.backgroundColor = 'pink';
outerdiv.style.border = '1px solid';
const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div'
outerdiv.append(header1);
const paragraph = document.createElement('p');
paragraph.textContent = 'ME TOO!';
outerdiv.append(paragraph);
container.appendChild(outerdiv);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn = document.querySelector('#btn');
btn.onclick = () => alertFunction();

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', (e) => {
  console.log(e.target.style.backgroundColor = 'blue');
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});