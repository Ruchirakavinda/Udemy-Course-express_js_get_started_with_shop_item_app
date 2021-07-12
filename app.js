const express = require("express");
const mongoose = require("mongoose");

const app = express();
const mongodb ='mongodb+srv://ItemShop:item1234@cluster0.zuicn.mongodb.net/Item_data?retryWrites=true&w=majority';
mongoose.connect(mongodb,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>
{
    console.log("MongoDB Connected")
    
    app.listen(3000);

}).catch(err => console.log(err))


app.set("view engine", "ejs");
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