const mongoose =require('mongoose');
var dschema  = new mongoose.Schema(
    {
        data:
        {
            id: { type: String},
            name: {type : String},
            year: {type : String},
            color: {type : String},
            pantone_value: {type : String}
        },
        support: {
            url: {type : String},
            text: {type : String},
        }
        
});
mongoose.model("reqres",dschema)