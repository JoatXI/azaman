import express from 'express';
import 'dotenv/config';
import axios from 'axios';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Azaman Web Application');
});

app.get('/api', async (req, res) => {
	try {
		const currencyList = await axios.get(
			`https://api.getgeoapi.com/v2/currency/convert?api_key=${process.env.REACT_APP_API_KEY}`
		);
		res.json(currencyList.data);
		console.log(currencyList);
		console.log('DATA::', currencyList.data);
	} catch (error) {
		console.error(error);
	}
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}...`);
});