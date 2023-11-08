const sendMessage = document.getElementById('send-message')
const manageMessage = document.getElementById('manage-message')
const viewMessage = document.getElementById('view-student')

const cover = document.querySelector('.contain-to-send')
const sending = document.querySelector('.sending')
const cancel = document.querySelector('.fa-circle-xmark')
const write = document.querySelector('.write')
const select = document.getElementsByTagName('select')[0]
const file = document.getElementsByTagName('input')[0]
const image = document.querySelector('.img')

const upload = document.getElementById('upload')
sendMessage.addEventListener('click', (e)=>{
    cover.classList.toggle('cover')
    cover.classList.toggle('hide')
})
cancel.addEventListener('click', (e)=>{
    cover.classList.remove('cover')
    cover.classList.add('hide')
})
select.addEventListener('change', (e)=>{
    if (select.value === 'image') {
        image.classList.remove('hide')
        file.classList.add('hide')
        write.classList.add('hide')
        console.log("Image");
    } else if (select.value === 'document') {
        console.log("image");
        file.classList.remove('hide')
        image.classList.add('hide')
        write.classList.add('hide')
    } else if (select.value === 'text'){
        file.classList.add('hide')
        image.classList.add('hide')
        write.classList.remove('hide')
        console.log("Text message");
    }
    if (select.value !== '')
    {

        upload.setAttribute('disabled', 'false')
    }
})
manageMessage.addEventListener('click', (e)=>{})
viewMessage.addEventListener('click', (e)=>{})