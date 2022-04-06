let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("animal");
      counter++;
    } else {
      secondSelection = card.getAttribute("animal");
      counter = 0;

      if (firstSelection === secondSelection) {
        const goodCards = document.querySelectorAll(
          ".card[animal='" + firstSelection + "']"
        );

        goodCards[0].classList.add("correct");
        goodCards[0].classList.remove("clicked");
        goodCards[1].classList.add("correct");
        goodCards[1].classList.remove("clicked");
      } else {
        const nogoodCards = document.querySelectorAll(".card.clicked");

        nogoodCards[0].classList.add("wizz");
        nogoodCards[1].classList.add("wizz");

        setTimeout(() => {
          nogoodCards[0].classList.remove("wizz");
          nogoodCards[0].classList.remove("clicked");
          nogoodCards[1].classList.remove("wizz");
          nogoodCards[1].classList.remove("clicked");
        }, 800);
      }
    }

    console.log(firstSelection);
    console.log(secondSelection);
  });
});
