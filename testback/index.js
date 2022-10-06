// import the dependences
const express = require('express');

const app = express();

const port = 8000;

// api mode - get, url - '/'
// call back function - agruments are important => req, res
// call back function - return res.send(data)

app.get('/', (req, res) => {
    return res.send("Home page");
})

app.get('/login', (req, res) => {
    return res.send("Yor are visiting login page");
})

app.get('/signin', (req, res) => {
    return res.send("this is signin page");
})

app.get('/signout', (req, res) => {
    return res.send("this is signout page");
})

app.get('/hitesh', (req, res) => {
    return res.send("hitesh uses instagran");
})

// make the app listen at a port, callback function once connected
app.listen(port, ()=>{
    console.log("server is up and running now")
})