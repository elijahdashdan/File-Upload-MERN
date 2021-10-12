import React from 'react';
import { Button, Table } from 'react-bootstrap';

function FileTable(props){
    return (
        <div className='table-wrapper'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Filename</th>
              <th>Path</th>
              <th>Type</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.fileItems.map((file, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{file.fileName}</td>
                <td>{file.filePath}</td>
                <td>{file.fileType}</td>
                <td>{file.fileSize}</td>
                <td className="deleteButton" ><Button variant="outline-primary" onClick={()=>props.deleteFunction(file._id)}>Delete</Button></td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
}

export default FileTable;