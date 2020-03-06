const newrelic = require('newrelic');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    newrelic.setTransactionName('index')
    newrelic.addCustomAttribute('myCustomAttr', 'Daniel is the best')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))