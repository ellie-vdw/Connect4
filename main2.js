var tRow = document.getElementsByTagName('tr');
var tCell = document.getElementsByTagName('td');
var tSlot = document.querySelectorAll('.slot');
const playerTurn = document.querySelector('.pturn');
const reset = document.querySelector('.reset');

for (let i=0; i<tCell.length; i++){
    tCell[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

while(!p1){
    var p1= prompt('Player One: Enter your name, you will be red.');
}
p1Color='crimson';
while(!p2){
    var p2= prompt('Player Two: Enter your name, you will be yellow.');
}
p2Color='gold';
let currentPlayer =1;
playerTurn.textContent= `${p1}'s turn`;

Array.prototype.forEach.call(tCell, (cell) =>{
    cell.addEventListener('click', markColor);
    cell.style.backgroundColor ='white';
});

function markColor(e){
    let col = e.target.cellIndex;
    let row = [];

    for (let i=5; i>-1; i--){
        if (tRow[i].children[col].style.backgroundColor == 'white'){
            row.push(tRow[i].children[col]);
            if (currentPlayer ===1){
                row[0].style.backgroundColor = p1Color;
                if(horizontalCheck()|| verticalCheck()|| diagonalCheckSE()|| diagonalCheckSW()){
                    playerTurn.textContent = `${p1} wins!`;
                    return(alert(`${p1} wins!`));
                }
                else if (tie())
                {
                    playerTurn.textContent = `ITS A TIE`;
                    return(alert('TIE GAME'));
                }
                else{
                    playerTurn.textContent = `${p2}'s turn!`;
                    return currentPlayer=2;
                }
                
            }
            else{
                row[0].style.backgroundColor = p2Color;
                if(horizontalCheck()|| verticalCheck()|| diagonalCheckSE()|| diagonalCheckSW()){
                    playerTurn.textContent = `${p2} wins!`;
                    return(alert(`${p2} wins!`));
                }
                else if (tie())
                {
                    playerTurn.textContent = `ITS A TIE`;
                    return(alert('TIE GAME'));
                }
                else{
                    playerTurn.textContent = `${p1}'s turn!`;
                    return currentPlayer=1;
                }
            }
        }
    }
}


function checkColor (a,b,c,d){
    return (a == b && a==c && a==d && a!=='white');
}

function horizontalCheck(){
    for (let r=0; r<tRow.length; r++){
        for(let c=0; c<4; c++){
            if(checkColor(tRow[r].children[c].style.backgroundColor, tRow[r].children[c+1].style.backgroundColor, 
                tRow[r].children[c+2].style.backgroundColor, tRow[r].children[c+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function verticalCheck(){
    for(let c=0; c<7; c++){
        for(let r=0; r<3; r++){
            if(checkColor(tRow[r].children[c].style.backgroundColor, tRow[r+1].children[c].style.backgroundColor,
                tRow[r+2].children[c].style.backgroundColor, tRow[r+3].children[c].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function diagonalCheckSE(){
    for (let c=0; c<4; c++){
        for(let r=0; r<3; r++){
            if(checkColor(tRow[r].children[c].style.backgroundColor, tRow[r+1].children[c+1].style.backgroundColor,
                tRow[r+2].children[c+2].style.backgroundColor,tRow[r+3].children[c+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function diagonalCheckSW(){
    for (let c=0; c<4; c++){
        for(let r=5; r>2; r--){
            if(checkColor(tRow[r].children[c].style.backgroundColor, tRow[r-1].children[c+1].style.backgroundColor,
                tRow[r-2].children[c+2].style.backgroundColor,tRow[r-3].children[c+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function tie()
{
    let full = [];
    for(let i=0; i<tCell.length; i++){
        if(tCell[i].style.backgroundColor != 'white'){
            full.push(tCell[i]);
        }
    }
    if (full.length === tCell.length){
        return true;
    }
}

reset.addEventListener('click', ()=>{
    tSlot.forEach(slot =>{
        slot.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
    return (currentPlayer === 1 ? playerTurn.textContent = `${p1}'s turn`: playerTurn.textContent = `${p2}'s turn`);
})
