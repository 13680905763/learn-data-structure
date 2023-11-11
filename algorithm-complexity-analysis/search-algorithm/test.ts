import sequentSearch from './sequentSearch'

const arr = new Array(1000000).fill(0).map((_, index) => index)
const num = Math.floor(Math.random() * 1000000)

const startTime = performance.now()
const index = sequentSearch(arr, num)
const endTime = performance.now()

console.log('索引的位置：', index, '消耗的时间：', endTime - startTime + 'ms')

const startTime1 = performance.now()
const index1 = sequentSearch(arr, num)
const endTime1 = performance.now()
console.log('索引的位置：', index1, '消耗的时间：', endTime1 - startTime1 + 'ms')
