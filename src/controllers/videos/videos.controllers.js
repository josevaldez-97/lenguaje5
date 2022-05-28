
const videoservise = require('../../services/videos/video.services');

const list = async (req, res) => {

const videos = await videoservise.list(req.query.q);
res.send({
success: true,
    videos 
    
});
}

const listFilter = async (req, res) => {

    const videos = await videoservise.listFilter(req.query.q);
    res.send({
    success: true,
        videos 
        
    });
    }
    




const getByid = async  (req, res) => {

const video = await videoservise.getByid(req.params.id);
    
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['video'] = video

    res.status(201).send(jsonResultado);
        
    };


const create = async (req, res) => {

const video = await  videoservise.create(req.body);

    res.status(202). send({
        success: true,
        video
    });
};


const update = async (req, res) => {

    const video = await videoservise.update(req.body);

        res.status(202). send({
            success: true, video
        });
    };


    const remove = async (req, res) => {

        const booleanValue = await videoservise.remove(req.params.id);
    
            res.status(202). send({
                booleanValue,
            });
        };





module.exports = {
    list , listFilter,
    getByid , 
    create, update ,remove
}



