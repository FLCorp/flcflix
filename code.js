const correctCode = "FLCFlix2026";

const input = document.getElementById("codeInput");
const button = document.getElementById("codeButton");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

// Vérification du code
function checkCode() {
    if (input.value === correctCode) {
        popup.style.display = "flex";
    } else {
        alert("Code incorrect");
    }
}

// Fermer popup
function closePopup() {
    popup.style.display = "none";
}

// Events
button.addEventListener("click", checkCode);

closeBtn.addEventListener("click", closePopup);

// Fermer en cliquant à l'extérieur de la popup
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        closePopup();
    }
});