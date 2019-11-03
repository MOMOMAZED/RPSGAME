
let min=1; let max=6; //max is 6 because when 5 it doesnt pick up to 5 so i incremented by 1 :)
let randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;; // First Bot
let randomNumberA = Math.floor(Math.random() * (+max - +min)) + +min;; //2nd Bot
var playerPick = 0; 
var pScore = 0;
var Bot1Score = 0;
var Bot2Score = 0;
document.getElementById("message").innerHTML = ("SCORE:  " + pScore);   
document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   



function randomCaller()
{
    console.log(randomNumber)
    console.log(randomNumberA)
    randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;;
    randomNumberA = Math.floor(Math.random() * (+max - +min)) + +min;; //2nd Bot


}
console.log(randomNumber)
console.log(randomNumberA)






function PickedR()
{
    
if (randomNumber === 3 || randomNumber === 4 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore);    
    console.log(pScore)
 
} else if (randomNumberA === 3 || randomNumberA === 4 ) {  
    
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore);    
   
  }else

  if (randomNumber === 2 || randomNumber === 5 ) {
    
    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
  
 
} if (randomNumberA === 2 || randomNumberA === 5 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);        
}else
pScore;
console.log(pScore)
  randomCaller()
}


function PickedP()
{
if (randomNumber === 1 || randomNumber === 5 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore);  
   
    console.log(pScore)
 
} else if (randomNumberA === 1 || randomNumberA === 5 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
     
      console.log(pScore)
   
  }if (randomNumber === 3 || randomNumber === 4 ) {
     

    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
   
    console.log(Bot1Score)
 
} if (randomNumberA === 3 || randomNumberA === 4 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

      console.log(Bot2Score)
}else


  pScore;
  console.log(pScore)
  randomCaller()
    

}
function PickedS()
{
if (randomNumber === 2 || randomNumber === 4 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 2 || randomNumberA === 4 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
  }if (randomNumber === 3 || randomNumber === 4 ) {
       
    Bot1Score ++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
   
    console.log(Bot1Score)
 
} if (randomNumberA === 3 || randomNumberA === 4 ) {  
     Bot2Score ++;
     document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

      console.log(Bot2Score)
}else


  pScore;
  console.log(pScore)
  randomCaller()
    

}
function PickedL()
{
if (randomNumber === 2 || randomNumber === 5 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 2 || randomNumberA === 5 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
    }if (randomNumber === 3 || randomNumber === 4 ) {
        

        Bot1Score ++;
        document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
       
        console.log(Bot1Score)
     
    } if (randomNumberA === 3 || randomNumberA === 4 ) {  
         Bot2Score ++;
         document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

          console.log(Bot2Score)
    }else
    
    
      pScore;
      console.log(pScore)
      randomCaller()
        
    
}
function PickedK()
{
if (randomNumber === 1 || randomNumber === 3 ) {

    pScore ++;
    document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
    console.log(pScore)
 
} else if (randomNumberA === 1 || randomNumberA === 3 ) {  
      pScore ++;
      document.getElementById("message").innerHTML = ("SCORE:  " + pScore); 
      console.log(pScore)
   
    }if (randomNumber === 3 || randomNumber === 4 ) {
         

        Bot1Score ++;
        document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);    
       
        console.log(Bot1Score)
     
    } if (randomNumberA === 3 || randomNumberA === 4 ) {  
         Bot2Score ++;
         document.getElementById("bot2score").innerHTML = ("CPU2:  " + Bot2Score);   

          console.log(Bot2Score)
    }else
    
    
      pScore;
      console.log(pScore)
      randomCaller()
        
}

function BOTvBOT()
{
{
  if (randomNumber === 1 && randomNumberA === 3 || 4){
  Bot1Score++;
  console.log(Bot1Score)

  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
}
 if (randomNumber === 2 && randomNumberA === 1 || 5){
    Bot1Score++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   


}
if (randomNumber === 3 && randomNumberA === 2 || 4){
  Bot1Score++;
  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);  
  
}
if (randomNumber === 4 && randomNumberA === 2 || 5){
  Bot1Score++;
  document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   
}
  if (randomNumber === 5 && randomNumberA === 1 || 3){
    Bot1Score++;
    document.getElementById("bot1score").innerHTML = ("CPU1:  " + Bot1Score);   

}else
Bot2Score++;
console.log(pScore)
  randomCaller()
}
}






