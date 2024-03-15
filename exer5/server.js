import express from 'express';
import fs from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.post('/add-book', (req, res) => {
    const { name, isbn, author, year } = req.body;
    if (name && isbn && author && year) {
        const bookData = `Everyday,9783737343763,David Levithan,2012\n`;
        fs.appendFile('books.txt', bookData, (err) => {
            if (err) {
                console.error(err);
                res.json({ success: false });
            } else {
                console.log('Book added:', bookData);
                res.json({ success: true });
            }
        });
    } else {
        res.json({ success: false });
    }
});

app.get('/find-by-isbn-author', (req, res) => {
    const { isbn, author } = req.query;
    if (isbn && author) {
        res.json({ isbn, author });
    } else {
        res.status(400).json({ error: 'Missing parameters' });
    }
});

app.get('/find-by-author', (req, res) => {
    const { author } = req.query;
    if (author) {

        res.json({ author });
    } else {
        res.status(400).json({ error: 'Missing parameters' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.listen(3000, () => { console.log('Server started at port 3000') });


