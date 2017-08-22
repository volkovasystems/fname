
"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "fname",
			"path": "fname/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/fname.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"fname": "fname"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const fname = require( "./fname.js" );
//: @end-server

//: @client:
const fname = require( "./fname.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "fname", ( ) => {

	describe( `"fname( "test" )"`, ( ) => {
		it( "should be equal to string 'test'", ( ) => {

			assert.equal( fname( "test" ), "test" );

		} );
	} );

	describe( `"fname( "test" )"`, ( ) => {
	it( "should be equal to function name 'test'", ( ) => {

			assert.equal( fname( function test( ){ } ), "test");

		} );
	} );

	describe( `"fname( ( { test( ){ } } ).test )"`, ( ) => {
	it( "should be equal to function name 'test'", ( ) => {

			assert.equal( fname( ( { test( ){ } } ).test ), "test" );

		} );
	} );


	describe( `"assert.equal( fname( Error )"`, ( ) => {
	it( "should be equal to 'Error'" , ( ) => {

			assert.equal( fname( Error ), "Error" );

		} );
	} );

	describe( `"fname( )"`, ( ) => {
	it( "should be equal to empty string" , ( ) => {

			assert.equal( fname( ), "" );

		} );
	} );


	describe( `"fname( function( ){ } )"`, ( ) => {
	it( "should be equal to empty string" , ( ) => {

			assert.equal( fname( function( ){ } ), "");

		} );
	} );

	describe( `"fname( ( ) => { } )"`, ( ) => {
	it( "should be equal to empty string"  , ( ) => {

			assert.equal( fname( ( ) => { } ), "" );

		} );
	} );

	describe( `"fname( ( entity ) => ( typeof entity == "string" ) )"`, ( ) => {
	it( "should be equal to empty string", ( ) => {

			assert.equal( fname( ( entity ) => ( typeof entity == "string" ) ), "");

		} );
	} );

} );


//: @end-server


//: @client:

describe( "fname", ( ) => {

	describe( `"fname( "test" )"`, ( ) => {
		it( "should be equal to string 'test'", ( ) => {

			assert.equal( fname( "test" ), "test" );

		} );
	} );

	describe( `"fname( "test" )"`, ( ) => {
	it( "should be equal to function name 'test'", ( ) => {

			assert.equal( fname( function test( ){ } ), "test");

		} );
	} );

	describe( `"fname( ( { test( ){ } } ).test )"`, ( ) => {
	it( "should be equal to function name 'test'", ( ) => {

			assert.equal( fname( ( { test( ){ } } ).test ), "test" );

		} );
	} );


	describe( `"assert.equal( fname( Error )"`, ( ) => {
	it( "should be equal to 'Error'" , ( ) => {

			assert.equal( fname( Error ), "Error" );

		} );
	} );

	describe( `"fname( )"`, ( ) => {
	it( "should be equal to empty string" , ( ) => {

			assert.equal( fname( ), "" );

		} );
	} );


	describe( `"fname( function( ){ } )"`, ( ) => {
	it( "should be equal to empty string" , ( ) => {

			assert.equal( fname( function( ){ } ), "");

		} );
	} );

	describe( `"fname( ( ) => { } )"`, ( ) => {
	it( "should be equal to empty string"  , ( ) => {

			assert.equal( fname( ( ) => { } ), "" );

		} );
	} );

	describe( `"fname( ( entity ) => ( typeof entity == "string" ) )"`, ( ) => {
	it( "should be equal to empty string", ( ) => {

			assert.equal( fname( ( entity ) => ( typeof entity == "string" ) ), "");

		} );
	} );

} );

//: @end-client


//: @bridge:



//: @end-bridge
