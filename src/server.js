var express = require('express');// include library express from folder nude_modules, 
var bodyParser = require('body-parser');
var app = express();// app - its server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:true }));

var artists = [
    {
        id: 1,
        name: "DEMOLISHER",
    },
    {
        id: 2,
        name: "BeBest",
    },
    {
        id: 3,
        name: "Agony",
    }
];

app.get ('/',function (req, res){  // describe the routes of what happens when you press the URL
    res.send('Hello api');
})

app.get ('/artists', function(req,res){

    res.send(artists);
})

app.get('/artists/:id', function(req, res){
    
    var artist = artists.find(function (artist){
        return artist.id === Number(req.params.id) 
    });
    res.send(artist);
})

app.post('/artists', function(req, res){
    var artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send(artist)
})

app.put('/artists/:id', function(req, res){

    var artist = artists.find(function (artist){
        return artist.id === Number(req.params.id) 
    });
    artist.name = req.body.name;
    res.sendStatus(200);
})

app.delete('/artists/:id', function(req, res){
    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id);
    })
    res.sendStatus(200);
})

app.listen(3000, function(){
    console.log('api is started');
})