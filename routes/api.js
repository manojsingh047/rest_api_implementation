const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res, next) => {

    // Ninja.find({})
    //     .then(ninjas => res.send(ninjas))
    //     .catch(next);


    Ninja.aggregate().near(
        {
            near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
            maxDistance: 10,
            spherical: true,
            distanceField: "dist.calculated"
        })
        .then(ninjas => res.send(ninjas))
        .catch(next);

});

router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body)
        .then(ninja => res.send(ninja))
        .catch(next);

});

router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Ninja.findOne({_id: req.params.id})
                .then(ninja => res.send(ninja));
        })
        .catch(next);
});

router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id})
        .then(ninja => res.send(ninja))
        .catch(next);
});


module.exports = router;



