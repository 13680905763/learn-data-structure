import IStack from './IStack'

class ArrayStack<T> implements IStack<T> {
  // 定义一个数组 ， 用于存储元素
  private data: T[] = []

  // 将一个元素压入到栈中
  push(element: T): void {
    this.data.push(element)
  }

  // 将栈顶的元素弹出栈（返回出去，并且从栈顶移除）
  pop(): T | undefined {
    return this.data.pop()
  }

  // 看一眼栈顶元素，不进行任何操作
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // 判断是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回栈的数据个数
  size(): number {
    return this.data.length
  }
}


export default ArrayStack
