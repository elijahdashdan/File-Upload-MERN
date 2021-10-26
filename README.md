# fileUploader

fileUploader is a simple file storage server with interfaces (web UI and
CLI) to interact with stored files. It is written in **javascript** using *MERN* stack. For command-line-interface it is written in **Python** with **Requests and Click** modules.
## Prerequisites

Go to the official distribution page of [nodejs](http://nodejs.org/) to install node.js. Please confirm installation by running in command line:
```bash
node --version
```
In order to run a local database for deployment. Please install a [mongodb](https://docs.mongodb.com/manual/installation/) for the designated platform, then confirm installation by running in command line:
```bash
mongod --version
```

## Installation

#### **Client/Server Installation**
After installing required *node* and *mongodb*, install the required node modules for the root folder, please execute ***'npm install'*** Node Package Module installation from the root folder and to install server and client required modules using ***'npm run install-all'***
```bash
npm install
npm run install-all
```

#### **Command Line Interface Installation**
In order to access API through Python requests, please install Python. Click [here](https://www.python.org/downloads/) and follow the website installation. Before you go any further, make sure you have Python and that the expected version is available from your command line. You can check this by running:
```bash
#Unix/macOS
python3 --version

#Windows
python3 --version
```

After confirming python installation, install **requirements**.
```bash
cd python-cli
python -m pip install -r requirements.txt 
```

## Usage
In the project directory, you can run:

### *Web Services*

### `npm start`

Runs both client and server in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run client`

Runs just the client app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run server`

Runs just the server in development mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Runs both client and server test.

### *Command Line Interface*

Make sure that server is running in [http://localhost:3000](http://localhost:3000)
```bash
cd python-cli
python client.py [COMMAND] [ARGUMENTS]
```

Commands Available:
```
getfiles                   
- Display List of files  from the storedin webserver.

upload [filepath]          
- Uploads a file to the server with filepath as parameter.

delete [filename]          
- Deletes a file from the server with filename as parameter.
```


Check below examples:
```bash
#Example to Get file list
python client.py getfiles

#Example to Upload file
python clienty.py upload foo.txt

#Example to Delete file
python clienty.py delete foo.txt
```


## Folder Structure

#### `FileUpload`
- #### `frontend` - folder that contains the client application.
  - #### `public` - folder that contains all of our static files
  - #### `src`
    - #### `components` - folder that contains all of the different components that will make up our views.
      - #### `FileTable` - this display the FileTable component of the react app that shows table of file list.
      - #### `Header` - folder that contains the header component of the react app.    
      - #### `UploadForm` - this display the upload form component of the react app.
      - #### `UploadButton` - this display the upload button component of the react app.
    - #### `data` - contains the access file to the server application.
    - #### `api.jsx` - uses [axios] HTTP client to connect to server application.
    - #### `App.jsx` - this renders all of our browser routes and different components.
    - #### `index.js` - this renders the react app by rendering App.jsx.
    - #### `styles.css` - contains all css styles of the react app.
  - #### `package.json` - Defines npm behaviors and packages for the client
- #### `server` - folder that contains the server application.
  - #### `controllers` - contains all of the callback functions that each route will call
  - #### `helpers` - contains a node.js package [multer] to handle multipart/form-data used for uploading files
  - #### `models` - contains all of the data models
  - #### `routes` - contains all HTTP to URL path associations for each unique url
  - #### `tests` - contains all of the server tests defined
  - #### `server.js` - Defines npm behaviors and packages for the client
  - #### `package.json` - Defines npm behaviors like the scripts.
- #### `.gitignore` - Tells git which files to ignore
- #### `README` - This file!
- #### `package.json` - Defines npm behaviors like the scripts defined in the next 

Please make sure to update tests as appropriate.

## License
No license required.