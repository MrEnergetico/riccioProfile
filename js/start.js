function start () {
    document.getElementById("first-start").classList.add("hide")
    document.getElementById("schermatainizio").classList.add("hide")
    const songid = Math.round(Math.random(1));
    setTimeout(() => {
        if (songid == 1) {
            document.getElementById("bgm").play();
        } else if (songid == 0) {
            document.getElementById("bgm1").play();
        }
    }, 500);
    setTimeout(() => {
        splash.remove();
    }, 2000);
    const type = new Typed(".auto-type", { strings: ["Html, Css and Javascript Dev", "Discord bot developer", "Discord bot developer", "Editor and Graphic"], typeSpeed: 80, backSpeed: 80, loop: true
    })
}