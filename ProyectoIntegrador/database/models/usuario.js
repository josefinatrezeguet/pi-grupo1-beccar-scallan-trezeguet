module.exports = function (sequelize, DataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            unique: true
        },
        fotoPerfil: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'id_usuario'
        });

        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_usuario'
        });
    };

    return Usuario;
}
