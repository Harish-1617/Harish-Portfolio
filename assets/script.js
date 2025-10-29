// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Show success message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)

    // Reset form
    contactForm.reset()
  })
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 50) {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)"
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

// ============================================
// SCROLL ANIMATION FOR ELEMENTS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe project cards and expertise items
document.querySelectorAll(".project-card, .expertise-item, .skill-tag").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})
