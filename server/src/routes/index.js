//index.js - holds all the routes for the server
//all routes should be imported to here


import { Router } from 'express';
import listRouter from './list';

//create router to point to files
let router = Router();

//list router- will hold all the REST request for API
//url: '/api/list'
router.use('/list', listRouter);

export default router;