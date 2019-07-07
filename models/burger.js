module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define(
    "Burger",
    {
      burger: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamp: true,
      createdAt: "date_created",
      updatedAt: "date_eaten",
      deletedAt: false
    }
  );
  Burger.associate = models => {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Burger;
};