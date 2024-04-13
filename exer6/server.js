import mongoose from 'mongoose';


// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

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
newStudent = new Student({
    stdnum: "2022-12345",
    fname: "Mary Jane",
    lname: "Watson",
    age: 23
});

await newStudent.save();
newStudent = new Student({
    stdnum: "2020-67891",
    fname: "Sherlock",
    lname: "Holmes",
    age: 21
});

await newStudent.save();
newStudent = new Student({
    stdnum: "2021-12345",
    fname: "James",
    lname: "Moriarty",
    age: 21
});

await newStudent.save();
newStudent = new Student({
    stdnum: "2023-67891",
    fname: "John H.",
    lname: "Watson",
    age: 22
});

await newStudent.save();
await Student.updateOne({
    fname: "Mary Jane"
},
{$set: {fname: "Parker"}}
);
await Student.deleteOne({
    stdnum: '2018-10347'
});
await Student.deleteMany({age: '22'});