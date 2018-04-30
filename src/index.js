import React from 'react';
import ReactDOM from 'react-dom';

import AppWrapper from './modules/core/AppWrapper';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
