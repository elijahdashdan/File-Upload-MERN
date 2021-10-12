import React from 'react';
import {Button} from 'react-bootstrap';

function UploadButton(props) {
    return (
        <div className="uploadButton">
        <Button variant="primary" size="lg" onClick={props.onClick}>Upload</Button>{' '}
        </div>
    )
}

export default UploadButton;