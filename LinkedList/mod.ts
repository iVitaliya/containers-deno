import type { List } from "../typedefs/LinkedList.ts";
import type { EqualsFunction } from "../typedefs/Utilities.ts";

import LinkedListNode from "./node.ts";
import { defaultEquals } from "../utilities.ts";

class LinkedList<T> implements Iterable<T> {
  private list: List<T> | undefined;
  private equalsFunc: EqualsFunction<T> = defaultEquals;

  constructor(equalsFunction?: EqualsFunction<T>) {
    this.list = undefined;

    if (equalsFunction) this.equalsFunc = equalsFunction;
  }

  /*****************************************************************************
                                     INSPECTION
  *****************************************************************************/
  /**
   * @returns the size of the Linked List. - O(1) */
  public get size(): number {
    if (this.list) return this.list.size;

    return 0;
  }

  /**
   * @returns `true` if the Linked List has been found empty, `false` otherwise. - O(1) */
  public get isEmpty(): boolean {
    return !this.list;
  }

  /*****************************************************************************
                                    INSERTION
  *****************************************************************************/
  /**
   * Adds a Node to the head of the Linked List. - O(1)
   * @param value - The value to add to the list. */
  public addFront(value: T) {
    const newNode = new LinkedListNode<T>(value);

    if (this.list) {
      // Link old head backwards.
      this.list.head.previous = newNode;

      // Link new head forwards.
      newNode.next = this.list.head;

      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }

    return true;
  }

  /**
   * Adds a Node to the tail of the Linked List. - O(1)
   * @param value - The value to add to the list. */
  public addBack(value: T): boolean {
    const newNode = new LinkedListNode<T>(value);

    if (this.list) {
      // Link old tail forwards.
      this.list.tail.next = newNode;

      // Link new tail backwards.
      newNode.previous = this.list.tail;

      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }

    return true;
  }

  /**
   * Adds a Node at specified index. - O(1)
   * @param index - The index on where to add specified value.
   * @param value - The value to add at said index. */
  public addAt(index: number, value: T): boolean {
    // https://github.com/iVitaliya/containers/blob/main/src/LinkedList/Instance.ts#L94
  }
}
