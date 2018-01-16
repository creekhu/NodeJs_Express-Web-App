const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.static('public'));
app.use(express.static('src/views'));


//route to homepage
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/books', (req, res) => {
	res.send('Books');
});

app.listen(port, err => {
	console.log('Running server on ' + port);
});

