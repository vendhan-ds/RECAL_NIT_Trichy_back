import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: ['hello world'] });
});

router.post('/accomodationSave', (req,res) => {
    var r = req.body;
    res.send({data : r});
})

module.exports = router;
