

var phrase;
exports.connect = function () {

    phrase = require( './ru' );

}

exports.get = function ( name ) {

    return phrase[name];

}