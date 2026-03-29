/* =========================================
   Offernext — Premium Web Solutions
   Designed & Developed by Offernext
   https://offernext.in
========================================= */

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================================
// SCROLL TO SECTION FUNCTION
// ============================================
// Scroll to next section (example: services)
function scrollToSection() {
  const section = document.getElementById("services");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } 
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function toggleMenu(el) {
  el.classList.toggle("active");
  document.getElementById("mobileMenu").classList.toggle("active");
}

// ============================================
// FAQ ACCORDION FUNCTIONALITY
// ============================================
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    let icon = item.querySelector("span");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

// ============================================
// CHAT WIDGET FUNCTIONALITY
// ============================================
const chatBody = document.querySelector(".chat-body");
const input = document.querySelector(".chat-input input");
const btn = document.querySelector(".chat-input button");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  // USER MESSAGE
  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerHTML = `<p>${text}</p>`;
  chatBody.appendChild(userMsg);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // BOT REPLY (SMART LOGIC)
  setTimeout(() => {
    let reply = "Got it 👍 We'll help you build it.";

    if (text.toLowerCase().includes("website")) {
      reply = "Nice 😎 What type of website are you planning?";
    } else if (text.toLowerCase().includes("price")) {
      reply = "We offer flexible pricing based on your needs 💚";
    } else if (text.toLowerCase().includes("hello") || text.toLowerCase().includes("hey")) {
      reply = "Hey 👋 Tell me what you need!";
    }

    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";
    botMsg.innerHTML = `<p>${reply}</p>`;
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

// CLICK SEND
btn.addEventListener("click", sendMessage);

// ENTER KEY SEND
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// ============================================
// HERO CHANGING TEXT ANIMATION
// ============================================
/* Changing text -Hero */
const words = ["Converts", "Scales", "Performs"];
let i = 0;

const el = document.getElementById("changing-text");

setInterval(() => {
  el.classList.add("fade-out");

  setTimeout(() => {
    i = (i + 1) % words.length;
    el.textContent = words[i];

    el.classList.remove("fade-out");
    el.classList.add("fade-in");

    setTimeout(() => {
      el.classList.remove("fade-in");
    }, 300);

  }, 300);

}, 2000);

// ============================================
// SCROLL TO TOP & WHATSAPP BUTTONS
// ============================================
/* Scroll to top and Whatsapp icon */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ============================================
// PRELOADER ANIMATION
// ============================================
/* Preloader */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("preloader-hide");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 400);

  }, 250);
});

// ============================================
// ACTIVE NAVIGATION ON SCROLL (SPY EFFECT)
// ============================================
/* Nav that follows on scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================================
   Offernext — Premium Web Solutions
   Designed & Developed by Offernext
   https://offernext.in
========================================= */
