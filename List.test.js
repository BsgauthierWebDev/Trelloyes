import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import List from './List'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List name="List" button='+ Add Random Card'/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});