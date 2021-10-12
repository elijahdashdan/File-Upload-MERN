import React, { useState } from 'react';
import { Row, Form, Image} from 'react-bootstrap';
import { fileUpload } from '../../data/api';
import UploadButton from '../UploadButton/UploadButton';


function UploadForm(props) {
    
    const [uploadFile, setUploadFile] = useState('');
    console.log(uploadFile)
    function uploadFileChange(event) {
        setUploadFile(event.target.files[0])
    }

    async function uploadFileClick() {

        if (uploadFile.length !== 0) {
            const formData = new FormData();
            formData.append('file', uploadFile);
            await fileUpload(formData);
            console.log(uploadFile);
            props.updateList();
        }
    }

    return (
        <div className="uploadForm">
            <Row>
                <Image src="cloud.png" fluid style={{ width: 150, height: 'auto' }} />
            </Row>
            <Row>
                <Form className="uploadForm">
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Select File to Upload</Form.Label>
                        <Form.Control onChange={(event) => uploadFileChange(event)} type="file" size="lg" />
                    </Form.Group>
                </Form>
                <UploadButton onClick = {uploadFileClick} />
            </Row>
        </div>

    )
}

export default UploadForm;