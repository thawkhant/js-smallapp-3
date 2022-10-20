const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettextani = document.querySelector(".textani")

// console.log(languages);
// console.log(languages[0]);   
//console.log(languages[1]);
//console.log(languages[2]);     

// console.log(languages.indexOf("Reactjs"));
// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf("Reactjs")]);
// console.log(colors[languages.indexOf("Vuejs")]);


// Generator Function

function* genfun(){
 yield 1;
 yield 2;
 yield 3;
}

const getgen = genfun();

// console.log(getgen.next().value);  //1
// console.log(getgen.next().value);  //2
// console.log(getgen.next().value);  //3 
// console.log(getgen.next().value);  //underfined

 // console.log(getgen.next()); // {value :1, done: false}
 // console.log(getgen.next().value); // 2
 // console.log(getgen.next().value); // 3
 // console.log(getgen.next().value); // undefined

    // return 0 - 3
    function* generator(){
      var idx =0;

      while(true){

      	yield idx++;

      	if(idx > 3){
             idx = 0;
      	}
      }

    }

   // const testnumbaer = generator();
    // console.log(testnumbaer.next());   // {value: 0, done: false}
    // console.log(testnumbaer.next().value);    // 0
    // console.log(testnumbaer.next().value);   // 1
    // console.log(testnumbaer.next().value);   // 2
    // console.log(testnumbaer.next().value);   // 3

    // console.log(testnumbaer.next().value);  0
    // console.log(testnumbaer.next().value);  1 
    // console.log(testnumbaer.next().value);  2
    // console.log(testnumbaer.next().value);  3

    // console.log(languages[testnumbaer.next().value]);
    // console.log(languages[testnumbaer.next().value])
    // console.log(languages[testnumbaer.next().value])
    // console.log(languages[testnumbaer.next().value])

    
    function showwords(word){
       
       let x = 0;

     // console.log(word)

     gettextani.innerHTML = "";  // html phint ka Nodejs ko delete lite dar
     gettextani.classList.add(colors[languages.indexOf(word)])

    //  gettextani.innerHTML = word;
   // gettextani.innerHTML += word[0];     // we use += cuzz a shay ka sar lone ko pyan paw say chin lot
   // gettextani.innerHTML += word[1];

  let showintval = setInterval(function(){
   	   // gettextani.innerHTML = word[0];
   	   // gettextani.innerHTML += word[1];

   	   if(x >= word.length){
               clearInterval(showintval);
               deletewords();
   	   }else{
         
         gettextani.innerHTML += word[x];       
  
         x++;
   	   }
   },500)
    }

    function deletewords(){
      let getword = gettextani.innerHTML;
      // console.log(getword);
       

       let getlastidx = getword.length - 1;  // a nout sone a khan yae index number ko yu dar
      // console.log(getlastidx);

      // 5
      // 4
      // 3
      // 2
      // 1
      // 0

    let delinterval =  setInterval(function(){
            
            if(getlastidx >= 0){        // -1 ma index number kone mar 
              // gettextani.innerHTML ="";  // a kone pyint twar dar
                                         // copy lit dar
                 gettextani.innerHTML = gettextani.innerHTML.substring(0,gettextani.innerHTML.length -1);
                getlastidx--;
            }else{

               gettextani.classList.remove(colors[languages.indexOf(getword)]);
              showwords(languages[gen.next().value])
              clearInterval(delinterval);
            }


      },500);


    }

    let gen = generator();
    showwords(languages[gen.next().value]);





    let gettextlights = document.querySelectorAll(".text-light");
    // console.log(gettextlights)
       
       gettextlights.forEach(function(gettxtlight){
          // console.log(gettxtlight);

          let arrtexts = gettxtlight.textContent.split("");
          // console.log(arrtexts);

          gettxtlight.textContent = "";

          arrtexts.forEach(function(arrtext,idx){
            // console.log(arrtext);

            let newem = document.createElement('em');
            newem.textContent = arrtext;
            newem.style.animationDelay = `${idx * .05}s`

            gettxtlight.append(newem);
          })
       })








//----------------------------------------------------------------

// function abc(){
// 	return 1;
// 	return 2;
// 	return 3;
// 	return 4;
// }

// const getabc = abc();
// console.log(getabc);

