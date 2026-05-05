import type { Product } from "../types/product.types";

export class MaxHeap {
  private heap: Product[] = [];

  private compare(a: Product, b: Product): number {
    return a.popularity - b.popularity;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[parent], this.heap[index]) >= 0) break;

      this.swap(parent, index);
      index = parent;
    }
  }

  private heapifyDown(index: number) {
    const length = this.heap.length;

    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (
        left < length &&
        this.compare(this.heap[left], this.heap[largest]) > 0
      ) {
        largest = left;
      }

      if (
        right < length &&
        this.compare(this.heap[right], this.heap[largest]) > 0
      ) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  push(product: Product) {
    this.heap.push(product);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): Product | undefined {
    if (!this.heap.length) return undefined;

    const top = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length && end) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return top;
  }
}