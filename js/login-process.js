function logininput () {
    let password = document.getElementById("passwordinput").value
    if (password != "1234") {document.getElementById("perr").classList.add("show")}
    else {window.location.href='./sezione-privata.html'}
}