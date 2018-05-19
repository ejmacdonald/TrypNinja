module.exports = function(sequelize, DataTypes)
{
    var Event = sequelize.define("Event", 
{
    title: 
    {
        type: DataTypes.STRING
    },
    
    isOpen:
    {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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