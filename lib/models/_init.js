const mongoose = require('mongoose');
const config = require('config');

const dbc = config.get('mongoose');

function auth(settings) {
    var authString = '';
    if (settings.user.length > 0 && settings.pass.length) {
        authString += settings.user;
        authString += ':';
        authString += settings.pass;
        authString += '@';
    }
    return authString;
}
const uri = 'mongodb://' + auth(dbc) + dbc.host + ':' + dbc.port + '/' + dbc.db;

mongoose.connect(uri, dbc);