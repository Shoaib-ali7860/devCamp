const Bootcamp=require('../models/Bootcamp.js')


exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find()
        res.status(201).json({
            success: true,
            data: bootcamp

        });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }



  //  res.status(200).json({success:true,msg:"show all bootcamp"})
}
exports.getBootcamp =async  (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            return res.status(400).json({ success: false, message: err.message })
        }
        res.status(201).json({
            success: true,
            data: bootcamp

        });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
   // res.status(200).json({ success: true, msg: `get the user ${req.params.id}` })
}

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp

        });
    }
    catch (err) {
        res.status(400).json({success:false,message:err.message})
    }
}
exports.deleteBootcamp =async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if (!bootcamp) {
            return res.status(400).json({ success: false, message: err.message })
        }
        res.status(201).json({
            success: true,
            data: bootcamp

        });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}
exports.updateBootcamp =async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true })
        if (!bootcamp) {
            return res.status(400).json({ success: false, message: err.message })
        }
        res.status(201).json({
            success: true,
            data: bootcamp

        });
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}