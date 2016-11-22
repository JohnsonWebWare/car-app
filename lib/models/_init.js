const mongoose = require('mongoose');

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

if (!mongoose.connection) {
    const config = require('config');
    const dbc = config.get('mongoose');
    const uri = 'mongodb://' + auth(dbc) + dbc.host + ':' + dbc.port + '/' + dbc.db;    
    mongoose.connect(uri, dbc);
}