let str = '';
let ultrapropulsione = false;

document.addEventListener('DOMContentLoaded', async () => {

    document.addEventListener('keydown', async function(event) {
        let value = event.key;
        if (value.length > 1) {
            value = value[0];
        } else if (value == ' ') value = '🦔';
        str += value;
        let color = randomColor();
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.textContent = value;
        document.body.appendChild(letter);
        const x = Math.random() * window.innerWidth - 60;
        const y = Math.random() * window.innerHeight - 60;
        letter.style.left = `${x}px`;
        letter.style.top = `${y}px`;
        letter.style.color = color;
        letter.style.fontSize = `${Math.floor(Math.random() * 21) + 25}px`;
        letter.style.transform = `rotate(${Math.floor(Math.random() * 41) - 20}deg)`;
        
        if (str.includes('riccio')) {
            str = '';
            document.getElementById('riccioSong').play();
        } else if (str.includes('energia')) {
            str = '';
            window.location.href = 'scuola/lavori/tecnologia/fonti-di-energia.html';
            console.log(str)
        } else if (str.toLocaleLowerCase().includes('tunudo')) {
            str = '';
            window.location.href = 'https://tunud0.github.io/ProfileDiscordTemplate/';
        };
        setTimeout(() => {
            letter.remove();
        }, 1000);
        clickSound();
    });
    
    function randomColor() {
        const colors = [
            "#FF0000",
            "#FF7F00",
            "#FFFF00",
            "#00FF00",
            "#0000FF",
            "#4B0082",
            "#8B00FF"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

});