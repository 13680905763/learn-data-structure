import ArrayStack from '../ArrayStack'

const stack = new ArrayStack<string>()
stack.push('a')
stack.push('b')
stack.push('c')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size)
