const resizable  = document.querySelector('.resizable');
const handle = document.querySelector('.handle')

let is_Risizing = false;
let lastX ; let lastY;
handle.addEventListener('mousedown',(e)=> {
    is_Risizing=true;
    lastX = e.clinetX;
    lastY = e.clinetY;
})

document.addEventListener('mousemove',(e)=> {
    if (!is_Risizing) return ;
    let diffX = e.clientX - lastX;
    let diffY = e.clientY - lastY;

    resizable.style.width = resizable.offsetWidth + diffX+'px';
    resizable.style.height = resizable.offsetHeight + diffX+'px';
    lastX = e.clientX;
    lastY  = e.clientY;

})

document.addEventListener('mouseup',()=> {
    is_Risizing=false;
})