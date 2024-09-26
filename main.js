document.addEventListener("DOMContentLoaded", () => {
  let sem1 = document.querySelector(".sem1");
  let sem2 = document.querySelector(".sem2");
  let sem3 = document.querySelector(".sem3");
  let sem4 = document.querySelector(".sem4");
  let sem5 = document.querySelector(".sem5");
  let sem6 = document.querySelector(".sem6");

  let goToLocation = (address) => {
    window.location.href = address;
  };
  let addresses = ["1.html", "2.html", "3.html", "4.html", "5.html", "6.html"];

  sem1.addEventListener("click", () => {
    goToLocation(addresses[0]);
  });
  sem2.addEventListener("click", () => {
    goToLocation(addresses[1]);
  });
  sem3.addEventListener("click", () => {
    goToLocation(addresses[2]);
  });
  sem4.addEventListener("click", () => {
    goToLocation(addresses[3]);
  });
  sem5.addEventListener("click", () => {
    goToLocation(addresses[4]);
  });
  sem6.addEventListener("click", () => {
    goToLocation(addresses[5]);
  });

  let dropDown = document.querySelector(".dropDown");
  let dropDownMenu = document.querySelector(".dropDownMenu");
  dropDown.addEventListener("click", () => {
    dropDownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !dropDown.contains(event.target) &&
      !dropDownMenu.contains(event.target)
    ) {
      dropDownMenu.classList.remove("show");
    }
  });
});
