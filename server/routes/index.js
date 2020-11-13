const user = require('./user');
const skill = require('./skill');
const education = require('./education');

module.exports = (app) => {
    app.use('/users', user);
    app.use('/skills', skill);
    app.use('/education', education);
};
