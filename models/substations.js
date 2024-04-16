const mongoose = require('mongoose');

// const blogsubstation = mongoose.Schema({
//     nameThai:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     initialsThai:{
//         type:String,
//         require:true,
//         unique:true
//     },
//     nameEng:{
//         type:String,
//         require:true,
//         unique:true        
//     },
//     initialsEng:{
//         type:String,
//         require:true,
//         unique:true
//     },   
//     affiliation:{
//         type:String,
//         default:"ไม่พบการกรอกข้อมูล"
//     },
// },{timestamps:true})

// module.exports = mongoose.model("substations",blogsubstation)

const blogsubstation = mongoose.Schema({
    nameThai: {
        type: String,
        required: true,
        unique: true
    },
    initialsThai: {
        type: String,
        required: true,
        unique: true
    },
    nameEng: {
        type: String,
        required: true,
        unique: true
    },
    initialsEng: {
        type: String,
        required: true,
        unique: true
    },
    affiliation: {
        type: String,
        required: true,
    },
    permission: { type: Boolean }
    ,
    switchgear_CB: [[{
            nameTest : { type: String, default: "Template" },            
            code: { type: String, default: "ไม่มีข้อมูล" },
            MFR: { type: String, default: "ไม่มีข้อมูล" },
            Type: { type: String, default: "ไม่มีข้อมูล" },
            SN: { type: String, default: "ไม่มีข้อมูล" },
            kV: { type: String, default: "ไม่มีข้อมูล" },
            kA: { type: String, default: "ไม่มีข้อมูล" },
            A: { type: String, default: "ไม่มีข้อมูล" },
            type_of_arc: { type: String, default: "ไม่มีข้อมูล" },
            Insulation: {
                PhaseAG: { type: Array },
                PhaseBG: { type: Array },
                PhaseCG: { type: Array },
                PhaseAB: { type: Array },
                PhaseBC: { type: Array },
                PhaseCA: { type: Array },
            },
            Vaccuum: {
                PhaseA: { type: Array },
                PhaseB: { type: Array },
                PhaseC: { type: Array },
            },
            Contact: {
                PhaseA: { type: Array },
                PhaseB: { type: Array },
                PhaseC: { type: Array },
            },
            Timming: {
                Time_open: { type: Array },
                Time_close: { type: Array },
                Time_motor: { type: Array },
                Current_open: { type: Array },
                Current_close: { type: Array },
                Current_motor: { type: Array },
            },
            Gas: {type:Array},
            Counter: {type:Array},
        }]]
    ,
    Switch_yard:[[{
        nameTest : { type: String, default: "Template" },            
        code: { type: String, default: "ไม่มีข้อมูล" },
        MFR: { type: String, default: "ไม่มีข้อมูล" },
        Type: { type: String, default: "ไม่มีข้อมูล" },
        SN: { type: String, default: "ไม่มีข้อมูล" },
        kV: { type: String, default: "ไม่มีข้อมูล" },
        kA: { type: String, default: "ไม่มีข้อมูล" },
        A: { type: String, default: "ไม่มีข้อมูล" },
        type_of_arc: { type: String, default: "ไม่มีข้อมูล" },
        Insulation: {
            PhaseAG: { type: Array },
            PhaseBG: { type: Array },
            PhaseCG: { type: Array },
            PhaseAB: { type: Array },
            PhaseBC: { type: Array },
            PhaseCA: { type: Array },
        },
        Coil: {
            PhaseA_Time_close: { type: Array },
            PhaseA_Time_open1: { type: Array },
            PhaseA_Time_open2: { type: Array },
            PhaseA_Res_close: { type: Array },
            PhaseA_Res_open1: { type: Array },
            PhaseA_Res_open2: { type: Array },
            PhaseA_Current_close: { type: Array },
            PhaseA_Current_open1: { type: Array },
            PhaseA_Current_open2: { type: Array },

            PhaseB_Time_close: { type: Array },
            PhaseB_Time_open1: { type: Array },
            PhaseB_Time_open2: { type: Array },
            PhaseB_Res_close: { type: Array },
            PhaseB_Res_open1: { type: Array },
            PhaseB_Res_open2: { type: Array },
            PhaseB_Current_close: { type: Array },
            PhaseB_Current_open1: { type: Array },
            PhaseB_Current_open2: { type: Array },

            PhaseC_Time_close: { type: Array },
            PhaseC_Time_open1: { type: Array },
            PhaseC_Time_open2: { type: Array },
            PhaseC_Res_close: { type: Array },
            PhaseC_Res_open1: { type: Array },
            PhaseC_Res_open2: { type: Array },
            PhaseC_Current_close: { type: Array },
            PhaseC_Current_open1: { type: Array },
            PhaseC_Current_open2: { type: Array },
        },        
        Contact: {
            PhaseA: { type: Array },
            PhaseB: { type: Array },
            PhaseC: { type: Array },
        },        
        Gas: {type:Array},
        Counter: {type:Array},
    }]]
    ,
    Transformer:[[{
        nameTest : { type: String, default: "Template" },
        TP : { type: String, default: "ไม่มีข้อมูล" },
        MFR: { type: String, default: "ไม่มีข้อมูล" },
        PEA_No: { type: String, default: "ไม่มีข้อมูล" },
        SN: { type: String, default: "ไม่มีข้อมูล" },
        Years: { type: String, default: "ไม่มีข้อมูล" },
        MVA: { type: String, default: "ไม่มีข้อมูล" },
        Percent_Impedance: { type: String, default: "ไม่มีข้อมูล" },
        Type_OLTC: { type: String, default: "ไม่มีข้อมูล" },
        Type_Motor_Drive: { type: String, default: "ไม่มีข้อมูล" },
        Type_Oil_Filter : { type: String, default: "ไม่มีข้อมูล" },
        Type_AVR : { type: String, default: "ไม่มีข้อมูล" },
        Type_VT : { type: String, default: "ไม่มีข้อมูล" },
        HV_Bushing  : { type: String, default: "ไม่มีข้อมูล" },
        LV_Bushing : { type: String, default: "ไม่มีข้อมูล" },
        Buczhol_Relay : { type: String, default: "ไม่มีข้อมูล" },
        Protective_Relay : { type: String, default: "ไม่มีข้อมูล" },
        PRD_Maintank : { type: String, default: "ไม่มีข้อมูล" },
        PRD_OLTC : { type: String, default: "ไม่มีข้อมูล" },
        Winding_Temp : { type: String, default: "ไม่มีข้อมูล" },
        Oil_Temp : { type: String, default: "ไม่มีข้อมูล" },
        Fan : { type: String, default: "ไม่มีข้อมูล" },
        Trafoguard : { type: String, default: "ไม่มีข้อมูล" },
        // --------------------------------------------Transformer_Test-----------------------------------------
        Transformer_Test: {
            // ข้อมูลยังขาดการเติม Abnormal ในรูปแบบของ String
        //-------LCC---------
        LCC_Cleaness: { type: Boolean, default: false },
        LCC_Lamp: { type: Boolean, default: false },
        LCC_MCB: { type: Boolean, default: false },
        LCC_CT_terminal: { type: Boolean, default: false },
        LCC_Control_cable: { type: Boolean, default: false },
        LCC_Cover: { type: Boolean, default: false },
        LCC_Abnormal_Check: { type: Boolean, default: false },
        LCC_Abnormal_Value: { type: String, default: "" },

        // ------RCC--------

        RCC_Cleaness: { type: Boolean, default: false },
        RCC_Lamp: { type: Boolean, default: false },
        RCC_Buzzer: { type: Boolean, default: false },
        RCC_Horn: { type: Boolean, default: false },
        RCC_AVR: { type: Boolean, default: false },
        RCC_Monitoring: { type: Boolean, default: false },
        RCC_CT_Terminal: { type: Boolean, default: false },
        RCC_Control_Cable: { type: Boolean, default: false },
        RCC_Abnormal_Check: { type: Boolean, default: false },
        RCC_Abnormal_Value: { type: String, default: "" },

        //----Motor drive-----

        Motor_Drive_Counter_Check: { type: Boolean, default: false },
        Motor_Drive_Counter_Value: { type: String, default: "" },
        Motor_Drive_Overall: { type: Boolean, default: false },
        Motor_Drive_Motor_alarm: { type: Boolean, default: false },
        Motor_Drive_Cover: { type: Boolean, default: false },
        Motor_Drive_Abnormal_Check: { type: Boolean, default: false },
        Motor_Drive_Abnormal_Value: { type: String, default: "" },

        //----Oil Filter------

        Oil_Filter_Counter_Check: { type: Boolean, default: false },
        Oil_Filter_Counter_Value: { type: String, default: "" },
        Oil_Filter_Overall: { type: Boolean, default: false },
        Oil_Filter_Motor_alarm: { type: Boolean, default: false },
        Oil_Filter_Cover: { type: Boolean, default: false },
        Oil_Filter_Abnormal_Check: { type: Boolean, default: false },
        Oil_Filter_Abnormal_Value: { type: String, default: "" },

        //-----Main tank------------

        Main_Tank_Siliga_gel: { type: Boolean, default: false },
        Main_Tank_Case: { type: Boolean, default: false },
        Main_Tank_Case_Abnormal: { type: String, default: "" },
        Main_Tank_Buttom_oil: { type: Boolean, default: false },
        Main_Tank_Buttom_oil_Abnormal: { type: String, default: "" },

        //-------- OLTC ------------

        OLTC_Siliga_gel: { type: Boolean, default: false },
        OLTC_Case: { type: Boolean, default: false },
        OLTC_Case_Abnormal: { type: String, default: "" },
        OLTC_Buttom_oil: { type: Boolean, default: false },
        OLTC_Buttom_oil_Abnormal: { type: String, default: "" },

        //------ 115 kV Bushing------

        Bushing115_Slight_Glass: { type: Boolean, default: false },
        Bushing115_Terminal: { type: Boolean, default: false },
        Bushing115_Test_Tap: { type: Boolean, default: false },
        Bushing115_Cleaness: { type: Boolean, default: false },
        Bushing115_Abnomal_Check: { type: Boolean, default: false },
        Bushing115_Abnomal_Value: { type: String, default: "" },

        //------ 22 kV cablebox------

        Cablebox_Bushing22: { type: Boolean, default: false },
        Cablebox_VT: { type: Boolean, default: false },
        Cablebox_Overall: { type: Boolean, default: false },
        Cablebox_Abnormal_Check: { type: Boolean, default: false },
        Cablebox_Abnormal_Value: { type: String, default: "" },

        //------ Bucholz relay-------
        Bucholz_Terminal: { type: Boolean, default: false },
        Bucholz_Slight_Glass: { type: Boolean, default: false },
        Bucholz_IR_Check: { type: Boolean, default: false },
        Bucholz_IR_Value: { type: String, default: "" },
        Bucholz_Trip: { type: Boolean, default: false },
        Bucholz_Alarm: { type: Boolean, default: false },
        Bucholz_Abnormal_Check: { type: Boolean, default: false },
        Bucholz_Abnormal_Value: { type: String, default: "" },

        //---- Protective relay------
        Protective_Terminal: { type: Boolean, default: false },
        Protective_Slight_Glass: { type: Boolean, default: false },
        Protective_IR_Check: { type: Boolean, default: false },
        Protective_IR_Value: { type: String, default: "" },
        Protective_Trip: { type: Boolean, default: false },
        Protective_Abnormal_Check: { type: Boolean, default: false },
        Protective_Abnormal_Value: { type: String, default: "" },

        //------- PRD Maintank--------
        PRD_Maintank_Switch: { type: Boolean, default: false },
        PRD_Maintank_Control_Cable: { type: Boolean, default: false },
        PRD_Maintank_Cover: { type: Boolean, default: false },
        PRD_Maintank_IR_Check: { type: Boolean, default: false },
        PRD_Maintank_IR_Value: { type: String, default: "" },
        PRD_Maintank_Trip: { type: Boolean, default: false },
        PRD_Maintank_Alarm: { type: Boolean, default: false },
        PRD_Maintank_Abnormal_Check: { type: Boolean, default: false },
        PRD_Maintank_Abnormal_Value: { type: String, default: "" },

        //------- PRD OLTC--------
        PRD_OLTC_Switch: { type: Boolean, default: false },
        PRD_OLTC_Control_Cable: { type: Boolean, default: false },
        PRD_OLTC_Cover: { type: Boolean, default: false },
        PRD_OLTC_IR_Check: { type: Boolean, default: false },
        PRD_OLTC_IR_Value: { type: String, default: "" },
        PRD_OLTC_Trip: { type: Boolean, default: false },
        PRD_OLTC_Alarm: { type: Boolean, default: false },
        PRD_OLTC_Abnormal_Check: { type: Boolean, default: false },
        PRD_OLTC_Abnormal_Value: { type: String, default: "" },

        //------- WTI(a)--------
        WTI_A_Switch: { type: Boolean, default: false },
        WTI_A_Indicator: { type: Boolean, default: false },
        WTI_A_Case: { type: Boolean, default: false },
        WTI_A_IR_Check: { type: Boolean, default: false },
        WTI_A_IR_Value: { type: String, default: "" },
        WTI_A_Trip: { type: Boolean, default: false },
        WTI_A_Alarm: { type: Boolean, default: false },
        WTI_A_Abnormal_Check: { type: Boolean, default: false },
        WTI_A_Abnormal_Value: { type: String, default: "" },

        //------- WTI(b)--------
        WTI_B_Switch: { type: Boolean, default: false },
        WTI_B_Indicator: { type: Boolean, default: false },
        WTI_B_Case: { type: Boolean, default: false },
        WTI_B_IR_Check: { type: Boolean, default: false },
        WTI_B_IR_Value: { type: String, default: "" },
        WTI_B_Trip: { type: Boolean, default: false },
        WTI_B_Alarm: { type: Boolean, default: false },
        WTI_B_Abnormal_Check: { type: Boolean, default: false },
        WTI_B_Abnormal_Value: { type: String, default: "" },

        //------- WTI(C)--------
        WTI_C_Switch: { type: Boolean, default: false },
        WTI_C_Indicator: { type: Boolean, default: false },
        WTI_C_Case: { type: Boolean, default: false },
        WTI_C_IR_Check: { type: Boolean, default: false },
        WTI_C_IR_Value: { type: String, default: "" },
        WTI_C_Trip: { type: Boolean, default: false },
        WTI_C_Alarm: { type: Boolean, default: false },
        WTI_C_Abnormal_Check: { type: Boolean, default: false },
        WTI_C_Abnormal_Value: { type: String, default: "" },

        //------- OTI--------
        OTI_Switch: { type: Boolean, default: false },
        OTI_Indicator: { type: Boolean, default: false },
        OTI_Case: { type: Boolean, default: false },
        OTI_IR_Check: { type: Boolean, default: false },
        OTI_IR_Value: { type: String, default: "" },
        OTI_Trip: { type: Boolean, default: false },
        OTI_Alarm: { type: Boolean, default: false },
        OTI_Abnormal_Check: { type: Boolean, default: false },
        OTI_Abnormal_Value: { type: String, default: "" },

        //------- Radiator--------
        Radiator_Valve_Open: { type: Boolean, default: false },
        Radiator_Overall: { type: Boolean, default: false },
        Radiator_Cleaness: { type: Boolean, default: false },
        Radiator_Abnormal_Check: { type: Boolean, default: false },
        Radiator_Abnormal_Value: { type: String, default: "" },

        //------- Oil level Main_tank--------
        Oil_Level_Main_Tank: { type: String, default: "" },
        Oil_Level_Main_Tank_Guage: { type: Boolean, default: false },
        Oil_Level_Main_Tank_High_Alarm: { type: Boolean, default: false },
        Oil_Level_Main_Tank_Low_Alarm: { type: Boolean, default: false },
        Oil_Level_Main_Tank_Abnormal_Check: { type: Boolean, default: false },
        Oil_Level_Main_Tank_Abnormal_Value: { type: String, default: "" },

        //------- Oil level OLTC--------
        Oil_Level_OLTC: { type: String, default: "" },
        Oil_Level_OLTC_Guage: { type: Boolean, default: false },
        Oil_Level_OLTC_High_Alarm: { type: Boolean, default: false },
        Oil_Level_OLTC_Low_Alarm: { type: Boolean, default: false },
        Oil_Level_OLTC_Abnormal_Check: { type: Boolean, default: false },
        Oil_Level_OLTC_Abnormal_Value: { type: String, default: "" },

        //-------Cooling fan-----------
        Cooling_Group1_1: { type: String, default: "" },
        Cooling_Group1_2: { type: String, default: "" },
        Cooling_Group2_1: { type: String, default: "" },
        Cooling_Group2_2: { type: String, default: "" },
        Cooling_Overall: { type: Boolean, default: false },
        Cooling_Sounds: { type: Boolean, default: false },
        Cooling_Manual: { type: Boolean, default: false },
        Cooling_Remote: { type: Boolean, default: false },
        Cooling_Local: { type: Boolean, default: false },
        Cooling_Auto: { type: Boolean, default: false },
        Cooling_Abnormal_Check: { type: Boolean, default: false },
        Cooling_Abnormal_Value: { type: String, default: "" },

        //-------OLTC Motordrive-----------        
        OLTC_Motor_Drive_Raise: { type: Boolean, default: false },
        OLTC_Motor_Drive_Low: { type: Boolean, default: false },
        OLTC_Motor_Drive_Emergency: { type: Boolean, default: false },
        OLTC_Motor_Drive_Sounds: { type: Boolean, default: false },
        OLTC_Motor_Drive_Timming: { type: Boolean, default: false },
        OLTC_Motor_Drive_Hand_Crank: { type: Boolean, default: false },
        OLTC_Motor_Drive_Abnormal_Check: { type: Boolean, default: false },
        OLTC_Motor_Drive_Abnormal_Value: { type: String, default: "" },

        //-------OLTC RCC-----------        
        OLTC_RCC_Raise: { type: Boolean, default: false },
        OLTC_RCC_Low: { type: Boolean, default: false },
        OLTC_RCC_Auto: { type: Boolean, default: false },
        OLTC_RCC_Manual: { type: Boolean, default: false },
        OLTC_RCC_Emergency: { type: Boolean, default: false },
        OLTC_RCC_Abnormal_Check: { type: Boolean, default: false },
        OLTC_RCC_Abnormal_Value: { type: String, default: "" },

        //-------OLTC Taposiotion-----------        
        OLTC_Taposition_CSCS: { type: Boolean, default: false },
        OLTC_Taposition_RCC: { type: Boolean, default: false },
        OLTC_Taposition_Motor_Drive: { type: Boolean, default: false },
        OLTC_Taposition_Abnormal_Check: { type: Boolean, default: false },
        OLTC_Taposition_Abnormal_Value: { type: String, default: "" },

        //-------OLTC Current block--------        
        OLTC_Current_Block_Check: { type: Boolean, default: false },
        OLTC_Current_Block_Value: { type: String, default: "" },

        //-------OLTC Hotline--------        
        OLTC_Hotline_Pressure_Guage_Check: { type: Boolean, default: false },
        OLTC_Hotline_Pressure_Guage_Value: { type: String, default: "" },
        OLTC_Hotline_Pressure_Alarm: { type: Boolean, default: false },
        OLTC_Hotline_Pressure_Auto: { type: Boolean, default: false },
        OLTC_Hotline_Pressure_Manual: { type: Boolean, default: false },
        OLTC_Hotline_Pressure_Overall: { type: Boolean, default: false },
        OLTC_Hotline_Pressure_Sounds: { type: Boolean, default: false },

        //----- Oil Purifier-------------
        OLTC_Oil_Purifier_Time_delay: { type: Boolean, default: false },
        OLTC_Oil_Purifier_Abnormal_Check: { type: Boolean, default: false },
        OLTC_Oil_Purifier_Abnormal_Value: { type: String, default: "" },

        //------ OLTC Oil Leak----------
        OLTC_Oil_Leak_At_Check: { type: Boolean, default: false },
        OLTC_Oil_Leak_At_Value: { type: String, default: "" },
        OLTC_Oil_Leak_Delay_Time: { type: Boolean, default: false },
        OLTC_Oil_Leak_Delay_Stain: { type: Boolean, default: false },
        OLTC_Oil_Leak_Less_Than: { type: Boolean, default: false },
        }
        ,              
        Gas: {type:Array},
        Counter: {type:Array},
    }]]
    // Counter: [{
    //     nameFeeder: { type: String },
    //     Feeder_Counter: { type: String }
    // }],
}, { timestamps: true })

module.exports = mongoose.model("substation_test", blogsubstation)