document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.getElementById("cta-btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      alert("✨ Welcome to your Ahmed Gaafer Pwa Site!");
    });
  }
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us! 🚀");
      contactForm.reset();
    });
  }
});

const typedName = document.getElementById("typed-name");
if (typedName) {
  const text = "Ahmed Gaafer!";
  let index = 0;
  const typingInterval = setInterval(() => {
    typedName.textContent += text[index];
    index++;
    if (index === text.length) clearInterval(typingInterval);
  }, 120);
}

// Dark mode toggle for all pages
window.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("mode-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const icon = toggleBtn.querySelector("i");
      if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    });
  }
});



// for service worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) => {
        console.log("[PWA] Service Worker registered ✅", reg.scope);
      })
      .catch((err) => {
        console.error("[PWA] Service Worker registration failed ❌", err);
      });
  });
}