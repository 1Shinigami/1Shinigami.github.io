var p1Button = document.querySelector("#p1")
var p2Button = document.getElementById("p2")
var resetButton = document.getElementById("reset")
var p1display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var numinput = document.querySelector("input");
var p = document.querySelector("#num");
var pDisplay = document.querySelector("#changed")
var p1score = 0;
var p2score= 0;
var gameover = false;
var winnigscore = Number (numinput.value);

p1Button.addEventListener("click", function(){
   if(!gameover){
    p1score++;
    if(p1score === winnigscore){
        p1display.classList.add("winner");
        gameover = true;
        alert ("you won!")
    }
     
    p1display.textContent = p1score;
 
   }
});

p2Button.addEventListener("click", function(){
   if(!gameover){
    p2score++;
    if(p2score === winnigscore){
        p2Display.classList.add("winner");
        gameover = true;
        alert ("you won!")
    }
    p2Display.textContent = p2score;
   }
});

resetButton.addEventListener("click", function(){
  reset();
});
function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2Display.textContent = 0;
    p1display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover = false;
}
numinput.addEventListener("change", function(){
 changed.textContent= this.value;
 winnigscore= Number (this.value);
 reset();
}) 