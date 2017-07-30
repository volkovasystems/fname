
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

var assert = require("assert");



//: @client:
var fname = require("./fname.support.js");
//: @end-client






//: @client: 

describe("fname", function () {

	describe("\"fname( \"test\" )\"", function () {
		it("should return string 'test'", function () {

			assert.equal(fname("test"), "test");

		});
	});

	describe("\"fname( \"test\" )\"", function () {
		it("should return function name 'test'", function () {

			assert.equal(fname(function test() {}), "test");

		});
	});

	describe("\"fname( ( { test( ){ } } ).test )\"", function () {
		it("should return function name 'test'", function () {

			assert.equal(fname({ test: function test() {} }.test), "test");

		});
	});


	describe("\"assert.equal( fname( Error )\"", function () {
		it("should return 'Error'", function () {

			assert.equal(fname(Error), "Error");

		});
	});

	describe("\"fname( )\"", function () {
		it("should return empty string", function () {

			assert.equal(fname(), "");

		});
	});


	describe("\"fname( function( ){ } )\"", function () {
		it("should return empty string", function () {

			assert.equal(fname(function () {}), "");

		});
	});

	describe("\"fname( ( ) => { } )\"", function () {
		it("should return empty string", function () {

			assert.equal(fname(function () {}), "");

		});
	});

	describe("\"fname( ( entity ) => ( typeof entity == \"string\" ) )\"", function () {
		it("should return empty string", function () {

			assert.equal(fname(function (entity) {return typeof entity == "string";}), "");

		});
	});

});

//: @end-client








// const assert = require( "assert" );
// const fname = require( "./fname.js" );

// assert.equal( fname( "test" ), "test", "should return string 'test'" );

// assert.equal( fname( function test( ){ } ), "test", "should return function name 'test'" );

// assert.equal( fname( ( { test( ){ } } ).test ), "test", "should return function name 'test'" )

// assert.equal( fname( Error ), "Error", "should return 'Error'" );

// assert.equal( fname( ), "", "should return empty string" );

// assert.equal( fname( function( ){ } ), "", "should return empty string" );

// assert.equal( fname( ( ) => { } ), "", "should return empty string" );

