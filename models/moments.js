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

    Moment.associate = function(models)
    {
        Moment.belongsTo(models.Event,
        {
            foreignKey:
            {
                allowNull: false
            },
        });
    };
return Moment;
}