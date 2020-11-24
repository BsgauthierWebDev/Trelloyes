import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Card from './Card'
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card name="Card" button='delete'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});