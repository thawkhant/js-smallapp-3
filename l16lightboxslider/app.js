var getimgs = document.querySelectorAll(".img");
// console.log(getimgs);  // Nodelist   // looping pat lot ya dal

var getmodal = document.querySelector(".modal");
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
// console.log(getviews[0]);
// console.log(getviews) // HTML collections   // looping pat lot ma ya bu

var getprevbtn = document.querySelector(".prev");
var getnextbtn= document.querySelector(".next");
var getcounter = document.querySelector(".counter");
var getcaption = document.querySelector(".caption");
var getnoactives = document.getElementsByClassName("noactive");
// console.log(getnoactives) HTML collection

var curidx = 1;

for(var i=0; i < getimgs.length; i++){
	// console.log(getimgs[i]);

	// getimgs[i].addEventListener("click",showmodal)   // sayar gyi style ha

	getimgs[i].addEventListener("click",function(e){
	 showmodal();

		// console.log(e.target.alt);
		// console.log(this.alt);
                                           // remove space
        const findids = this.alt.split('').filter(rmspace => rmspace.trim() != "");
       // console.log(findids)

       // console.log(findids[findids.length-1]);  // last array ko lo chin lot

        curidx =Number(findids[findids.length-1]);
		// console.log(curidx);
		// console.log(typeof curidx);

		slideshow(curidx);
	})
}

function showmodal(){
	getmodal.style.display = "block";
}

// getbtnclose.addEventListener("click",function(){ 
// 	getmodal.style.display = "none"
// })

getbtnclose.onclick = function(){
	getmodal.style.display = "none"
};

document.addEventListener('click',function(e){
	// console.log(e.target)

	if(e.target === getmodal){
     getmodal.style.display = 'none';
	}
});

function currentview(num){
	slideshow(num);
};

getnextbtn.addEventListener('click',function(){
	// console.log("I am next button");

	slideshow(curidx += 1)
});

getprevbtn.addEventListener("click",function(){
	// console.log("I am previous button");

	slideshow(curidx -= 1)
})


// slideshow(curidx);   // to start with 1  // it change to upper section for dynamic sir

function slideshow(num){
// console.log(num);
   
   var x;

  for(x=0; x<getviews.length;x++){
        getviews[x].style.display= "none"
  };

  for(x=0; x<getnoactives.length;x++){
   // getnoactives[x].classList.remove("active");
   getnoactives[x].className = getnoactives[x].className.replace(" active","");   // don't forget to remove space
  }

  if(num > getviews.length){
  	num = 1;
  	curidx = 1;
  }

  if(num < 1){
  	num = getviews.length;   // restrict loke pot de param ko call lite dar
  	curidx = getviews.length;
  }

  // console.log("This is currendidx = " , curidx);
  // console.log("This is num = " , num);


  getcounter.textContent = `${num} / ${getviews.length}`;
          // 1 - 1 0  index number 0 so first pic will show
  getviews[num-1].style.display = "block";
  getnoactives[num-1].className += " active";  // take care of space
  getcaption.innerText = getnoactives[num-1].alt;
}


