const { Router } =  require('express');
const { getEducation } = require('../methods');

const router = Router();

router.get('/', (req, res) => {
    res.send(getEducation(req.query));
});

module.exports = router;