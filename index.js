const express = requrie('express');
const app = express();
const PORT = 8000;


app.get('/', function(req, res){
    res.send('<h1>App is working fine</h1>');
});

app.listen(PORT, function(err) {
    if(err){
        console.log(`Error while connecting to the PORT :: ${PORT},\n\n ${err}`);
    }
    console.log(`Successfully connected to the PORT :: ${PORT}`);
});