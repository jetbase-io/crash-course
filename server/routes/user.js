const { Router } =  require('express');
const { getUsers } = require('../methods');

const router = Router();

router.get('/', (req, res) => {
    res.send(getUsers(req.query));
});

module.exports = router;