let container = document.querySelector('#container');

/* a <p> with red text that says “Hey I’m red! */
let div = document.createElement('div');
div.style.color = 'red';
div.textContent = 'Hey, I\'m red!';
container.appendChild(div);