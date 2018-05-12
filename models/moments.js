module.exports = function(sequelize, DataTypes)
{
    var Moment = sequelize.define("Moment", 
{
    // eventId:
    // {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    moment:
    {
        type: DataTypes.STRING
    },

    isPhoto:
    {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    caption:
    {
        type: DataTypes.STRING
    }

    });
    Moment.belongsTo(models.Event,
    {
        onDelete: "cascase"
    });
return Moment;
}