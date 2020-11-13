module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        skillsDescription: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Skill, { onDelete: 'CASCADE' });
        User.hasMany(models.Education, { onDelete: 'CASCADE' });
    };

    return User;
};