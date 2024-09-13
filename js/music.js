let song_status = 'off'
let turboPazzo = false;

//7

document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        if (turboPazzo == true) {
            let riccio = document.createElement('img');
            riccio.src = 'media/sito/dancing.gif';
            riccio.className = 'immagine2';
            const x = Math.random() * (window.innerWidth - 170);
            const y = Math.random() * (window.innerHeight - 170);
            riccio.style.marginLeft = `${x}px`;
            riccio.style.marginTop = `${y}px`;
            riccio.draggable = false;
            riccio.style.transform = `rotate(${Math.floor(Math.random() * 41) - 20}deg)`;
            document.body.appendChild(riccio);
            setTimeout(() => {
                riccio.remove();    
            }, 1000);
            setInterval(() => {
                if (turboPazzo == false) {
                    riccio.remove();
                }
            }, 100);
        };
    }, 1000);

});

async function playsong() {
    if (song_status == 'off') {
        await clickSound();
        document.getElementById('play_song').src = 'media/sito/songs/pausebutton.png';
        song_status = 'on';
        document.getElementById('song').play();
        document.getElementById('immagine').src = 'media/sito/dancing.gif';
        let audio = document.getElementById('song');
        if (audio.currentTime <= 0) audio.currentTime += 8;
        turboPazzo = true;
    } else if (song_status == 'on') {
        await clickSound();
        document.getElementById('play_song').src = 'media/sito/songs/playbutton.png';
        song_status = 'off';
        document.getElementById('song').pause();
        document.getElementById('immagine').src = 'media/profilo/pfp.png';
        turboPazzo = false;
    };
};

function salve() {
    document.getElementById('salveIoSonoRiccio').play();
};


async function clickSound() {
    await document.getElementById('clickSound').play();
};