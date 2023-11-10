const express = require('express')
const mongoose = require('mongoose')
const dbURI = require('process').env.MONGODB_CONNECT
const { Student, Admin } = require('./models/userSchema')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/views/public'))

mongoose.connect(dbURI)
.then(()=>{
    console.log("DB connectection successful...");
    app.listen(8000, ()=>console.log("server started at port 8000"))
}).catch((err)=>{
    if (err.code === 'ECONNREFUSED') {
        console.log("DB connection failed... check for internet connectivity and try again");
    app.listen(8000, ()=>console.log("server started at port 8000"))

    }
})

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/student/login', (req, res)=>{
    res.render('login')
})
app.get('/student/dashboard', (req, res)=>{
    res.render('studentDashboard')
})
app.get('/student/logout', (req, res)=>{
    res.redirect('/student/login')
})
app.post('/student/auth', (req, res)=>{
    res.redirect('/student/dashboard')
})

app.get('/admin/login', (req, res)=>{
    res.render('supportLogin')
})
app.get('/admin/dashboard', (req, res)=>{
    res.render('support')
})
app.post('/admin/auth', (req, res)=>{
    res.redirect('/admin/dashboard')
})

app.use((req, res)=>{res.render('404', {req})})