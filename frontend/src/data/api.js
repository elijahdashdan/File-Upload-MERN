import axios from 'axios';

const apiURL = 'http://localhost:8080/api/';

export const fileUpload = async (data) => {
    try{
        await axios.post(apiURL + 'uploadFile',data )
    } catch(error){
        throw error;
    }
}

export const getFiles = async () => {
    try {
        const fetchData = await axios.get(apiURL + 'getFiles');
        return fetchData
    }catch(error){
        throw error;
    }
}

export const FileDelete = async (id) => {
    try {
        await axios.delete(apiURL + `deleteFile/${id}`);
    }catch(error){
        throw error;
    }

}
