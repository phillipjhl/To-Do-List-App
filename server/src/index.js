import '@babel/polyfill';
import{ join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

//Create express server
let app = express();