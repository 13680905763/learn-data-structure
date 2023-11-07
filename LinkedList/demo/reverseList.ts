class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 利用栈结构
function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  // 数组模拟栈
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }
  // 从栈取出 放入新链表
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    newHeadCurrent.next = stack.pop()!
    newHeadCurrent = newHeadCurrent.next
  }
  newHeadCurrent.next = null
  return newHead
}

// 迭代（循环）
function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let newHead: ListNode | null = null

  while (head) {
    const current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }
  return newHead
}

// 递归
function reverseList3(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  const newHead = reverseList3(head?.next ?? null)
  head.next.next = head
  head.next = null

  return newHead
}

export {}
