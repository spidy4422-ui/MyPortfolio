
// Select navigation elements
const navbar = document.querySelector(".nav-links");

// Create mobile menu functionality
// The menu will be added in the next HTML/CSS update.

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
