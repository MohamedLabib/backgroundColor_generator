let btn     = document.querySelector('.change');
let back    = document.querySelector('body');
let color   = document.querySelector('.background strong');

const hex   = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


btn.addEventListener('click', changeBackGround);
function changeBackGround(){
    let x = shuffle(hex);
    let hexcolor ="#"; 
    for(let i = 0 ; i < 6; i++){
        hexcolor += x[i];

    }
    document.body.style.backgroundColor = hexcolor ; 
    color.innerHTML = hexcolor; 
    
}
function shuffle(hex){

    let current  = hex.length ; 
    let temp; 
    let random ;
    while(current > 0 ){
        random = Math.floor(Math.random() * current); 
        current--; 
        temp = hex[current]; 
        hex[current] = hex[random]; 
        hex[random]  = temp ; 
    }
    return hex ; 
}