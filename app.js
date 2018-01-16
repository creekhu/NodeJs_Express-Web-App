const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
const nav = [
	{
	    Link: '/Books',
	    Text: 'Book'
    }, 
    {
	    Link: '/Authors',
	    Text: 'Author'
    }
];

const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav,
    });
});

app.get('/books', (req, res) => {
    res.send('Hello Books');
});

app.listen(port, err => {
    console.log('running server on port ' + port);
});