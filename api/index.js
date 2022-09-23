import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: ['hello world'] });
});

router.post('/data', (req,res) => {
    var r = req.body;
    res.send({data : r});
})

module.exports = router;
