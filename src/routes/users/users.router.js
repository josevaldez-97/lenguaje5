

const userController = require('../../controllers/users/users.controllers');

const authorizationMiddleware = require(`../../middleware/authorization.middleware`);

module.exports = (app) => {

    app.get('/users' ,authorizationMiddleware.authorization,   userController.list );
  

   app.get('/users-filter',authorizationMiddleware.authorization,  userController. listFilter );
    app.get('/user/find/:id',authorizationMiddleware.authorization, userController.getByid);
    
    app.post('/user/create',authorizationMiddleware.authorization, userController.create);
    
    app.put('/user/update', authorizationMiddleware.authorization,userController.update);
    
    app.delete('/user/remove/:id',authorizationMiddleware.authorization, userController.remove);
    
    app.post('/user/login', userController.login);
    
    app.post('/user/logout',authorizationMiddleware.authorization, userController.logout);
   

 
    }