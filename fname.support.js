"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "fname",
              			"path": "fname/fname.js",
              			"file": "fname.js",
              			"module": "fname",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/fname.git",
              			"test": "fname-test.js",
              			"global": true
              		}
              	@end-module-configuratio	n
              
              	@module-documentation:
              		Extract function name.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"mtch": "mtch",
              			"nmde": "nmde"
              		}
              	@end-include
              */

var falzy = require("falzy");
var mtch = require("mtch");
var nmde = require("nmde");

var EMPTY_NAME = "";
var FUNCTION_NAME_PATTERN = /^(?:function)?\s*([a-zA-Z_][a-zA-Z0-9_]*)?\s*\(.*?\)\s*\{\s*.*?\s*\}$/m;
var NAME_PATTERN = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

var fname = function fname(procedure) {
	/*;
                                       	@meta-configuration:
                                       		{
                                       			"procedure:required": [
                                       				"function",
                                       				"string"
                                       			]
                                       		}
                                       	@end-meta-configuration
                                       */

	if (typeof procedure == "string") {
		if (NAME_PATTERN.test(procedure)) {
			return procedure;

		} else {
			return EMPTY_NAME;
		}
	}

	if (typeof procedure != "function") {
		return EMPTY_NAME;
	}

	/*;
   	@note:
   		Matching procedure to a function name pattern
   			is done as last resort to extracting function name.
   	@end-note
   */
	return nmde(procedure) || mtch(procedure, FUNCTION_NAME_PATTERN, 1);
};

module.exports = fname;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYW1lLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwibXRjaCIsIm5tZGUiLCJFTVBUWV9OQU1FIiwiRlVOQ1RJT05fTkFNRV9QQVRURVJOIiwiTkFNRV9QQVRURVJOIiwiZm5hbWUiLCJwcm9jZWR1cmUiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLGFBQWEsRUFBbkI7QUFDQSxJQUFNQyx3QkFBd0Isd0VBQTlCO0FBQ0EsSUFBTUMsZUFBZSwwQkFBckI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxTQUFoQixFQUEyQjtBQUN4Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLE9BQU9BLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDakMsTUFBSUYsYUFBYUcsSUFBYixDQUFtQkQsU0FBbkIsQ0FBSixFQUFvQztBQUNuQyxVQUFPQSxTQUFQOztBQUVBLEdBSEQsTUFHSztBQUNKLFVBQU9KLFVBQVA7QUFDQTtBQUNEOztBQUVELEtBQUksT0FBT0ksU0FBUCxJQUFvQixVQUF4QixFQUFvQztBQUNuQyxTQUFPSixVQUFQO0FBQ0E7O0FBRUQ7Ozs7OztBQU1BLFFBQU9ELEtBQU1LLFNBQU4sS0FBcUJOLEtBQU1NLFNBQU4sRUFBaUJILHFCQUFqQixFQUF3QyxDQUF4QyxDQUE1QjtBQUNBLENBaENEOztBQWtDQUssT0FBT0MsT0FBUCxHQUFpQkosS0FBakIiLCJmaWxlIjoiZm5hbWUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZm5hbWVcIixcblx0XHRcdFwicGF0aFwiOiBcImZuYW1lL2ZuYW1lLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJmbmFtZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJmbmFtZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZm5hbWUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmbmFtZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9cdG5cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXh0cmFjdCBmdW5jdGlvbiBuYW1lLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXG5cdFx0XHRcIm5tZGVcIjogXCJubWRlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IG10Y2ggPSByZXF1aXJlKCBcIm10Y2hcIiApO1xuY29uc3Qgbm1kZSA9IHJlcXVpcmUoIFwibm1kZVwiICk7XG5cbmNvbnN0IEVNUFRZX05BTUUgPSBcIlwiO1xuY29uc3QgRlVOQ1RJT05fTkFNRV9QQVRURVJOID0gL14oPzpmdW5jdGlvbik/XFxzKihbYS16QS1aX11bYS16QS1aMC05X10qKT9cXHMqXFwoLio/XFwpXFxzKlxce1xccyouKj9cXHMqXFx9JC9tO1xuY29uc3QgTkFNRV9QQVRURVJOID0gL15bYS16QS1aX11bYS16QS1aMC05X10qJC87XG5cbmNvbnN0IGZuYW1lID0gZnVuY3Rpb24gZm5hbWUoIHByb2NlZHVyZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb2NlZHVyZTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBwcm9jZWR1cmUgPT0gXCJzdHJpbmdcIiApe1xuXHRcdGlmKCBOQU1FX1BBVFRFUk4udGVzdCggcHJvY2VkdXJlICkgKXtcblx0XHRcdHJldHVybiBwcm9jZWR1cmU7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBFTVBUWV9OQU1FO1xuXHRcdH1cblx0fVxuXG5cdGlmKCB0eXBlb2YgcHJvY2VkdXJlICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHJldHVybiBFTVBUWV9OQU1FO1xuXHR9XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRNYXRjaGluZyBwcm9jZWR1cmUgdG8gYSBmdW5jdGlvbiBuYW1lIHBhdHRlcm5cblx0XHRcdFx0aXMgZG9uZSBhcyBsYXN0IHJlc29ydCB0byBleHRyYWN0aW5nIGZ1bmN0aW9uIG5hbWUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdHJldHVybiBubWRlKCBwcm9jZWR1cmUgKSB8fCBtdGNoKCBwcm9jZWR1cmUsIEZVTkNUSU9OX05BTUVfUEFUVEVSTiwgMSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbmFtZTtcbiJdfQ==
//# sourceMappingURL=fname.support.js.map
