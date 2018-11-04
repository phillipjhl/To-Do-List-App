import '@babel/polyfill';
import{ join } from 'path';
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