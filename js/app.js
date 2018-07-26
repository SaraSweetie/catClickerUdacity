const button = document.getElementById('button');
const clicks = document.querySelector('.numClicks');
let i = 0;
let catName = document.querySelector('.name');


button.addEventListener('click', function(){ 
	i ++;
	clicks.innerHTML = `${i}`;
}, false);

//catName.innerHTML = `${catNames[i]}`;

//To Do:

//define cats in an object with their image url
let catsList = [
	{ name: 'Luna', src:'https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg', clickCount:i },
	{ name: 'Jynx', src:'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', clickCount:i },
	{ name: 'Tabby', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg', clickCount:i },
	{ name: 'Smudge', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg', clickCount:i },
	{ name: 'Fat Cat', src:'https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_1280.jpg', clickCount:i }
];

//push cats names to an ul in the HTML

//<a><li class="name">Luna</li></a>

//make cat's names links to click and swap the image out
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');
const cat5 = document.getElementById('cat5');

const imageSrc = document.getElementById('catImage');


cat1.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg";
}, true);

cat2.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
}, true);

//count the number of button clicks

//make sure that the number of clicks restart when a new image is loaded
