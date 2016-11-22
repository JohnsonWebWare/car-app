const express = require('express');
const versionedRoutes = require('express-versioned-routes');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const port = config.get('express.port');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('api/', versionedRoutes(
    path.join(__dirname, 'api'),
    config.get('api.supportedVersions')
));

app.listen(port, () => {
    console.log('Server listening on: ' + port);
})