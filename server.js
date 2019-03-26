const express = require('express');
const path = require('path');
const app = express();
const https = require('https');

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.static('src/public'))


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
