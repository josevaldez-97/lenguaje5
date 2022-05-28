
const { QueryTypes } = require("sequelize");
const { VideoModel } = require("../../models/Video.model");
const {sequelize} = require("../bd.service");



const list = async (query, pageStart = 0 , pageLimit = 10) =>{
// consultar en la base de datos
 
 const videoModelResults = await VideoModel.findAll();
//console.log("videosResult", videoModelResults); 

const videosArray =new Array();
for (let i = 0; i < videoModelResults.length; i++) {
    const videosResult = videoModelResults[i];
    videosArray.push(videosResult.dataValues);
    
}
return videosArray;
}


const listFilter = async (query, pageStart = 0 , pageLimit = 10) =>{
    // consultar en la base de datos
     let  videosResult =await sequelize.query(`SELECT *
                                                FROM videos
                                                WHERE (UPPER(nombre) LIKE :q
                                                OR UPPER(descripcion) LIKE :q
                                                OR UPPER(tags) LIKE :q)
                                                ORDER BY codigo   `,{
                                                     replacements : {
                                                            q:(query ? '%' + query.toUpperCase()  + '%' :'%')
                                                        },
                                                       // type : QueryTypes.SELECT 
                                                });

        videosResult = (videosResult && videosResult[0]) ? videosResult[0]: [];

     console.log( "videosResult" , videosResult);
    
     return videosResult;                                  }

   /* const videosArray =new Array();
    for (let i = 0; i < videoModelResults.length; i++) {
        const videosResult = videoModelResults[i];
        videosArray.push(videosResult.dataValues);
        
    }
    return videosArray;
    }*/



const getByid = async (codigo) => {
//Buscar en la Base de datos por codigo
const videoModelResults = await VideoModel.findByPk(codigo);

if(videoModelResults){
    return  videoModelResults.dataValues;
}else{
    return null;
} }


const create = async (data) => {
    //Guardar el data en la Base de datos
    console.log("create data" , data );
    const videoModelResults = await VideoModel.create(data);

    if(videoModelResults){
        return  videoModelResults.dataValues;
    }else{
        return null;
    }
}



const update = async (data) => {
//Actualizar el data en la Base de datos`

console.log("update data" , data );

const videoModelCount = await VideoModel.update(data, {
                                                     where: {
                                                         codigo: data.codigo
                                                     }
                                                    
    });

if(videoModelCount > 0){
    const videoModelResults = await VideoModel.findByPk(data.codigo);
    return  videoModelResults.dataValues;
}else{
    return null;
}


}



const remove = async (codigo) => {
//Actualizar el data en la Base de datos
console.log("borrar codigo" , codigo );

const videoModelCount = await VideoModel.destroy({
    where: {
        codigo
    }
   
});
if (videoModelCount > 0){

    return true;

}else {
    return false;
}


return 
    true;

}


module.exports = {
list , listFilter,   
getByid , 
create, update , remove
}



