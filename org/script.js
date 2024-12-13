//FILTERS FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const typeSelect = document.getElementById("type");
  const upcomingWrapper = document.getElementById("upcoming-wrapper");
  const pastWrapper = document.getElementById("past-wrapper");

  function filterCards(wrapper) {
    const selectedYear = yearSelect.value;
    const selectedMonth = monthSelect.value;
    const selectedType = typeSelect.value;

    const cards = wrapper.querySelectorAll(".ex-card");

    cards.forEach((card) => {
      const cardYear = card.dataset.year;
      const cardMonth = card.dataset.month;
      const cardType = card.dataset.type;

      if (
        (selectedYear === "" || cardYear === selectedYear) &&
        (selectedMonth === "" || cardMonth === selectedMonth) &&
        (selectedType === "" || cardType === selectedType)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  yearSelect.addEventListener("change", () => {
    const selectedYear = yearSelect.value;
    if (selectedYear) {
      monthSelect.classList.remove("hidden");
    } else {
      monthSelect.classList.add("hidden");
    }
    filterCards(upcomingWrapper);
    filterCards(pastWrapper);
  });

  monthSelect.addEventListener("change", () => {
    filterCards(upcomingWrapper);
    filterCards(pastWrapper);
  });

  typeSelect.addEventListener("change", () => {
    filterCards(upcomingWrapper);
    filterCards(pastWrapper);
  });

  filterCards(upcomingWrapper);
  filterCards(pastWrapper);
});

 
//NAVIGATION OF PAST & UPCOMING CONTAINERS
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".a-option");
  const upcomingWrapper = document.getElementById("upcoming-wrapper");
  const pastWrapper = document.getElementById("past-wrapper");

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      if (index === 0) { 
        upcomingWrapper.style.display = "block";
        pastWrapper.style.display = "none";
      } else if (index === 1) { 
        pastWrapper.style.display = "block";
        upcomingWrapper.style.display = "none";
      }
    });
  });

  options[0].classList.add("active");
  upcomingWrapper.style.display = "block";
  pastWrapper.style.display = "none";
});


//ACTIVE TAB
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".a-option");
  const upcomingWrapper = document.getElementById("upcoming-wrapper");
  const pastWrapper = document.getElementById("past-wrapper");

  options.forEach(option => {
      option.addEventListener("click", () => {
          options.forEach(opt => {
              opt.style.color = "";
              opt.style.borderBottom = "";
          });

          option.style.color = "#a20d0d";
          option.style.borderBottom = "2px solid #a20d0d";

          if (option.textContent === "Upcoming Exhibits") {
              upcomingWrapper.style.display = "grid";
              pastWrapper.style.display = "none";
          } else if (option.textContent === "Past Exhibits") {
              pastWrapper.style.display = "grid";
              upcomingWrapper.style.display = "none";
          }
      });
  });

  options[0].style.color = "#a20d0d";
  options[0].style.borderBottom = "2px solid #a20d0d";
  upcomingWrapper.style.display = "grid";
  pastWrapper.style.display = "none";
});



