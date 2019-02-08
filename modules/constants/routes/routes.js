import {HomeConnected} from 'containers/home/home';
import {SimplePlay} from 'containers/simplePlay/simplePlay';
import {Card} from 'containers/card/card';

export const StaticRoutes = [
    {
        path: '/',
        page: 'home',
        component: HomeConnected,
    },
    {
        path: '/simple-play',
        page: 'simplePlay',
        component: SimplePlay,
    },
    {
        path: '/card',
        page: 'cardList',
        component: Card,
    },
];
