const express = require("express");

const app = express();
app.set("view engine","ejs");
app.listen(3000);

app.get('/',(req,res)=>{
    res.render("index")
});

app.get('/add_item',(req,res)=>{
    res.render("add_item")
})

app.use((req,res)=>{
    res.render("404")
})