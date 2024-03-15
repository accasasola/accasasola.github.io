import express from 'express';
import fs from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.post('/add-book', (req, res) => {
    const { name, isbn, author, year } = req.body;
    if (!name || !isbn || !author || !year) {
        return res.status(400).json({ success: false, error: 'Missing or empty fields' });
    }
    const bookData = `${name},${isbn},${author},${year}\n`;
    fs.appendFile('books.txt', bookData, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, error: 'Failed to add book' });
        }
        console.log('Book added:', bookData);
        res.json({ success: true });
    });
});

app.get('/find-by-isbn-author', (req, res) => {
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.send(data);
    });
});
app.get('/find-by-author', (req, res) => {
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.send(data);
    });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`Server started at port ${PORT}`); });
