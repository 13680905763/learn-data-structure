import Ilist from '../type/IList'

export default interface ILinkedList<T> extends Ilist<T> {
  append(value: T): void
  traverse(): void
  insert(value: T, position: number): boolean
  removeAt(position: number): T | null
  remove(value: T): T | null
  get(position: number): T | null
  update(value: T, position: number): boolean
  indexOf(value: T): number
}
