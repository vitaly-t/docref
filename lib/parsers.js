'use strict';

//////////////////////////////////////////////////////
// Enumerates all jsDoc blocks from text, and returns
// an array of {startIndex, endIndex, doc}
function enumDocs(source) {
    const result = [];
    const pattern = /\/\*\*\s*([^*]*(\*[^/])?)*\*\//g;
    let match;
    while ((match = pattern.exec(source))) {
        result.push({
            startIndex: match.index,
            endIndex: pattern.lastIndex - 1,
            doc: match[0]
        });
    }
    return result;
}

//////////////////////////////////////////////////////
// Enumerates all tags with values from a jsDoc block,
// and returns an array of {tag, value}.
// The value must be on the same line as the tag, i.e.
// multi-line values are not supported.
function enumTags(doc) {
    const result = [];
    const pattern = /\n\s*\*\s*@(\S*)(.*)/g;
    let match;
    while ((match = pattern.exec(doc))) {
        result.push({
            tag: match[1],
            value: match[2].trim()
        });
    }
    return result;
}

//////////////////////////////////////////////
// Parses value for @declare tag, and returns
// either {name, value} or null.
function parseDeclare(value) {
    const m = value.match(/(\S*)\s*=\s*(.*)/);
    if (m) {
        const name = m[1];
        const value = m[2].trim();
        return {name, value};
    }
    return null;
}

module.exports = {
    enumDocs,
    enumTags,
    parseDeclare
};
