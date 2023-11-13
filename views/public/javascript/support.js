const sendMessage = document.getElementById('send-message')
const manageMessage = document.getElementById('manage-message')
const viewStudent = document.getElementById('view-student')

const cover = document.querySelector('.contain-to-send')
const sending = document.querySelector('.sending')
const cancel = document.querySelector('.cancel')
const write = document.querySelector('.write')
const select = document.getElementsByTagName('select')[0]
const file = document.getElementsByTagName('input')[0]
const image = document.querySelector('.img')

const upload = document.getElementById('upload')
sendMessage.addEventListener('click', (e) => {
    cover.classList.toggle('cover')
    cover.classList.toggle('hide')
})

cancel.addEventListener('click', (e) => {
    console.log("cancel1");
    cover.classList.remove('cover')
    cover.classList.add('hide')
})
select.addEventListener('change', (e) => {
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
    } else if (select.value === 'text') {
        file.classList.add('hide')
        image.classList.add('hide')
        write.classList.remove('hide')
        console.log("Text message");
    }
    if (select.value !== '') {
        upload.setAttribute('disabled', 'false')
    }
})

const table = document.querySelector(".students")
const tbody = document.getElementsByTagName('tbody')[0]
viewStudent.addEventListener('click', (e) => {
    try {
        const status = fetch('/all-student')
        console.log(status.body);
        let count = 0;
        for (const user of status.body) {
            tbody.innerHTML += `
        <tr id="student-details">
                <td>${count}</td>
                <td>${user.firstname} ${user.secondname}</td>
                <td>${user.emial}</td>
                <td>${user.department}</td>
                </tr>
                `
                count++
        }
    } catch (error) {
        console.log(error);
    }
    viewStudent.setAttribute('disabled', 'disabled')
})

const message = document.querySelector(".messages")
const cover2 = message.parentElement

manageMessage.addEventListener('click', (e) => {
    message.classList.toggle('message-drag-in')
    cover2.classList.toggle('cover2')
})

const currentM = document.querySelectorAll(".s")
const m = document.querySelector(".current-msg")
currentM.forEach(element => {
    element.addEventListener('click', (e) => {
        m.classList.toggle('curr')
    })
    element.removeEventListener('click', element)
});
const cancel2 = document.querySelector('.canc')
cancel2.addEventListener('click', (e) => {
    console.log("cancel2");
    message.classList.remove('message-drag-in')
    cover2.classList.remove('cover2')
    m.classList.remove('curr')

})

tbody.addEventListener('click', (e) => {
    console.log(e);
})


const newStudent = document.getElementById('add-new')
const studentData = document.querySelectorAll('#add-new input')

newStudent.addEventListener('submit', (e) => {
    e.preventDefault()
    const dataLabel = {
        firstname: studentData[0].value,
        secondname: studentData[1].value,
        email: studentData[2].value,
        pass: studentData[3].value,
        matric: studentData[4].value,
        department: studentData[5].value
    }
    for (const iterator of studentData) {
        iterator.value = ''
    }
    fetch('/new-student', {
        method: 'POST',
        body: JSON.stringify(dataLabel)
    }).then((res) => {
        alert('Student DB update successful')
    }).catch((err) => {alert('Error occured')})
})
