import needle from 'needle';


needle.get('http://localhost:3000/find-by-isbn-author', {
    isbn: '9780307931894',
    author: 'David Levithan'
}, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);
    }
});

needle.get('http://localhost:3000/find-by-author', {
    author: 'David Levithan'
}, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);
    }
});

needle.post('http://localhost:3000/add-book', {
    name: 'Everyday',
    isbn: '9780307931894',
    author: 'David Levithan',
    year: '2012'
}, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);
    }
});
needle.post('http://localhost:3000/add-book', {
    name: 'Will, Grayson,Will Grayson',
    isbn: '9789510429167',
    author: 'David Levithan',
    year: '2010'
}, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);
    }
});
needle.post('http://localhost:3000/add-book', {
    name: 'We Were Liars',
    isbn: '9780385390095',
    author: 'E. Lockhart',
    year: '2014'
}, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.body);
    }
});