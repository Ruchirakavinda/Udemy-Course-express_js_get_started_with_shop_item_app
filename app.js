const express = require("express");
const mongoose = require("mongoose");
const Item = require('./models/item');

const app = express();
const mongodb ='mongodb+srv://ItemShop:item1234@cluster0.zuicn.mongodb.net/Item_data?retryWrites=true&w=majority';
mongoose.connect(mongodb,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>
{
    console.log("MongoDB Connected")
    
    app.listen(3000);

}).catch(err => console.log(err))


app.set("view engine", "ejs");

//example saving data
app.get('/create_item',(req,res)=>{
    const item = new Item(
        {
            name : "Keybord",
            price : 45.0,
        }
    );
    item.save().then(result => res.send(result).catch(err => console.log(err)))

});

//example getting data
app.get('/getting_item',(req,res)=>{
    
    Item.find().then(result => res.send(result).catch(err => console.log(err)))

});

//example getting data by ID
app.get('/getting_item_by_id',(req,res)=>{
    
    Item.findById('60ed2eb3ce9bdb3b1843421b').then(result => res.send(result).catch(err => console.log(err)))

});




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




