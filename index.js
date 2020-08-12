const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());



// REST for /dishes
app.use('/dishes', dishRouter);

// REST for /promotions
app.use('/promotions', promoRouter);

// REST for /leaders
app.use('/leaders', leaderRouter);

// this tell express to serve on static files from public folder
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
