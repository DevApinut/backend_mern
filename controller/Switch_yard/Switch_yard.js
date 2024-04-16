const blogsubstation = require('../../models/substations')


exports.Updateinsulation_Switchtyard = async (req, res) => {
    let { nameThai, Feeder, PhaseAG, PhaseBG, PhaseCG, PhaseAB, PhaseBC, PhaseCA, index_array } = req.body
    /*ทำการเช็คว่ามีการรับข้อมูลมาไหมถ้าไม่มีการรับมาก็ให้เป็น Array ว่างๆ เพื่อให้เกิดการ push ขึ้นเเต่ถ้ามีก็ให้ค่าเท่าเดิม */
    index_array = (index_array) ? index_array : 0
    PhaseAG = (PhaseAG) ? [PhaseAG] : []
    PhaseBG = (PhaseBG) ? [PhaseBG] : []
    PhaseCG = (PhaseCG) ? [PhaseCG] : []
    PhaseAB = (PhaseAB) ? [PhaseAB] : []
    PhaseBC = (PhaseBC) ? [PhaseBC] : []
    PhaseCA = (PhaseCA) ? [PhaseCA] : []

    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, {
            $push: {
                [`Switch_yard.${index_array}.$[num].Insulation.PhaseAG`]: { $each: PhaseAG, $position: 0 }
                , [`Switch_yard.${index_array}.$[num].Insulation.PhaseBG`]: { $each: PhaseBG, $position: 0 }
                , [`Switch_yard.${index_array}.$[num].Insulation.PhaseCG`]: { $each: PhaseCG, $position: 0 }
                , [`Switch_yard.${index_array}.$[num].Insulation.PhaseAB`]: { $each: PhaseAB, $position: 0 }
                , [`Switch_yard.${index_array}.$[num].Insulation.PhaseBC`]: { $each: PhaseBC, $position: 0 }
                , [`Switch_yard.${index_array}.$[num].Insulation.PhaseCA`]: { $each: PhaseCA, $position: 0 }
            }
        }, { "arrayFilters": [{ "num.code": Feeder },] })
            .then(result => {
                res.json({ res: "อัพเดทสำเร็จ", result_insulation: result.switchgear_CB[index_array].Insulation })
            })
            .catch(err => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}

