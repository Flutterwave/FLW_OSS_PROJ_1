const testimonials = [
    {
        text: "Amazing platform, able to get my customers here...",
        author: "John, Backend Freelancer"
    },
    {
        text: "An amazing review, abcdef...",
        author: "Jane, UI/UX Designer"
    },
    {
        text: "Really helped streamline my payments and invoicing!",
        author: "Alice, Graphic Designer"
    },
    {
        text: "A must-have tool for freelancers looking to expand.",
        author: "Mark, Digital Marketer"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-toggle]').forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.querySelectorAll(`${toggle.dataset.toggle}`).forEach(element => {
                console.log(element.dataset)
                if (element.hasAttribute('data-expanded')) {
                    element.removeAttribute('data-expanded')
                } else {
                    element.setAttribute('data-expanded', '')
                }
            });
        })
    })

    document.querySelectorAll('[data-year]').forEach(el => {
        el.innerHTML = new Date().getFullYear()
    });

    let cTIndex = 0;

    const loadTestimonials = (index) => {
        const el = document.querySelector('.testimonials .testimonial')
        const parent = document.querySelector('.testimonials')
        parent.innerHTML = null
        testimonials.reverse().forEach((tst, i) => {
            const newEl = el.cloneNode(true)
            if (i !== 0) {
                newEl.classList.remove('active')
            }
            newEl.setAttribute('id', `testimonial-${i + 1}`)
            newEl.querySelector('.testimonial-text').innerHTML = tst.text
            newEl.querySelector('.testimonial-author').innerHTML = tst.author
            parent.insertAdjacentElement('afterbegin', newEl)
        })
    }

    const nextTestimonial = () => {
        i = (cTIndex + 1) % testimonials.length;
        document.querySelectorAll('.testimonials .testimonial').forEach(e => e.classList.remove('active'))
        document.querySelector(`.testimonials #testimonial-${i + 1}`).classList.add('active')
    }

    // Change testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Initialize first testimonial
    loadTestimonials(cTIndex);
})