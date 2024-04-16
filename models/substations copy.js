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
    // Counter: [{
    //     nameFeeder: { type: String },
    //     Feeder_Counter: { type: String }
    // }],
}, { timestamps: true })

module.exports = mongoose.model("substation_test", blogsubstation)




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
    // Counter: [{
    //     nameFeeder: { type: String },
    //     Feeder_Counter: { type: String }
    // }],
}, { timestamps: true })

module.exports = mongoose.model("substation_test", blogsubstation)