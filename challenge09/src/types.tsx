import { ReactNode } from 'react';

export class MenuNode {
  title: string;
  link: string;
  component: ReactNode;
  children: MenuNode[]; 

  constructor(title: string, link: string, component: ReactNode) {
    this.title = title;
    this.link = link;
    this.component = component;
    this.children = [];
  }

  addChild(child: MenuNode): void {
    this.children.push(child);
  }
}