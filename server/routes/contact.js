const express = require('express');

let app = express();
let Contact = require('../models/contact');

// ===========================
//  DAR AUTORIZACIÓN PARA HACER PETICIONES SIN headers
// ===========================
let {CORS} = require('../cors/cors');
CORS(app)


// ===========================
//  Obtener contactos
// ===========================
app.get('/contact', (req, res) => {
    Contact.find({})
        .exec((err, contacts) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                contacts
            });


        })

});



// ===========================
//  Crear un nuevo contacto
// ===========================
app.post('/contact', (req, res) => {
    // grabar el contacto

    let body = req.body.contact;
    let contact = new Contact({
        name: body.name,
        email: body.email,
        phone: body.phone,
        contact_type: body.contact_type
    });


    contact.save((err, contactDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            contact: contactDB
        });

    });

});




module.exports = app;