const form = document.getElementsByTagName('form')[0]
const user = document.getElementsByTagName('input')[0]
const key = document.getElementsByTagName('input')[1]
const bell = document.getElementsByClassName('fa-bell')[0]
const message = document.querySelector('.message')

const userError = user.nextElementSibling
const keyError = key.nextElementSibling
bell.addEventListener('click', ()=>{
    message.classList.toggle('announcement')
})
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    userError.textContent = ''
    keyError.textContent = ''
    const username = user.value
    const password = key.value
    fetch('/student/auth', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then((res)=>{
        res.json()
            .then((res)=>{
            if (res.username)
                userError.textcontent = 'Incorrect email'
            else if (res.password)
                keyError.textcontent = 'Incorrect password'
            console.log(res); alert('login error')
           })
    }).catch((err)=> console.log(err))
})