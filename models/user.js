module.exports = function(sequelize, DataTypes)
{
    var User = sequelize.define("User", 
{
    userName:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: 
        {
            len: [1]
        }
    },
    quote: 
    {
        type: DataTypes.STRING
    },

    googleId: 
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate:
        {
            len: [1]
        }
    },
    profileImg:{
        type: DataTypes.STRING,
        allowNull: false
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