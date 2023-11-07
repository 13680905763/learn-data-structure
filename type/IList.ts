// 栈 队列
interface Ilist<T> {
  peek(): T | undefined
  get isEmpty(): boolean
  get size(): number
}

export default Ilist
