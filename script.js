const fnIput = document.getElementById("firstName"),
    quesInput = document.getElementById("questions"),
    emailInput = document.getElementById("email"),
    saveButton = document.getElementById("save-btn"),
    formInput = document.getElementById("form"),
    translatePage = document.getElementById("translate");
function validateEmail(e) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(String(e));
}
saveButton &&
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        let t = fnIput.value,
            n = quesInput.value,
            a = emailInput.value;
        t && n && a
            ? validateEmail(a)
                ? (alert(
                    "Thank you for your submission. We will get back to you shortly!"
                ),
                    (window.location.href = "index.html"))
                : alert("Please enter a valid email address.")
            : t
                ? n
                    ? a || alert("Please enter your email address.")
                    : alert("Please enter your feedback or questions.")
                : alert("Please enter your first name.");
    }),
    translatePage.addEventListener("click", function () {
        window.location.href = "indexFR.html";
    });
for (
    var dropdowns = document.getElementsByClassName("dropdown"), i = 0;
    i < dropdowns.length;
    i++
)
    dropdowns[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        "block" === e.style.display
            ? (e.style.display = "none")
            : (e.style.display = "block");
    });
var typed = new Typed(".element", {
    strings: [
        "Hey everyone! My name is Raj Patel, and I am studying computer programming at Humber College. I've taken a big step in a new direction to learn something new! This discipline will eventually help me make a shift in my career. I am currently working on a few web development projects on the side, as well as being a self - employed contractor. I was a machinist for five years prior to that.I am looking forward to what and where this new journey will bring me, thank you for visiting my page!",
    ],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: !0,
    shuffle: !0,
});
const toggleThemeButton = document.getElementById("darkMode");
function displayTime() {
    function updateTime() {
        let e = new Date().toUTCString();
        document.getElementById("currentTime").innerText = e;
    }
    updateTime(), setInterval(updateTime, 1e3);
}
toggleThemeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
}),
    displayTime();
