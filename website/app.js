/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear(); 

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=2a8bede595b4e91442e31ec3b3cad70b&units=metric';

document.getElementById("generate").addEventListener('click', (element)=>{
const newZip = document.getElementById('zip').value;
getWheather(baseURL, newZip, apiKey)
.then((data)=> {
    console.log(data);
    const feelings  = document.querySelector('#feelings').value;
    postData('/post', {date:d, temp:data.main.temp, content:feelings});
    updateUI();
})
}); 

//function to get api data  

const getWheather = async (baseURL, zip, key) => {

    const res = await fetch (baseURL + zip + key)   

    try {
        const data = await res.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.log("error", error);
    }
}



const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
        method:'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData);
    }
    catch(error){
        console.log("error", error);
    }
}





























// const postData = async (url = '' , data = {} ) => {
//     console.log(data);
//     const response = await fetch (url, {
//         method: "POST",
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type ': 'application/json',
//         },
//         body: JSON.stringify(data)
//     }); 

// try {
//     const newData = await response.json();
//     console.log(newData);
//     return newData;
// } catch (error){
//     console.log('error', error);
// }
// }





const updateUI = async () => {
    const request = await fetch ('/get') ; 
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temprature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `I feel: ${allData.feeling}`;    
    } catch (error) {
        console.log('error', error);
    }
}
