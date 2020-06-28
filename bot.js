
const Twit = require('twit');

require('dotenv').config()



const T = new Twit({
    consumer_key: process.env.BOT_CONSUMER,
    consumer_secret: process.env.BOT_CONSUMERSECRET,
    access_token: process.env.BOT_ACCESS,
    access_token_secret: process.env.BOT_ACCESS_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

T.post('statuses/update', { status: 'hello world!' }, function (
    err,
    data,
    response
) {
    console.log(data);
});
