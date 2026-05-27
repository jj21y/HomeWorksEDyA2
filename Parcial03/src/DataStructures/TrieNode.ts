import { Song } from "../Types/Song.Types";

export class TrieNode {
    children: Map<string, TrieNode>
    song: Song[]
    isEndOfWord: boolean

    constructor(){
        this.children = new Map();
        this.song = [];
        this.isEndOfWord = false;
    }
}