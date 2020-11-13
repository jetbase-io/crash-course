const { Router } =  require('express');
const { getSkills } = require('../methods');

const router = Router();

router.get('/', (req, res) => {
    res.send(getSkills(req.query));
});

module.exports = router;