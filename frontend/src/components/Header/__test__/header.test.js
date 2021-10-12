import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import {render} from '@testing-library/react';

it("Renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />,div)
    ReactDOM.unmountComponentAtNode(div)
})

it("Renders Headers component correctly", () => {
    render()
})