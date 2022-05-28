

const videoController = require('../../controllers/videos/videos.controllers');
const authorizationMiddleware = require('../../middleware/authorization.middleware');

module.exports = (app) => {

    app.get('/videos' , authorizationMiddleware.authorization,videoController.list );
  

   app.get('/videos-filter' , videoController. listFilter );
    app.get('/video/find/:id', videoController.getByid);
    
    app.post('/video/create',videoController.create);
    
    app.put('/video/update', videoController.update);
    
    app.delete('/video/remove/:id',videoController.remove);
    
    
   

 
    }