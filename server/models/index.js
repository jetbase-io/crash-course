const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'admin',
    {
        dialect: 'postgres',
    }
);

const models = {
    User: require('./user')(sequelize, DataTypes),
    Skill: require('./skill')(sequelize, DataTypes),
    Education: require('./education')(sequelize, DataTypes)
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = {
    sequelize,
    models
};

