window.onload = function () {
    let submitBtn = document.getElementById("submit");
    submitBtn.onclick = function () { submitClicked() };



}
function submitClicked() {

    let passwordInput = document.getElementById("inputPassword");
    let passwordInputString = passwordInput.value;
    let urlInput = document.getElementById("inputUrl");
    let urlInputString = urlInput.value;

    // $("passwordInput") -- look it up

    // regular expression for password
    let psswdExpression = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$");
    // regular expression for url
    let urlExpression = new RegExp("https?://.+");



    if (!passwordInputString.match(psswdExpression))
        alert("Please, input a correct password!!");
    if (!urlInputString.match(urlExpression))
        alert("Please, input a correct url!!");

    if (passwordInputString.match(psswdExpression) && urlInputString.match(urlExpression))
        alert("submition successfull!!");




















}