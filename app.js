const form = document.querySelector(".contact-form");
const name = document.querySelector("name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const messsage = document.querySelector(".messsage");

function Init() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
}


function SendEmail(e) {
    e.preventDefault();

    console.log(email.value);
    console.log(subject.value);
    console.log(messsage.value);

    Email.send({
        SecureToken: "3e1bb860-90af-4e20-85e7-f13a9216dced",
        To: 'samagan888@gmail.com',
        From: email.value,
        Subject: subject.value,
        Body: messsage.value
    }).then(
        message => alert(message)
    );
}

Init();

console.log("addedsubmit");
form.addEventListener("submit", SendEmail);