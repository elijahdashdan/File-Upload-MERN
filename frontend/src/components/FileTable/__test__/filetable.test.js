import React from 'react';
import ReactDOM from 'react-dom';
import FileTable from '../FileTable';

let testItem = [{
    fileName: "test.jpeg",
    filePath: "uploads/2021-10-12T11-45-48.130Z-test.jpeg",
    fileSize: "72.0 kB",
    fileType: "image/jpeg",
    __v: 0,
    _id: "6165756cf8b4013c7aeb53c6"
}]

it("Renders without Crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FileTable fileItems = {testItem}/>,div)
    ReactDOM.unmountComponentAtNode(div)
})
