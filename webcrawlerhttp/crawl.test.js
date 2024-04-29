const {normalizeUrl} = require('./crawl')

const {test, expect} = require('@jest/globals')

test('normalizeUrl strip protocol', () => {
    const input = 'http://example.com/path/';
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'example.com/path';
    expect(actualOutput).toEqual(expectedOutput)
})

test('normalizeUrl strip trailing slash', () => {
    const input = 'http://example.com/path/';
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'example.com/path';
    expect(actualOutput).toEqual(expectedOutput)
})
test('normalizeUrl capitals', () => {
    const input = 'http://WWW.example.com/path/';
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path';
    expect(actualOutput).toEqual(expectedOutput)
})

test('normalizeUrl strip http', () => {
    const input = 'https://www.example.com/path/';
    const actualOutput = normalizeUrl(input)
    const expectedOutput = 'www.example.com/path';
    expect(actualOutput).toEqual(expectedOutput)
})