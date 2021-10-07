const express = require('express')
const axios = require('axios');
require('dotenv').config()
const app = express()
//port wo bin ich
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index.ejs',
        {
            title: 'heroku',
            apiKey: process.env.API_KEY,
            username: process.env.USERNAME
        })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/news', (req, res) => {
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-07&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
        .then(function (response) {
            // handle success
            console.log(response.data.articles);
            res.render('news.ejs', { articles: response.data.articles })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})