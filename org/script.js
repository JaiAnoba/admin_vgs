document.addEventListener("DOMContentLoaded", () => {
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const cards = document.querySelectorAll(".card");
  
    yearSelect.addEventListener("change", () => {
      const selectedYear = yearSelect.value;
      if (selectedYear) {
        monthSelect.classList.remove("hidden");
      } else {
        monthSelect.classList.add("hidden");
      }
      filterCards();
    });
  
    monthSelect.addEventListener("change", () => {
      filterCards();
    });
  
    function filterCards() {
      const selectedYear = yearSelect.value;
      const selectedMonth = monthSelect.value;
  
      cards.forEach((card) => {
        const cardYear = card.dataset.year;
        const cardMonth = card.dataset.month;
  
        if (
          cardYear === selectedYear &&
          (selectedMonth === "" || cardMonth === selectedMonth)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
});
  