var getpages = document.getElementsByClassName('page');
var getdots = document.getElementsByClassName("dot");
var getform = document.getElementById("form");
var getprevbtn = document.getElementById("prevbtn");
var getnextbtn = document.getElementById("nextbtn");
const getrstcontainer = document.getElementById("result-container");
var datas = [];
var objkeys = ["email","password","firstname","lastname","dob","phone","adddress"];


var curridx = 0;

showpage(curridx);


function showpage(num){
 // console.log(num);
 getpages[num].style.display = "block";

 num === 0 ? getprevbtn.style.display="none" : getprevbtn.style.display ="block";

 num === (getpages.length-1)  ? getnextbtn.textContent = "Submit" : getnextbtn.textContent = "Next";  // a nout sone number ko yu lite dar

 dotindicator(num);



}

function dotindicator(num){
// console.log(num);

 for(var x=0;x<getdots.length;x++){
 	getdots[x].classList.remove("active");  // dot twe a kone lone mar win twar lot pyan pyoke dar par
 }

 // getdots[num].classList.add('active');
 getdots[num].className += " active";

}



function gonow(num){
	// console.log(num);
       
   // console.log(curridx);

 //  getpages[curridx].style.display = "none";

 // curridx = curridx + num;
 // // console.log(curridx);

	// if(curridx >= getpages.length){
	// 	getform.submit();
	// }

	// showpage(curridx);

   // console.log(formvalidation());

    //  if(num === 1 && formvalidation()){                 // 1st method
    //  getpages[curridx].style.display = "none";

    //  curridx = curridx + num; 
    // // console.log(curridx);

    // if(curridx >= getpages.length){
    //  getform.submit();
    // }
    //  showpage(curridx);
    // }

    // if(!formvalidation()){    // 2nd method
    //   return false;
    // }

    // if(num === 1 && !formvalidation()){    // 3 rd method    // function 1 ku mar return 1 khar bal pyan lot ya dal
    //     return false;
    // }

    if(num === 1 && !formvalidation()){  // 4 method
        return false;
    }

    getpages[curridx].style.display = "none";

     curridx = curridx + num; 
    // console.log(curridx);

    if(curridx >= getpages.length){
    // getform.submit();


    getform.style.display = "none";
    getrstcontainer.style.display = "block";

    result(datas);

     return false;        // error lay par nay lot stop khine lite dar
    };

   // console.log("hello mello mello hello")
     showpage(curridx);



 }

 function* genfun(){
    var index = 0;

    while(index < objkeys.length){
       yield index++;
    }
 }

 // console.log(genfun().next().value);

   let gen = genfun();

  // console.log(gen.next().value);
  // console.log(gen.next().value);
  // console.log(gen.next().value);



function formvalidation(){
 
    var valid = true;
    
    var getcurrinput = getpages[curridx].getElementsByTagName('input');
   // console.log(getcurrinput);
   //console.log(getcurrinput[0].value);

   for(var x=0; x<getcurrinput.length; x++){
    // console.log(getcurrinput[x].value);

    if(getcurrinput[x].value === ''){
        getcurrinput[x].classList.add("invalid");
        valid = false;
    }else{
      //  console.log('x value id = ' , x);
     // console.log(objkeys[x]);
     // console.log(getcurrinput[x].value);

        // var obj = {
        //    key : getcurrinput[x].value
        // }

       // console.log('gen value is = ',gen.next().value);

       // Method 1
         
        //  const keys = objkeys[gen.next().value];
        // // console.log(keys);

        // const values = getcurrinput[x].value;
        // const obj = {
        //     // keys:values  // error
        //     [keys]:values     // [] is used fot to know key
        // }


        // Method 2

        // const keys = objkeys[gen.next().value];

        // const values = getcurrinput[x].value;
        // var obj = {};
        // obj[keys] = values;

         
           // datas.push(obj);  <= need for method 1 and method 2


        // Method 3

        const keys = objkeys[gen.next().value];
        const values = getcurrinput[x].value;
        datas.push({[keys]:values})

     
    }
   }

   if(valid){
    getdots[curridx].className += " done";
   }

    return valid;
}


function result(data){
  //  console.log(data);

  getrstcontainer.innerHTML = `
          <ul>
              <li>Name : ${data[2].firstname} ${data[3].lastname}</li>
              <li>Email : ${data[0].email}</li>
              <li>Date of Birth : ${data[4].dob}</li>
              <li>Phone Number : ${data[5].phone}</li>
              <li>Address : ${data[6].adddress}</li>
          </ul>

          <button type="submit" class="submit-btn" onclick="submitbtn">Apply Now</button>
  `;
}


function submitbtn(){
    getform.submit();
}