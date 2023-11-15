const express = require('express')
const mongoose = require('mongoose')
const dbURI = require('process').env.MONGODB_CONNECT
const { Student, Admin } = require('./models/userSchema')
const { message, complain, file, image } = require('./models/messageSchema')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/views/public'))
app.use(express.json())

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

mongoose.connect(dbURI)
.then(()=>{
    console.log("DB connectection successful...");
    app.listen(8000, ()=>console.log("server started at port 8000"))
}).catch((err)=>{
    if (err.code === 'ECONNREFUSED') {
        console.log("DB connection failed... check for internet connectivity and try again");
    app.listen(8000, ()=>console.log("server started at port 8000"))
    }else{
        console.log(err);
    app.listen(8000, ()=>console.log("server started at port 8000"))
    }
})

app.get('/', (req, res)=>{
    res.render('index')
})

/* ----- Student Routes and endpoints ----- */
//Endpoints
app.get('/student/images', async (req, res)=>{
    const result = await image.find()
    res.json(result)
})
app.get('/student/documents', async (req, res)=>{
    const result = await file.find()
    res.json(result)
})
app.get('/student/messages', async (req, res)=>{
    const result = await message.find()
    res.json(result)
})
app.get('/student/images', async (req, res)=>{
    const result = await message.find()
    res.json(result)
})

//Routes
app.get('/student/login', (req, res)=>{
    res.render('login')
})
/*app.get('/student/dashboard', (req, res)=>{
    res.render('studentDashboard')
})*/
app.get('/student/logout', (req, res)=>{
    res.render('login')
})
app.post('/student/auth', (req, res)=>{
    const {username, password} = {...req.body}
    console.log(username, password);
    const user = Student.findOne({email: username})
    if (user){
        let cond = bcrypt.compareSync(password, user.pass)
        if (cond)
        {
            const msg = message.find()
            const fl = file.find()
            const img = image.find()
            res.render('studentDashboard', {user: user, messages: msg, documents: fl, images: img})
        }
        else
            res.json({password: "Incorrect password"})
    }
    res.json({username: "Incorrect email or username"})
})


/* ----- Admin Routes and endpoints ------- */
//Endpoints
app.post('/admin/new-student', async (req, res)=>{
    console.log(req.body)
    const user = await Student.create(req.body)
    res.json(user)
 })
app.post('/admin/post', upload.single('file') , async (req, res)=>{
    const contentType = req.body.format
    if (contentType === 'document') {
        const res = await file.create(res.file)
    } else if (contentType === 'image') {
        res.file.title = res.body.shortDesc
        res.file.desc = res.body.longtDesc
        const res = await image.create(res.file)
    } else {
        const msg = await message.create(res.body.body)
    }

    res.send('upload successful')
 })
 app.get('/admin/all-student',async (req, res)=>{
    const users = await Student.find()
    res.json(users)
})

//Routes
app.get('/admin/login', (req, res)=>{
    res.render('supportLogin')
})
app.get('/admin/dashboard', async (req, res)=>{
    const cp = await complain.find()
    res.render('support', {cp: cp})
})
app.post('/admin/auth', (req, res)=>{
    const {username, password} = {...req.body}
    console.log(username, password);
    const user = Admin.findOne({reg: username})
    if (user){
        let cond = bcrypt.compareSync(password, user.pass)
        if (cond)
            res.redirect('/admin/dashboard')
        else
            res.json({password: "Incorrect password"})
    }
    res.json({username: "Incorrect email or username"})
})

app.use((req, res)=>{res.render('404', {req})})