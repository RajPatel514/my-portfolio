
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
                alert("MERCI. We will get back to you shortly!");
                window.location.href = "indexFR.html";
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            if (!firstName) {
                alert("Please enter your first name.");
                // } else {
                //     if (!lastName) {
                //         alert("Please enter your last name.");
            } else {
                if (!question) {
                    alert("Please enter your feedback or questions.");
                } else {
                    if (!email) {
                        alert("Please enter your email address.");
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
