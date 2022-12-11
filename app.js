// setup express app
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 4000));

// routes 
// send device name and time

app.get('/', (req, res) => {
    res.send(`Hello World! ${new Date()} ${req.hostname}`);
}
);

// listen for requests
app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
}
);
