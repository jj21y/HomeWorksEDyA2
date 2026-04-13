import { MenuNode } from './types';

const rootMenu = new MenuNode('Sistema', '/', <div>Bienvenido al Sistema</div>);
const dashboard = new MenuNode('Dashboard', '/dashboard', <div>Vista General</div>);
const settings = new MenuNode('Configuración', '/configuraciones', <div>Ajustes Generales</div>);
const stats = new MenuNode('Estadísticas', '/estadisticas', <div>Gráficos de Ventas</div>);
const profile = new MenuNode('Perfil', '/perfil', <div>Editar Perfil</div>);
const security = new MenuNode('Seguridad', '/seguridad', <div>Cambiar Clave</div>);
dashboard.addChild(stats);
settings.addChild(profile);
profile.addChild(security); // Sub-sub-menú

rootMenu.addChild(dashboard);
rootMenu.addChild(settings);

export { rootMenu };