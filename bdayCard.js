const flip = document.getElementById("flip");
const front = document.getElementById("front");
const back = document.getElementById("back");

function handleClick() {
    front.style.display = "none";
    back.style.display = "grid";
    back.style.transition = "rotateY(180deg)";
    front.classList.remove("hidden");
}

flip.addEventListener("click", handleClick);