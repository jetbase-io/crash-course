const { Router } =  require('express');
const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.Education.findAll();
    return res.send(users);
});

router.get('/:educationId', async (req, res) => {
    const user = await req.context.models.Education.findByPk(
        req.params.educationId,
    );
    return res.send(user);
});

module.exports = router;