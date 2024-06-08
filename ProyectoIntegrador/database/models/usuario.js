module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    //relaciones van acá

    return Usuario;
}
