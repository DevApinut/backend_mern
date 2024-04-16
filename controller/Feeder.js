const blogsubstation = require('../models/substations')

exports.findfeeder = (req, res) => {
    try {
        const { nameThai, locationtest } = req.body
        blogsubstation.findOne({ nameThai }).exec()
            .then((result) => {
                res.json({ res: "พบข้อมูล", Feeder: result.switchgear_CB, nameThai , result})
            })
            .catch((err) => {
                res.json({ res: "เกิด Error", Feeder: ["ไม่พบข้อมูล"], nameThai })
            })
    } catch (err) {
        res.json(err)
    }
}

exports.addfeeder = async (req, res) => {
    try {
        const { nameThai, initialsThai, nameEng, initialsEng, affiliation, locationtest, Feeder, Counter } = req.body
        await blogsubstation.findOneAndUpdate({ nameThai }, { locationtest, switchgear_CB: Feeder, Counter })
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

// Edit for add data with push no position of data
// exports.Edit_add_feeder = async (req, res) => {
//     try {
//         const { nameThai } = req.body
//         await blogfeeder.findOneAndUpdate({ nameThai }, { $push: { Feeder: { test1: "ทดสอบ1", test2: "ทดสอบ2", test3: "ทดสอบ3", test4: "ทดสอบ4" } } })
//             .then((result) => {
//                 res.json({ res: "อัพเดทสำเร็จ" })
//             })
//             .catch((err) => {
//                 res.json(err)
//             })
//     }
//     catch (err) {
//         res.send(err)
//     }
// }

exports.Edit_add_feeder = async (req, res) => {
    try {
        const { nameThai } = req.body
        await blogsubstation.findOneAndUpdate({ nameThai }, { $push: { Feeder: { $each: [{ test1: "9999", test2: "9999", test3: "9999", test4: "9999" }], $position: 3 } } })
            .then((result) => {
                res.json({ res: "อัพเดทสำเร็จ" })
            })
            .catch((err) => {
                res.json(err)
            })
    }
    catch (err) {
        res.send(err)
    }
}

exports.Edit_delete_feeder = async (req, res) => {
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

exports.Edit_update_feeder = async (req, res) => {
    const { nameThai , code, MFR, Type, SN, kV, kA, A, Feeder, index_array , index_feeder } = req.body
    try {
        // await blogfeeder.findOneAndUpdate({ nameThai }, { $set: { "Feeder.0.MFR":"อันที่1"  } })
        await blogsubstation.updateOne({ nameThai }, {
            $set: {
                [`switchgear_CB.${index_array}.${index_feeder}.code`]: code,
                [`switchgear_CB.${index_array}.${index_feeder}.MFR`]: MFR,
                [`switchgear_CB.${index_array}.${index_feeder}.Type`]: Type,
                [`switchgear_CB.${index_array}.${index_feeder}.SN`]: SN,
                [`switchgear_CB.${index_array}.${index_feeder}.kV`]: kV,
                [`switchgear_CB.${index_array}.${index_feeder}.kA`]: kA,
                [`switchgear_CB.${index_array}.${index_feeder}.A`]: A
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
// exports.Edit_update_feeder = async (req, res) => {
//     const { nameThai , code, MFR, Type, SN, kV, kA, A, Feeder, index_array } = req.body
//     try {
//         // await blogfeeder.findOneAndUpdate({ nameThai }, { $set: { "Feeder.0.MFR":"อันที่1"  } })
//         await blogsubstation.updateOne({ nameThai }, {
//             $set: {
//                 [`switchgear_CB.${index_array}.$[num].code`]: code,
//                 [`switchgear_CB.${index_array}.$[num].MFR`]: MFR,
//                 [`switchgear_CB.${index_array}.$[num].Type`]: Type,
//                 [`switchgear_CB.${index_array}.$[num].SN`]: SN,
//                 [`switchgear_CB.${index_array}.$[num].kV`]: kV,
//                 [`switchgear_CB.${index_array}.$[num].kA`]: kA,
//                 [`switchgear_CB.${index_array}.$[num].A`]: A
//             }
//         }, {
//             "arrayFilters": [{ "num.code": Feeder },]
//         })
//             .then((result) => {
//                 res.json({ res: "แก้ไขข้อมูลสำเร็จ" })
//             })
//             .catch((err) => {
//                 res.json({ res: "เกิด error" })
//             })
//     }
//     catch (err) {
//         res.send({ res: "เกิด error" })
//     }
// }

exports.updatepermissiontest = async(req,res) =>{
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

// exports.nameTest= async(req,res)=>{
//     const {repeatdata,nametest} = req.body
//     try{
//         if(repeatdata){
//             await blogsubstation.findOne({nameThai,})
//         }
//     }
//     catch{}
// }