module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('education', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: DataTypes.INTEGER,
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        }
    });

    Education.associate = (models) => {
        Education.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Education;
};