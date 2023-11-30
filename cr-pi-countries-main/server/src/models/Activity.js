const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        temporada: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })
}