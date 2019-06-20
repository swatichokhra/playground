const fs = require('fs');
// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
//
// }
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);

//reading a json file

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//load.parse the json data,chnage number and age property,stringify the chnaged object and overwrite the original data

const dataBuffer = fs.readFileSync('1-json.json');
const jsonData = dataBuffer.toString();
const data = JSON.parse(jsonData);

data.name = 'swati';
data.age = 32;

const jsonDataNew = JSON.stringify(data);
fs.writeFileSync('1-json.json',jsonDataNew);

