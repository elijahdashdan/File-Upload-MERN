'use strict';

const app = require("./app")

// Handle Ports
const port = process.env.PORT || 8080;

//Listen to Port running
app.listen(port, function() {
    console.log(`Server is Running! http://localhost:${port}`)
});
