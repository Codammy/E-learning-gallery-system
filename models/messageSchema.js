const mongoose = require('mongoose')

const messageFromAdminSchema = new  mongoose.Schema({
    body: String,
}, {timestamps: true})

const cpSchema = mongoose.Schema({
    title: String,
    body: String,
}, {timestamps: true})

const fileSchema = mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
}, {timestamps: true})

const imageSchema = mongoose.Schema({
    title: String,
    desc: String,
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
}, {timestamps: true})



const complain = mongoose.model('student', cpSchema)
const message = mongoose.model('student', messageFromAdminSchema)
const file = mongoose.model('student', fileSchema)
const image = mongoose.model('student', imageSchema)

export {
    complain,
    message, 
    file,
    image
}