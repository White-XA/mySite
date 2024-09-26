


document.addEventListener('DOMContentLoaded', () => {
    
    let dropDown = document.querySelector(".dropDown");
    let dropDownMenu = document.querySelector(".dropDownMenu");
    
    dropDown.addEventListener('click', () => {
        dropDownMenu.classList.toggle("show");
    });

    document.addEventListener('click', (event) => {
        if (!dropDown.contains(event.target) && !dropDownMenu.contains(event.target)) {
          dropDownMenu.classList.remove("show");
        }
      });

});