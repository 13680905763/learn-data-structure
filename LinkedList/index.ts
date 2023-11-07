import ILinkedList from './ILinkedList'

class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}
class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null
  private length: number = 0

  get size() {
    return this.length
  }
  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }
  peek(): T | undefined {
    return this.head?.value
  }
  // 追加节点
  append(value: T) {
    const newNode = new Node(value)

    // 判断head 是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      // 最后一个node
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.length++
  }
  // 遍历
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join('-->'))
  }
  // 插入
  insert(value: T, position: number) {
    // 越界判断
    if (position < 0 || position > this.length) return false

    const newNode = new Node(value)
    // 判断是否插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.length++
    return true
  }
  // 根据位置删除
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      const previous = this.getNode(position - 1)
      previous!.next = previous?.next?.next ?? null
      this.length--
    }
    return current?.value ?? null
  }
  // 删除值
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  // 获取
  get(position: number): T | null {
    if (position < 0 || position >= this.length) return null

    return this.getNode(position)?.value ?? null
  }
  // 更新
  update(value: T, position: number): boolean {
    if (position < 0 && position >= this.length) return false
    const current = this.getNode(position)
    current!.value = value
    return true
  }
  // 根据值 获取索引
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  get isEmpty(): boolean {
    return this.length === 0
  }
}

export default LinkedList
