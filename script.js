function makebubble(){
    
let bubbly = " ";

for(let i =1; i<=154;i++){
    let rn = Math.floor(Math.random()*10);
    bubbly += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = bubbly;


}
makebubble();

var timer = 60;
function runtimer() {
    var interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        } else {
            clearInterval(interval); // Stop the timer when it reaches 0
        }
    }, 1000);
}
runtimer();
function hitnumber(){
    hitnum=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent =hitnum  ;
}



var score = 0;
function increasescore(){

    score+=1;
    document.querySelector("#scorevalue").textContent=score;
}


document.querySelector("#pbtm").addEventListener("click", function (e) {
  if (timer != 0) {
    let hitval = document.querySelector("#hit").innerText;
    if (e.target.innerText == hitval) {
      increasescore();
      hitnumber();
    }
    makebubble();
  }
});
