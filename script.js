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
                alert("Thank you for your submission. We will get back to you shortly!");
                window.location.href = "index.html";
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

//Translation feature to go to french page
translatePage.addEventListener('click', function () {
    window.location.href = 'indexFR.html';
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

//Typed JS Features
var typed = new Typed('.element', {
    strings: ["Hey everyone! My name is Raj Patel, and I am studying computer programming at Humber College. I've taken a big step in a new direction to learn something new! This discipline will eventually help me make a shift in my career. I am currently working on a few web development projects on the side, as well as being a self - employed contractor. I was a machinist for five years prior to that.I am looking forward to what and where this new journey will bring me, thank you for visiting my page!"],
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
        let formatTime = currentDate.toUTCString();
        document.getElementById('currentTime').innerText = formatTime;
    }
    updateTime();
    setInterval(updateTime, 1000);
}
displayTime();
