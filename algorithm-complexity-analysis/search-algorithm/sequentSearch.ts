/**
 *
 * @param arr 查找的数组
 * @param num 查找的数字
 * @returns 找到返回该数字在数组的索引，否则返回-1
 */
export default function sequentSearch(arr: number[], num: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i
  }
  return -1
}
