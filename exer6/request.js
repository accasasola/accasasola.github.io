import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) =>{
    console.log(res.body);

});

needle.post(
    'http://localhost:3000/submit-data',{
        name: 'Armie',
        age: 21
    },
    (err,res) => {
        console.log(res.body)
    }
);