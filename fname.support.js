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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZuYW1lLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwibXRjaCIsIm5tZGUiLCJFTVBUWV9OQU1FIiwiRlVOQ1RJT05fTkFNRV9QQVRURVJOIiwiTkFNRV9QQVRURVJOIiwiZm5hbWUiLCJwcm9jZWR1cmUiLCJ0ZXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLGFBQWEsRUFBbkI7QUFDQSxJQUFNQyx3QkFBd0Isd0VBQTlCO0FBQ0EsSUFBTUMsZUFBZSwwQkFBckI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxTQUFoQixFQUEyQjtBQUN4Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLE9BQU9BLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDakMsTUFBSUYsYUFBYUcsSUFBYixDQUFtQkQsU0FBbkIsQ0FBSixFQUFvQztBQUNuQyxVQUFPQSxTQUFQOztBQUVBLEdBSEQsTUFHSztBQUNKLFVBQU9KLFVBQVA7QUFDQTtBQUNEOztBQUVELEtBQUksT0FBT0ksU0FBUCxJQUFvQixVQUF4QixFQUFvQztBQUNuQyxTQUFPSixVQUFQO0FBQ0E7O0FBRUQ7Ozs7OztBQU1BLFFBQU9ELEtBQU1LLFNBQU4sS0FBcUJOLEtBQU1NLFNBQU4sRUFBaUJILHFCQUFqQixFQUF3QyxDQUF4QyxDQUE1QjtBQUNBLENBaENEOztBQWtDQUssT0FBT0MsT0FBUCxHQUFpQkosS0FBakIiLCJmaWxlIjoiZm5hbWUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJmbmFtZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJmbmFtZS9mbmFtZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJmbmFtZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImZuYW1lXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ZuYW1lLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJmbmFtZS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9cdG5cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RXh0cmFjdCBmdW5jdGlvbiBuYW1lLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXHJcblx0XHRcdFwibm1kZVwiOiBcIm5tZGVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgbXRjaCA9IHJlcXVpcmUoIFwibXRjaFwiICk7XHJcbmNvbnN0IG5tZGUgPSByZXF1aXJlKCBcIm5tZGVcIiApO1xyXG5cclxuY29uc3QgRU1QVFlfTkFNRSA9IFwiXCI7XHJcbmNvbnN0IEZVTkNUSU9OX05BTUVfUEFUVEVSTiA9IC9eKD86ZnVuY3Rpb24pP1xccyooW2EtekEtWl9dW2EtekEtWjAtOV9dKik/XFxzKlxcKC4qP1xcKVxccypcXHtcXHMqLio/XFxzKlxcfSQvbTtcclxuY29uc3QgTkFNRV9QQVRURVJOID0gL15bYS16QS1aX11bYS16QS1aMC05X10qJC87XHJcblxyXG5jb25zdCBmbmFtZSA9IGZ1bmN0aW9uIGZuYW1lKCBwcm9jZWR1cmUgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInByb2NlZHVyZTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCB0eXBlb2YgcHJvY2VkdXJlID09IFwic3RyaW5nXCIgKXtcclxuXHRcdGlmKCBOQU1FX1BBVFRFUk4udGVzdCggcHJvY2VkdXJlICkgKXtcclxuXHRcdFx0cmV0dXJuIHByb2NlZHVyZTtcclxuXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIEVNUFRZX05BTUU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIHByb2NlZHVyZSAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHJldHVybiBFTVBUWV9OQU1FO1xyXG5cdH1cclxuXHJcblx0Lyo7XHJcblx0XHRAbm90ZTpcclxuXHRcdFx0TWF0Y2hpbmcgcHJvY2VkdXJlIHRvIGEgZnVuY3Rpb24gbmFtZSBwYXR0ZXJuXHJcblx0XHRcdFx0aXMgZG9uZSBhcyBsYXN0IHJlc29ydCB0byBleHRyYWN0aW5nIGZ1bmN0aW9uIG5hbWUuXHJcblx0XHRAZW5kLW5vdGVcclxuXHQqL1xyXG5cdHJldHVybiBubWRlKCBwcm9jZWR1cmUgKSB8fCBtdGNoKCBwcm9jZWR1cmUsIEZVTkNUSU9OX05BTUVfUEFUVEVSTiwgMSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmbmFtZTtcclxuIl19
//# sourceMappingURL=fname.support.js.map
