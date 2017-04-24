
const fname = require( "./fname.js" );

console.log( "named: ", fname( function hello( ){ } ) );
console.log( "anonymous: ", fname( function( ){ } ) );
