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