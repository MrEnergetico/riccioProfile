let score = 0;
let cooldown = 1;
let light = false;

setInterval(() => {
    if (cooldown != 0) cooldown = 0;
}, 1000);

function snowflake_click() {
    if (score == 0) {
        document.getElementById('score').classList.add('visible');
        document.getElementById('score').textContent = `PUNTEGGIO: ${score}`;
        document.getElementById('play_song').classList.add('minus');
        timer();
    };
    if (cooldown == 0) {
        if (light == false) {
            document.getElementById('score').style.color = 'lime'
            score = score + 1;
            document.getElementById('score').textContent = `PUNTEGGIO: ${score}`;
            cooldown = 500;
        } else if (light == true) {
            score = 0;
            document.getElementById('score').textContent = `PUNTEGGIO: ${score} (RESETTATO)`;
        };
    };
};

async function timer() {
    let random = Math.random(2000, 5000);
    setInterval(() => {
        document.getElementById('score').style.color = 'lime'
        light = false;
        document.getElementById('score').textContent = `PUNTEGGIO: ${score}`;
        setTimeout(() => {
            document.getElementById('score').style.color = 'red'
            light = true;
        }, Math.round(random * 10000 * 1.2));
        random = Math.random(2000, 5000);
    }, Math.round(random * 10000 * 2));
};