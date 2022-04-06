let counter = 0;
let frstSelection = "";
let scdSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      frstSelection = card.getAttribute("animal");
      counter++;
    } else {
      scdSelection = card.getAttribute("animal");
      counter = 0;

      if (frstSelection === scdSelection) {
        const goodCards = document.querySelectorAll(
          ".card[animal='" + frstSelection + "']"
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

    console.log(frstSelection);
    console.log(scdSelection);
  });
});
