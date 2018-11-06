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
    // Spliting url 
    let pieces = path.split('/');
    // If just '/' send file
    if (pieces.length === 0) {
        return false;
    }
    // Get last param of url
    let last = pieces[pieces.length - 1];
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        // If /api or /? was found
        return true;
    } else if(last.indexOf('.') !== -1) {
        // If '.' was found
        return true; // It must be a file extension
    } else {
        // If not a server asset but should be handled by client
        return false;
    }
}