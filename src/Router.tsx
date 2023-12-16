import { Suspense, lazy } from 'react';

const router = {
    '/': lazy(() => import('./App')),
    '/start': lazy(() => import('./pages/start')),
    '/start-gestures': lazy(() => import('./pages/start-gestures')),
    '/start-keyframes': lazy(() => import('./pages/start-keyframes')),
    '/start-state-update': lazy(() => import('./pages/start-state-update')),
    '/start-transition': lazy(() => import('./pages/start-transition')),
    '/test': lazy(() => import('./pages/test')),
};

type RoterType = typeof router;
type RouterKey =  keyof RoterType;

export default function Router() {
    const { pathname } = window.location;
    const Router = Object.keys(router).indexOf(pathname) < 0 ? undefined : router[pathname as RouterKey];

    return Router === undefined ? (
        <>This page is 404.</>
    ) : (
        <Suspense
            fallback={<>Loading...</>}
        >
            <Router />
        </Suspense>
    );
}