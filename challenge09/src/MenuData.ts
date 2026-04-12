import  IMenuNode  from "./types";

export const sidebarData: IMenuNode[] = [
    {
        id: '1',
        title: 'Dashboard',
        path: '/dashboard',
        component: 
        children: [
            {id: '1-1', title: 'Ventas', path: '/dashboard/ventas'},
            {id: '1-2', title: 'Metricas', path: '/dashboard/metricas'}
        ],
    },
    {
        id: '2',
        title: 'Gestion de Contenido',
        path: '/contenido',
        children: [
            {
                id: '2-1',
                title: 'Articulos',
                path: '/contenido/articulos',
                children: [
                    {id: '2-1-1', title: 'Borradores', path: 'contenido/articulos/borradores'},
                    {id: '2-1-2', title: 'Publicados', path: 'contenido/articulos/publicados'},
                ],
            },
        ],
    },
    {
        id: '3',
        title: 'Configuracion',
        path: '/confirguraciones',
    },
]