const mongoose = require('mongoose');
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
    {
        data:
        {
            id: { type: String},
            name: {type : String},
            year: {type : String},
            color: {type : String},
            pantone_value: {type : String},
            job : { type : String},
            createdAt :{type : Date }
        },
        support: {
            url: {type : String},
            text: {type : String},
        }
        
});
const reqres = mongoose.model("reqres",dschema)
