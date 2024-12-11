function showPage(pageId) {
  // Ukrywa wszystkie podstrony
  const pages = document.querySelectorAll(".page-content");
  pages.forEach((page) => page.classList.remove("active"));

  // Pokazuje wybraną podstronę
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    // Dodaje nowy stan do historii przeglądarki
    history.pushState({ page: pageId }, "", `#${pageId}`);
  } else {
    console.error("Nie znaleziono podstrony:", pageId);
  }
}

// Obsługa przycisku "cofnij" i "dalej" w przeglądarce
window.onpopstate = function (event) {
  if (event.state && event.state.page) {
    showPage(event.state.page);
  } else {
    showPage("home");
  }
};

// Sprawdza, czy jest hash w URL po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  const initialPage = window.location.hash
    ? window.location.hash.substring(1)
    : "home";
  showPage(initialPage);
});

// Funkcja odliczania
function startCountdown(elementId, targetDate, eventName) {
  const targetTime = new Date(targetDate).getTime();

  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML =
      days +
      " dni " +
      hours +
      " godzin " +
      minutes +
      " minut " +
      seconds +
      " sekund ";

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById(elementId).innerHTML =
        "Wesołych " + eventName + "!";
    }
  }, 1000);
}

// Odliczanie do Bożego Narodzenia
startCountdown("countdown-xmas", "December 25, 2024 00:00:00", "Świąt");

// Odliczanie do Sylwestra
startCountdown("countdown-newyear", "January 1, 2025 00:00:00", "Nowego Roku");

// Funkcja wyświetlająca pop-up po 2 sekundach
setTimeout(function () {
  document.getElementById("popup1").style.display = "block";
}, 10000);

// Funkcja wyświetlająca pop-up po 5 sekundach
setTimeout(function () {
  document.getElementById("popup2").style.display = "block";
}, 30000);

// Funkcja zamykająca pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
