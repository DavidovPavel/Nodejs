
var db = require( "../db" );


function User( who ) {
    this.name = who || "VAsia";
}

User.prototype.hello = function () {
    console.log( db.get( "Hello" ) + this.name );
}

console.log( 'user is required' );

module.exports = User;