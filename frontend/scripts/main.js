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
})