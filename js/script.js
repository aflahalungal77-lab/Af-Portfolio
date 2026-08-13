document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const backTop = document.getElementById("backTop");
  const themeToggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const toast = document.getElementById("toast");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  year.textContent = new Date().getFullYear();

  // Theme preference
  const savedTheme = localStorage.getItem("af-theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    themeToggle.textContent = "☾";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    localStorage.setItem("af-theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "☾" : "☼";
  });

  // Navbar + back-to-top state
  const handleScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 30);
    backTop.classList.toggle("show", y > 650);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile navigation
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Reveal on scroll
  const revealItems = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Active navigation
  const sections = [...document.querySelectorAll("main section[id]")];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  // Back to top
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  // Demo links: no fake destinations
  document.querySelectorAll("[data-demo]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("Add your live project URL to this button.");
    });
  });

  // Contact validation only — no fake sending
  // Contact form → WhatsApp
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  [name, email, message].forEach(field => {
    field.style.borderColor = "";
  });

  // Validation
  if (name.value.trim().length < 2) {
    setInvalid(name, "Please enter your name.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setInvalid(email, "Please enter a valid email.");
    return;
  }

  if (message.value.trim().length < 10) {
    setInvalid(message, "Please write at least 10 characters.");
    return;
  }

  // WhatsApp message
  const whatsappNumber = "919961552951";

  const whatsappMessage = `
Hello Muhammed Aflah 👋

Name: ${name.value.trim()}
Email: ${email.value.trim()}

Message:
${message.value.trim()}
  `.trim();

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  formStatus.textContent = "Opening WhatsApp...";
  formStatus.style.color = "var(--accent)";

  contactForm.reset();
});
  function setInvalid(field, message) {
    field.focus();
    field.style.borderColor = "#ff6b6b";
    formStatus.textContent = message;
    formStatus.style.color = "#ff8b8b";
  }

  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
  }
});
