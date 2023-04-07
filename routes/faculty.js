const express = require('express');
const routes = express.Router();
const Faculty = require('../models/faculty');

routes.get('/' ,(req,res,next)=>{
    Faculty.find().then((result)=>{
        res.status(200).json({record: result});
    }).catch((err)=>{
        res.status(500).json({error: err});
    })
});

routes.get('/:id',(req,res,next)=>{
    Faculty.findById(req.params.id).then((result)=>{
        res.status(200).json({records: result});
    }).catch((error)=>{
        res.status(500).json({error: error});
    });
});

routes.post('/',(req,res,next)=>{
    const faculty = new Faculty({
        name: req.body.name,
        phone: req.body.phone,
        salary: req.body.salary,
        dateOfJoining: req.body.joiningDate,
        address: req.body.address,
    });

    faculty.save().then((result)=>{
        res.status(200).json({message: 'partie Added Successfully.'});
    }).catch((err)=>{
        res.status(500).json({message: err});
    });
});

routes.put('/:id',(req,res,next)=>{
    Faculty.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            salary: req.body.salary,
            dateOfJoining: req.body.joiningDate,
            address: req.body.address,
        }
    }).then((result)=>{
        res.status(200).json({message: "Record Updated Successfully."})
    }).catch((err)=>{
        res.status(500).json({error: err});
    });
});

// delete record by id.
routes.delete('/:id',(req,res,next)=>{
    Faculty.findByIdAndDelete({_id: req.params.id}).then((result)=>{
        res.status(200).json({
            message: 'Student deleted successfully.'
        }).catch((err)=>{
            res.status(500).json({
                error: err
            });
        });
    });
});

module.exports = routes;