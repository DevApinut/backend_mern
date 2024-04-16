const mongoose = require('mongoose');

// const blogfeeder = mongoose.Schema({
//     nameThai:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     initialsThai:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     nameEng:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     initialsEng:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     affiliation:{
//         type:String,
//         required:true,        
//     },
//     locationtest:{
//         type:String,
//         required:true,        
//     },
//     Feeder:{
//         type:Array,
//         require:true
//     },
// },{timestamps:true})

const blogfeeder = mongoose.Schema({
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
    locationtest: {
        type: String,
        required: true,
    },
    Feeder: [{
        code: { type: String,default:"ไม่มีข้อมูล" },        
        MFR: { type: String ,default:"ไม่มีข้อมูล"},
        Type: { type: String ,default:"ไม่มีข้อมูล"},
        SN: { type: String ,default:"ไม่มีข้อมูล"},
        kV: { type: String ,default:"ไม่มีข้อมูล"},
        kA: { type: String ,default:"ไม่มีข้อมูล"},
        A: { type: String ,default:"ไม่มีข้อมูล"},
        type_of_arc: { type: String ,default:"ไม่มีข้อมูล"}        
    }]
    ,
}, { timestamps: true })

module.exports = mongoose.model("feederinformations", blogfeeder)