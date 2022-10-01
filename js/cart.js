
let addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', () => {   
    let cartCounter = document.querySelector('.cart-count__count')
    cartCounter.textContent++
})

let buyBtn = document.querySelector('.buy-btn')
buyBtn.addEventListener('click', () => {
    let cartCounter = document.querySelector('.cart-count__count')
    cartCounter.textContent = 0
})