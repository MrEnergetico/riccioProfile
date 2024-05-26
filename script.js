function openWebSite(url, page) {
    window.open(url, page)
}

function start () {

    let splash = document.getElementById("schermatainizio")

    splash.classList.add("hide")

    splash.addEventListener("transitionend", () => {

    document.getElementById("bgm").play();
    splash.remove();
    });
}
