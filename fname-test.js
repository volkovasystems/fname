
const assert = require( "assert" );
const fname = require( "./fname.js" );

assert.equal( fname( function test( ){ } ), "test", "should return function name 'test'" );
assert.equal( fname( function( ){ } ), "", "should return empty function name" );
assert.equal( fname( "test" ), "test", "should return string 'test'" );

console.log( "ok" );
