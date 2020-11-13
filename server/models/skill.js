module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('skill', {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    Skill.associate = (models) => {
        Skill.belongsTo(models.User);
    };

    return Skill;
};