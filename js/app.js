const button = document.getElementById('button');
const clickCount = document.querySelector('.numClicks');
let i = 0;
let catName = document.querySelector('.name');
const cat1 = 'Luna';

button.addEventListener('click', function(){ 
	i ++;
	clickCount.innerHTML = `${i}`;
}, false);

catName.innerHTML = `${cat1}`;
