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
