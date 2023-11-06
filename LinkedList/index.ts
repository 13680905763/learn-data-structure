class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}
class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length(): number {
    return this.size
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

    this.size++
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

  insert(value: T, position: number) {
    // 越界判断
    if (position < 0 || position > this.size) return false

    const newNode = new Node(value)

    // 判断是否插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
    }
    this.size++
  }
}

export default LinkedList
