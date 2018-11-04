import '@babel/polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const CLIENT_PATH = join(_dirname, '../../client');

//Create express server
let app = express();

//Express middleware: must come before routes

//color-coding of HTTP requests to indentify status codes 
app.use(morgan('dev'));
//statically serve up all client files from given path
app.use(express.static(CLIENT_PATH));
//json parser- must be before the routes
app.use(express.json());
//api route that recieves all requests
app.use('/api', routes);

//stateRouting middleware to determine whether route conatins a server asset or not

//make node listen for request on given port
//if production- run on that given port by the node environment
//if dev- run on port 3000
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});