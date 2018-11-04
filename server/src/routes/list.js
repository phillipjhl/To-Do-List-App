// list route
// will recieve all RESTful requests that deal with the list

import { Router } from 'express';

//test data
let list = [
    {
        id: 1,
        task: "go to store"
    },
    {
        id: 2,
        task: "do dishes"
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(list);
});

export default router;