import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './styles.css';
import { Container, Row, Button, Table } from 'react-bootstrap';
import UploadForm from './components/UploadForm/UploadForm';
import { getFiles, FileDelete } from './data/api'

function App() {
  const [FileList, setFileList] = useState([]);

  const getFileList = async () => {
    try {
      const fetchlist = await getFiles();
      setFileList(fetchlist.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFileList();
  }, []);

  const deleteFile = async(id) => {
    await FileDelete(id);
      setFileList(FileList.filter((file) => {
        return file._id !== id;
      }))
  }

  return (
    <div>
      <Header />
      <br></br>
      <Container className="FileUploadScreen">
        <Row>
          <UploadForm updateList={() => getFileList()} />
        </Row>
        <Row>
          <div className='table-wrapper'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>File Name</th>
                  <th>File Path</th>
                  <th>File Type</th>
                  <th>File Size</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {FileList.map((file, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{file.fileName}</td>
                    <td>{file.filePath}</td>
                    <td>{file.fileType}</td>
                    <td>{file.fileSize}</td>
                    <td className="deleteButton" ><Button variant="outline-primary" onClick={() => deleteFile(file._id)}>Delete</Button></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
