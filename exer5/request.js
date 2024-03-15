import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/find-by-isbn-author', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/find-by-author', (err, res) => {
    console.log(res.body);
});
needle.post(
    'http://localhost:3000/add-book',
    {
        book: 'Everyday',
        isbn: '9780307931894'
    },
    (err, res) => {
        console.log(res.body)
    }
);
