import { useRoutes, IndexRouteObject } from 'react-router-dom';
import Home from '../page/Home';
import My from '../page/My';
const routes: Partial<IndexRouteObject>[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/my',
        element: <My />,
    },
];
const AppRoutes = () => {
    return useRoutes(routes)
}

export default AppRoutes;