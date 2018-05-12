module.exports = function(sequelize, DataTypes)
{
    var Moment = sequelize.define("Moment", 
{
    eventId:
    {
        type: DataTypes.Integer,
        allowNull: false
    },
    moment:
    {
        type: DataTypes.String
    },

    isPhoto:
    {
        type: DataTypes.Boolean,
        defaultValue: false
    },

    caption:
    {
        type: DataTypes.String
    }
});
return Moment;
}