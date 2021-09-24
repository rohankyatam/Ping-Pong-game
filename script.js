var player1=document.getElementsByClassName("player1stick")[0];
var player2=document.getElementsByClassName("player2stick")[0];
var ball=document.getElementsByClassName("ball")[0];
ball.style.marginTop='240px'
ball.style.marginLeft='490px'

let w_pressed=false;
let s_pressed=false;
 
let vx=-3;
let vy=-3;
var lengthOfStick;
function difficultylevel1() {
   player1.style.height="100px";
   lengthOfStick=100;
}
function difficultylevel2(){
    player1.style.height="80px";
    lengthOfStick=80;
}
function difficultylevel3 () {
    player1.style.height="60px";
    lengthOfStick=60;
}


let id;
let id1;
var player1score=0;
var player2score=0;

document.addEventListener("keydown", down);
function down(event){
    if(event.keyCode=='87'){  
        w_pressed=true;
    }
    else if(event.keyCode=='83'){
        s_pressed=true;
    }

}
document.addEventListener("keyup",up);
function up(event){
    if(event.keyCode=='87'){
        w_pressed=false;
    }
    else if(event.keyCode=='83'){
        s_pressed=false;
    }
}
function funclick(){
    clearInterval(id);
    clearTimeout(id1);
    document.getElementsByClassName("playerwon")[0].innerHTML="";
    player1score=0;
    player2score=0;
    gameloop();
}
function reset(){
    ball.style.marginTop='240px'
    ball.style.marginLeft='490px'
    vx=-3;
    vy=-3;
    clearInterval(id);
    gameloop();
}
function restart(){
    clearInterval(id);
    clearTimeout(id1);
    ball.style.marginTop='240px'
    ball.style.marginLeft='490px'
    vx=-3;
    vy=-3;
    player1score=0;
    player2score=0;
    document.getElementsByClassName("player2score")[0].innerHTML=player2score;
    document.getElementsByClassName("player1score")[0].innerHTML=player1score;
}
function gameloop(){
    id1=setTimeout(()=>{
        id=setInterval(()=>{
            if(player1score==11){
                document.getElementsByClassName("playerwon")[0].innerHTML="<h1>Player 1 is champion !</h1>"
                restart();
                return;
            }
            if(player2score==11){
                document.getElementsByClassName("playerwon")[0].innerHTML="<h1>Player 2 is champion</h1>"
                restart();
                return;
            }
            if(marginLeft(ball)<-10){
                player2score++;
                document.getElementsByClassName("player2score")[0].innerHTML=player2score;
                reset();
                return;
            }
            if(marginLeft(ball)>961){
                player1score++;
                document.getElementsByClassName("player1score")[0].innerHTML=player1score;
                reset();
                return;
            }
            if(marginTop(ball)<0 || (marginTop(ball)+20)>500){
                vy= -vy;
            }
            if(w_pressed && marginTop(player1)>0){
                player1.style.marginTop=`${marginTop(player1)-2}px`
            }
            else if(s_pressed && marginTop(player1)<(500-lengthOfStick)){
                player1.style.marginTop=`${marginTop(player1)+2}px`
            }
            ball.style.marginLeft=`${marginLeft(ball)+vx}px`
            ball.style.marginTop=`${marginTop(ball)+vy}px`
            if(marginLeft(ball)<20){
                if(((marginTop(player1)-20)<marginTop(ball) && marginTop(ball)<(marginTop(player1)+lengthOfStick))){
                  vx=-vx;}
            }
            if(marginLeft(ball)>960){
                let temp=Math.floor(Math.random() * 23) + 1;
                player2.style.marginTop=`${marginTop(ball)+temp}px`
                if(marginTop(player2)<0){
                    player2.style.marginTop="0px"
                }
                if(marginTop(player2)>(500-lengthOfStick)){
                    player2.style.marginTop=`${500-(lengthOfStick)}px`
                }
                if((marginTop(ball)+20)>marginTop(player2)){
                vx=-vx;
                }
            }
            

        },5)
    },1000)
}


function marginTop(ele){    
    return Number(ele.style.marginTop.split('p')[0]);
}
function marginLeft(ele){
   return Number(ele.style.marginLeft.split('p')[0]);
}






