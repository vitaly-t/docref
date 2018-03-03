const parsers = require('../lib/parsers');

describe('enumDocs', () => {
    describe('for empty text', () => {
        it('must return an empty array', () => {
            expect(parsers.enumDocs('')).toEqual([]);
        });
    });
});

describe('enumTags', () => {
    describe('for empty block', () => {
        it('must return an empty array', () => {
            expect(parsers.enumTags('/** */')).toEqual([]);
        });
    });
});
