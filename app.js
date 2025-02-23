// video modal

document.addEventListener("DOMContentLoaded", function () {
    const viewDemoBtn = document.getElementById("viewDemoBtn");
    const customModal = document.getElementById("customModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const youtubeIframe = document.getElementById("youtubeVideo");

    // Open Modal
    viewDemoBtn.addEventListener("click", function () {
        customModal.classList.add("show");
    });

    // Close Modal
    closeModalBtn.addEventListener("click", function () {
        customModal.classList.remove("show");
        // Stop the video when modal is closed
        const videoSrc = youtubeIframe.src;
        youtubeIframe.src = ""; // Reset the iframe source
        youtubeIframe.src = videoSrc; // Restore the iframe source
    });

    // Close Modal when clicking outside
    modalOverlay.addEventListener("click", function () {
        customModal.classList.remove("show");
        // Stop the video when modal is closed
        const videoSrc = youtubeIframe.src;
        youtubeIframe.src = ""; // Reset the iframe source
        youtubeIframe.src = videoSrc; // Restore the iframe source
    });
});

// logo marquee
document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector(".marquee");
    const marqueeContent = marquee.innerHTML; // Get the inner HTML of the marquee

    // Clone the marquee content and append it to the marquee
    marquee.innerHTML += marqueeContent;

    // Adjust the animation duration based on the total width of the marquee content
    const marqueeWidth = marquee.scrollWidth / 2; // Since we duplicated the content
    const duration = marqueeWidth / 50; // Adjust speed (50px per second)

    marquee.style.animationDuration = `${duration}s`;
});

// Video

document.addEventListener("DOMContentLoaded", function () {
    const videoModal = document.getElementById("videoModal");
    const youtubeIframe = document.getElementById("youtubeVideo");

    videoModal.addEventListener("hidden.bs.modal", function () {
        // Stop the video when the modal is closed
        const videoSrc = youtubeIframe.src;
        youtubeIframe.src = ""; // Reset the iframe source
        youtubeIframe.src = videoSrc; // Restore the iframe source
    });
});

// price

document.addEventListener("DOMContentLoaded", function () {
    const planTab = document.getElementById("planTab");
    const priceElements = document.querySelectorAll(".price");
    const saveBadge = document.querySelector(".save-badge");
    const planCards = document.querySelectorAll(".planCards");

    // Pricing data
    const pricingData = {
        monthly: {
            free: 0,
            pro: 10,
            business: 20,
        },
        yearly: {
            free: 0,
            pro: 8,
            business: 16,
        },
    };

    // Function to update prices
    function updatePrices(plan) {
        priceElements.forEach((element, index) => {
            const planType = Object.keys(pricingData[plan])[index]; // free, pro, business
            element.textContent = pricingData[plan][planType];
        });

        // Toggle save badge visibility
        if (plan === "yearly") {
            saveBadge.style.display = "inline-block";
        } else {
            saveBadge.style.display = "none";
        }
    }

    // Function to update the moving underline
    function updateUnderline(plan) {
        planTab.setAttribute("data-active-tab", plan);
    }

    // Event listener for tab clicks
    planTab.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.tagName === "A") {
            const selectedPlan = e.target.getAttribute("data-plan");

            // Remove active class from all tabs
            document.querySelectorAll(".nav-link").forEach((link) => {
                link.classList.remove("active");
            });

            // Add active class to the clicked tab
            e.target.classList.add("active");

            // Update the moving underline
            updateUnderline(selectedPlan);

            // Smoothly update prices
            priceElements.forEach((element) => {
                element.classList.add("updated"); // Add animation class
            });

            // Wait for the animation to complete, then update prices
            setTimeout(() => {
                updatePrices(selectedPlan);
                priceElements.forEach((element) => {
                    element.classList.remove("updated"); // Remove animation class
                });
            }, 300); // Match this duration with the CSS transition duration
        }
    });

    // Initialize with yearly prices
    updatePrices("yearly");
    updateUnderline("yearly");

    // Add hover effect to plan cards
    planCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 4px 9px 0px rgba(0, 0, 0, 0.05)";
        });
    });
});

// review tpewriting animation

document.addEventListener("DOMContentLoaded", function () {
    // Typewriter Effect
    document.querySelectorAll(".typewriter").forEach(el => {
        let text = el.getAttribute("data-text");
        let index = 0;
        function type() {
            if (index < text.length) {
                el.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }
        setTimeout(type, 500);
    });

    // Delay Star Animations
    document.querySelectorAll(".review-stars").forEach((starContainer, idx) => {
        let stars = starContainer.querySelectorAll(".star");
        let delay = starContainer.getAttribute("data-delay");
        stars.forEach((star, i) => {
            star.style.animationDelay = `${(i * 100) + parseInt(delay)}ms`;
        });
    });
});

// smooth scroll
document.getElementById("getStarted").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


// navigate 
document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.getElementById('getStarted');

    // Smooth scroll to the contact section
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default button behavior
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll
                    block: 'start' // Align to the top of the section
                });
            }
        });
    }
});