'use strict'
const menuBtn = document.querySelector('.hamburger-menu')
const overlay = document.querySelector('.overlay')
const dropdownNav = document.querySelectorAll('.dropdown')
const dropList = document.querySelectorAll('.dropdown-list')

menuBtn.addEventListener('click', function(){
    this.classList.toggle('open')
    overlay.classList.toggle('hidden')
})

dropdownNav.forEach(drop => {
    drop.addEventListener('click', function(e){
        drop.classList.toggle('open')
        drop.classList.toggle('active')
    })
})