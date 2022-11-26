// dados iniciais
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let canDraw = false;
let mouseX = 0;
let mouseY = 0;









//eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen)









//funcoes
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
};




function mouseDownEvent(e) {
    canDraw = true;
    //posição do mouse quando abaixa a tecla, "inicial da linha"
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
};




function mouseMoveEvent(e) {
    if (canDraw) {
        Draw(e.pageX, e.pageY);
    }
};




function mouseUpEvent() {
    canDraw = false;
};



function Draw(x, y) {
    //posição atualizada do muouse
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();    //abre
    ctx.linewidth = 5;
    ctx.linejoin = "round";
    ctx.moveTo(mouseX, mouseY); //move o curso da posição inicial
    ctx.lineTo(pointX, pointY); // faça uma linha ate posicao atual
    ctx.closePath();            //fecha
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    //atualiza posição inicial
   mouseX = pointX;
   mouseY = pointY;
};



function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



