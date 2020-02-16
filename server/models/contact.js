var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contactSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, required: [true, 'El email  es necesario'] },
    phone: { type: Number, required: [true, 'El teléfono  es necesario'] },
    contact_type: { type: String,required:[true, 'El tipo de contacto  es necesario']}
});
module.exports = mongoose.model('Contact', contactSchema);