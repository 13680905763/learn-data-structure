import IQueue from './IQueue'

// 不推荐用数组来实现 推荐用链表实现
class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = []
  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  get isEmpty(): boolean {
    return this.data.length === 0
  }
  get size(): number {
    return this.data.length
  }
}

export default ArrayQueue
