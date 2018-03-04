'use strict';

const parsers = require('../lib/parsers');

describe('enumDocs', () => {
    describe('for an empty text', () => {
        it('must return an empty array', () => {
            expect(parsers.enumDocs('')).toEqual([]);
        });
    });
    describe('for single-line docs', () => {
        it('must detect the block', () => {
            const text = '/** hello */';
            expect(parsers.enumDocs(text)).toEqual([{startIndex: 0, endIndex: 11, doc: text}]);
        });
    });

    describe('for multiple single-line docs', () => {
        it('must detect all blocks', () => {
            const text = '/** one */ /** two */';
            expect(parsers.enumDocs(text)).toEqual([
                {startIndex: 0, endIndex: 9, doc: '/** one */'},
                {startIndex: 11, endIndex: 20, doc: '/** two */'}
            ]);
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
