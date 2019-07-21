import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {connect} from 'react-redux';
import {setCmsPopupVisibility} from 'reducers/cms/cmsPopup/index';

import {Home, mapDispatchToProps, mapStateToProps} from './home';

configure({adapter: new Adapter()});

jest.mock('react-redux', () => ({connect: jest.fn(() => () => {})}));
jest.mock('components/__helpers/popup/popup', () => ({Popup: 'Popup'}));
jest.mock('components/__helpers/header/header', () => ({
    HeaderConnected: 'HeaderConnected',
}));
jest.mock('components/__helpers/footer/footer', () => ({Footer: 'Footer'}));
jest.mock('components/home/topBanner/topBanner', () => ({TopBanner: 'TopBanner'}));
jest.mock('components/home/brandsStrip/brandsStrip', () => ({
    BrandsStrip: 'BrandsStrip',
}));
jest.mock('components/home/youCovered/youCovered', () => ({YouCovered: 'YouCovered'}));
jest.mock('components/home/lenses/lenses', () => ({Lenses: 'Lenses'}));
jest.mock('components/home/mirror/mirror', () => ({Mirror: 'Mirror'}));
jest.mock('components/home/offers/offers', () => ({Offers: 'Offers'}));
jest.mock('components/home/getPlans/getPlans', () => ({GetPlans: 'GetPlans'}));
jest.mock('components/home/brandsGallery/brandsGallery', () => ({
    BrandsGallery: 'BrandsGallery',
}));
jest.mock('reducers/cms/cmsPopup/index');

let props;
let wrapper;

beforeEach(() => {
    props = {
        cmsPopup: {
            connect: {html: <p>test</p>},
            params: {},
        },
        closePopup: jest.fn(),
        getCustomer: jest.fn(),
    };

    wrapper = shallow(<Home {...props} />);
    props.closePopup.mockClear();
    props.getCustomer.mockClear();
});

describe('<Home /> component', () => {
    test('connect', () => {
        expect(connect).toHaveBeenCalledWith(mapStateToProps, mapDispatchToProps);
    });

    test('mapStateToProps function', () => {
        const mockStore = {cmsPopup: 'cmsPopup'};
        expect(mapStateToProps(mockStore)).toEqual({cmsPopup: 'cmsPopup'});
    });

    test('mapDispatchToProps function', () => {
        expect(setCmsPopupVisibility).not.toBeCalled();
        mapDispatchToProps.closePopup();
        expect(setCmsPopupVisibility).toBeCalledWith(false, null);
    });

    test('componentDidMount method should call "getCustomer" action', () => {
        expect(props.getCustomer).not.toBeCalled();
        wrapper.instance().componentDidMount();
        expect(props.getCustomer).toBeCalled();
    });
});
