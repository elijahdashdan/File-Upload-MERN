# fileUploader

fileUploader is a simple file storage server with interfaces (web UI and
CLI) to interact with files on the server. It is written in **javascript** using *MERN* stack. *For command-line-interface it is written in Python with **Requests and Click** modules*.
## Prerequisites

Go to the official distribution page of [nodejs](http://nodejs.org/) to install node.js. Please confirm installation by running.
```bash
node --version
```
In order to run a local database for deployment. Please install a [mongodb](https://docs.mongodb.com/manual/installation/) for the designated platform.
```bash
mongod --version
```

## Installation

#### Client/Server Installation
In order to install the required node modules, please execute Node Package Module installation from the root folder.
```bash
npm install
npm run install-all
```

#### Command Line Interface Installation
In order to access API through Python requests, please install Python.
```bash
pip install python
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
cd cli
python client.py [COMMAND] [ARGUMENTS]
```

Commands Available:
```
getfiles                   - Display List of files from the storedin webserver.
upload [filepath]          - Uploads a file to the server with filepath as parameter.
delete [filename]          - Deletes a file from the server with filename as parameter.
```

## Folder Structure

#### `fileUploadApp`
- #### `frontend` - folder that contains the client application.
    - #### `public` - folder that contains all of our static files
    - #### `src`
    - #### `components` - folder that contains all of the different components that will make up our views.
       - #### `Header.jsx` - this display the header component of the react app.    
       - #### `UploadForm.jsx` - this display the upload form component of the react app.
    - #### `data` - contains the access file to the server application.
       - #### `api.jsx` - uses [axios] HTTP client to connect to server application.
  - #### `tests` - contains all of the client tests defined.
    - #### `App.jsx` - this renders all of our browser routes and different components.
    - #### `index.js` - this renders the react app by rendering App.jsx.
    - #### `styles.css` - contains all css styles of the react app.
    - #### `package.json` - Defines npm behaviors and packages for the client
- #### `server` - folder that contains the server application.
  - #### `controllers` - contains all of the callback functions that each route will call
  - #### `helpers` - contains a node.js package [multer] to hand multipart/form-data used for uploading files
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