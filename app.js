const btn = document.querySelector(".btn");
const panel = document.querySelector(".panel");
const cards = document.querySelectorAll(".card");

let feedback = "satisfied";

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeClass();
    feedback = card.lastElementChild.innerText;
    card.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  changeBackground();
});

function changeBackground() {
  panel.innerHTML = `
    <div class="changedPanel">
        <i class='bx bxs-heart'></i>
        <h3>Thank you for your submit ! </h3>
        <small>Feedback ${feedback}</small>
        <p>We appreciate your feedback and work constantly to improve your experience </p>
        <strong> See you soon !</strong>
    </div>
        `;
}

function removeClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
