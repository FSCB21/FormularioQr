/* Mapeo de la tabla que va a almacenar el total de visitas que obtiene una determinada pagina*/

// Como en todas que se estan mapeando se requiere importar la superclase Model
// Model tiene la respectiva configuración para realizar el mapeo a las tablas de la BD
// DataTypes Solo contiene la información de los tipos de datos disponibles, para crear restriccion y evitar mal ingreso de la información a la BD
//? DataTypes no asegura por si solo el correcto ingreso de información a la BD
const { Model, DataTypes} = require('sequelize');

//Importamos la conexion a la BD 
const sequelize = require('../ConfigBD');

//Creamos una clase que hereda todos los atributos de la superclase Model
class ViewsCounterModel extends Model {};

//Usamos el metodo init para realizar el respectivo mapeo de la tabla
ViewsCounterModel.init({
    //Como se ha mencionado antes para el mapeo la función solicita pasar como argumentos los campos que se requieren en la tabla

    //El primer campo requerido es el id
    //Ya que se necesita un identificador para gestionar la información de manera mas optima
    id:{
        //Como es un ID sera de tipo entero(INTEGER)
        type: DataTypes.INTEGER,
        //Establecemos que este campo sera llave primaria de la tabla 
        primaryKey: true,
        //Se define que tendra un auto incremento segun el número de registro que se esté ingresando
        autoIncrement: true
    },

    //campo que almacenara el nombre de la pagina que va a contar las visitas
    access_page:{
        //Tipo de dato string con un maximo de caracteres de 50
        type:DataTypes.STRING(50),
        //Campo obligatorio
        allowNull:false,
        //Campo unico
        unique:true
    },

    //campo que almacenara el total de visitas por página
    access_counter:{
        //Tipo de dato de número
        type:DataTypes.INTEGER,
        //Campo obligatorio
        allowNull:false
    }

},{
    //Importamos la conexion a la base de datos
    sequelize,
    //Nombre de la tabla
    modelName: 'views_counter',
    //Establecemos los timestam,p como falso para que no nos genere campo de actualizacion y creacion de registro
    timestamps:false,
    //Congelamos el nombre de la tabla para que no hayan cambios en la estructura de la bd con el tema de las s
    freezeTableName: true
});

//Exportamos el modulo para usarlo en nuestro sistema
module.exports = ViewsCounterModel