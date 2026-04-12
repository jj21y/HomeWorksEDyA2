import { ReactNode } from "react";

export interface IMenuNode {
    id: string;
    title: string;
    path: string;
    icon: ReactNode;
    children: IMenuNode[];
}

