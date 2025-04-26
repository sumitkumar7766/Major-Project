// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

//script of the page
let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxIndo = document.getElementsByClassName("text-info");
  for (info of taxIndo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

//giving function to the logo
let filters = [
  "mountain", "Farms", "Room", "iconiccity", 
  "Castel", "Camping", "Arctic", "Domes", "Boats", "Pools"
];

filters.forEach(filter => {
  let element = document.getElementById(filter);
  element.addEventListener("click", () => {
      let allDivs = document.querySelectorAll(".show-cradsforcategree");
      allDivs.forEach((div) => {
          let category = div.querySelector(".valcategree").getAttribute("data-category");
          if (category === filter) {
              div.parentElement.style.display = "block"; // Show the parent row div
          } else {
              div.parentElement.style.display = "none"; // Hide the parent row div
          }
      });
  });
});

let allFilter = document.getElementById("All");
allFilter.addEventListener("click", () => {
  let allDivs = document.querySelectorAll(".show-cradsforcategree");
  allDivs.forEach((div) => {
  div.parentElement.style.display = "block"; // Show all parent row divs
  });
});

//sliding the sarch filter
const filterlogo = document.getElementById("filters");

let isDragging = false;
let startX, scrollLeft;

filterlogo.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - filterlogo.offsetLeft;
  scrollLeft = filterlogo.scrollLeft;
});

filterlogo.addEventListener("mouseleave", () => {
  isDragging = false;
});

filterlogo.addEventListener("mouseup", () => {
  isDragging = false;
});

filterlogo.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - filterlogo.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the multiplier for sensitivity
  filterlogo.scrollLeft = scrollLeft - walk;
});

filterlogo.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - filterlogo.offsetLeft;
  scrollLeft = filterlogo.scrollLeft;
});

filterlogo.addEventListener("touchend", () => {
  isDragging = false;
});

filterlogo.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - filterlogo.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the multiplier for sensitivity
  filterlogo.scrollLeft = scrollLeft - walk;
});