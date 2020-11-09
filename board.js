/*function markSquare(elem){
    return () =>{
        if(elem.firstChild.className == 'redplayer'){
            elem.firstChild.className = 'yellowplayer';
        }
        else if(elem.firstChild.className == 'yellowplayer'){
            elem.firstChild.className = 'noplayer';
        }
        else
        {
            elem.firstChild.className = 'redplayer';
        }
    }
}


function setup (gboard, mark, squares){
    let el;
    for (let i =0; i<42; i++)
    {
        let circles;
        el = document.createElement('div');
        el.className = 'square';
        el.addEventListener('click', mark(el));
        gboard.append(el);
        el.dataset.id = i;
        el.dataset.size = 0;
        squares.push(el);
        circles = document.createElement('span');
        circles.className = 'circle';
        el.append(circles);
    }
}

function gameRun(mark, squares, barray){
    for (let i=0; i<42; i++){
        mark
    }
}*/