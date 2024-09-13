document.addEventListener('DOMContentLoaded', async () => {

    const n = Math.floor(Math.random() * 4);

    nameColor = '#ff0000';
    
    document.body.style.backgroundImage = `url(media/sito/backgrounds/${n}.png)`;

    if (n == 0 || n == 1) {
        document.getElementById('nome').style.color = 'white';
    } else if (n == 3 || n == 2) {
        document.getElementById('nome').style.color = 'aqua';
    };

});