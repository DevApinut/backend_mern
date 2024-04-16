const blogsubstation = require('../../models/substations')
// สำหรับการดึงข้อมูล TP ของ nametest นั้นไปใช้งาน
exports.findTP = (req, res) => {
    try {
        const { nameThai } = req.body
        blogsubstation.findOne({ nameThai }).exec()
            .then((result) => {
                res.json({ res: "พบข้อมูล", Transformer: result.Transformer, nameThai, result })
            })
            .catch((err) => {
                res.json({ res: "เกิด Error", Feeder: ["ไม่พบข้อมูล"], nameThai })
            })
    } catch (err) {
        res.json(err)
    }
}

exports.addTP = async (req, res) => {
    try {
        const { nameThai, locationtest, Transformer, Counter } = req.body
        await blogsubstation.findOneAndUpdate({ nameThai }, { Transformer })
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
// concept pull สองรอบเพราะซ้อน 2 array [[]] อันเเรกลบ วงเล็บเเรกอันสองลบ อันสองโดยใช้ชื่อ
exports.deletenametest_Transformer = async (req, res) => {
    const { nameThai, nameTest, index_array } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai },
            { $pull: { [`Transformer.${index_array}`]: {} } })
            .then((result) => {
                // res.json({ res: `ทำการลบ ${nameTest} สำเร็จ` })
                blogsubstation.findOneAndUpdate({ nameThai },
                    { $pull: { [`Transformer`]: [] } })
                    .then(res.json({ res: `ทำการลบ ${nameTest} สำเร็จ` }))
                    .catch((err) => res.json({ res: "เกิด error" }))
            }
            )
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}

