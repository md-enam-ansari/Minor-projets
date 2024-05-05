let gameInput=[];
let userInput=[];
 let Started=false;
 let lvl=0;
 let hghscore=0;
 let heading1=document.querySelector("h2");
 let heading=document.querySelector("h3");
 let randomclr=["yellow","orange","red","blue"];





 function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
 }

 function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },500);
 }
 
 function levelup(){
   userInput=[];
   lvl++;
   heading.innerText=`level ${lvl}`;
  let random=Math.floor(Math.random()*4);
  let clr=randomclr[random];
  let enam=document.querySelector(`.${clr}`);
   gameInput.push(clr);
   btnflash(enam);
 }

 document.addEventListener("keypress",function(){
    if(Started==false){
      console.log("game started");
      Started=true;
    levelup();
    }
 });

 function checkvalue(idx){
  if(gameInput[idx]===userInput[idx]){
    if(gameInput.length==userInput.length){
      setTimeout( levelup,1000);
    }
  }

  else{
    heading.innerHTML=` Game Over! Your Score is ${lvl} <br> Start again!`;
    let body=document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(function(){
      body.style.backgroundColor="white";
    },200);

    if(hghscore<lvl){
      hghscore=lvl;
      heading1.innerText=`highest score : ${hghscore}`}
      reset();
    }
  }

  function click(){
    let btn=this;
    userflash(btn);

  let clr=btn.getAttribute("id");
   userInput.push(clr);
   console.log(userInput);
   checkvalue(userInput.length-1);
  }

 let btns=document.querySelectorAll(".btn");
 for(btn of btns){
 btn.addEventListener("click",click);
 }

 function reset(){
   gameInput=[];
   userInput=[];
   Started=false;
   lvl=0;
 }

 