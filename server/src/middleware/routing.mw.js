import { join } from 'path';

function stateRouting(req, res, next) {
    //if going to be served by /api else send index.html for react
    if (isServerAsset(req.url)) {
        next();
    } else {
        res.sendFile(join(__dirname, '../../../client/index.html'));
    }
}

function isServerAsset(path) {
    //spliting url 
    let pieces = path.split('/');
    //if just '/' send file
    if (pieces.length === 0) {
        return false;
    }
    //get last param of url
    let last = pieces[pieces.length - 1];
}