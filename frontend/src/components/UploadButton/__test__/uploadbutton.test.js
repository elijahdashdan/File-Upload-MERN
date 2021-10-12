import React from 'react';
import ReactDOM from 'react-dom';
import UploadButton from '../UploadButton';
import renderer from 'react-test-renderer';

it("Renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UploadButton />,div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<UploadButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});