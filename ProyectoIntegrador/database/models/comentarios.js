module.exports = function (sequelize, dataTypes ) {
    let alias = "comentarios";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        clienteId: {
            type : dataTypes.INTEGER
        },
        nombreProd: {
            type : dataTypes.STRING
        },
        imagenProd: {
            type : dataTypes.STRING
        },
        descripcion: {
            type : dataTypes.DATE
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }
    
    let comentarios = sequelize.define(alias, cols, config);
    return comentarios;
}