projectData ={};
// Require Express to run server and routes
const express = require('express');

// Cors for cross origin allowance
const cors = require('cors');

//dependencies
const bodyparser = require('body-parser');

// Start up an instance of app
const ourApp = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
ourApp.use(bodyparser.urlencoded({extended: false}));
ourApp.use(bodyparser.json());
ourApp.use(cors());
// Initialize the main project folder
ourApp.use(express.static('website'));
const myPort = 8000;

const server = ourApp.listen(myPort, ()=>{
    console.log(`your server is runing now in http://localhost:${myPort}`);
})

ourApp.post('/post',(req,res)=>{
    projectData.date = req.body.date;
    projectData.temp = (req.body.temp - 273).toFixed();
    projectData.feeling = req.body.content;
    console.log(projectData);
    return projectData;
});


ourApp.get('/get', (req,res)=> {
    res.send(projectData);
})



























//the app sends data to the server
// ourApp.post ('/add',  (req, res)=> {
//         myData = {
//             date : req.body.date,
//             temp : req.body.temp,
//             content : req.body.content
//         }
//         console.log(myData);
//         return myData
//     }
// )


//         ourApp.post('/all', (req, res) => {
//             console.log(req.body.newEntry)
//           })


//server sends data to the app
// ourApp.get('/all'  ,    (req, res)=> {
//     res.send(projectData); 
//     projectData = [];
// });
