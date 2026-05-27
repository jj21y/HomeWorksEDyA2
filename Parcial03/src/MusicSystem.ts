import { MaxHeap } from "./DataStructures/MaxHeap";
import { Trie } from "./DataStructures/Trie";
import { Graph } from "./DataStructures/Graph";
import type { Song } from "./Types/Song.Types";

export class MusicSystem{
    trie: Trie
    heap: Heap
    graph: Graph
    private Songs: Song[]

    constructor(){
        this.trie = new Trie();
        this.heap = new MaxHeap();
        this.graph = new Graph();
        this.songs = [];
    }

    loadSongs(songs: Song[]): void{
        this.songs = songs;
        songs.forEach((song) => {
            this.trie.insert(song)
            this.heap.push(song)
            this.graph.addVertex(song.id)
        });
        this.graph.addEdge("1", "2");
        this.graph.addEdge("1", "3");
        this.graph.addEdge("2", "4");
    }
    searchSongs(prefix: string): Song[]{
        return this.trie.getSuggestions(prefix);
    }
    getTopSongs(k: number): Song[] {
    const temp: Song[] = [];
    const results: Song[] = [];
    for (let i = 0; i < k; i++) {
      const song = this.heap.pop();
      if (!song) break;
      results.push(song);
      temp.push(song);
    } temp.forEach((song) => this.heap.push(song));
    return results;
  }
  getRecommendations(songId: string): Song[]{
    const neighbors = this.graph.getNeighbors(songId)
    return this.songs.filter((song) => neighbors.includes(song.id));
  }
}