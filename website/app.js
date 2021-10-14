/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear(); 

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=2a8bede595b4e91442e31ec3b3cad70b';

document.getElementById("generate").addEventListener('click', (element)=>{
const newZip  = document.getElementById('zip').value;
const feelings  = document.getElementById('content').value;

getWheather (baseURL, newZip, apiKey)

    .then  (function (data) {           
        console.log(data);
        //post
        postData ('/add', {date: d, temp: list[0].main.temp, content: content})
        updateUI();
    })
}); 

//function to get api data  

const getWheather = async (baseURL, zip, key) => {

    const res = await fetch (baseURL + zip + key)   

    try {
        const data = await res.json();
        return data; 
    } catch (error) {
        console.log("error", error);
    }
}

const postData = async (url = '' , data = {} ) => {
    console.log(data);
    const response = await fetch (url, {
        method: POST,
        credentials: 'same-origin',
        headers: {
            'Content- Type ': 'application/json',
        },
        body: JSON.stringify(data)
    }); 

try {
    const newData = await response.json();
    console.log(newData);
    return newData;
} catch (error){
    console.log('error', error);
}
}





const updateUI = async () => {
    const request = await fetch ('\all') ; 
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData[0].date}`;
        document.getElementById('temp').innerHTML = `Temprature: ${allData[0].temp}`;
        document.getElementById('content').innerHTML = `I feel: ${allData[0].content}`;    
    } catch (error) {
        console.log('error', error);
    }
}