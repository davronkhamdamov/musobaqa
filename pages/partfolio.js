const checkbox = document.querySelectorAll('.checkbox')
checkbox.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('checked')
    })
})