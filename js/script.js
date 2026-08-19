/* =====================================================
   SCROLL REVEAL
===================================================== */

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }

    });

}


/* =====================================================
   PARTICLES
===================================================== */

if (document.getElementById("particles-js") && typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80
            },

            size: {
                value: 3
            },

            color: {
                value: "#d4af37"
            },

            line_linked: {
                enable: true,
                color: "#d4af37",
                opacity: 0.2
            },

            move: {
                speed: 1
            }

        }

    });

}


/* =====================================================
   EMAIL JS
===================================================== */

if (typeof emailjs !== "undefined") {

    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    from_name: document.getElementById("name").value,
                    reply_to: document.getElementById("email").value,
                    message: document.getElementById("message").value
                }
            )

            .then(() => {

                const status = document.getElementById("status");

                if (status) {
                    status.innerHTML = "✅ Message sent successfully!";
                }

                contactForm.reset();

            })

            .catch(error => {

                const status = document.getElementById("status");

                if (status) {
                    status.innerHTML = "❌ Failed to send message.";
                }

                console.error(error);

            });

        });

    }

}


/* =====================================================
   SHOPPING CART
===================================================== */

function addToCart(name, price, image, quantity) {

    quantity = quantity || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({
            name,
            price,
            image,
            quantity: quantity
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");

}


/* =====================================================
   BUY NOW — add to cart, then jump straight to checkout
===================================================== */

function buyNow(name, price, image, quantity) {

    quantity = quantity || 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ name, price, image, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";

}


/* =====================================================
   SHARE — native share sheet, with copy-link fallback
===================================================== */

function shareProduct(name) {

    const shareData = {
        title: name + " | Sattvic Eats",
        text: "Check out " + name + " on Sattvic Eats — Pure Food. Calm Living.",
        url: window.location.href
    };

    if (navigator.share) {

        navigator.share(shareData).catch(() => {});

    } else if (navigator.clipboard) {

        navigator.clipboard.writeText(shareData.url).then(() => {
            alert("Product link copied to clipboard!");
        });

    } else {

        alert(shareData.url);

    }

}


function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {

        cartCount.innerText = count;

    }

}

window.addEventListener("load", updateCartCount);




/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

/* ---------- Whole product card clickable ---------- */

const clickableCards = document.querySelectorAll(".product-card[data-href]");

clickableCards.forEach(card => {

    card.addEventListener("click", (e) => {

        if (e.target.closest("button")) return;

        window.location.href = card.dataset.href;

    });

});

/* ---------- Back to top button ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const backToTopBtn = document.getElementById("back-to-top");

    if (backToTopBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }

        });

        backToTopBtn.addEventListener("click", () => {

            window.scrollTo({ top: 0, behavior: "smooth" });

        });

    }

});
