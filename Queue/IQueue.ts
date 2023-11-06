import Ilist from '../type/IList'

// 定义栈的结构
interface IQueue<T> extends Ilist<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
  // peek(): T | undefined
  // isEmpty(): boolean
  // size(): number
}
export default IQueue
