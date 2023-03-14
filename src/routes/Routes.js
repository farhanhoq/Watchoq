import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])