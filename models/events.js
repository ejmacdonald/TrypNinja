module.exports = function(sequelize, DataTypes)
{
    var Event = sequelize.define("Event", 
{
    userId:
    {
        type: DataTypes.Integer,
        allowNull: false
    },
    title: 
    {
        type: DataTypes.String
    }
});

//Can the belongsTo and hasMany associations be in the same function?
Event.associate = function(models)
{
    Event.belongsTo(models.User,
    {
        foreignKey:
        {
            allowNull: false
        }
    });

    Event.hasMany(models.Moment,
    {
        onDelete: "cascade"
    });
};
return Event;
}