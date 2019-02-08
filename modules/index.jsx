import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import focusWithin from 'focus-within';

import Router from './router';

import '../css/common.scss';

// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');
require('es6-promise').polyfill();
require('array.prototype.find').shim();
require('custom-event-polyfill');

focusWithin(document);


ReactDOM.render(<Router />, document.getElementById('react-root'));
