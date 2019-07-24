import {HomeConnected} from 'containers/home/home';
import {SimplePlayConnected} from 'containers/simplePlay/simplePlay';
import {Card} from 'containers/card/card';
import {CreateUserConnected} from 'containers/createUser/createUser';

export const StaticRoutes = [
    {
        path: '/monopoly/',
        page: 'home',
        component: HomeConnected,
    },
    {
        path: '/monopoly/simple-play',
        page: 'simplePlay',
        component: SimplePlayConnected,
    },
    {
        path: '/monopoly/card',
        page: 'cardList',
        component: Card,
    },
    {
        path: '/monopoly/create-user',
        page: 'createUser',
        component: CreateUserConnected,
    },
];