exports.Edit_update_Transformer = async (req, res) => {
    const { nameThai, TP, MFR, PEA_No, SN, Years, MVA, Percent_Impedance, Type_OLTC, Type_Motor_Drive, Type_Oil_Filter, Type_AVR, Type_VT, HV_Bushing, LV_Bushing, Buczhol_Relay, Protective_Relay, PRD_Maintank, PRD_OLTC, Winding_Temp, Oil_Temp, Fan, Trafoguard, nameTest_select, TP_select } = req.body
    try {
        // await blogfeeder.findOneAndUpdate({ nameThai }, { $set: { "Feeder.0.MFR":"อันที่1"  } })
        await blogsubstation.updateOne({ nameThai }, {
            $set: {
                [`Transformer.${nameTest_select}.${TP_select}.TP`]: TP,
                [`Transformer.${nameTest_select}.${TP_select}.MFR`]: MFR,
                [`Transformer.${nameTest_select}.${TP_select}.PEA_No`]: PEA_No,
                [`Transformer.${nameTest_select}.${TP_select}.SN`]: SN,
                [`Transformer.${nameTest_select}.${TP_select}.Years`]: Years,
                [`Transformer.${nameTest_select}.${TP_select}.MVA`]: MVA,
                [`Transformer.${nameTest_select}.${TP_select}.Percent_Impedance`]: Percent_Impedance,
                [`Transformer.${nameTest_select}.${TP_select}.Type_OLTC`]: Type_OLTC,
                [`Transformer.${nameTest_select}.${TP_select}.Type_Motor_Drive`]: Type_Motor_Drive,
                [`Transformer.${nameTest_select}.${TP_select}.Type_Oil_Filter`]: Type_Oil_Filter,
                [`Transformer.${nameTest_select}.${TP_select}.Type_AVR`]: Type_AVR,
                [`Transformer.${nameTest_select}.${TP_select}.Type_VT`]: Type_VT,
                [`Transformer.${nameTest_select}.${TP_select}.HV_Bushing`]: HV_Bushing,
                [`Transformer.${nameTest_select}.${TP_select}.LV_Bushing,`]: LV_Bushing,
                [`Transformer.${nameTest_select}.${TP_select}.Buczhol_Relay,`]: Buczhol_Relay,
                [`Transformer.${nameTest_select}.${TP_select}.Protective_Relay,`]: Protective_Relay,
                [`Transformer.${nameTest_select}.${TP_select}.PRD_Maintank,`]: PRD_Maintank,
                [`Transformer.${nameTest_select}.${TP_select}.PRD_OLTC,`]: PRD_OLTC,
                [`Transformer.${nameTest_select}.${TP_select}.Winding_Temp,`]: Winding_Temp,
                [`Transformer.${nameTest_select}.${TP_select}.Oil_Temp,`]: Oil_Temp,
                [`Transformer.${nameTest_select}.${TP_select}.Fan,`]: Fan,
                [`Transformer.${nameTest_select}.${TP_select}.Trafoguard,`]: Trafoguard,
            }
        }, {
            "arrayFilters": [{ "num.TP": TP },]
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

exports.updatenametest_Transformer = async (req, res) => {
    const { nameThai, nameTest } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, { $push: { Transformer: { $each: [nameTest], $position: 0 } } }).exec()
            .then((result) => {
                res.json({ res: "ทำการสร้าง nameTestสำเร็จ" })
            })
            .catch((err) => {

            })
    } catch (err) {
        res.json({ res: "เกิด error" })
    }
}


exports.updatepermissiontest_Switchtyard = async (req, res) => {
    const { nameThai, checked } = req.body
    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, { permission: checked }, { new: true })
            .then((result) => {
                res.json({ checked: result.permission, res: "เปลี่ยนแปลงสิทธิ์สำเร็จ", result })
            })
            .catch((err) => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {

    }
}


exports.Update_Testform_Transformer = async (req, res) => {
    let {
        nameThai,
        nameTest_select,
        TP_select,
        //-------LCC---------
        LCC_Cleaness,
        LCC_Lamp,
        LCC_MCB,
        LCC_CT_terminal,
        LCC_Control_cable,
        LCC_Cover,
        LCC_Abnormal_Check,
        LCC_Abnormal_Value,
        // ------RCC--------
        RCC_Cleaness,
        RCC_Lamp,
        RCC_Buzzer,
        RCC_Horn,
        RCC_AVR,
        RCC_Monitoring,
        RCC_CT_Terminal,
        RCC_Control_Cable,
        RCC_Abnormal_Check,
        RCC_Abnormal_Value,

        //----Motor drive-----

        Motor_Drive_Counter_Check,
        Motor_Drive_Counter_Value,
        Motor_Drive_Overall,
        Motor_Drive_Motor_alarm,
        Motor_Drive_Cover,
        Motor_Drive_Abnormal_Check,
        Motor_Drive_Abnormal_Value,

        //----Oil Filter------

        Oil_Filter_Counter_Check,
        Oil_Filter_Counter_Value,
        Oil_Filter_Overall,
        Oil_Filter_Motor_alarm,
        Oil_Filter_Cover,
        Oil_Filter_Abnormal_Check,
        Oil_Filter_Abnormal_Value,

        //-----Main tank------------

        Main_Tank_Siliga_gel,
        Main_Tank_Case,
        Main_Tank_Case_Abnormal,
        Main_Tank_Buttom_oil,
        Main_Tank_Buttom_oil_Abnormal,

        //-------- OLTC ------------

        OLTC_Siliga_gel,
        OLTC_Case,
        OLTC_Case_Abnormal,
        OLTC_Buttom_oil,
        OLTC_Buttom_oil_Abnormal,

        //------ 115 kV Bushing------

        Bushing115_Slight_Glass,
        Bushing115_Terminal,
        Bushing115_Test_Tap,
        Bushing115_Cleaness,
        Bushing115_Abnomal_Check,
        Bushing115_Abnomal_Value,

        //------ 22 kV cablebox------

        Cablebox_Bushing22,
        Cablebox_VT,
        Cablebox_Overall,
        Cablebox_Abnormal_Check,
        Cablebox_Abnormal_Value,

        //------ Bucholz relay-------
        Bucholz_Terminal,
        Bucholz_Slight_Glass,
        Bucholz_IR_Check,
        Bucholz_IR_Value,
        Bucholz_Trip,
        Bucholz_Alarm,
        Bucholz_Abnormal_Check,
        Bucholz_Abnormal_Value,

        //---- Protective relay------
        Protective_Terminal,
        Protective_Slight_Glass,
        Protective_IR_Check,
        Protective_IR_Value,
        Protective_Trip,
        Protective_Abnormal_Check,
        Protective_Abnormal_Value,

        //------- PRD Maintank--------
        PRD_Maintank_Switch,
        PRD_Maintank_Control_Cable,
        PRD_Maintank_Cover,
        PRD_Maintank_IR_Check,
        PRD_Maintank_IR_Value,
        PRD_Maintank_Trip,
        PRD_Maintank_Alarm,
        PRD_Maintank_Abnormal_Check,
        PRD_Maintank_Abnormal_Value,

        //------- PRD OLTC--------
        PRD_OLTC_Switch,
        PRD_OLTC_Control_Cable,
        PRD_OLTC_Cover,
        PRD_OLTC_IR_Check,
        PRD_OLTC_IR_Value,
        PRD_OLTC_Trip,
        PRD_OLTC_Alarm,
        PRD_OLTC_Abnormal_Check,
        PRD_OLTC_Abnormal_Value,

        //------- WTI(a)--------
        WTI_A_Switch,
        WTI_A_Indicator,
        WTI_A_Case,
        WTI_A_IR_Check,
        WTI_A_IR_Value,
        WTI_A_Trip,
        WTI_A_Alarm,
        WTI_A_Abnormal_Check,
        WTI_A_Abnormal_Value,

        //------- WTI(b)--------
        WTI_B_Switch,
        WTI_B_Indicator,
        WTI_B_Case,
        WTI_B_IR_Check,
        WTI_B_IR_Value,
        WTI_B_Trip,
        WTI_B_Alarm,
        WTI_B_Abnormal_Check,
        WTI_B_Abnormal_Value,

        //------- WTI(C)--------
        WTI_C_Switch,
        WTI_C_Indicator,
        WTI_C_Case,
        WTI_C_IR_Check,
        WTI_C_IR_Value,
        WTI_C_Trip,
        WTI_C_Alarm,
        WTI_C_Abnormal_Check,
        WTI_C_Abnormal_Value,

        //------- OTI--------
        OTI_Switch,
        OTI_Indicator,
        OTI_Case,
        OTI_IR_Check,
        OTI_IR_Value,
        OTI_Trip,
        OTI_Alarm,
        OTI_Abnormal_Check,
        OTI_Abnormal_Value,

        //------- Radiator--------
        Radiator_Valve_Open,
        Radiator_Overall,
        Radiator_Cleaness,
        Radiator_Abnormal_Check,
        Radiator_Abnormal_Value,

        //------- Oil level Main_tank--------
        Oil_Level_Main_Tank,
        Oil_Level_Main_Tank_Guage,
        Oil_Level_Main_Tank_High_Alarm,
        Oil_Level_Main_Tank_Low_Alarm,
        Oil_Level_Main_Tank_Abnormal_Check,
        Oil_Level_Main_Tank_Abnormal_Value,

        //------- Oil level OLTC--------
        Oil_Level_OLTC,
        Oil_Level_OLTC_Guage,
        Oil_Level_OLTC_High_Alarm,
        Oil_Level_OLTC_Low_Alarm,
        Oil_Level_OLTC_Abnormal_Check,
        Oil_Level_OLTC_Abnormal_Value,

        //-------Cooling fan-----------
        Cooling_Group1_1,
        Cooling_Group1_2,
        Cooling_Group2_1,
        Cooling_Group2_2,
        Cooling_Overall,
        Cooling_Sounds,
        Cooling_Manual,
        Cooling_Remote,
        Cooling_Local,
        Cooling_Auto,
        Cooling_Abnormal_Check,
        Cooling_Abnormal_Value,

        //-------OLTC Motordrive-----------        
        OLTC_Motor_Drive_Raise,
        OLTC_Motor_Drive_Low,
        OLTC_Motor_Drive_Emergency,
        OLTC_Motor_Drive_Sounds,
        OLTC_Motor_Drive_Timming,
        OLTC_Motor_Drive_Hand_Crank,
        OLTC_Motor_Drive_Abnormal_Check,
        OLTC_Motor_Drive_Abnormal_Value,

        //-------OLTC RCC-----------        
        OLTC_RCC_Raise,
        OLTC_RCC_Low,
        OLTC_RCC_Auto,
        OLTC_RCC_Manual,
        OLTC_RCC_Emergency,
        OLTC_RCC_Abnormal_Check,
        OLTC_RCC_Abnormal_Value,

        //-------OLTC Taposiotion-----------        
        OLTC_Taposition_CSCS,
        OLTC_Taposition_RCC,
        OLTC_Taposition_Motor_Drive,
        OLTC_Taposition_Abnormal_Check,
        OLTC_Taposition_Abnormal_Value,

        //-------OLTC Current block--------        
        OLTC_Current_Block_Check,
        OLTC_Current_Block_Value,

        //-------OLTC Hotline--------        
        OLTC_Hotline_Pressure_Guage_Check,
        OLTC_Hotline_Pressure_Guage_Value,
        OLTC_Hotline_Pressure_Alarm,
        OLTC_Hotline_Pressure_Auto,
        OLTC_Hotline_Pressure_Manual,
        OLTC_Hotline_Pressure_Overall,
        OLTC_Hotline_Pressure_Sounds,

        //----- Oil Purifier-------------
        OLTC_Oil_Purifier_Time_delay,
        OLTC_Oil_Purifier_Abnormal_Check,
        OLTC_Oil_Purifier_Abnormal_Value,

        //------ OLTC Oil Leak----------
        OLTC_Oil_Leak_At_Check,
        OLTC_Oil_Leak_At_Value,
        OLTC_Oil_Leak_Delay_Time,
        OLTC_Oil_Leak_Delay_Stain,
        OLTC_Oil_Leak_Less_Than,


    } = req.body
    /*ทำการเช็คว่ามีการรับข้อมูลมาไหมถ้าไม่มีการรับมาก็ให้เป็น Array ว่างๆ เพื่อให้เกิดการ push ขึ้นเเต่ถ้ามีก็ให้ค่าเท่าเดิม */    


    try {
        await blogsubstation.findOneAndUpdate({ nameThai }, {            
            //-------LCC---------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Cleaness`]:LCC_Cleaness,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Lamp`]:LCC_Lamp,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_MCB`]:LCC_MCB,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_CT_terminal`]:LCC_CT_terminal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Control_cable`]:LCC_Control_cable,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Cover`]:LCC_Cover,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Abnormal_Check`]:LCC_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.LCC_Abnormal_Value`]:LCC_Abnormal_Value,
        // ------RCC--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Cleaness`]:RCC_Cleaness,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Lamp`]:RCC_Lamp,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Buzzer`]:RCC_Buzzer,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Horn`]:RCC_Horn,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_AVR`]:RCC_AVR,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Monitoring`]:RCC_Monitoring,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_CT_Terminal`]:RCC_CT_Terminal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Control_Cable`]:RCC_Control_Cable,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Abnormal_Check`]:RCC_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.RCC_Abnormal_Value`]:RCC_Abnormal_Value,

        //----Motor drive-----

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Counter_Check`]:Motor_Drive_Counter_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Counter_Value`]:Motor_Drive_Counter_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Overall`]:Motor_Drive_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Motor_alarm`]:Motor_Drive_Motor_alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Cover`]:Motor_Drive_Cover,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Abnormal_Check`]:Motor_Drive_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Motor_Drive_Abnormal_Value`]:Motor_Drive_Abnormal_Value,

        //----Oil Filter------

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Counter_Check`]:Oil_Filter_Counter_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Counter_Value`]:Oil_Filter_Counter_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Overall`]:Oil_Filter_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Motor_alarm`]:Oil_Filter_Motor_alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Cover`]:Oil_Filter_Cover,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Abnormal_Check`]:Oil_Filter_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Filter_Abnormal_Value`]:Oil_Filter_Abnormal_Value,

        //-----Main tank------------

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Main_Tank_Siliga_gel`]:Main_Tank_Siliga_gel,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Main_Tank_Case`]:Main_Tank_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Main_Tank_Case_Abnormal`]:Main_Tank_Case_Abnormal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Main_Tank_Buttom_oil`]:Main_Tank_Buttom_oil,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Main_Tank_Buttom_oil_Abnormal`]:Main_Tank_Buttom_oil_Abnormal,

        //-------- OLTC ------------

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Siliga_gel`]:OLTC_Siliga_gel,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Case`]:OLTC_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Case_Abnormal`]:OLTC_Case_Abnormal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Buttom_oil`]:OLTC_Buttom_oil,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Buttom_oil_Abnormal`]:OLTC_Buttom_oil_Abnormal,

        //------ 115 kV Bushing------

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Slight_Glass`]:Bushing115_Slight_Glass,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Terminal`]:Bushing115_Terminal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Test_Tap`]:Bushing115_Test_Tap,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Cleaness`]:Bushing115_Cleaness,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Abnomal_Check`]:Bushing115_Abnomal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bushing115_Abnomal_Value`]:Bushing115_Abnomal_Value,

        //------ 22 kV cablebox------

        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cablebox_Bushing22`]:Cablebox_Bushing22,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cablebox_VT`]:Cablebox_VT,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cablebox_Overall`]:Cablebox_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cablebox_Abnormal_Check`]:Cablebox_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cablebox_Abnormal_Value`]:Cablebox_Abnormal_Value,

        //------ Bucholz relay-------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Terminal`]:Bucholz_Terminal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Slight_Glass`]:Bucholz_Slight_Glass,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_IR_Check`]:Bucholz_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_IR_Value`]:Bucholz_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Trip`]:Bucholz_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Alarm`]:Bucholz_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Abnormal_Check`]:Bucholz_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Bucholz_Abnormal_Value`]:Bucholz_Abnormal_Value,

        //---- Protective relay------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_Terminal`]:Protective_Terminal,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_Slight_Glass`]:Protective_Slight_Glass,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_IR_Check`]:Protective_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_IR_Value`]:Protective_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_Trip`]:Protective_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_Abnormal_Check`]:Protective_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Protective_Abnormal_Value`]:Protective_Abnormal_Value,

        //------- PRD Maintank--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Switch`]:PRD_Maintank_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Control_Cable`]:PRD_Maintank_Control_Cable,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Cover`]:PRD_Maintank_Cover,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_IR_Check`]:PRD_Maintank_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_IR_Value`]:PRD_Maintank_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Trip`]:PRD_Maintank_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Alarm`]:PRD_Maintank_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Abnormal_Check`]:PRD_Maintank_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_Maintank_Abnormal_Value`]:PRD_Maintank_Abnormal_Value,

        //------- PRD OLTC--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Switch`]:PRD_OLTC_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Control_Cable`]:PRD_OLTC_Control_Cable,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Cover`]:PRD_OLTC_Cover,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_IR_Check`]:PRD_OLTC_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_IR_Value`]:PRD_OLTC_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Trip`]:PRD_OLTC_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Alarm`]:PRD_OLTC_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Abnormal_Check`]:PRD_OLTC_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.PRD_OLTC_Abnormal_Value`]:PRD_OLTC_Abnormal_Value,

        //------- WTI(a)--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Switch`]:WTI_A_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Indicator`]:WTI_A_Indicator,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Case`]:WTI_A_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_IR_Check`]:WTI_A_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_IR_Value`]:WTI_A_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Trip`]:WTI_A_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Alarm`]:WTI_A_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Abnormal_Check`]:WTI_A_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_A_Abnormal_Value`]:WTI_A_Abnormal_Value,

        //------- WTI(b)--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Switch`]:WTI_B_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Indicator`]:WTI_B_Indicator,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Case`]:WTI_B_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_IR_Check`]:WTI_B_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_IR_Value`]:WTI_B_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Trip`]:WTI_B_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Alarm`]:WTI_B_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Abnormal_Check`]:WTI_B_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_B_Abnormal_Value`]:WTI_B_Abnormal_Value,

        //------- WTI(C)--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Switch`]:WTI_C_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Indicator`]:WTI_C_Indicator,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Case`]:WTI_C_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_IR_Check`]:WTI_C_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_IR_Value`]:WTI_C_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Trip`]:WTI_C_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Alarm`]:WTI_C_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Abnormal_Check`]:WTI_C_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.WTI_C_Abnormal_Value`]:WTI_C_Abnormal_Value,

        //------- OTI--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Switch`]:OTI_Switch,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Indicator`]:OTI_Indicator,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Case`]:OTI_Case,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_IR_Check`]:OTI_IR_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_IR_Value`]:OTI_IR_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Trip`]:OTI_Trip,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Alarm`]:OTI_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Abnormal_Check`]:OTI_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OTI_Abnormal_Value`]:OTI_Abnormal_Value,

        //------- Radiator--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Radiator_Valve_Open`]:Radiator_Valve_Open,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Radiator_Overall`]:Radiator_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Radiator_Cleaness`]:Radiator_Cleaness,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Radiator_Abnormal_Check`]:Radiator_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Radiator_Abnormal_Value`]:Radiator_Abnormal_Value,

        //------- Oil level Main_tank--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank`]:Oil_Level_Main_Tank,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank_Guage`]:Oil_Level_Main_Tank_Guage,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank_High_Alarm`]:Oil_Level_Main_Tank_High_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank_Low_Alarm`]:Oil_Level_Main_Tank_Low_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank_Abnormal_Check`]:Oil_Level_Main_Tank_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_Main_Tank_Abnormal_Value`]:Oil_Level_Main_Tank_Abnormal_Value,

        //------- Oil level OLTC--------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC`]:Oil_Level_OLTC,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC_Guage`]:Oil_Level_OLTC_Guage,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC_High_Alarm`]:Oil_Level_OLTC_High_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC_Low_Alarm`]:Oil_Level_OLTC_Low_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC_Abnormal_Check`]:Oil_Level_OLTC_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Oil_Level_OLTC_Abnormal_Value`]:Oil_Level_OLTC_Abnormal_Value,

        //-------Cooling fan-----------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Group1_1`]:Cooling_Group1_1,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Group1_2`]:Cooling_Group1_2,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Group2_1`]:Cooling_Group2_1,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Group2_2`]:Cooling_Group2_2,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Overall`]:Cooling_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Sounds`]:Cooling_Sounds,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Manual`]:Cooling_Manual,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Remote`]:Cooling_Remote,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Local`]:Cooling_Local,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Auto`]:Cooling_Auto,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Abnormal_Check`]:Cooling_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.Cooling_Abnormal_Value`]:Cooling_Abnormal_Value,

        //-------OLTC Motordrive-----------        
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Raise`]:OLTC_Motor_Drive_Raise,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Low`]:OLTC_Motor_Drive_Low,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Emergency`]:OLTC_Motor_Drive_Emergency,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Sounds`]:OLTC_Motor_Drive_Sounds,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Timming`]:OLTC_Motor_Drive_Timming,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Hand_Crank`]:OLTC_Motor_Drive_Hand_Crank,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Abnormal_Check`]:OLTC_Motor_Drive_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Motor_Drive_Abnormal_Value`]:OLTC_Motor_Drive_Abnormal_Value,

        //-------OLTC RCC-----------        
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Raise`]:OLTC_RCC_Raise,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Low`]:OLTC_RCC_Low,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Auto`]:OLTC_RCC_Auto,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Manual`]:OLTC_RCC_Manual,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Emergency`]:OLTC_RCC_Emergency,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Abnormal_Check`]:OLTC_RCC_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_RCC_Abnormal_Value`]:OLTC_RCC_Abnormal_Value,

        //-------OLTC Taposiotion-----------        
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Taposition_CSCS`]:OLTC_Taposition_CSCS,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Taposition_RCC`]:OLTC_Taposition_RCC,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Taposition_Motor_Drive`]:OLTC_Taposition_Motor_Drive,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Taposition_Abnormal_Check`]:OLTC_Taposition_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Taposition_Abnormal_Value`]:OLTC_Taposition_Abnormal_Value,

        //-------OLTC Current block--------        
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Current_Block_Check`]:OLTC_Current_Block_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Current_Block_Value`]:OLTC_Current_Block_Value,

        //-------OLTC Hotline--------        
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Guage_Check`]:OLTC_Hotline_Pressure_Guage_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Guage_Value`]:OLTC_Hotline_Pressure_Guage_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Alarm`]:OLTC_Hotline_Pressure_Alarm,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Auto`]:OLTC_Hotline_Pressure_Auto,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Manual`]:OLTC_Hotline_Pressure_Manual,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Overall`]:OLTC_Hotline_Pressure_Overall,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Hotline_Pressure_Sounds`]:OLTC_Hotline_Pressure_Sounds,

        //----- Oil Purifier-------------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Purifier_Time_delay`]:OLTC_Oil_Purifier_Time_delay,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Purifier_Abnormal_Check`]:OLTC_Oil_Purifier_Abnormal_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Purifier_Abnormal_Value`]:OLTC_Oil_Purifier_Abnormal_Value,

        //------ OLTC Oil Leak----------
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Leak_At_Check`]:OLTC_Oil_Leak_At_Check,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Leak_At_Value`]:OLTC_Oil_Leak_At_Value,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Leak_Delay_Time`]:OLTC_Oil_Leak_Delay_Time,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Leak_Delay_Stain`]:OLTC_Oil_Leak_Delay_Stain,
        [`Transformer.${nameTest_select}.${TP_select}.Transformer_Test.OLTC_Oil_Leak_Less_Than`]:OLTC_Oil_Leak_Less_Than,

        },{new: true})
            .then(result => {
                res.json({ res: result.Transformer})
            })
            .catch(err => {
                res.json({ res: "เกิด error" })
            })
    } catch (err) {
        res.json({ res: "err" })
    }
}




