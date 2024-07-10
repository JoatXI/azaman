import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Azzaman Web Application');
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}...`);
});