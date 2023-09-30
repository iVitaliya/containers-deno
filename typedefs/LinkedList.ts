import type LinkedListNode from '../LinkedList/node.ts';

export interface List<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    size: number;
}
