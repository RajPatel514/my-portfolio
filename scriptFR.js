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
                ? (alert("Merci pour votre soumission. Nous vous répondrons sous peu!"),
                    (window.location.href = "indexFR.html"))
                : alert("S'il vous plaît, mettez une courriel valide.")
            : t
                ? n
                    ? a || alert("Veuillez entrer votre courriel.")
                    : alert("Veuillez saisir vos commentaires ou vos questions.")
                : alert("Veuillez saisir votre prénom.");
    }),
    translatePage.addEventListener("click", function () {
        "/index.html" === window.location.pathname
            ? (window.location.href = "indexFR.html")
            : (window.location.href = "index.html");
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
        "Salut tout le monde! Je m'appelle Raj Patel et j'étudie la programmation informatique au Humber College. j'ai pris un un grand pas dans une nouvelle direction pour apprendre quelque chose de nouveau! Cette disciplinem'aidera éventuellement à faire un changement dans ma carrière. Je travaille actuellement sur quelques projets de développement Web en parallèle, en plus d'être un entrepreneur indépendant. Avant cela, j'ai été machiniste pendant cinq ans. J'attends avec impatience quoi et où ce nouveau voyage m'amènera, merci d'avoir visité ma page!!",
    ],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: !0,
    shuffle: !0,
});
const toggleThemeButton = document.getElementById("darkMode");
function displayTime() {
    function updateTime() {
        let e = new Date().toLocaleString();
        document.getElementById("currentTime").innerText = e;
    }
    updateTime(), setInterval(updateTime, 1e3);
}
toggleThemeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
}),
    displayTime();
