// Simple game, does not have a "Complete!" notifier, just a simple drag and drop.
let startX = 0, startY = 0, initialX = 0, initialY = 0;

const theses = document.getElementById('theses');
        
theses.addEventListener('pointerdown', mouseDown);
        
function mouseDown(e) {
    e.preventDefault();
            
    startX = e.clientX;
    startY = e.clientY;
        
    initialX = theses.offsetLeft;
    initialY = theses.offsetTop;
        
    document.addEventListener('pointermove', mouseMove);
    document.addEventListener('pointerup', mouseUp);
}
        
function mouseMove(e) {
        
    const newX = e.clientX - startX;
    const newY = e.clientY - startY;
        
    theses.style.left = initialX + newX + 'px';
    theses.style.top = initialY + newY + 'px';
}
        
function mouseUp(e) {
    document.removeEventListener('pointermove', mouseMove);
    document.removeEventListener('pointerup', mouseUp);
}

