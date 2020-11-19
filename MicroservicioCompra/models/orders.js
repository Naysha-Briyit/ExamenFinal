const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    IdProducto: {type: Number },
    Nombre: {type: String },
    Precio: {type: Number}
});

module.exports = mongoose.model('Order', logSchema);


