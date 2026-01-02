const { render } = require('ejs')
const express = require('express')



const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.send('about page')
    res.render('about')
})

// app.get('/users', (req, res) => {
//     res.render(`pages/users`)
// })

app.get('/users/:id', (req, res) => {
    res.render('users', { id: req.params.id })
})

app.post('/check', (req, res) => {
    
    const data = {
        name: req.body.name,
        city: req.body.city
    }
    console.log(data);
    return res.redirect('/')

})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);

})

