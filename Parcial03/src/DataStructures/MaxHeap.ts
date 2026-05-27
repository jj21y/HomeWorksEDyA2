import type { Song } from "../Types/Song.Types";

export class MaxHeap {
    private heap: Song[] = [];
    private compare (a: Song, b: Song): number{
        return a.popularity - b.popularity
    }
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[i], this.heap[j]];
    }
    private heapifyUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[parent], this.heap[index]) >= 0) break;
      this.swap(parent, index);
      index = parent;
    }
  }

    private heapifyDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < length && this.compare(this.heap[left], this.heap[largest]) > 0) {
        largest = left;}
      if (right < length && this.compare(this.heap[right], this.heap[largest]) > 0) {
        largest = right;}
      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }
  push (song: Song): void{
    this.heap.push(song)
    this.heapifyUp(this.heap.length - 1)
  }

  pop(): Song | undefined{
    if(!this.heap.length) return undefined
    const top = this.heap[0]
    const end = this.heap.pop()

    if(this.heap.length && end){
        this.heap[0] = end
        this.heapifyDown(0)
    }
    return top;
  }
  peek():Song | undefined{
    return this.heap[0];
  }
  size(): number{
    return this.heap.length;
  }
}