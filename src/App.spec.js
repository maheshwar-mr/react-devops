import React from 'react';
import ReactDOM from 'react-dom';
import ViewBook from './ViewBook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewBook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
