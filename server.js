const projectData =[];
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const ourApp = express();

//dependencies
const bodyparser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
ourApp.use(bodyparser.urlencoded({extended: false}));
ourApp.use(bodyparser.json());
const myPort = 8000;
// Cors for cross origin allowance
const cors = require('cors');
ourApp.use(cors());
// Initialize the main project folder
ourApp.use(express.static('website'));

const server = ourApp.listen(myPort, ()=>{
    console.log(`your server is runing now in http://localhost:${myPort}`);
});

//server sends data to the app
ourApp.get('/all'  ,    (req, res)=> {
    res.send(projectData); 
    projectData = [];
});
//the app sends data to the server
ourApp.post ('/add',  (req, res)=> {
    console.log(req.body);
        newEntry = {
            date : req.body.date,
            temp : req.body.temp,
            content : req.body.content
        }
        projectData.push(newEntry);
    }
        )




