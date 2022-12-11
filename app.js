// setup express app
const express = require('express');
const app = express();

const PORT = process.env.PORT ? process.env.PORT : 8000;

// routes 
// send device name and time

app.get('/', (req, res) => {
    res.send(`Hello ${new Date()} ${req.hostname}`);
}
);

// listen for requests
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}
);
