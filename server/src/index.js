import '@babel/polyfill';
import{ join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

//Create express server
let app = express();

//Express middleware: must come before routes

//color-coding of HTTP requests to indentify status codes 
app.use(morgan('dev'));