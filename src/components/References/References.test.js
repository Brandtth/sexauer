import React from 'react';
import ReactDOM from 'react-dom';
import References from './References';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<References />, div);
  ReactDOM.unmountComponentAtNode(div);
});
