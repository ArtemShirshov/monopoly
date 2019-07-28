import {Home} from 'containers/home/home';
import {SimplePlayConnected} from 'containers/simplePlay/simplePlay';
import {Card} from 'containers/card/card';
import {CreateUserConnected} from 'containers/createUser/createUser';

export const StaticRoutes = [
    {
        path: '/',
        page: 'home',
        component: Home,
    },
    {
        path: '/simple-play',
        page: 'simplePlay',
        component: SimplePlayConnected,
    },
    {
        path: '/card',
        page: 'cardList',
        component: Card,
    },
    {
        path: '/create-user',
        page: 'createUser',
        component: CreateUserConnected,
    },
];
