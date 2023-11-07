const messageStatus = document.querySelectorAll('.initial-state')
const appear = document.querySelectorAll('.user .title')

const settings = document.querySelector('.settings')
const showSettings = document.querySelector('.setting-preview')

const sendMessage = document.querySelector('.sendMessage')
const showForm = document.querySelector('.contain-form')

const form = document.getElementById('complain')

form.addEventListener('click', (e)=>{
    e.stopPropagation()
})
appear[0].addEventListener('click', ()=>{
    messageStatus[0].classList.toggle('contain-msg')
})
appear[1].addEventListener('click', ()=>{
    messageStatus[1].classList.toggle('contain-courses')
})
settings.addEventListener('click', ()=>{
    showSettings.classList.toggle('setting-preview-hide')
})
sendMessage.addEventListener('click', ()=>{
    showForm.classList.toggle('hide')
})
showForm.addEventListener('click', (e)=>{
    showForm.classList.toggle('hide')
    e.stopPropagation()
})

const course = document.querySelector('.mother-course')
const images = document.querySelector('.image')
const documents = document.querySelector('.documents')
const texts = document.querySelector('.text')

const images_status = getComputedStyle(images)
const documents_status = getComputedStyle(documents)
const texts_status = getComputedStyle(texts)

