const blogsubstation = require('../models/substations')

exports.Addsubstation = async (req, res) => {
    try {
        const { nameThai, initialsThai, nameEng, initialsEng, affiliation } = req.body
        await blogsubstation.create({ nameThai, initialsThai, nameEng, initialsEng, affiliation })
            .then((result) => {
                res.json({ res: "เพิ่มข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })

    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.updatesubstation = async (req, res) => {
    try {
        const { id,nameThai, initialsThai, nameEng, initialsEng, affiliation } = req.body
        await blogsubstation.findByIdAndUpdate( id ,{ nameThai, initialsThai, nameEng, initialsEng, affiliation })
            .then((result) => {
                res.json({ res: "แก้ไขข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })

    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.fetchsubstation = async (req, res) => {
    try {
        const { find } = req.body
        if (find !== "") {
            await blogsubstation.find({nameThai:find}).exec()
            .then((result) => {
                res.json(result)
            })
                .catch((err) => {
                    res.json(err)
                })
        } else {
            await blogsubstation.find({}).exec()
            .then((result) => {
                res.json(result)
            })
                .catch((err) => {
                    res.json(err)
                })
        }
    } catch (err) {
        res.json(err)
    }
}
// exports.fetchsubstation = async (req, res) => {
//     try {
//         const { find } = req.body
//         if (find !== "") {
//             await blogsubstation.find({ $or: [{ nameThai: { $regex: find, $options: 'i' } }, { initialsThai: { $regex: find, $options: 'i' } }, { nameEng: { $regex: find, $options: 'i' } }, { initialsEng: { $regex: find, $options: 'i' } }, { affiliation: { $regex: find, $options: 'i' } }] }).exec()
//             .then((result) => {
//                 res.json(result)
//             })
//                 .catch((err) => {
//                     res.json(err)
//                 })
//         } else {
//             await blogsubstation.find({}).exec()
//             .then((result) => {
//                 res.json(result)
//             })
//                 .catch((err) => {
//                     res.json(err)
//                 })
//         }
//     } catch (err) {
//         res.json(err)
//     }
// }

exports.fetchinfosubstation = async (req, res) => {
    try {
        const { nameThai } = req.body        
            await blogsubstation.findOne({nameThai}).exec()
            .then((result) => {
                res.json(result)
            })
                .catch((err) => {
                    res.json(err)
                })
        
    } catch (err) {
        res.json(err)
    }
}

exports.deletesubstation = async (req , res) =>{
    try{
        const {id} = req.body
        await blogsubstation.findByIdAndDelete(id)
        .then(()=>{
            res.json({res:"ลบข้อมูลสำเร็จ"})
        })
    }catch(err){
        res.json({res:"เกิด error"})
    }
}

exports.checksubstation = async (req,res) =>{
    try{
        const {find} = req.body
        await blogsubstation.findOne({nameThai:find}).exec()
        .then((result)=>{
            if(result){
                res.json({res:"เจอข้อมูลสถานี",result})
            }else{
                res.json({res:"ไม่พบข้อมูลสถานี"})
            }
           
        })
    }catch(err){

    }
}
