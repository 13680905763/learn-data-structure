/**
 *
 * @param arr 查找的数组
 * @param num 查找的数字
 * @returns 找到返回该数字在数组的索引，否则返回-1
 */
export default function binarySearch(arr: number[], num: number) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    const midNum = arr[midIndex]
    if (midNum === num) return midIndex
    else if (midNum < num) {
      leftIndex = midIndex + 1
    } else {
      rightIndex = midIndex - 1
    }
  }
  return -1
}
export {}
