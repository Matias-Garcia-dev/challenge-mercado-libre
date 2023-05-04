const express = require('express');
require("dotenv").config();
const app = express();
console.log("Base URL = " + process.env.PORT);

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3002;



app.get("/", (req,res)=>{
    res.send("hello world");

});

app.listen(port, () => {
  console.log(`Servidor en línea en el puerto ${port}`);
});