const button = document.getElementById('button');
const clickCount = document.querySelector('.numClicks');
let i = 0;
let catName = document.querySelector('.name');
const cat1 = 'Luna';
let catNameTwo = document.querySelector('.nameTwo');
const cat2 = 'Jynx';
const buttonTwo = document.getElementById('buttonTwo');
const clickCountTwo = document.querySelector('.numClicksTwo');
let j = 0;

button.addEventListener('click', function(){ 
	i ++;
	clickCount.innerHTML = `${i}`;
}, false);

//project requires 2 cats now
buttonTwo.addEventListener('click', function(){ 
	j ++;
	clickCountTwo.innerHTML = `${j}`;
}, false);

catName.innerHTML = `${cat1}`;
catNameTwo.innerHTML = `${cat2}`;