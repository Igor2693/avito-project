'use strict'


const regClose = document.querySelector('.reg-close-img')
const modalReg = document.querySelector('.modal__reg')
const regModalOpen = document.querySelector('.registration')
const modalRegForm = modalReg.querySelector('.modal__reg-form')
const obj = {}

const loginReg = modalReg.querySelector('.reg-form-login')
const passReg = modalReg.querySelector('.reg-form-password')
const emailReg = modalReg.querySelector('.reg-form-email')
const nameReg = modalReg.querySelector('.reg-form-name')


regClose.addEventListener('click', () => {
    modalReg.style.display = 'none'
})
regModalOpen.addEventListener('click', () => {
    modalReg.style.display = 'block'
    document.querySelector('.modal__login').style.display = 'none'
})


modalRegForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let isError = false

    if(!/[^a-z\d]/gi.test(loginReg.value) && loginReg.value !== '') {
        obj.login = loginReg.value
        console.log('1');
        
    } else {
        isError = true
    }
    if(!/[^a-z\d\!]/gi.test(passReg.value) && passReg.value !== '') {
        obj.password = passReg.value
        console.log('2');
    } else {
        isError = true
    }
    if(!/[^a-z\d\@\.\!\-]/gi.test(emailReg.value) && emailReg.value !== '') {
        obj.email = emailReg.value
        console.log('3');
    } else {
        isError = true
    }
    if(!/[^а-я\s]/gi.test(nameReg.value) && nameReg.value !== '') {
        obj.userName = nameReg.value
        console.log('4');
    } else {
        isError = true
    }

    if(!isError) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            
        loginReg.value = ''
        passReg.value = ''
        emailReg.value = ''
        nameReg.value = ''
    }
})