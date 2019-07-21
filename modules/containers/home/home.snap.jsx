import React from 'react';
import renderer from 'react-test-renderer';

import {Home} from './home';

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

const props = {
    cmsPopup: {
        visibility: true,
        content: 'testContent',
        params: {},
    },
    getCustomer: () => {},
};

describe('<Home/>', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Home {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with html content for popup', () => {
        props.cmsPopup.content = {html: '<p>some html content</p>'};
        const tree = renderer.create(<Home {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
