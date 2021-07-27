import Vuelo from '../pages/vuelo/Vuelo';
import Aventuras from '../pages/aventuras/Aventuras';
import Spa from '../pages/spa/Spa';
import Gastronomia from '../pages/gastronomia/Gastronomia';
import Acuaticas from '../pages/acuaticas/Acuaticas';
import Motor from '../pages/motor/Motor';
import Home from '../pages/home/Home';
import Parejas from '../pages/parejas/Parejas';
import UniqueExperiece from '../pages/uniqueExperience/UniqueExperience';
import Experiences from '../pages/experiences/Experiences';

const routes = [
  {
    path: '/vuelo',
    Page: Vuelo,
    label: 'Vuelo',
  },
  {
    path: '/aventuras',
    Page: Aventuras,
    label: 'Aventuras',
  },
  {
    path: '/motor',
    Page: Motor,
    label: 'Motor',
  },
  {
    path: '/relax',
    Page: Spa,
    label: 'Relax',
  },
  {
    path: '/gastronomia',
    Page: Gastronomia,
    label: 'Gastronomía',
  },
  {
    path: '/acuaticas',
    Page: Acuaticas,
    label: 'Acuáticas',
  },
  {
    path: '/pareja',
    Page: Parejas,
    label: 'Parejas',
  },
  {
    path: '/experiences',
    Page: Experiences,
    label: 'Experiences',
  },
  {
    path: '/experience/:idExp',
    Page: UniqueExperiece,
    label: 'UniqueExperiece',
  },
  {
    path: '/',
    Page: Home,
    label: 'Home',
  },
];
export default routes;
