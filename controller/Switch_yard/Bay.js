const blogsubstation = require('../../models/substations')

exports.findbay = (req, res) => {
    try {
        const { nameThai, locationtest } = req.body
        blogsubstation.findOne({ nameThai }).exec()
            .then((result) => {
                res.json({ res: "พบข้อมูล", Feeder: result.Switch_yard, nameThai , result})
            })
            .catch((err) => {
                res.json({ res: "เกิด Error", Feeder: ["ไม่พบข้อมูล"], nameThai })
            })
    } catch (err) {
        res.json(err)
    }
}

exports.addbay = async (req, res) => {
    try {
        const { nameThai, initialsThai, nameEng, initialsEng, affiliation, locationtest, Feeder, Counter } = req.body
        await blogsubstation.findOneAndUpdate({ nameThai }, { locationtest, Switch_yard: Feeder, Counter })
            .then((result) => {
                res.json({ res: "เพิ่มข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด Error1" })
            })
    }
    catch (err) {
        res.json({ res: "เกิด Error" })
    }
}




exports.Edit_delete_bay = async (req, res) => {
    try {
        const { nameThai } = req.body
        await blogsubstation.findOneAndUpdate({ nameThai }, { $pull: { Feeder: { test1: "โพรี" } } })
            .then((result) => {
                res.json({ res: "ลบสำเร็จ" })
            })
            .catch((err) => {
                res.json(err)
            })
    }
    catch (err) {
        res.send(err)
    }
}

exports.Edit_update_bay = async (req, res) => {
    const { nameThai , code, MFR, Type, SN, kV, kA, A, Feeder, index_array , index_feeder } = req.body
    try {
        // await blogfeeder.findOneAndUpdate({ nameThai }, { $set: { "Feeder.0.MFR":"อันที่1"  } })
        await blogsubstation.updateOne({ nameThai }, {
            $set: {
                [`Switch_yard.${index_array}.${index_feeder}.code`]: code,
                [`Switch_yard.${index_array}.${index_feeder}.MFR`]: MFR,
                [`Switch_yard.${index_array}.${index_feeder}.Type`]: Type,
                [`Switch_yard.${index_array}.${index_feeder}.SN`]: SN,
                [`Switch_yard.${index_array}.${index_feeder}.kV`]: kV,
                [`Switch_yard.${index_array}.${index_feeder}.kA`]: kA,
                [`Switch_yard.${index_array}.${index_feeder}.A`]: A
            }
        }, {
            "arrayFilters": [{ "num.code": Feeder },]
        })
            .then((result) => {
                res.json({ res: "แก้ไขข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    }
    catch (err) {
        res.send({ res: "เกิด error" })
    }
}

exports.updatepermissiontest_Switchtyard = async(req,res) =>{
    const {nameThai,checked} = req.body
    try{
       await blogsubstation.findOneAndUpdate({nameThai},{permission:checked} , {new: true})
       .then((result)=>{
        res.json({checked:result.permission , res:"เปลี่ยนแปลงสิทธิ์สำเร็จ" ,result})
       })
       .catch((err)=>{
        res.json({res:"เกิด error"})
       })
    }catch(err){

    }
}

