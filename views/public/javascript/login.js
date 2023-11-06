const bell = document.getElementsByClassName('fa-bell')[0]
const message = document.querySelector('.message')

bell.addEventListener('click', ()=>{
    message.classList.toggle('announcement')
})