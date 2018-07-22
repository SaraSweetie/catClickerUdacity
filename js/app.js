const button = document.getElementById('button');
const clickCount = document.querySelector('.numClicks');
let i = 0;

button.addEventListener('click', function(){ 
	//alert('buttons has been clicked');
	i ++;
	clickCount.innerHTML = `${i}`;
	//console.log(clickCount);
}, false);