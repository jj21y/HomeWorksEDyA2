import { TrieNode } from "./TrieNode";
import { Song } from "../Types/Song.Types";

export class Trie {
    root: TrieNode
    constructor (){
        this.root = new TrieNode();
    }
    insert(song: Song){
        let current = this.root;

        for(const char of song.title.toLowerCase()){
            if(!current.children.has(char)){
                current.children.set(char, new TrieNode())
            }
            current = current.children.get(char)!
            current.song.push(song)
        }
        current.isEndOfWord = true
    }
    searchSong(title: string): boolean {
        let current = this.root

        for(const char of title.toLowerCase()){
            if(!current.children.has(char)){
                return false;
            }
            current = current.children.get(char)!
        }
        return current.isEndOfWord;
    }

      getSuggestions(prefix: string): Song[] {
    let current = this.root;

    for (const char of prefix.toLowerCase()) {
      if (!current.children.has(char)) {
        return [];
      }

      current = current.children.get(char)!;
    }

    return current.songs;
  }
}