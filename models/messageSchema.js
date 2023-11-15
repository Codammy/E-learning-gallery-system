const mongoose = require('mongoose')

const messageFromAdminSchema = new  mongoose.Schema({
    body: String,
}, {timestamps: true})

const cpSchema = mongoose.Schema({
    title: String,
    body: String,
    ref: mongoose.Schema.Types.ObjectId
}, {timestamps: true})

const fileSchema = mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
}, { timestamps: true })

const imageSchema = mongoose.Schema({
    title: String,
    desc: String,
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
}, {timestamps: true})



const complain = mongoose.model('complain', cpSchema)
const message = mongoose.model('message', messageFromAdminSchema)
const file = mongoose.model('document', fileSchema)
const image = mongoose.model('image', imageSchema)

module.exports = {
    complain,
    message, 
    file,
    image
}