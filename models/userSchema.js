const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = new mongoose.Schema({
    firstname: String,
    secondname: String,
    email: String,
    matric: String,
    pass: String,
    department: String,
}, {timestamps: true})

const adminSchema = new mongoose.Schema({
    username: String,
    reg: String,
    pass: String,
}, {timestamps: true})

studentSchema.pre('save', function (){
    const salt = bcrypt.genSaltSync()
    this.pass = bcrypt.hashSync(this.pass, salt)
})

const Student = mongoose.model('Student', studentSchema)
const Admin = mongoose.model('Admin', adminSchema)

module.exports = {
    Student, 
    Admin
}