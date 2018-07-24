const button = document.getElementById('button');
const clickCount = document.querySelector('.numClicks');
let i = 0;
let catName = document.querySelector('.name');

const catNames = ['Luna', 'Jynx', 'Tabby', 'Smudge', 'Fat Cat'];

button.addEventListener('click', function(){ 
	i ++;
	clickCount.innerHTML = `${i}`;
}, false);

catName.innerHTML = `${catNames[i]}`;

//To Do:

//define cats in an object with their image url

//push cats names to an ul in the HTML
//make cat's names links to click and swap the image out


//count the number of button clicks

//make sure that the number of clicks restart when a new image is loaded
