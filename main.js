'use strict'

const btnLookPhone = document.querySelector('.content__item-contact')
const btnTel = document.querySelector('.content__item-tel')

btnLookPhone.addEventListener('click', () => {
    btnLookPhone.style.display = 'none'
    btnTel.style.display = 'block'
})
