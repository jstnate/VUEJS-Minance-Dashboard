import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

const views = document.querySelectorAll('#view-switch')

views.forEach((view) => {
    view.addEventListener('click', () => {
        views.forEach((item) => {
            item.classList.remove('active')
        })
        view.classList.toggle('active')
})})

const burgerButton = document.getElementById('burger-button')
const burgerMenu = document.getElementById('burger-menu')

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active')
    burgerMenu.classList.toggle('active')
})

const profileButton = document.getElementById('profile-button')
const profileMenu = document.getElementById('profile-menu')

profileButton.addEventListener('click', () => {
    profileMenu.classList.toggle('active')
})

