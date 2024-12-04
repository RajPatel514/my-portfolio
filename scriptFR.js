//Form validation
const fnIput = document.getElementById("firstName");
// const lnIput = document.getElementById("lastName"); //Not used! I decide to make the last name optional
const quesInput = document.getElementById("questions");
const emailInput = document.getElementById("email");
const saveButton = document.getElementById("save-btn");
const formInput = document.getElementById('form');
const translatePage = document.getElementById('translate');

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}

if (saveButton) {
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        let firstName = fnIput.value;
        // let lastName = lnIput.value; 
        let question = quesInput.value;
        let email = emailInput.value;

        if (firstName /*&& lastName*/ && question && email) {
            if (validateEmail(email)) {
                alert("Merci pour votre soumission. Nous vous répondrons sous peu!");
                window.location.href = "indexFR.html";
            } else {
                alert("S'il vous plaît, mettez une courriel valide.");
            }
        } else {
            if (!firstName) {
                alert("Veuillez saisir votre prénom.");
                // } else {
                //     if (!lastName) {
                //         alert("Veuillez entrer votre nom de famille.");
            } else {
                if (!question) {
                    alert("Veuillez saisir vos commentaires ou vos questions.");
                } else {
                    if (!email) {
                        alert("Veuillez entrer votre courriel.");
                    }
                }
                // }
            }
        }
    });
}

//Translation feature to go to english page
translatePage.addEventListener('click', function () {
    if (window.location.pathname === '/index.html') {
        window.location.href = 'indexFR.html';
    } else {
        window.location.href = 'index.html';
    }
});

//Code for collapsible projects
//Code learned from W3
var dropdowns = document.getElementsByClassName("dropdown");

for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//Typed in FR
var typed = new Typed('.element', {
    strings: ["Salut tout le monde! Je m'appelle Raj Patel et j'étudie la programmation informatique au Humber College. j'ai pris un un grand pas dans une nouvelle direction pour apprendre quelque chose de nouveau! Cette disciplinem'aidera éventuellement à faire un changement dans ma carrière. Je travaille actuellement sur quelques projets de développement Web en parallèle, en plus d'être un entrepreneur indépendant. Avant cela, j'ai été machiniste pendant cinq ans. J'attends avec impatience quoi et où ce nouveau voyage m'amènera, merci d'avoir visité ma page!!"],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: true,
    shuffle: true,

});

// Dark Mode
const toggleThemeButton = document.getElementById('darkMode');
toggleThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Display Date-Time
function displayTime() {
    function updateTime() {
        let currentDate = new Date();
        let formatTime = currentDate.toLocaleString();
        document.getElementById('currentTime').innerText = formatTime;
    }
    updateTime();
    setInterval(updateTime, 1000);
}
displayTime();