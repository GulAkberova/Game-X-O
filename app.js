let gameDiv=document.getElementById("game")
let player=true
let winner=null
let gameArray=Array(9).fill(null)
let winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]
const findWinner=()=>{
    winningPositions.map(position=>{
        let [a,b,c] = position
        if( gameArray[a] && gameArray[a]===gameArray[b] && gameArray[b]===gameArray[c]){
           document.getElementById("result").innerText=`${gameArray[a]} Qalibdir...`
           let boxes=document.querySelectorAll(".box")
           boxes[a].classList.add("winner")
           boxes[b].classList.add("winner")
           boxes[c].classList.add("winner")
           winner=gameArray[a]
        
        }
       

    })
    let count=gameArray.filter((a) => !a).length
    if(!winner && !count){
        document.getElementById("result").innerText=`Hec Hece !`
    }
}
for(let i=0;i<9;i++){
    let box=document.createElement("div")
    box.classList.add("box",`coordinate-${i}`)
       box.addEventListener("click",()=>{
        if(box.innerText=="" && !winner){
            box.innerText=player ? "X" : "O";
  
            let coordinate=box.classList.value.split("-")[1];
            coordinate=coordinate[coordinate.length-1]
            gameArray[coordinate]=player ? "X" : "O"
            player=!player
            findWinner()
        }
   

    })
    gameDiv.append(box)
}
document.getElementById("reset").addEventListener("click",()=>{
    [...document.querySelectorAll(".box")].map((box)=>(box.innerText=""))
    gameArray=Array(9).fill(null)
    document.getElementById("result").innerText=``;
    player=true;
    winner=null;
    [...document.querySelectorAll(".winner")].map((a)=>a.classList.remove("winner"))

})