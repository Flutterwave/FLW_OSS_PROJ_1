// Function 1 - Testimonial slider for the landing/homepage. Wrapping this part of my script to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        { text: "Amazing platform, able to get my customers here...", author: "John, Backend Freelancer" },
        { text: "An amazing review, abcdef...", author: "Jane, UI/UX Designer" },
        { text: "Really helped streamline my payments and invoicing!", author: "Alice, Graphic Designer" },
        { text: "A must-have tool for freelancers looking to expand.", author: "Mark, Digital Marketer" }
    ];

    const testimonialsContainer = document.querySelector('.testimonials');
    const activeClass = 'active'; // Class to toggle visibility
    let currentTestimonialIndex = 0;

    function updateTestimonialDisplay() {
        testimonials.forEach((testimonial, index) => {
            let testimonialElement = document.createElement('div');
            testimonialElement.className = 'testimonial rounded-lg p-6 text-center';
            testimonialElement.innerHTML = `
                <h4 class="text-xl tracking-tight font-bold">What Our Users Say</h4>
                <p class="mt-3 font-light italic testimonial-text">"${testimonial.text}"</p>
                <h5 class="mt-3 font-medium testimonial-author">${testimonial.author}</h5>
            `;

            if (index === currentTestimonialIndex) {
                testimonialElement.classList.add(activeClass);
            }

            testimonialsContainer.appendChild(testimonialElement);
        });
    }

    function nextTestimonial() {
        let testimonials = document.querySelectorAll('.testimonial');
        testimonials[currentTestimonialIndex].classList.remove(activeClass);
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add(activeClass);
    }

    setInterval(nextTestimonial, 2000); // Change testimonial every 2 seconds

    // Clear previous testimonials and load new ones
    testimonialsContainer.innerHTML = '';
    updateTestimonialDisplay();
});


//Function 2 - Functions to disable the create account button, and enable button only when a radio is selected on the sign-up page. Wrapping this part of my script to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    //Function 2 - Functions to disable the create account button, and enable button only when a radio is selected on the sign-up page
    const accountTypeRadios = document.querySelectorAll('input[name="account-type"]');
    const createAccountButton = document.querySelector('button[type="submit"]');

    // Initially disable the button
    createAccountButton.disabled = true;
    createAccountButton.classList.add('bg-gray-400', 'cursor-not-allowed');
    createAccountButton.classList.remove('bg-primary', 'hover:bg-blue-800', 'focus:ring-blue-300');

    // Function to enable button if any radio is selected
    function updateButtonState() {
        const isAnySelected = Array.from(accountTypeRadios).some(radio => radio.checked);
        if (isAnySelected) {
            createAccountButton.disabled = false;
            createAccountButton.classList.remove('bg-gray-400', 'cursor-not-allowed');
            createAccountButton.classList.add('bg-primary', 'hover:bg-blue-800', 'focus:ring-blue-300');
        } else {
            createAccountButton.disabled = true;
            createAccountButton.classList.add('bg-gray-400', 'cursor-not-allowed');
            createAccountButton.classList.remove('bg-primary', 'hover:bg-blue-800', 'focus:ring-blue-300');
        }
    }

    // Add event listeners to radio buttons
    accountTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateButtonState);
    });
    // Handle form submission event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check which radio button is selected and redirect accordingly
    if (document.getElementById('freelancer').checked) {
        window.location.href = 'signup_freelancer.html'; // Redirect to freelancer sign-up page
    } else if (document.getElementById('client').checked) {
        window.location.href = 'signup_client.html'; // Redirect to client sign-up page
    }
});
});