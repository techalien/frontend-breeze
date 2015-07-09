/*!
 * jQuery viewportOffset - v0.3 - 2/3/2010
 * http://benalman.com/projects/jquery-misc-plugins/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Like the built-in jQuery .offset() method, but calculates left and top from
// the element's position relative to the viewport, not the document.

(function(e){"$:nomunge";var t=e(window);e.fn.viewportOffset=function(){var n=e(this).offset();return{left:n.left-t.scrollLeft(),top:n.top-t.scrollTop()}}})(jQuery)