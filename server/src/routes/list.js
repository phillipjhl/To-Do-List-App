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

//route works
router.get('/', (req, res, next) => {
    listStore.getList()
    .then(list => {
        res.json(list);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    listStore.createTask(req.body)
    .then(success => {
        res.sendStatus(201);
    })
    .catch(next);
})

export default router;