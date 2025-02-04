const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

//returns middleware fn configured to set cors head of access-control-allow-origin on response object
//with wildcard as its value, allows cors with all origins
exports.cors = cors();

//returns middleware function that checks if incoming request belongs to whitelisted origins
//if so, returns cors head of access-control-allow-origin with whitelisted origin as value
//if not, no cors header in response
//apply on endpoints we only want to allow whitelisted cors requests
exports.corsWithOptions = cors(corsOptionsDelegate);