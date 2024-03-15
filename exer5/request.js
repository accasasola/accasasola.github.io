import needle from 'needle';

needle.get('http://localhost:3000/find-by-isbn-author', {
    book: 'Everyday',
    isbn: '9780307931894'
},
    (err, res) => {
        console.log(res.body);
    });

needle.get('http://localhost:3000/find-by-author', {
    author: 'David Levithan'
}, (err, res) => {
    console.log(res.body);
});
needle.post(
    'http://localhost:3000/add-book',
    {
        book: 'Everyday',
        isbn: '9780307931894',
        author: 'David Levithan',
        year: '2012'
    },
    (err, res) => {
        console.log(res.body)
    }
);
