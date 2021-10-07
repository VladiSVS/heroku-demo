const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'home' })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})