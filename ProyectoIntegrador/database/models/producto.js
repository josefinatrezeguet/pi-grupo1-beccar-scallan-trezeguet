module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_usuario: {
            type : dataTypes.INTEGER
        },
        imagen: {
            type : dataTypes.STRING
        },
        nombre: {
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
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    
    //relaciones van acá
    
    return Producto;
}