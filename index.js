const express = require('express');

const app = express();

const PORT = 5001;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Heeloo")
})
app.get("/login",(req,res)=>{
    res.send("login")
})


app.listen(PORT,()=>
    console.log("Listing to PORT " , PORT)
)