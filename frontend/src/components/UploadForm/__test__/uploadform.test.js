import React from 'react';
import ReactDOM from 'react-dom';
import UploadForm from '../UploadForm';
import renderer from 'react-test-renderer';

it("Renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UploadForm />,div)
    ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<UploadForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});