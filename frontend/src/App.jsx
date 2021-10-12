import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './styles.css';
import { Container, Row } from 'react-bootstrap';
import UploadForm from './components/UploadForm/UploadForm';
import FileTable from './components/FileTable/FileTable';
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
            <UploadForm updateList={getFileList} />
        </Row>
        <Row>
            <FileTable fileItems = {FileList} deleteFunction = {deleteFile}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
