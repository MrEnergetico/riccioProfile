function start () {
    let splash = document.getElementById("schermatainizio");
    splash.classList.add("hide");
    const songid = Math.round(Math.random(1));
    setTimeout(() => {
        if (songid == 1) {
            document.getElementById("bgm").play();
            console.log(`ID canzone scelta: ${songid}\n\nSong-Name: Extravaganza\nCredits: Jules Gaia`);
        }
        if (songid == 0) {
            document.getElementById("bgm1").play();
            console.log(`ID canzone scelta: ${songid}\n\nSong-Name: Bling Bang Bang Born\nCredits: Creepy Nuts`);
        }
    }, 500);
    setTimeout(() => {
        splash.remove();
    }, 2000);
    var type = new Typed(".auto-type", { strings: ["Html, Css and Javascript Dev", "Discord bot developer", "Discord bot developer", "Editor and Graphic"], typeSpeed: 80, backSpeed: 80, loop: true
    })
}