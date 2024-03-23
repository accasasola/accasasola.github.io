import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/ICS', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model
const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});
const newStudent = new Student({
    stdnum: "2018-10347",
    fname: "Armie",
    lname: "Casasola",
    age: 23
});

await newStudent.save();