import ArrayStack from '../ArrayStack'

function isValid(s: string): boolean {
  const stack = new ArrayStack<string>()

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
      case '{':
        stack.push('}')
      case '[':
        stack.push(']')
      default:
        if (c !== stack.pop()) return false
    }
  }

  return stack.isEmpty()
}

export default isValid
