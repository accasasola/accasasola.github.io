import express from 'express'
const app= express()

import router from ',/router.js';
router(app)
app.get('/', (req, res) =>  {
    res.send('Welcome to the Homepage')

});
app.listen(3000)