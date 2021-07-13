const express = require("express");
const mongoose = require("mongoose");
const Item = require('./models/item');

const app = express();

app.use(express.urlencoded({ extended:true}));
const mongodb ='mongodb+srv://ItemShop:item1234@cluster0.zuicn.mongodb.net/Item_data?retryWrites=true&w=majority';
mongoose.connect(mongodb,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>
{
    console.log("MongoDB Connected")
    
    app.listen(3000);

}).catch(err => console.log(err))


app.set("view engine", "ejs");

// //example saving data
// app.get('/create_item',(req,res)=>{
//     const item = new Item(
//         {
//             name : "Mouse",
//             price : 45.0,
//         }
//     );
//     item.save().then(result => res.send(result).catch(err => console.log(err)))

// });

// //example getting data
// app.get('/getting_item',(req,res)=>{
    
//     Item.find().then(result => res.send(result).catch(err => console.log(err)))

// });

// //example getting data by ID
// app.get('/getting_item_by_id',(req,res)=>{
    
//     Item.findById('60ed2eb3ce9bdb3b1843421b').then(result => res.send(result).catch(err => console.log(err)))

// });




app.get('/',(req,res)=>{

    Item.find().then(result => {
        
        res.render("index",{ items : result })
        
    }).catch(err => console.log(err))
});


// app.get('/get_item',(req,res)=>{
    
//     Item.find().then(result => {
        
//         res.render("index",{ items : result })
        
//     }).catch(err => console.log(err))

// });


app.get('/add_item',(req,res)=>{
    res.render("add_item")
});

app.post('/input_items',(req,res)=>{
    console.log(req.body);
    const item = Item(req.body);
    item.save().then(()=>{
        res.redirect('/');
    }).catch(err => console.log(err));


})


app.get('/details/:id',(req,res)=>{
    
    const id = req.params.id;
    Item.findById(id).then(result =>{
        console.log('result',result);
        res.render('itemDetails',{item : result})
    })
})

app.use((req,res)=>{
    res.render("404")
})




