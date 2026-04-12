import { ReactNode } from "react";

export interface MenuNode {
    id: string;
    title: string;
    path: string;
    icon: ReactNode;
    children: MenuNode[];
}