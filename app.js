// setup express app
const express = require('express');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT ? process.env.PORT : 8000;

// routes 
// send device name and time

app.get('/', (req, res) => {
    res.send(`Hello man next time you will be a developer ${process.env.DEVICE_NAME} ${new Date()}`);
}
);

// listen for requests
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}
);