// assert.equal( fname( ( entity ) => ( typeof entity == "string" ) ), "", "should return empty string" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZm5hbWUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ0ZXN0IiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxtQ0FBK0IsWUFBTztBQUNyQ0MsS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLE1BQVAsQ0FBZCxFQUErQixNQUEvQjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsbUNBQStCLFlBQU87QUFDdENDLEtBQUksb0NBQUosRUFBMEMsWUFBTzs7QUFFL0NKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxTQUFTSSxJQUFULEdBQWdCLENBQUcsQ0FBMUIsQ0FBZCxFQUE0QyxNQUE1Qzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUgsa0RBQWdELFlBQU87QUFDdkRDLEtBQUksb0NBQUosRUFBMEMsWUFBTzs7QUFFL0NKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBUyxFQUFFSSxJQUFGLGtCQUFTLENBQUcsQ0FBWixFQUFGLENBQW1CQSxJQUExQixDQUFkLEVBQWdELE1BQWhEOztBQUVBLEdBSkY7QUFLQyxFQU5EOzs7QUFTQUgsOENBQTRDLFlBQU87QUFDbkRDLEtBQUksdUJBQUosRUFBOEIsWUFBTzs7QUFFbkNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ssS0FBUCxDQUFkLEVBQThCLE9BQTlCOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBSiwwQkFBd0IsWUFBTztBQUMvQkMsS0FBSSw0QkFBSixFQUFtQyxZQUFPOztBQUV4Q0osVUFBT0ssS0FBUCxDQUFjSCxPQUFkLEVBQXdCLEVBQXhCOztBQUVBLEdBSkY7QUFLQyxFQU5EOzs7QUFTQUMseUNBQXVDLFlBQU87QUFDOUNDLEtBQUksNEJBQUosRUFBbUMsWUFBTzs7QUFFeENKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxZQUFXLENBQUcsQ0FBckIsQ0FBZCxFQUF1QyxFQUF2Qzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMscUNBQW1DLFlBQU87QUFDMUNDLEtBQUksNEJBQUosRUFBb0MsWUFBTzs7QUFFekNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxZQUFPLENBQUcsQ0FBakIsQ0FBZCxFQUFtQyxFQUFuQzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsd0VBQW9FLFlBQU87QUFDM0VDLEtBQUksNEJBQUosRUFBa0MsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxVQUFFTSxNQUFGLFVBQWdCLE9BQU9BLE1BQVAsSUFBaUIsUUFBakMsRUFBUCxDQUFkLEVBQW9FLEVBQXBFOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBLENBcEVEOztBQXNFQTs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImZuYW1lXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImZuYW1lL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9mbmFtZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcIi4vZm5hbWUuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5kZXNjcmliZSggXCJmbmFtZVwiLCAoICkgPT4ge1xyXG5cdFxyXG5cdGRlc2NyaWJlKCBgXCJmbmFtZSggXCJ0ZXN0XCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nICd0ZXN0J1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggXCJ0ZXN0XCIgKSwgXCJ0ZXN0XCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiZm5hbWUoIFwidGVzdFwiIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiBmdW5jdGlvbiBuYW1lICd0ZXN0J1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggZnVuY3Rpb24gdGVzdCggKXsgfSApLCBcInRlc3RcIik7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImZuYW1lKCAoIHsgdGVzdCggKXsgfSB9ICkudGVzdCApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gZnVuY3Rpb24gbmFtZSAndGVzdCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZm5hbWUoICggeyB0ZXN0KCApeyB9IH0gKS50ZXN0ICksIFwidGVzdFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0XHJcblx0ZGVzY3JpYmUoIGBcImFzc2VydC5lcXVhbCggZm5hbWUoIEVycm9yIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiAnRXJyb3InXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggRXJyb3IgKSwgXCJFcnJvclwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImZuYW1lKCApXCJgLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCByZXR1cm4gZW1wdHkgc3RyaW5nXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggKSwgXCJcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggYFwiZm5hbWUoIGZ1bmN0aW9uKCApeyB9IClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiBlbXB0eSBzdHJpbmdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCBmdW5jdGlvbiggKXsgfSApLCBcIlwiKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiZm5hbWUoICggKSA9PiB7IH0gKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgcmV0dXJuIGVtcHR5IHN0cmluZ1wiICAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCAoICkgPT4geyB9ICksIFwiXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cdFxyXG5cdGRlc2NyaWJlKCBgXCJmbmFtZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiApIClcImAsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIHJldHVybiBlbXB0eSBzdHJpbmdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZm5hbWUoICggZW50aXR5ICkgPT4gKCB0eXBlb2YgZW50aXR5ID09IFwic3RyaW5nXCIgKSApLCBcIlwiKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG4vLyBjb25zdCBmbmFtZSA9IHJlcXVpcmUoIFwiLi9mbmFtZS5qc1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGZuYW1lKCBcInRlc3RcIiApLCBcInRlc3RcIiwgXCJzaG91bGQgcmV0dXJuIHN0cmluZyAndGVzdCdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBmbmFtZSggZnVuY3Rpb24gdGVzdCggKXsgfSApLCBcInRlc3RcIiwgXCJzaG91bGQgcmV0dXJuIGZ1bmN0aW9uIG5hbWUgJ3Rlc3QnXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggZm5hbWUoICggeyB0ZXN0KCApeyB9IH0gKS50ZXN0ICksIFwidGVzdFwiLCBcInNob3VsZCByZXR1cm4gZnVuY3Rpb24gbmFtZSAndGVzdCdcIiApXHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGZuYW1lKCBFcnJvciApLCBcIkVycm9yXCIsIFwic2hvdWxkIHJldHVybiAnRXJyb3InXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggZm5hbWUoICksIFwiXCIsIFwic2hvdWxkIHJldHVybiBlbXB0eSBzdHJpbmdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBmbmFtZSggZnVuY3Rpb24oICl7IH0gKSwgXCJcIiwgXCJzaG91bGQgcmV0dXJuIGVtcHR5IHN0cmluZ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGZuYW1lKCAoICkgPT4geyB9ICksIFwiXCIsIFwic2hvdWxkIHJldHVybiBlbXB0eSBzdHJpbmdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBmbmFtZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiApICksIFwiXCIsIFwic2hvdWxkIHJldHVybiBlbXB0eSBzdHJpbmdcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.support.js.map
