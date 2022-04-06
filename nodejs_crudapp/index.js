const axios =require('axios');
const mongoose = require('mongoose');
const express = require ('express');

const app = express(),
port = 9000;






mongoose.connect('mongodb://localhost/reqresdata')
.then(()=>
{
    console.log('connected....');
})
.catch((err)=>
{
console.log(err);
});


var dschema  = new mongoose.Schema(
    {data:
        {
            id: { type: String},
            name: {type : String},
            year: {type : String},
            color: {type : String},
            pantone_value: {type : String},
            job : { type : String},
            createdAt :{type : Date },
            url: {type : String},
            text: {type : String}
        }
    });
        
const Reqres = mongoose.model("Reqres",dschema)







var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(express.json());

app.get('/',(req,res)=>
{
axios.get('https://reqres.in/api/user/2')
.then((result)=>
{
    res.send(result.data);
})
});

app.post('/api/insert',async(req,res)=>
{
axios
 .post("https://reqres.in/api/users",{

})
 .then((result)=>

{
    res.send(result.data);
})
});


app.post("/addUser/1", (req, res) => {

    const data = new reqres({
        "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"

    })
    const result = data.save();
    console.log(data)

    })

app.post("/addUser", (req, res) => {

    const data = new reqres(req.body)
    data.save()
    .then(item => {
            res.send(data);
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
            });
 
});





app.put('/api/update',(req,res)=>
{
    axios
    .put("https://reqres.in/api/users/2",{
        "name": "morpheus",
        "job": "zion resident"
    })
    .then((result)=>
    {
        console.log(result.data);
    }
    )
    .catch((err)=>
    {
        console.log(err);
    });
});



app.delete('/api/delete',(req,res)=>
{
    
axios
.delete("https://reqres.in/api/users/2")
.then((result)=>
{
   res.sendStatus(result.status);
}
)
.catch((err)=>
{
    console.log(err);
})
});



app.listen(port,()=>
{
    console.log(`running application on port  ${port} `);

});





const dbconnect =require('./mongodb');
const insert = async ()=>{
    const db = await dbconnect();
    const result = await db.insert({
        
            "id": 1,
            "name": "cerulean",
            "year": 2000,
            "color": "#98B2D1",
            "pantone_value": "15-4020"
        }

    );
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}