exports.fetchdatatest_Switchtyard = async (req, res) => {
    const { nameThai } = req.body
    try {
        await blogsubstation.findOne({ nameThai }).exec()
            .then((result) => {
                res.json({ result })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}

exports.updatenametest_Switchtyard = async (req, res) => {
    const { nameThai, nameTest } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, { $push: { Switch_yard: { $each: [nameTest], $position: 0 } } }).exec()
            .then((result) => {
                res.json({ res: "ทำการสร้าง nameTestสำเร็จ" })
            })
            .catch((err) => {

            })
    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}
exports.deletenametest_Switchtyard = async (req, res) => {
    const { nameThai, nameTest, index_array } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai },
            { $pull: { [`switchgear_CB.${index_array}`]: {} } })
            .then((result) => {
                blogsubstation.findOneAndUpdate({ nameThai },
                    { $pull: { [`switchgear_CB`]: [] } })
                    .then(res.json({ res: `ทำการลบ ${nameTest} สำเร็จ` }))
                    .catch((err) => res.json({ res: "เกิด error" }))
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.Updatecontact_Switchyard = async (req, res) => {
    let { nameThai, Feeder, PhaseA, PhaseB, PhaseC, index_array } = req.body
    index_array = (index_array) ? index_array : 0
    PhaseA = (PhaseA) ? [PhaseA] : []
    PhaseB = (PhaseB) ? [PhaseB] : []
    PhaseC = (PhaseC) ? [PhaseC] : []
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, {
            $push: {
                [`Switch_yard.${index_array}.$[num].Contact.PhaseA`]: { $each: PhaseA, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Contact.PhaseB`]: { $each: PhaseB, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Contact.PhaseC`]: { $each: PhaseC, $position: 0 },
            }
        }, { "arrayFilters": [{ "num.code": Feeder },] })
            .then((result) => {
                res.json({ res: "อัพเดทข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    }
    catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.UpdateCoil_Switchyard = async (req, res) => {
    let { nameThai, Feeder, index_array,
        PhaseA_Time_close,
        PhaseA_Time_open1,
        PhaseA_Time_open2,
        PhaseA_Res_close,
        PhaseA_Res_open1,
        PhaseA_Res_open2,
        PhaseA_Current_close,
        PhaseA_Current_open1,
        PhaseA_Current_open2,

        PhaseB_Time_close,
        PhaseB_Time_open1,
        PhaseB_Time_open2,
        PhaseB_Res_close,
        PhaseB_Res_open1,
        PhaseB_Res_open2,
        PhaseB_Current_close,
        PhaseB_Current_open1,
        PhaseB_Current_open2,
        
        PhaseC_Time_close,
        PhaseC_Time_open1,
        PhaseC_Time_open2,
        PhaseC_Res_close,
        PhaseC_Res_open1,
        PhaseC_Res_open2,
        PhaseC_Current_close,
        PhaseC_Current_open1,
        PhaseC_Current_open2, 
    
    } = req.body
    index_array = (index_array) ? index_array : 0
    PhaseA_Time_close = (PhaseA_Time_close) ? [PhaseA_Time_close] : []
    PhaseA_Time_open1 = (PhaseA_Time_open1) ? [PhaseA_Time_open1] : []
    PhaseA_Time_open2 = (PhaseA_Time_open2) ? [PhaseA_Time_open2] : []
    PhaseA_Res_close = (PhaseA_Res_close) ? [PhaseA_Res_close] : []
    PhaseA_Res_open1 = (PhaseA_Res_open1) ? [PhaseA_Res_open1] : []
    PhaseA_Res_open2 = (PhaseA_Res_open2) ? [PhaseA_Res_open2] : []
    PhaseA_Current_close = (PhaseA_Current_close) ? [PhaseA_Current_close] : []
    PhaseA_Current_open1 = (PhaseA_Current_open1) ? [PhaseA_Current_open1] : []
    PhaseA_Current_open2 = (PhaseA_Current_open2) ? [PhaseA_Current_open2] : []

    PhaseB_Time_close = (PhaseB_Time_close) ? [PhaseB_Time_close] : []
    PhaseB_Time_open1 = (PhaseB_Time_open1) ? [PhaseB_Time_open1] : []
    PhaseB_Time_open2 = (PhaseB_Time_open2) ? [PhaseB_Time_open2] : []
    PhaseB_Res_close = (PhaseB_Res_close) ? [PhaseB_Res_close] : []
    PhaseB_Res_open1 = (PhaseB_Res_open1) ? [PhaseB_Res_open1] : []
    PhaseB_Res_open2 = (PhaseB_Res_open2) ? [PhaseB_Res_open2] : []
    PhaseB_Current_close = (PhaseB_Current_close) ? [PhaseB_Current_close] : []
    PhaseB_Current_open1 = (PhaseB_Current_open1) ? [PhaseB_Current_open1] : []
    PhaseB_Current_open2 = (PhaseB_Current_open2) ? [PhaseB_Current_open2] : []

    PhaseC_Time_close = (PhaseC_Time_close) ? [PhaseC_Time_close] : []
    PhaseC_Time_open1 = (PhaseC_Time_open1) ? [PhaseC_Time_open1] : []
    PhaseC_Time_open2 = (PhaseC_Time_open2) ? [PhaseC_Time_open2] : []
    PhaseC_Res_close = (PhaseC_Res_close) ? [PhaseC_Res_close] : []
    PhaseC_Res_open1 = (PhaseC_Res_open1) ? [PhaseC_Res_open1] : []
    PhaseC_Res_open2 = (PhaseC_Res_open2) ? [PhaseC_Res_open2] : []
    PhaseC_Current_close = (PhaseC_Current_close) ? [PhaseC_Current_close] : []
    PhaseC_Current_open1 = (PhaseC_Current_open1) ? [PhaseC_Current_open1] : []
    PhaseC_Current_open2 = (PhaseC_Current_open2) ? [PhaseC_Current_open2] : []
    
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, {
            $push: {
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Time_close`]: { $each: PhaseA_Time_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Time_open1`]: { $each: PhaseA_Time_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Time_open2`]: { $each: PhaseA_Time_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Res_close`]: { $each:  PhaseA_Res_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Res_open1`]: { $each:  PhaseA_Res_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Res_open2`]: { $each:  PhaseA_Res_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Current_close`]: { $each: PhaseA_Current_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Current_open1`]: { $each: PhaseA_Current_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseA_Current_open2`]: { $each: PhaseA_Current_open2, $position: 0 },
                
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Time_close`]: { $each: PhaseB_Time_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Time_open1`]: { $each: PhaseB_Time_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Time_open2`]: { $each: PhaseB_Time_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Res_close`]: { $each:  PhaseB_Res_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Res_open1`]: { $each:  PhaseB_Res_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Res_open2`]: { $each:  PhaseB_Res_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Current_close`]: { $each: PhaseB_Current_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Current_open1`]: { $each: PhaseB_Current_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseB_Current_open2`]: { $each: PhaseB_Current_open2, $position: 0 },
                
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Time_close`]: { $each: PhaseC_Time_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Time_open1`]: { $each: PhaseC_Time_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Time_open2`]: { $each: PhaseC_Time_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Res_close`]: { $each:  PhaseC_Res_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Res_open1`]: { $each:  PhaseC_Res_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Res_open2`]: { $each:  PhaseC_Res_open2, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Current_close`]: { $each: PhaseC_Current_close, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Current_open1`]: { $each: PhaseC_Current_open1, $position: 0 },
                [`Switch_yard.${index_array}.$[num].Coil.PhaseC_Current_open2`]: { $each: PhaseC_Current_open2, $position: 0 },
            }
        }, { "arrayFilters": [{ "num.code": Feeder },] })
            .then((result) => {
                res.json({ res: "อัพเดทข้อมูลสำเร็จ" })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    }
    catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.Updatetiming_Switchtyard = async (req, res) => {
    let { nameThai, Feeder, Time_open, Time_close, Time_motor, Current_open, Current_close, Current_motor, index_array } = req.body
    index_array = (index_array) ? index_array : 0
    Time_open = (Time_open) ? [Time_open] : []
    Time_close = (Time_close) ? [Time_close] : []
    Time_motor = (Time_motor) ? [Time_motor] : []
    Current_open = (Current_open) ? [Current_open] : []
    Current_close = (Current_close) ? [Current_close] : []
    Current_motor = (Current_motor) ? [Current_motor] : []
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, {
            $push: {
                [`switchgear_CB.${index_array}.$[num].Timming.Time_open`]: { $each: Time_open, $position: 0 },
                [`switchgear_CB.${index_array}.$[num].Timming.Time_close`]: { $each: Time_close, $position: 0 },
                [`switchgear_CB.${index_array}.$[num].Timming.Time_motor`]: { $each: Time_motor, $position: 0 },
                [`switchgear_CB.${index_array}.$[num].Timming.Current_open`]: { $each: Current_open, $position: 0 },
                [`switchgear_CB.${index_array}.$[num].Timming.Current_close`]: { $each: Current_close, $position: 0 },
                [`switchgear_CB.${index_array}.$[num].Timming.Current_motor`]: { $each: Current_motor, $position: 0 },
            }
        }, { "arrayFilters": [{ "num.code": Feeder },] })
            .then(result => {
                res.json({ res: "อัพเดทสำเร็จ" })
            })
            .catch(err => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: "เกิด Error" })
    }
}


//concept ในการเขียนโปรแกรมคือ ส่งข้อมูล data มาในรูปปบบของ ["1","2","3"] และ index_array คือชื่อของ nametest ที่เราจะทำการบันทึกข้อมูลลงไป
//loop เเรกจะเป้นการวนเพื่อเอาเฉพาะชื่อ nametest ที่เราเลือก โดยชื่อของ nameTest ซ้ำไม่มีผลต่อการบันทึกเนื่องจากเราสนใจเฉพาะในส่วนของลำดับชื่อ
//loop ที่สองจะเป็นการเพิ่มข้อมูลลงไปในส่วนของ name test ที่เราสนใจ
exports.Updatecounter_Switchtyard = async (req, res) => {
    const { nameThai, data, index_array } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, [
            {
                $set: {
                    "Switch_yard": {
                        $map: { ////////////////////////////////////////////////////////// 1 Loop///////////////////////////////////////////
                            input: { $range: [0, { $size: "$Switch_yard" }] },
                            as: "index1",
                            in: {
                                $cond: {
                                    if: {
                                        $eq: ["$$index1", index_array]
                                    }
                                    , then: {
                                        $map: {////////////////////////////////////////////////////////// 2 Loop///////////////////////////////////////////
                                            input: { $range: [0, { $size: { $arrayElemAt: ["$Switch_yard", index_array] } }] },
                                            as: "index2",
                                            in: {
                                                $mergeObjects: [
                                                    { $arrayElemAt: [{ $arrayElemAt: ["$Switch_yard", "$$index1"] }, "$$index2"] },
                                                    { Counter: { $arrayElemAt: [data, "$$index2"] } }
                                                ]
                                            }
                                        }
                                    }, else: {
                                        $arrayElemAt: ["$Switch_yard", "$$index1"]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ], { new: true })
            .then((result) => {
                res.json({ res: "อัพเดทข้อมูลสำเร็จ" })
                // res.json({ result })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}

exports.Updategas_Switchtyard = async (req, res) => {
    const { nameThai, nameTest, data } = req.body

    try {
        await blogsubstation.aggregate([
            {
                $project:
                {
                    "switchgear_CB": {
                        $map: {
                            input: data,
                            as: "test",
                            in: {
                                $cond: { if: { $eq: ["$$test", 2] }, then: 5, else: 0 }
                            }
                        }

                    }
                }
            }
        ])
            .then((result) => {
                res.json({ res: result })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: err })
    }
}