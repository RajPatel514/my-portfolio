
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
    if (window.location.pathname === '/index.html' || '/my-portfolio/') { //Added this OR operator just for github functionality
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
