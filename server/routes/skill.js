const { Router } =  require('express');
const router = Router();

router.get('/', async (req, res) => {
    const users = await req.context.models.Skill.findAll();
    return res.send(users);
});

router.get('/:skillId', async (req, res) => {
    const user = await req.context.models.Skill.findByPk(
        req.params.skillId,
    );
    return res.send(user);
});

module.exports = router;