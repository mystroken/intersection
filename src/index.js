'use strict';
/*
---------------------------------------------------------------
  INTERSECTION
---------------------------------------------------------------

OPTIONS
========

root:
bound:
offset:
threshold:


METHODS
========

observe()
unobserve()
dispose()


EXAMPLE
========

const options = {};
const o = new Intersection(options);
o.observe(document.querySelectorAll('.in-view'));

o.on();

*/

function IntersectionEntry() {}

function Intersection() {}

Intersection.prototype = {
  dispose: function() {},
  observe: function() {},
  unobserve: function() {},
};

export default Intersection;
