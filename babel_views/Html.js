"use strict";

/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
var Html = function Html(_ref) {
  var body = _ref.body,
      title = _ref.title;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">" + body + "</div>\n    </body>\n  </html>\n";
};