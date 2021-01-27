/**
 * name: twoSum.test.ts
 * author: Deve
 * date: 2021-01-27
 */

import twoSum from '../twoSum';

describe('two sum', ()=>{
    it('return result', ()=>{
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
    it('return result', ()=>{
        expect(twoSum([3,2,4], 6)).toEqual([1,2])
    })
    it('return result', ()=>{
        expect(twoSum([3,3], 6)).toEqual([0,1])
    })
    it('return result', ()=>{
        expect(twoSum([3,3], 7)).toEqual([])
    })
})
