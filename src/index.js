import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import AppWrapper from './modules/core/AppWrapper';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
