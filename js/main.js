/**
 * GRUPO RBM - MAIN JAVASCRIPT
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Current Year in Footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Scroll Effect
  const header = document.querySelector("header.sticky-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // 3. Mobile Hamburger Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
      } else {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // 4. Contact Form Handling
  const contactForms = document.querySelectorAll(".contact-form-js");
  contactForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const successMsg = form.querySelector(".form-success-msg");
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>Enviando...</span>";
      }

      setTimeout(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = "<span>Enviar mensagem</span>";
        }
        form.reset();
        if (successMsg) {
          successMsg.classList.remove("hidden");
          setTimeout(function () {
            successMsg.classList.add("hidden");
          }, 5000);
        } else {
          alert("Mensagem enviada com sucesso! Em breve um especialista do Grupo RBM entrará em contato.");
        }
      }, 1000);
    });
  });

  // 5. Cases Filter Buttons (Cases Page)
  const filterBtns = document.querySelectorAll(".case-filter-btn");
  const caseCards = document.querySelectorAll(".case-card-item");

  if (filterBtns.length > 0 && caseCards.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        // Active button styling
        filterBtns.forEach((b) => {
          b.classList.remove("bg-[#0754A6]", "text-white");
          b.classList.add("bg-gray-100", "text-gray-600");
        });
        this.classList.remove("bg-gray-100", "text-gray-600");
        this.classList.add("bg-[#0754A6]", "text-white");

        // Filter cards
        caseCards.forEach(function (card) {
          const category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
});
