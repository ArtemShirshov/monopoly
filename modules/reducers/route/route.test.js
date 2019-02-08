import {getRoute, setPage, route, RouteFixture} from './index';

describe('route reducer', () => {
    it('should return the initial state', () => {
        // eslint-disable-next-line no-undefined
        expect(route(undefined, {})).toMatchSnapshot();
    });

    it('should handle "setPage" action', () => {
        const action = {type: setPage, payload: RouteFixture};
        expect(route({}, action)).toMatchSnapshot();
    });
});

describe('Action creators for "route" reducer', () => {
    test('action "getRoute"', () => {
        expect(getRoute('/test')).toMatchSnapshot();
    });

    test('action "setPage"', () => {
        expect(setPage(RouteFixture)).toMatchSnapshot();
    });
});
