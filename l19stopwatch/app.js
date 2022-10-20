// const getdisplay = document.querySelector(".display");
const getdisplay = document.querySelectorAll(".display");  // na ku lone ko yu chin lot
const getstartbtn = document.querySelector(".start");
const getpausebtn = document.querySelector(".pause");
const getresetbtn = document.querySelector(".reset");
const getdlpsec = document.getElementById("dlpsecond");
const getdplmlsec = document.getElementById("dplmilisec");
const getmodebtn = document.querySelector(".mode-btn");


// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     miliseconds = 0;

var [hours,minutes,seconds,milliseconds] = [0,0,0,0];
// console.log(minutes);   

var setinvdisplay; 

// getstartbtn.addEventListener("click",starttime);
// getpausebtn.addEventListener("click",pausetime);
// getresetbtn.addEventListener("click",resettime);

// function starttime(){
// 	// console.log("hello mello i am start time");
// 	// showdisplay();

//      clearInterval(setinvdisplay);

// 	setinvdisplay  = setInterval(showdisplay,10);
// }

// function pausetime(){
// 	// console.log("hello mello i am pause time")

// 	clearInterval(setinvdisplay);
// };

// function resettime(){
// 	// console.log("hello mello i am reset time");

// 	clearInterval(setinvdisplay);
// 	[hours,minutes,seconds,milliseconds] = [0,0,0,0];  // 0 reset kya lite dar
// 	getdisplay.innerHTML = "00 : 00 : 00 : 000";
// }

// function showdisplay(){
// 	// console.log("hello mello");

// 	milliseconds += 10;

// 	// console.log(milliseconds);

// 	if(milliseconds === 1000){
//       milliseconds = 0;

//       seconds++;

//       if(seconds === 60){
//       	seconds = 0;

//       	minutes ++;

//       	if(minutes === 60){
//       		minutes = 0;

//       		hours ++;
      		
//       	}
//       }
// 	}


// 	// console.log(milliseconds)
// 	// console.log(seconds);

// 	let h = hours < 10 ? "0"+hours : hours;
// 	let m = minutes < 10 ? "0"+minutes : minutes;
// 	let s = seconds < 10 ? "0"+seconds : seconds;
//     let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+ milliseconds : milliseconds;

//       getdisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

// 	// getdisplay.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

var idx = 0;
getdisplay[idx].style.display = "block";

getmodebtn.onclick = function(){

    reloadagain();   // mode a chain mar sint ma twar say chin lot  //reset pyan ma cha chin yin de code 2 kyoung ma lo bu
    [hours,minutes,seconds,milliseconds] = [0,0,0,0]; // mode a ku nat ta ku mar value twe pyan ma par lar aung

	getdisplay[idx].style.display = "none";
	 idx++;

	 if(idx > 1){
       idx = 0;
	 }

	 getdisplay[idx].style.display = "block";
   
     getmodebtn.innerHTML = `Mode ${idx + 1}`

	 //console.log(idx);

}

getstartbtn.onclick=function(){
	// console.log("hei");

	clearInterval(setinvdisplay);
	setinvdisplay = setInterval(showdisplay,10);
}


getpausebtn.onclick=function(){
	// console.log("hei")
	clearInterval(setinvdisplay);
}


getresetbtn.onclick=function(){
	// console.log("hei");

   reloadagain();
}

function reloadagain(){

      // mode 1 a twint naw

      if(idx ===0){
         // a pow ka har ko copy yu lr dr
	clearInterval(setinvdisplay);
	[hours,minutes,seconds,milliseconds] = [0,0,0,0];  // 0 reset kya lite dar
	getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
      }else{
      	// original 
    clearInterval(setinvdisplay);
	milliseconds = "00";
	seconds = "00";
	getdplmlsec.innerHTML = milliseconds;
	getdlpsec.innerHTML = seconds;
      }

}


function showdisplay(){
	// console.log("hello");

	if(idx === 0){
       	milliseconds += 10;

	if(milliseconds === 1000){
      milliseconds = 0;

      seconds++;

      if(seconds === 60){
      	seconds = 0;

      	minutes ++;

      	if(minutes === 60){
      		minutes = 0;

      		hours ++;
      		
      	}
      }
  }
	
	let h = hours < 10 ? "0"+hours : hours;
	let m = minutes < 10 ? "0"+minutes : minutes;
	let s = seconds < 10 ? "0"+seconds : seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+ milliseconds : milliseconds;

      getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;

	


	}else{
		milliseconds++;
	// console.log(milliseconds);

	if(milliseconds <= 9){
		getdplmlsec.innerHTML = "0" + milliseconds;
	}

	if(milliseconds > 9){
    getdplmlsec.innerHTML = milliseconds;
	}

	if(milliseconds > 99){
		milliseconds = 0;
		seconds++;
		getdplmlsec.innerHTML = "0" + 0;   // tone nay lot
		getdlpsec.innerHTML = "0" + seconds;
	}

	if(seconds > 9){
		getdlpsec.innerHTML = seconds;
	}
	}
}
