# data-structure

## stack-queue

| 数据结构 | 访问 | 查询 | 插入 | 删除 |
| -------- | ---- | ---- | ---- | ---- |
| 数组     | O(1) | O(N) | O(N) | O(N) |
| 链表     | O(N) | O(N) | O(1) | O(1) |

1. 数组是一种连续的存储结构，通过下标可以直接访问数组中的任意元素。

   - 时间复杂度:对于数组，随机访问时间复杂度为 0(1)，插入和删除操作时间复杂度为 0(n)。
   - 空间复杂度:数组需要连续的存储空间，空间复杂度为 0(n)。

2. 链表是一种链式存储结构，通过指针链接起来的节点组成，访问链表中元素需要从头结点开始遍历。

   - 时间复杂度:对于链表，随机访问时间复杂度为 0(n)，插入和删除操作时间复杂度为 0(1)。
   - 空间复杂度:链表需要为每个节点分配存储空间，空间复杂度为 0(n)。

在实际开发中，选择使用数组还是链表，需要根据具体应用场景来决定。

- 如果数据量不大，且需要频繁随机
  访问元素，使用数组可能会更好。
- 如果数据量大，或者需要频繁插入和删除元素，使用链表可能会更好。
