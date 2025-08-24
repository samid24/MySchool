const contactName = document.getElementById("name");
const contactMail = document.getElementById("mail");
const contactMessage = document.getElementById("message");
const conSubmit = document.getElementById("conSubmit");
const subMsg = document.getElementById("subMsg");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Navbar
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Contact Form
conSubmit.addEventListener("click", function () {
    if (contactName.value === "" || contactMail.value === "" || contactMessage.value === "") {
        subMsg.classList.remove("hide", "green");
        subMsg.classList.add("red", "show");
        subMsg.textContent = "Enter Your Details";

    } else {
        subMsg.classList.remove("hide", "red");
        subMsg.classList.add("green", "show");
        subMsg.textContent = "Submitted Succesfully";
    }

    setTimeout(() => {
        subMsg.classList.remove("show");
        subMsg.classList.add("hide");
    }, 5000);
});
