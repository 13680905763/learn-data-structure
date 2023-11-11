import ArrayStack from '../ArrayStack'

function decimalToBinary(decimal: number): string {
  // 创建一个栈， 用于存放余数
  const stack = new ArrayStack<number>()

  // while：不确定循环次数，只知道循环结束条件
  // for：知道循环的次数时
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  let binary = ''
  while (!stack.isEmpty) {
    binary += stack.pop()
  }
  console.log(binary)

  return binary
}

decimalToBinary(100)

export default decimalToBinary
