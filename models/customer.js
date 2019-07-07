module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define(
        "Customer",
        {
            customer: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 50]
                }
            }
        },
        {
            timestamp: true,
            createdAt: "date_created",
            updatedAt: false,
            deletedAt: false
        }
    );
    Customer.associate = models => {
        Customer.hasMany(models.Burger);
    };
    return Customer;
};  