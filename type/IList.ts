// 栈 队列
interface Ilist<T> {
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
}

export default Ilist
