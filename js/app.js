const clickCountButton = document.getElementById('clickCountButton');
const clicks = document.querySelector('.numClicks');
let i = 0;
let catName = document.querySelector('.name');



clickCountButton.addEventListener('click', function(){ 
	i ++;
	clicks.innerHTML = `${i}`;
}, false);

//catName.innerHTML = `${catNames[i]}`;

//To Do:

//define cats in an object with their image url
let catsList = [
	{ catName: 'Luna', src:'https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg', clickCount:i },
	{ catName: 'Jynx', src:'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', clickCount:i },
	{ catName: 'Tabby', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg', clickCount:i },
	{ catName: 'Smudge', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg', clickCount:i },
	{ catName: 'Fat Cat', src:'https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_1280.jpg', clickCount:i }
];

//push cats names to a buttin in the HTML

for (cats in catsList) {
	const button = document.createElement('button');
	const catButtons = document.getElementById('catButtons');
	
	for (var j = 0; j <= catsList.length; j++) {
		catButtons.innerHTML = `<button id="cat1">${catsList[j].catName}</button>`;
		console.log(catsList[j].catName);
		//button.textContent = catsList[j].name;
		//catButtons.appendChild(button); // all names from catsList are printing to console but only one button is being made
	}
	break;
}

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
