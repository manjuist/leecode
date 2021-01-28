/**
 * name: longestPalindrome.test.ts
 * author: Deve
 * date: 2021-01-28
 */

import longestPalindrome from '../longestPalindrome';

describe('longest palindrome', ()=>{
    it('babad', ()=>{
        expect(longestPalindrome('ababad')).toBe('ababa')
    })
    it('cbbd', ()=>{
        expect(longestPalindrome('cbbd')).toBe('bb')
    })
    it('a', ()=>{
        expect(longestPalindrome('a')).toBe('a')
    })
    it('ac', ()=>{
        expect(longestPalindrome('ac')).toBe('a')
    })
})
