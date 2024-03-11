const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
    component_id : {
        type: String,
        unique : true,
        required: true
    },
    description : {
        type : String
    },
    ubicacion : {
        type : String
    },
    activo : {
        type: Boolean
    },
    tipo : {
        type : String
    },
    valor : {
        type : String
    }

}, {timestamps : true})

componentSchema.index({component_id:1}, {unique : true})

module.exports = mongoose.model('component', componentSchema);
