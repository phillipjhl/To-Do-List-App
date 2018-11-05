// list route
// will recieve all RESTful requests that deal with the list

import { Router } from 'express';
import listStore from '../liststore';

//test data
// let list = [
//     {
//         id: 1,
//         task: "go to store"
//     },
//     {
//         id: 2,
//         task: "do dishes"
//     }
// ];

let router = Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
        listStore.getTask(id)
        .then(task => {
            res.json(task);
        })
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
})

export default router;