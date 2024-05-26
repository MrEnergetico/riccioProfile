function openWebSite(url, page) {
    window.open(url, page)
}

function start () {

    let splash = document.getElementById("schermatainizio")

    document.getElementById("bgm").pause();

    splash.classList.add("hide")

    splash.addEventListener("transitionend", () => {

        setTimeout(() => {
            document.getElementById("bgm").play();
            splash.remove();
        }, 100);
    });
}
