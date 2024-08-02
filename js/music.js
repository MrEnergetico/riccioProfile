let song_status = 'off'

function playsong() {
    if (song_status == 'off') {
        document.getElementById('song').play();
        document.getElementById('play_song').src = 'media/sito/songs/pausebutton.png';
        song_status = 'on';
    } else if (song_status == 'on') {
        document.getElementById('song').pause();
        document.getElementById('play_song').src = 'media/sito/songs/playbutton.png';
        song_status = 'off';
    };
};