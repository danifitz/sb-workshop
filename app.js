const newrelic = require('newrelic');
const express = require('express');
const app = express();
const port = 3000;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const users = ["dan@dan.com", "sam@sam.com", "sandip@sandip.com", "dami@dami.com", "dayo@dayo.com",
"eric@eric.com", "sandra@sandra.com", "laoise@laoise.com", "louise@louise.com", "maya@maya.com"];

app.get('/', (req, res) => {
    // if we don't like the default name, we can specifically name our transaction
    newrelic.setTransactionName('Web/myCustomTransaction');

    // Set a random username - usually we'd get this from the request payload
    newrelic.addCustomAttribute('username', users[getRandomIntInclusive(1, 10)]);
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));