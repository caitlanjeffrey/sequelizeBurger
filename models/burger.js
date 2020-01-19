module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    // Burger.associate = function (models) {
    //     // We're saying that a Burger should belong to an Author
    //     // A Burger can't be created without an Author due to the foreign key constraint
    //     Burger.belongsTo(models.Customer, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Burger;
};