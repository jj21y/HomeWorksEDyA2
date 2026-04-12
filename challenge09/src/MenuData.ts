import { IMenuNode } from './types';

export const sidebarData: IMenuNode[] = [
  {
    id: '1',
    title: 'Dashboard',
    path: '/dashboard',
    component: <div>Vista General del Dashboard</div>,
    children: [
      { id: '1-1', title: 'Ventas', path: '/sales', component: <div>Panel de Ventas</div> },
      { id: '1-2', title: 'Métricas', path: '/stats', component: <div>Estadísticas</div> },
    ],
  },
  {
    id: '2',
    title: 'Configuración',
    path: '/settings',
    component: <div>Ajustes del Sistema</div>,
    children: [
      {
        id: '2-1',
        title: 'Perfil',
        path: '/profile',
        component: <div>Ajustes de Perfil</div>,
        children: [
          { id: '2-1-1', title: 'Seguridad', path: '/security', component: <div>Cambiar Contraseña</div> }
        ]
      }
    ]
  }
];