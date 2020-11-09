let canvas = document.querySelector("#theCanvas");
let context = canvas.getContext('2d');

context.font = "40pt Calibri";
context.fillStyle = "blue";

const model = {
    squares : [['','',''],['','',''],['','','']],
    next : 'X'
}

function switchPlayer(player){
    switch (player){
        case 'X': 
            return 'O';
        case 'O':
            return 'X';
        default:
            console.log("not valid player");
    }
}

function render(){
    for (let i=0; i<3; i++){
        context.fillText(model.squares[i].join('|'),100,100+i*40);
        if (i<2){
            context.fillText("--------",100,120+i*40);
        }
    }
   
}

document.querySelector("body").addEventListener("keydown", e=>{
    let id = parseInt(e.key)-1;
    if (typeof(id) != "number"){
        return;
    }
    console.log("got", id);
    let row = Math.floor(id / 3);
    let col = Math.floor(id % 3);
    model.squares[row][col] = model.next;
    model.next = switchPlayer(model.next);
})

//let p = 0;
function splat(t){
    context.clearRect(0,0,canvas.width,canvas.height);
    render();
    window.requestAnimationFrame(splat);
}
window.requestAnimationFrame(splat);