const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/users/:username/:id', (req, res) => {
    res.send(`page username:${req.params.username}--id:${req.params.id}`)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

})