export class Nodo {
  value: number;
  izquierda: Nodo
 | null = null;
  derecha: Nodo
 | null = null;

  constructor(value: number) {
    this.value = value;
  }
}


export class ArbolBinario {
  raiz: Nodo
 | null = null;

  insert(value: number): void {
    const newNode = new Nodo
(value);
    if (!this.raiz) {
      this.raiz = newNode;
      return;
    }
    this.insertNode(this.raiz, newNode);
  }

  private insertNode(node: Nodo
, newNode: Nodo

  ): void {
    if (newNode.value < node.value) {
      if (!node.izquierda) node.izquierda = newNode;
      else this.insertNode(node.izquierda, newNode);
    } else {
      if (!node.derecha) node.derecha = newNode;
      else this.insertNode(node.derecha, newNode);
    }
  }


  inOrder(node: Nodo
 | null = this.raiz, res: number[] = []): number[] {
    if (node) {
      this.inOrder(node.izquierda, res);
      res.push(node.value);
      this.inOrder(node.derecha, res);
    }
    return res;
  }

  preOrder(node: Nodo | null = this.raiz, res: number[] = []): number[] {
    if (node) {
      res.push(node.value);
      this.preOrder(node.izquierda, res);
      this.preOrder(node.derecha, res);
    }
    return res;
  }

  postOrder(node: Nodo
 | null = this.raiz, res: number[] = []): number[] {
    if (node) {
      this.postOrder(node.izquierda, res);
      this.postOrder(node.derecha, res);
      res.push(node.value);
    }
    return res;
  }

  contains(value: number, node: Nodo
 | null = this.raiz): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    return value < node.value 
      ? this.contains(value, node.izquierda) 
      : this.contains(value, node.derecha);
  }
}