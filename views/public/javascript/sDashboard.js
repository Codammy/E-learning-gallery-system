const messageStatus = document.querySelectorAll('.initial-state')
const appear = document.querySelectorAll('.user .title')

const settings = document.querySelector('.settings')
const showSettings = document.querySelector('.setting-preview')

const sendMessage = document.querySelector('.sendMessage')
const showForm = document.querySelector('.contain-form')

const form = document.getElementById('complain')


const images = document.querySelector('.image')
const documents = document.querySelector('.documents')
const texts = document.querySelector('.text')
const course = document.querySelector('.mother-course')
const main = document.querySelector('.main .content')
const mother_message = document.querySelector('.mother-messages')
const initial_message = document.querySelector('.initial-message')
console.log(documents);

function toggleNone(params) {
    for (let i = 0; i < main.children.length; i++) {
        const element = main.children[i];
        element.style.display = 'none'
    }
    console.log(params);
    if (params)
    {
        mother_message.style.display = 'block'
        for (let i = 0; i < mother_message.children.length; i++) {
            const element = mother_message.children[i];
            element.style.display = 'none'
        }
    }
}

form.addEventListener('click', (e)=>{
    e.stopPropagation()
})
appear[0].addEventListener('click', ()=>{
    messageStatus[0].classList.toggle('contain-msg')
    toggleNone()
    initial_message.style.display = 'grid'
})
appear[1].addEventListener('click', ()=>{
    messageStatus[1].classList.toggle('contain-courses')
    toggleNone()
    course.style.display = 'grid'
})
settings.addEventListener('click', ()=>{
    showSettings.classList.toggle('setting-preview-hide')
})
sendMessage.addEventListener('click', ()=>{
    showForm.classList.toggle('hide')
    toggleNone()
})
showForm.addEventListener('click', (e)=>{
    showForm.classList.toggle('hide')
    toggleNone()
})
const element = messageStatus[0].children
console.log(element);

element[0].addEventListener('click', (e)=>{
    toggleNone('messages')
    images.style.display = 'block'
})
element[1].addEventListener('click', (e)=>{
    toggleNone('messages')
    documents.style.display = 'grid'
})
element[2].addEventListener('click', (e)=>{
    toggleNone('messages')
    texts.style.display = 'block'
})

