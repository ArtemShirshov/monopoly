import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import focusWithin from 'focus-within';
import * as Sentry from '@sentry/browser';

import Router from './router';

import '../css/common.scss';

// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');
require('es6-promise').polyfill();
require('array.prototype.find').shim();
require('custom-event-polyfill');

focusWithin(document);

Sentry.init({
    dsn: 'https://6fec6b71017f492eb7c63f6d6a1dfd2d@sentry.io/245486',
    ignoreErrors: ['The quota has been exceeded.'],
});

ReactDOM.render(<Router />, document.getElementById('react-root'));
