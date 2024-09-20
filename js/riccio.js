document.addEventListener('DOMContentLoaded', async () => {

    let positions = [
        { x: 20, y: 20, angle: 360 },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.2, angle: 0 },
        { x: window.innerWidth * 0.6, y: window.innerHeight * 0.6, angle: 90 },
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8, angle: 180 },
    ];
    let index = 0;
    
    function moveRiccio() {
        let pos = positions[index];
        document.getElementById('riccio').style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle}deg)`;
        index = (index + 1) % positions.length;
    }

    setInterval(() => {
        moveRiccio();
    }, 1000);

    setInterval(() => {
        document.getElementById('riccio').style.visibility = 'visible';
    }, 1500);

});