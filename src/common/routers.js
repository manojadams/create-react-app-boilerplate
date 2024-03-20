import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const ROUTES = [{
    path: "/",
    Component: HomePage,
    children: [{
        path: "about",
        Component: AboutPage
    }]
}];

export default ROUTES;
