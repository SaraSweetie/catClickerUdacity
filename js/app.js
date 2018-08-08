const clickCountButton = document.getElementById('clickCountButton');
const clicks = document.querySelector('.numClicks');

/* ======= Model (data) ======= */
var model = {
	currentCat: " ",
	catsList: [
		{ catName: 'Luna', src:'https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg',
			alt:'alternative image 1 text', attribute:'source of image 1', clickCount:0 },
		{ catName: 'Jynx', src:'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
			alt:'alternative image 2 text', attribute:'source of image 2', clickCount:0 },
		{ catName: 'Tabby', src:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
			alt:'alternative image 3 text', attribute:'source of image 3', clickCount:0 },
		{ catName: 'Smudge', src:'https://cdn.pixabay.com/photo/2018/04/27/08/59/maine-coon-3354072_960_720.jpg',
			alt:'alternative image 4 text', attribute:'source of image 4', clickCount:0 },
		{ catName: 'Fat Cat', src:'https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_1280.jpg',
			alt:'alternative image 5 text', attribute:'source of image 5', clickCount:0 }
	]
};

/* ======= Octopus ??? ======= */

// add event listenter to clickCountButton
// go through each array and see [ .find() .filter()] if current images matches any catsList src
// when an object matches return that object's data here

//another method incrememnt clicks, and push data back to array/object
var octopus = {
	initView: function(){
		model.currentCat = model.catsList[0];
		//should set view to first cat in array
		console.log(model.currentCat);
	},
	getCurrentCat: function(){
		return model.currentCat;
	},
	clickCount : function(imageSource){
		clickCountButton.addEventListener('click', function(){ 
			if (model.catsList.find(imageSource).src === this.src){
				this.clickCount ++;
				clicks.innerHTML = `${this.clickCount}`; // this would be view
				console.log(this.clickCount);
			}
		});
	}
};

octopus.initView();
octopus.clickCount();

/* ======= View (image buttons) ======= */
var initView = {
	catButtons: document.getElementById('catButtons'),
	displayName: document.querySelector('.displayName'),
	currentCat: octopus.getCurrentCat(),
	init: function () {
		//get current cat data from octopus and display it in the view
		//this.clickCount = currentCat.clickCount;
		//this.src = currentCat.src;
		displayName.innerHTML = `${currentCat.catName}`;
	},
	render: function(){
		//build buttons with catsList data from model... (talking to model not good??)
		for (let cat in model.catsList) {
			let j = 0;
			//console.log(cat); //gets the array 0-4
		    catButtons.innerHTML += `<button id=cat${j+1}>${model.catsList[cat].catName}</button>`;
		    //console.log(model.catButtons);
		    j++;
		};
		initView.init();
	}
};

initView.render();


/* ======= View (cat images, clickCount, and cat name displayed) ======= 

// get data from octopus and add to view
// get clicks, cat name, image src, image alt text, and image attribute
const cat1 = document.getElementById('cat1');
const imageSrc = document.getElementById('catImage');

cat1.addEventListener('click', function(){ 
	imageSrc.src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_1280.jpg";
	clicks.innerHTML = `${catsList[0].clickCount}`;
	displayName.innerHTML = `${catsList[0].catName}`;
}, true);
*/