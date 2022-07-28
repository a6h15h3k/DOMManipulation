let container = document.querySelector('#container');

/* a <p> with red text that says “Hey I’m red! */
let div = document.createElement('div');
div.style.color = 'red';
div.textContent = 'Hey, I\'m red!';
container.appendChild(div);

/* an <h3> with blue text that says “I’m a blue h3!”! */
div = document.createElement('h3');
div.style.color = 'blue';
div.textContent = 'I\'m a blue h3!';
container.appendChild(div);

/* a <div> with a black border and pink background color */
div = document.createElement('div');
div.style.border = 'thick solid black';
div.style.backgroundColor = 'pink';
container.appendChild(div);

container = div;

/* inside of it: another <h1> that says “I’m in a div” */
div = document.createElement('h1');
div.textContent = 'I\'m in a div';
container.appendChild(div);

/* a <p> that says “ME TOO!” */
div = document.createElement('p');
div.textContent = 'ME TOO!';
container.appendChild(div);