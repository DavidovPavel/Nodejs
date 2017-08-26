'use strict';
var db = require( "./db" );
var User = require( './users' );
var log = require( './logger' )( module );

db.connect();

function run() {

    var http = require( 'http' );
    var port = process.env.PORT || 1337;

    http.createServer( function ( req, res ) {
        res.writeHead( 200, { 'Content-Type': 'text/plain' } );
        res.end( 'Hello World\n' );
    } ).listen( port );

    var user = new User( "Petia" );

    user.hello();

    log( db.get( "Connect success" ) );
}


if ( module.parent )
    exports.run = run;
else
    run();