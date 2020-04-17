import React from 'react';
import * as ReactDOM from 'react-dom';
import { CardTable } from '../stories/Table.stories';

describe('CardTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardTable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
