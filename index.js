const app = require('./app'); // The actual Express application
const server = require('./server');


app.listen( process.env.PORT || server.PORT, () => {
	console.log(`Server running on port ${server.PORT}`);
});
