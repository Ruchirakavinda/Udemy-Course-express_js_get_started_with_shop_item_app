const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.listen(3000);

app.get('/',(req,res)=>{

    const items = [
        {name:"Book Bundle",price:"1.05"},
        {name:"Computer",price:"100.0"},
        {name:"Mobile Phone",price:"70.5"},
        {name:"Study Table",price:"50.0"}
    ]
    
    res.render("index",{ items })
});

app.get('/add_item',(req,res)=>{
    res.render("add_item")
})

app.use((req,res)=>{
    res.render("404")
})