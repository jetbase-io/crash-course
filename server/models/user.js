module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        age: DataTypes.INTEGER,
        address: DataTypes.STRING,
        website: DataTypes.STRING,
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
        skillsDescription: DataTypes.STRING(1000)
    });

    User.associate = (models) => {
        User.hasMany(models.Skill, { onDelete: 'CASCADE' });
        User.hasMany(models.Education, { onDelete: 'CASCADE' });
    };

    return User;
};