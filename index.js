const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/views/public'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.use((req, res)=>{res.render('404', {req})})
app.listen(8000, ()=>console.log("server started at port 8000"))