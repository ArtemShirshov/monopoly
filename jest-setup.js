/* istanbul ignore file */
import {JSDOM} from 'jsdom';

const mockMatchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
});

window.matchMedia = window.matchMedia || mockMatchMedia;

jest.mock('axios');

global.requestAnimationFrame = cb => setTimeout(cb, 0);
global.window = Object.create(window);

window.logException = () => {};
window.SITE_URL = 'http://example.com/';
window.dataLayer = [];

const dom = new JSDOM();
dom.reconfigure({url: 'https://www.example.com'});
