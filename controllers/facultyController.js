const Faculty = require('../models/faculty');


const facultyGetMethod = (req,res,next)=>{
    Faculty.find().then((result)=>{
        res.status(200).json({record: result});
    }).catch((err)=>{
        res.status(500).json({error: err});
    })
};

const facultyGetById = (req,res,next)=>{
    Faculty.findById(req.params.id).then((result)=>{
        res.status(200).json({records: result});
    }).catch((error)=>{
        res.status(500).json({error: error});
    });
};

const facultyPostMethod = (req,res,next)=>{
        const faculty = new Faculty(req.body);
    
        faculty.save().then((result)=>{
            res.status(200).json({message: 'partie Added Successfully.'});
        }).catch((err)=>{
            res.status(500).json({message: err});
        });
}

const facultyPutMethod = (req,res,next)=>{
    Faculty.findOneAndUpdate({_id: req.params.id}, { $set: req.body }).then((result)=>{
        res.status(200).json({message: "Record Updated Successfully."})
    }).catch((err)=>{
        res.status(500).json({error: err});
    });
}

const deleteFacultyMethod = (req,res,next)=>{
    Faculty.findByIdAndDelete({_id: req.params.id}).then((result)=>{
        res.status(200).json({
            message: 'Student deleted successfully.'
        }).catch((err)=>{
            res.status(500).json({
                error: err
            });
        });
    });
}

module.exports = {facultyGetMethod, facultyGetById, facultyPostMethod, facultyPutMethod, deleteFacultyMethod}