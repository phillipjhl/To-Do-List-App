import { join } from 'path';

function stateRouting(req, res, next) {
    //if going to be served by /api else send index.html for react
    if (isServerAsset(req.url)) {
        next();
    } else {
        res.sendFile(join(__dirname, '../../../client/index.html'));
    }
}