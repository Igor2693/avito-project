'use strict'



// const btnLookPhone = document.querySelector('.content__item-contact')
// const btnTel = document.querySelector('.content__item-tel')

// btnLookPhone.addEventListener('click', () => {
//     btnLookPhone.style.display = 'none'
//     btnTel.style.display = 'block'
// })


// Модальное окно вход и регистрация

const login = document.querySelector('.login') 
const modalLogin = document.querySelector('.modal__login')
const modalClose = document.querySelector('.modal-close-img')


login.addEventListener('click', () => {
    modalLogin.style.display = 'block'
})
modalClose.addEventListener('click', () => {
    modalLogin.style.display = 'none'
})

