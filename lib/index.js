'use strict';

/* eslint no-var: off */
var highVer = +process.versions.node.split('.')[0];

// istanbul ignore next
if (highVer < 4) {
    // The library requires Node.js 4 or later.
    throw new Error('DecRef requires Node.js v4 or later');
}

require('./command');
