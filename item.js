const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    item: {type:String, required:true},
    quantity: {type: Number, required: true},
    priority: {type: Number, required: true},
});

Schema.statics.addItem = async function(item){
    var Item = new this(item);
    var result =  await Item.save(item);
    return result;
}

Schema.statics.listItem = async function(){
    return await this.find();
}

module.exports = mongoose.model('item', Schema);