//--------Reset-Function--------//
document.getElementById("RESETbtn").innerHTML="Restart"
RESETbtn.addEventListener("click",relad)

function relad(){
 window.location.reload();}

// -----Randomely set a Player to start-------and-------dice------//
var defaultstart=Math.floor(Math.random()*2+1); 
if(defaultstart==2){
    var defaulthead=document.getElementById("Playerstarts")
    defaulthead.innerHTML="Player 1 To Play";
}
else{
var defaulthead=document.getElementById("Playerstarts")
defaulthead.innerHTML="Player 2 To Play";
}
//------------------switch-players-------------------//
var hplayer1=document.getElementById("Pbtn1").addEventListener("click",switchPlayer1)
var hplayer2=document.getElementById("Pbtn2").addEventListener("click",switchPlayer2)

    function switchPlayer1() {
        var currentplayer=1;
        var playinfo=document.getElementById("Playerstarts")    
        currentplayer = currentplayer === 1 ? 2 : 1;
        playinfo.innerHTML = "Player " + currentplayer + " To Play";
 
    }
    function switchPlayer2() {
        var currentplayer=2;
        var playinfo=document.getElementById("Playerstarts")    
        currentplayer = currentplayer === 1 ? 2 : 1;
        playinfo.innerHTML = "Player " + currentplayer + " To Play";
    }

//--------------default-Dice-------------//
var defaultdice=document.createElement("div")
defaultdice.setAttribute("class","bi bi-dice-1-fill")
var def=document.getElementById("Dice")
def.appendChild(defaultdice)

//----------------------------roll dice and player points--------------------------------//
var player1=document.getElementById("Pbtn1").addEventListener("click",points1)
var dis1=document.createElement("div")
var total1=0;
var total2=0;
var player2=document.getElementById("Pbtn2").addEventListener("click",points2)
var dis2=document.createElement("div")

    function points1(){  
        var dicerand=Math.floor(Math.random()*6+1);
        defaultdice.remove()
        dis2.remove()
        dis1.setAttribute("class","bi bi-dice-"+dicerand+"-fill")
        var merg=document.getElementById("Dice")
        merg.appendChild(dis1)
        total1 +=dicerand;
        setInterval(()=>{document.getElementById("point1").innerHTML=total1},1500);
        checkWinner();
    }
    function points2(){  
        var dicerand=Math.floor(Math.random()*6+1);
        defaultdice.remove()
        dis1.remove()
        dis2.setAttribute("class","bi bi-dice-"+dicerand+"-fill")
        var merg=document.getElementById("Dice")
        merg.appendChild(dis2)
        total2 +=dicerand;
        setInterval(()=>{document.getElementById("point2").innerHTML=total2},1500);
        checkWinner();
    }
//--------checkingwinner--------// 
    function checkWinner() {
        if (total1>=30){
        document.getElementById("Playerstarts").innerHTML="Winner is Player 1";
        Playerstarts.style.backgroundColor="red"
        Playerstarts.style.color="white"
        document.getElementById("Pbtn1").id="pbtn1";
        document.getElementById("Pbtn2").id="pbtn2";
        }
        if (total2>=30){
        document.getElementById("Playerstarts").innerHTML="Winner is Player 2";
        Playerstarts.style.backgroundColor="red"
        Playerstarts.style.color="white"
        document.getElementById("Pbtn1").id="pbtn1";
        document.getElementById("Pbtn2").id="pbtn2";
        }
    }