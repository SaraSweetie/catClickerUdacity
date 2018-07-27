const clickCountButton = document.getElementById('clickCountButton');
const clicks = document.querySelector('.numClicks');
let displayName = document.querySelector('.displayName');

clickCountButton.addEventListener('click', function(){ 
	if (imageSrc.src === catsList[0].src){
		catsList[0].clickCount ++;
		clicks.innerHTML = `${catsList[0].clickCount}`;
	}if (imageSrc.src === catsList[1].src){
		catsList[1].clickCount ++;
		clicks.innerHTML = `${catsList[1].clickCount}`;
	}if (imageSrc.src === catsList[2].src){
		catsList[2].clickCount ++;
		clicks.innerHTML = `${catsList[2].clickCount}`;
		console.log(imageSrc.src);
		console.log(catsList[2].src);
		console.log(catsList[2].clickCount);
	}if (imageSrc.src === catsList[3].src){
		catsList[3].clickCount ++;
		clicks.innerHTML = `${catsList[3].clickCount}`;
	}if (imageSrc.src === catsList[4].src){
		catsList[4].clickCount ++;
		clicks.innerHTML = `${catsList[4].clickCount}`;
	}
}, false);

//displayName.innerHTML = `${catsList[i]}`;

//define cats in an object with their image url
let catsList = [
	{ catName: 'Luna', src:'https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg', clickCount:0 },
	{ catName: 'Jynx', src:'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', clickCount:0 },
	{ catName: 'Tabby', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg', clickCount:0 },
	{ catName: 'Smudge', src:'https://cdn.pixabay.com/photo/2018/04/27/08/59/maine-coon-3354072_960_720.jpg', clickCount:0 },
	{ catName: 'Fat Cat', src:'https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_1280.jpg', clickCount:0 }
];

//push cats names (from catsList array) to an HTML button
const catButtons = document.getElementById('catButtons');
let j = 0;

for (let cat in catsList) {
	//console.log(cat); gets the array 0-4
    catButtons.innerHTML += `<button id=cat${j+1}>${catsList[cat].catName}</button>`;
    //console.log(catButtons);
    j++;
}
//make cat's names links to click and swap the image out
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');
const cat5 = document.getElementById('cat5');

const imageSrc = document.getElementById('catImage');

    /*let getImage = document.getElementById(cat${j+1});
    console.log(getImage);
    getImage.addEventListener('click', function(){ 
		imageSrc.src=`${catsList[cat].src}`;
	}, true);*/

cat1.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg";
	clicks.innerHTML = `${catsList[0].clickCount}`;
}, true);

cat2.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
	clicks.innerHTML = `${catsList[1].clickCount}`;
}, true);

cat3.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg";
	clicks.innerHTML = `${catsList[2].clickCount}`;
}, true);

cat4.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2018/04/27/08/59/maine-coon-3354072_960_720.jpg";
	clicks.innerHTML = `${catsList[3].clickCount}`;
}, true);

cat5.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_1280.jpg";
	clicks.innerHTML = `${catsList[4].clickCount}`;
}, true);

//count the number of button clicks

//make sure that the number of clicks restart when a new image is loaded
