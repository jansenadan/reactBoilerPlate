import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/login', (req, res) => {

    var body = req.body;
    console.log( body );

    res.send('Hello World!')
});

export default router;