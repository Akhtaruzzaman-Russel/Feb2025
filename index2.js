const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./model/registrationModel");

// mongodb+srv://nodeblog:1XCd5vXBp5mwfRes@cluster0.0ruzyeb.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://nodeblog:1XCd5vXBp5mwfRes@cluster0.0ruzyeb.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database Connected ");
})

// middleware
app.use(express.json());

app.get('/', function(req, res)  {
    res.send('Hello Bangladesh!');
})

app.get('/about', function(req, res) {
    res.send('About Page');
})


app.post('/registration', function(req, res) {
    // console.log(req.body);
    // res.send('About Page');
    const {name, email} = req.body;

    if(name == ""){
        res.send("Name is required");
    }
    else if(email == ""){
        res.send("Email is required");
    }else{
        let registration = new User ({
            name: name,
            email: email
        });

        registration.save();

        res.send(registration);
    }

    console.log(name);
    console.log(email)
})


app.listen(8000)