export class Graph {
    adjacencyList: Map<string, Set<string>>
    constructor(){
        this.adjacencyList = new Map();
    }
    addVertex(songId: string): void{
        if(!this.adjacencyList.has(songId)){
            this.adjacencyList.set(songId, new Set())
        }
    }
    addEdge(songA: string, songB: string): void{
        this.adjacencyList.get(songA)?.add(songB)
        this.adjacencyList.get(songB)?.add(songA)
    }
    getNeighbors(songId: string): string[]{
        return[...(this.adjacencyList.get(songId) || [] )];
    }
}