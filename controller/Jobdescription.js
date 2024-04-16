const blogjobdescription = require('../models/Jobdescription')
exports.jobdescription_save = async (req, res) => {    
    try {
        const { data } = req.body
        await blogjobdescription.create( { jobcontent:data  })
            .then((result) => {
                res.json({ res: "เพิ่มข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด Error1" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}

exports.jobdescription_update = async (req, res) => {    
    try {
        const { data , id } = req.body
        await blogjobdescription.findByIdAndUpdate(id, { jobcontent:data})
            .then((result) => {
                res.json({ res: "เพิ่มข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด Error1" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}

exports.jobdescription_find = async (req, res) => {    
    try {        
        await blogjobdescription.findOne({})
            .then((result) => {
                res.json({ res: result.jobcontent,id:result._id })
            })
            .catch((err) => {
                res.json({ res: "เกิด Error1" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}