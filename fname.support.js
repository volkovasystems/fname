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
              			"repository": "https://github.com/volkovasystems/fname.git",
              			"test": "fname-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract function name.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"kein": "kein",
              			"protype": "protype",
              			"stringe": "stringe",
              			"truly": "truly",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */

var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var stringe = require("stringe");
var truly = require("truly");
var wichevr = require("wichevr");

var FUNCTION_NAME_PATTERN = /^function\s*([a-zA-Z_][a-zA-Z0-9_]*)?\s*\(.*?\)\s*\{.*?\}$/m;

var fname = function fname(procedure) {
	/*;
                                       	@meta-configuration:
                                       		{
                                       			"procedure:required": "function"
                                       		}
                                       	@end-meta-configuration
                                       */

	if (falzy(procedure) || !protype(procedure, FUNCTION)) {
		throw new Error("invalid procedure");
	}

	if (kein("name", procedure) && truly(procedure.name) && protype(procedure.name, STRING)) {
		return procedure.name;
	}

	/*;
   	@note:
   		This is done as last resort to extracting function name.
   	@end-note
   */
	return wichevr(stringe(procedure).match(FUNCTION_NAME_PATTERN)[1], "");
};

module.exports = fname;

//# sourceMappingURL=fname.support.js.map