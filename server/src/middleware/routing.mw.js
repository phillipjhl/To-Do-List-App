import { join } from 'path';

function stateRouting(req, res, next) {
    if (isServerAsset(req.url)) {
        next();
    } else {
        res.sendFile(join(__dirname, '../../../client/index.html'));
    }
}