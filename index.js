const express = require('express')
const app = express()
//port wo bin ich
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'heroku' })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})