const Twit = require('twit');
const {BOT_CONSUMER, BOT_CONSUMERSECRET, BOT_ACCESS, BOT_ACCESS_SECRET } = process.env;




const T = new Twit({
    consumer_key: BOT_CONSUMER,
    consumer_secret: BOT_CONSUMERSECRET,
    access_token: BOT_ACCESS,
    access_token_secret: BOT_ACCESS_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});
// running hello world

T.post('statuses/update', { status: 'hello world!' }, function (err, data, response) {
    console.log(data)
});





