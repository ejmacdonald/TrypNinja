module.exports = function(sequelize, DataTypes)
{
    var User = sequelize.define("User", 
{
    userName:
    {
        type: DataTypes.String,
        allowNull: false,
        validate: 
        {
            len: [1]
        }
    },
    quote: 
    {
        type: DataTypes.String
    }
});

User.associate = function(models)
{
    //Associating User with Events
    User.hasMany(models.Event,
    {
        onDelete: "cascade"
    });
};
return User;
}