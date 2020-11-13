async function createUsers(models, users) {
    for await (let user of users) {
        models.User.create(user);
    }
}

async function createSkills(models, skills) {
    for await (let skill of skills) {
        models.Skill.create(skill, {
            include: [models.User],
        },);
    }
}

async function createEducation(models, education) {
    for await (let el of education) {
        models.Education.create(el, {
            include: [models.User],
        },);
    }
}

const users = require('./data/users');
const skills = require('./data/skills');
const education = require('./data/education');

module.exports = async (models) => {
    await createUsers(models, users);
    await createSkills(models, skills);
    await createEducation(models, education);
};