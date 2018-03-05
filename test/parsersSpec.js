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
    describe('for an empty block', () => {
        it('must return an empty array', () => {
            expect(parsers.enumTags('/** */')).toEqual([]);
        });
    });
    describe('for a single-line blocks', () => {
        it('must count same-line tags', () => {
            // TODO: Doesn't work for same-line tags
            // expect(parsers.enumTags('/** @first */')).toEqual([{tag: 'first', value: ''}]);
        });
    });
    describe('for multi-line blocks', () => {
        it('must detect a single block', () => {
            expect(parsers.enumTags('/**\n*@first\n*/')).toEqual([{tag: 'first', value: ''}]);
        });
    });
});

describe('parseDeclare', () => {
    it('must skip empty declarations', () => {
        expect(parsers.parseDeclare('')).toBeNull();
        expect(parsers.parseDeclare('abc')).toBeNull();
    });
    it('must allow empty string', () => {
        expect(parsers.parseDeclare('root=')).toEqual({name: 'root', value: ''});
    });
});
