
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

var assert = require("should");



//: @client:
var fname = require("./fname.support.js");
//: @end-client






//: @client:

describe("fname", function () {

	describe("`fname( 'test' )`", function () {
		it("should be equal to 'test'", function () {

			assert.equal(fname("test"), "test");

		});
	});

	describe("`fname( function test( ){ } )`", function () {
		it("should be equal to 'test'", function () {

			assert.equal(fname(function test() {}), "test");

		});
	});

	describe("`fname( ( { test( ){ } } ).test )`", function () {
		it("should be equal to 'test'", function () {

			assert.equal(fname({ test: function test() {} }.test), "test");

		});
	});


	describe("`fname( Error )`", function () {
		it("should be equal to 'Error'", function () {

			assert.equal(fname(Error), "Error");

		});
	});

	describe("`fname( )`", function () {
		it("should be equal to empty string", function () {

			assert.equal(fname(), "");

		});
	});


	describe("`fname( function( ){ } )`", function () {
		it("should be equal to empty string", function () {

			assert.equal(fname(function () {}), "");

		});
	});

	describe("`fname( ( ) => { } )`", function () {
		it("should be equal to empty string", function () {

			assert.equal(fname(function () {}), "");

		});
	});

	describe("`fname( ( entity ) => ( typeof entity == 'string' ) )`", function () {
		it("should be equal to empty string", function () {

			assert.equal(fname(function (entity) {return typeof entity == "string";}), "");

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZm5hbWUiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJ0ZXN0IiwiRXJyb3IiLCJlbnRpdHkiXSwibWFwcGluZ3MiOiI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxvQkFBVCxDQUFkO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDckNDLEtBQUksMkJBQUosRUFBaUMsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxNQUFQLENBQWQsRUFBK0IsTUFBL0I7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsZ0NBQVYsRUFBNEMsWUFBTztBQUNsREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPOztBQUV2Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFNBQVNJLElBQVQsR0FBZ0IsQ0FBRyxDQUExQixDQUFkLEVBQTRDLE1BQTVDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSCxVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUksMkJBQUosRUFBaUMsWUFBTzs7QUFFdkNKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBUyxFQUFFSSxJQUFGLGtCQUFTLENBQUcsQ0FBWixFQUFGLENBQW1CQSxJQUExQixDQUFkLEVBQWdELE1BQWhEOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUgsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLDRCQUFKLEVBQW1DLFlBQU87O0FBRXpDSixVQUFPSyxLQUFQLENBQWNILE1BQU9LLEtBQVAsQ0FBZCxFQUE4QixPQUE5Qjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUosVUFBVSxZQUFWLEVBQXdCLFlBQU87QUFDOUJDLEtBQUksaUNBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBZCxFQUF3QixFQUF4Qjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7O0FBU0FDLFVBQVUsMkJBQVYsRUFBdUMsWUFBTztBQUM3Q0MsS0FBSSxpQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFlBQVcsQ0FBRyxDQUFyQixDQUFkLEVBQXVDLEVBQXZDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksaUNBQUosRUFBeUMsWUFBTzs7QUFFL0NKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxZQUFPLENBQUcsQ0FBakIsQ0FBZCxFQUFtQyxFQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSx3REFBVixFQUFvRSxZQUFPO0FBQzFFQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILE1BQU8sVUFBRU0sTUFBRixVQUFnQixPQUFPQSxNQUFQLElBQWlCLFFBQWpDLEVBQVAsQ0FBZCxFQUFvRSxFQUFwRTs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQXBFRDs7QUFzRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImZuYW1lXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmbmFtZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5hbWUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCIuL2ZuYW1lLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZm5hbWVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgZm5hbWUoICd0ZXN0JyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndGVzdCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggXCJ0ZXN0XCIgKSwgXCJ0ZXN0XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmbmFtZSggZnVuY3Rpb24gdGVzdCggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndGVzdCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggZnVuY3Rpb24gdGVzdCggKXsgfSApLCBcInRlc3RcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZuYW1lKCAoIHsgdGVzdCggKXsgfSB9ICkudGVzdCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAndGVzdCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggKCB7IHRlc3QoICl7IH0gfSApLnRlc3QgKSwgXCJ0ZXN0XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYGZuYW1lKCBFcnJvciApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnRXJyb3InXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCBFcnJvciApLCBcIkVycm9yXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmbmFtZSggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgc3RyaW5nXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCApLCBcIlwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImBmbmFtZSggZnVuY3Rpb24oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZW1wdHkgc3RyaW5nXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCBmdW5jdGlvbiggKXsgfSApLCBcIlwiKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmbmFtZSggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBzdHJpbmdcIiAgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZuYW1lKCAoICkgPT4geyB9ICksIFwiXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBmbmFtZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gJ3N0cmluZycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBzdHJpbmdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmbmFtZSggKCBlbnRpdHkgKSA9PiAoIHR5cGVvZiBlbnRpdHkgPT0gXCJzdHJpbmdcIiApICksIFwiXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
