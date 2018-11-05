// list route
// will recieve all RESTful requests that deal with the list

import { Router } from 'express';
import listStore from '../liststore';

let router = Router();

//get request for 'api/list/:id?
router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
        listStore.getTask(id)
        .then(task => {
            res.json(task);
        })
        .catch(next);
    } else {
        listStore.getList()
            .then(list => {
                res.json(list);
            })
            //catch error and pass it to next middleware, reduces uncaught exceptions
            .catch(next);
    }
});

//post request for '/api/list
router.post('/', (req, res, next) => {
    listStore.createTask(req.body)
        .then(success => {
            res.sendStatus(201);
        })
        //catch error and pass it to next middleware, reduces uncaught exceptions
        .catch(next);
});

//put request to 'api/list/:id'
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    let task = req.body;
    listStore.updateTask(id, task)
    .then(success => {
        res.sendStatus(200);
    })
    .catch(next);
});

//delete request for 'api/list/:id
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    listStore.deleteTask(id)
    .then(success => {
        res.sendStatus(200);
    })
    .catch(next);
});

export default router;