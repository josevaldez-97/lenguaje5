
const userservise = require('../../services/users/users.services');

const list = async (req, res) => {

const videos = await userservise.list(req.query.q);
res.send({
success: true,
    videos 
    
});
}

const listFilter = async (req, res) => {

    const videos = await userservise.listFilter(req.query.q);
    res.send({
    success: true,
        videos 
        
    });
    }
    




const getByid = async  (req, res) => {

const video = await userservise.getByid(req.params.id);
    
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['video'] = video

    res.status(201).send(jsonResultado);
        
    };


const create = async (req, res) => {

const video = await  userservise.create(req.body);

    res.status(202). send({
        success: true,
        video
    });
};


const update = async (req, res) => {

    const video = await userservise.update(req.body);

        res.status(202). send({
            success: true, video
        });
    };


    const remove = async (req, res) => {

        const booleanValue = await userservise.remove(req.params.id);
    
            res.status(202). send({
                booleanValue,
            });
        };


        const login = async (req, res) => {
            try {
              const user = await userservise.login(req.body);
          
              res.status(200).send({
                success: true,
                token: user.token,
              });
            } catch (error) {
              res.status(200).send({
                success: false,
                error: error.message,
              });
            }
          };
          
          const logout = async (req, res) => {
            
            const usuario = await usuarioService.logout(req.usuarioId);
            
            res.status(200).send({
              success: true,
              usuario,
            });
          
          };



module.exports = {
    list , listFilter,
    getByid , 
    create, update ,remove , login , logout
}



