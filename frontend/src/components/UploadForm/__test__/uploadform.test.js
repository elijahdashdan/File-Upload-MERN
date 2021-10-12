import React from 'react';
import ReactDOM from 'react-dom';
import UploadForm from '../UploadForm';

it("Renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UploadForm />,div)
    ReactDOM.unmountComponentAtNode(div)
})
