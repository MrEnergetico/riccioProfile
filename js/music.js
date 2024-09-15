let song_status = 'off'
let turboPazzo = false;

document.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
        if (turboPazzo == true) {
            if (document.getElementById('discordBox').classList == 'show') return;
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

function isDecimal(value) {
    return typeof value === 'number' && !Number.isInteger(value);
}

async function playsong() {
    if (song_status == 'off') {
        sfx('click');
        document.getElementById('play_song').src = 'media/sito/songs/pausebutton.png';
        song_status = 'on';
        document.getElementById('song').play();
        document.getElementById('immagine').src = 'media/sito/dancing.gif';
        let audio = document.getElementById('song');
        if (audio.currentTime <= 0) audio.currentTime += 8;
        turboPazzo = true;
    } else if (song_status == 'on') {
        sfx('click');
        document.getElementById('play_song').src = 'media/sito/songs/playbutton.png';
        song_status = 'off';
        document.getElementById('song').pause();
        document.getElementById('immagine').src = 'media/profilo/pfp.png';
        turboPazzo = false;
    };
};

let doSubtitles = true;

async function eos() {

    if (doSubtitles) {
        //doSubtitles = false;
        let a = document.createElement('audio');
        a.src = `media/sfx/english.mp3`;
        a.play();
        a.currentTime += 1;
        a.addEventListener('play', async () => {
            const subtitles = [
                "baby you got something in your nose",
                "sniffing that cake did you fill the hole",
                "hope you finf peace for yourself",
                "new boyfriend ain't gonna fill the void",
                "do you even really like this track",
                "take away the drougs but you feel the noise",
                "more and more you try to run away",
                "you're fucking yourself do you feel the toy",
            ];
            let n = 0;
            document.getElementById('subtitles').textContent = subtitles[n];
            n++;
            setInterval(() => { 
                if (n > subtitles.length) return document.getElementById('subtitles').remove();
                document.getElementById('subtitles').textContent = subtitles[n];
                n++;
            }, 3000);
        });
    } else if (!doSubtitles) {
        
        sfx()

        

    };

}

function sfx(t) {
    let a = document.createElement('audio');
    a.src = `media/sfx/${t}.mp3`;
    a.play();
    a.remove();
};