const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html');
})

app.use(express.static('public'));

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/static/style.css');
});
    
app.get('/welcome-web', (req, res) => {
    res.render('welcome-web')
});

app.get('/signin', (req, res) => {
    res.render('signin')
});








app.listen(3000)
console.log('listening on port 3000');

