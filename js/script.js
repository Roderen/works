"use strict";

// #1
// const arr1 = []
// console.log(arr1.concat([1, 2, 3], [4, 5, 6]))

// #2
// const arr2 = [1, 2, 3]
// console.log(arr2.reverse())

// #3
// const arr3 = [1, 2, 3]
// arr3.push(4, 5, 6)
// console.log(arr3)

// #4
// const arr4 = [1, 2, 3]
// arr4.unshift(4, 5, 6)
// console.log(arr4)

// #5
// const arr5 = ['js', 'css', 'jq']
// alert(arr5[0])

// #6
// const arr6 = ['js', 'css', 'jq']
// alert(arr6.slice(-1)[0])

// #7
// const arr7 = [1, 2, 3, 4, 5]
// const result = arr7.slice(0, 3)
// console.log(result)

// #8
// const arr8 = [1, 2, 3, 4, 5]
// const result = arr8.slice(-2)
// console.log(result)

// #9
// const arr9 = [1, 2, 3, 4, 5]
// arr9.splice(1, 2)
// console.log(arr9)

// #10
// const arr10 = [1, 2, 3, 4, 5]
// const result = arr10.slice(1, 4)
// console.log(result)


// #11
// const arr11 = [1, 2, 3, 4, 5]
// arr11.splice(3, 0, 'a', 'b', 'c')
// console.log(arr11)

// #12
// const arr12 = [1, 2, 3, 4, 5]
// arr12.splice(1, 0, 'a', 'b')
// arr12.splice(-1, 0, 'c')
// arr12.push('e')
// console.log(arr12)

// #13
// const arr13 = [3, 4, 1, 2, 7]
// console.log(arr13.sort())

// #14
// const arr14 = [5, 6, 7, 8, 9]
// console.log(arr14.reduce((sum, current) => sum + current, 0))

// #15
// const arr15 = [5, 6, 7, 8, 9]
// console.log(arr15.map(item => item ** 2))

// #16
// const arr16 = [1,-3, 5, 6,-7, 8, 9,-11]
// console.log(arr16.filter(item => item > -1))

// #17
// const arr17 = [1,-3, 5, 6,-7, 8, 9,-11]
// console.log(arr17.filter(item => item % 2 === 0))

// #18
// const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
// console.log(arr18.filter(item => item.length > 5))

// #19
// const arr19 = [1, 2, [3, 4], 5, [6, 7]]
// console.log(arr19.filter(item => Array.isArray(item)))

// #20
// const arr20 = [5,-3, 6,-5, 0,-7, 8, 9]
// console.log(arr20.filter(item => item < 0).length)